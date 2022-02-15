//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/AccessControl.sol";
//import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "hardhat/console.sol";

contract Staking is AccessControl, Pausable {
    using SafeERC20 for IERC20;

    // Struct for contain info about staking itself.
    struct StakingInfo {
        address asset;
        uint256 rewardPeriod;
        uint256 rewardPerPeriod;
        uint256 totalStaked;
        uint256 tps;
        uint256 initialTime;
        uint256 lastUpdateTime;
        uint256 periodNumber;
    }

    // Struct for contain info about staker.
    struct Staker {
        uint256 stake;
        uint256 rewardMissed;
        uint256 rewardGained;
        uint256 rewardClaimed;
    }

    // Conatins info about staking.
    StakingInfo public stakingInfo;

    // address of staker => object of info about staker.
    mapping(address => Staker) usersStakes;

    /**
     * This even emiited when some user stak into staking.
     * @param depositor Address from which deposit in staking was made.
     * @param amount Amount of token that was deposited in staking.
     * @param newTps New token per share value.
     * @param time Timestamp of stake.
     */
    event Staked(
        address indexed depositor,
        uint256 indexed amount,
        uint256 newTps,
        uint256 time
    );
    /**
     * This even emiited when user unstake amount from staking.
     * @param to The address to which the transfer will be made.
     * @param amount Amount of token that will be send.
     * @param newTps New token per share value.
     * @param time Timestamp of unstake.
     */
    event UnStaked(
        address indexed to,
        uint256 indexed amount,
        uint256 newTps,
        uint256 time
    );
    /**
     * This even emiited when user claims his rewards.
     * @param to The address to which rewards will be send.
     * @param claimAmount Amount of rewards that will be send.
     * @param time Timestamp of claim.
     */
    event Claimed(
        address indexed to,
        uint256 indexed claimAmount,
        uint256 time
    );

    /**
     * Constructor for deploy contract at blockchain.
     * @param _asset Address of asset.
     * @param _rewardPeriod Period after rewards which rewards will be distributed.
     * @param _rewardPerPeriod Amount of token that will be distributed per period.
     * @param _tps Start value of token per share.
     */
    constructor(
        address _asset,
        uint256 _rewardPeriod,
        uint256 _rewardPerPeriod,
        uint256 _tps
    ) {
        stakingInfo = StakingInfo({
            asset: _asset,
            rewardPeriod: _rewardPeriod,
            rewardPerPeriod: _rewardPerPeriod,
            tps: _tps,
            totalStaked: 0,
            initialTime: block.timestamp,
            lastUpdateTime: block.timestamp,
            periodNumber: 1
        });
    }

    /**
     * Function that deposits amount of token at staking.
     * @param amount Amount of token to be deposited.
     */
    function stake(uint256 amount) external whenNotPaused {
        _updateTPS();
        IERC20(stakingInfo.asset).safeTransferFrom(
            msg.sender,
            address(this),
            amount
        );
        usersStakes[msg.sender].stake += amount;
        usersStakes[msg.sender].rewardMissed +=
            (amount * stakingInfo.tps) /
            10**18;

        stakingInfo.totalStaked += amount;

        emit Staked(msg.sender, amount, stakingInfo.tps, block.timestamp);
    }

    /**
     * Function that unstake amount of user's stake from staking.
     * @param amount Amount of token to be unstaked.
     * @param to Address at which unstaked amount will be transferred.
     */
    function unStake(uint256 amount, address to) external whenNotPaused {
        require(
            to != address(0),
            "Staking::UnStake: invalid address to unstake"
        );
        require(
            usersStakes[msg.sender].stake >= amount,
            "Staking::UnStake: unstake amount exceeds amount at stake"
        );
        _updateTPS();
        usersStakes[msg.sender].stake -= amount;
        IERC20(stakingInfo.asset).safeTransfer(to, amount);
        usersStakes[msg.sender].rewardGained +=
            (amount * stakingInfo.tps) /
            10**18;

        stakingInfo.totalStaked -= amount;

        emit UnStaked(to, amount, stakingInfo.tps, block.timestamp);
    }

    /**
     * Function that claims user's rewards from staking contract.
     * @param to Address at which claimed amount will be transferred.
     */
    function claimRewards(address to) external whenNotPaused {
        require(to != address(0), "Staking::UnStake: invalid address to claim");

        _updateTPS();

        uint256 claimAmount = (usersStakes[msg.sender].stake *
            stakingInfo.tps) /
            10**18 -
            usersStakes[msg.sender].rewardMissed +
            usersStakes[msg.sender].rewardGained -
            usersStakes[msg.sender].rewardClaimed;

        usersStakes[msg.sender].rewardClaimed = claimAmount;

        IERC20(stakingInfo.asset).safeTransfer(to, claimAmount);

        emit Claimed(to, claimAmount, block.timestamp);
    }

    /**
     * View function that returns info about user's stake.
     * @param addressOfStaker Address of staker which info we want to see.
     */
    function getStakeInfo(address addressOfStaker)
        external
        view
        returns (Staker memory)
    {
        return usersStakes[addressOfStaker];
    }

    /**
     * Function that upates token per share value.
     *
     * It calls at start of stake unStake and claimRewards functions.
     */
    function _updateTPS() private {
        uint256 timeFromLastUpdate = block.timestamp -
            stakingInfo.lastUpdateTime;
        if (stakingInfo.totalStaked > 0) {
            if (
                block.timestamp >=
                stakingInfo.initialTime +
                    stakingInfo.rewardPeriod *
                    (stakingInfo.periodNumber + 1)
            ) {
                if (timeFromLastUpdate >= stakingInfo.rewardPeriod * 2) {
                    uint256 periodsGone = (block.timestamp -
                        stakingInfo.lastUpdateTime) / stakingInfo.rewardPeriod;
                    stakingInfo.tps +=
                        ((stakingInfo.rewardPerPeriod * 10**18) /
                            stakingInfo.totalStaked) *
                        periodsGone;
                } else {
                    stakingInfo.tps += ((((timeFromLastUpdate) *
                        stakingInfo.rewardPerPeriod) * 10**18) /
                        (stakingInfo.totalStaked * stakingInfo.rewardPeriod));
                }
                stakingInfo.periodNumber +=
                    timeFromLastUpdate /
                    stakingInfo.rewardPeriod;
                stakingInfo.lastUpdateTime = block.timestamp;
            } /*else {
                //console.log("not enough time");
            }*/
        } else {
            stakingInfo.lastUpdateTime = block.timestamp;
        }
    }
}
