//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/AccessControl.sol";
//import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "hardhat/console.sol";

contract Staking is AccessControl, Pausable {
    using SafeERC20 for IERC20;
    using EnumerableSet for EnumerableSet.AddressSet;

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

    StakingInfo public stakingInfo;

    EnumerableSet.AddressSet stakers;

    struct Staker {
        uint256 stake;
        uint256 rewardMissed;
        uint256 rewardGained;
        uint256 rewardClaimed;
    }

    mapping(address => Staker) usersStakes;

    event Staked(
        address indexed depositor,
        uint256 indexed amount,
        uint256 newTps,
        uint256 time
    );
    event UnStaked(
        address indexed to,
        uint256 indexed amount,
        uint256 newTps,
        uint256 time
    );
    event Claimed(
        address indexed to,
        uint256 indexed claimAmount,
        uint256 time
    );

    constructor(
        address _asset,
        uint256 _rewardTime,
        uint256 _rewardValue,
        uint256 _tps
    ) {
        stakingInfo = StakingInfo({
            asset: _asset,
            rewardPeriod: _rewardTime,
            rewardPerPeriod: _rewardValue,
            tps: _tps,
            totalStaked: 0,
            initialTime: block.timestamp,
            lastUpdateTime: block.timestamp,
            periodNumber: 1
        });
    }

    function updateTPS() private returns (uint256) {
        uint256 timeFromLastUpdate = block.timestamp -
            stakingInfo.lastUpdateTime;
        console.log(timeFromLastUpdate);
        if (stakingInfo.totalStaked > 0) {
            if (timeFromLastUpdate >= stakingInfo.rewardPeriod) {
                /*if (
                block.timestamp >=
                stakingInfo.initialTime +
                    stakingInfo.rewardPeriod *
                    stakingInfo.periodNumber
            ) {*/
                //console.log("shit");
                if (timeFromLastUpdate >= stakingInfo.rewardPeriod * 2) {
                    uint256 periodsDone = (block.timestamp -
                        stakingInfo.lastUpdateTime) / stakingInfo.rewardPeriod;
                    stakingInfo.tps +=
                        ((stakingInfo.rewardPerPeriod * 10**18) /
                            stakingInfo.totalStaked) *
                        periodsDone;
                } else {
                    stakingInfo.tps += ((((timeFromLastUpdate) *
                        stakingInfo.rewardPerPeriod) * 10**18) /
                        (stakingInfo.totalStaked * stakingInfo.rewardPeriod));
                }
                stakingInfo.periodNumber++;
                stakingInfo.lastUpdateTime = block.timestamp;
            } else {
                console.log("not enough time");
            }
        } else {
            stakingInfo.lastUpdateTime = block.timestamp;
        }
        return (stakingInfo.tps);
    }

    function stake(uint256 amount) external whenNotPaused {
        stakingInfo.tps = updateTPS();
        IERC20(stakingInfo.asset).safeTransferFrom(
            msg.sender,
            address(this),
            amount
        );
        Staker memory currentStaker;
        uint256 _rewardMissed = (amount * stakingInfo.tps) / 10**18;

        currentStaker = usersStakes[msg.sender];
        currentStaker.stake += amount;
        currentStaker.rewardMissed += _rewardMissed;
        usersStakes[msg.sender] = currentStaker;

        stakingInfo.totalStaked += amount;

        emit Staked(msg.sender, amount, stakingInfo.tps, block.timestamp);
    }

    function unStake(uint256 amount, address to) external whenNotPaused {
        require(
            to != address(0),
            "Staking::UnStake: invalid address to unstake"
        );
        require(
            usersStakes[msg.sender].stake >= amount,
            "Staking::UnStake: unstake amount exceeds amount at stake"
        );
        updateTPS();
        Staker memory currentStaker = usersStakes[msg.sender];
        currentStaker.stake -= amount;
        IERC20(stakingInfo.asset).safeTransferFrom(address(this), to, amount);
        currentStaker.rewardGained += (amount * stakingInfo.tps) / 10**18;

        stakingInfo.totalStaked -= amount;

        emit UnStaked(to, amount, stakingInfo.tps, block.timestamp);
    }

    function claimRewards(address to) external whenNotPaused {
        updateTPS();
        Staker memory currentStaker = usersStakes[msg.sender];

        uint256 claimAmount = (currentStaker.stake * stakingInfo.tps) /
            10**18 -
            currentStaker.rewardMissed +
            currentStaker.rewardGained -
            currentStaker.rewardClaimed;

        currentStaker.rewardClaimed = claimAmount;

        usersStakes[msg.sender] = currentStaker;

        IERC20(stakingInfo.asset).safeTransfer(to, claimAmount);

        emit Claimed(to, claimAmount, block.timestamp);
    }

    function getStakeInfo(address addressOfStaker)
        external
        view
        returns (Staker memory)
    {
        return usersStakes[addressOfStaker];
    }

    function getStakingInfo() external view returns (StakingInfo memory) {
        return stakingInfo;
    }
}
