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

    address public asset;

    uint256 public rewardTime;

    uint256 public rewardValue;

    uint256 public rewardDistribution;

    uint256 public totalStaked;

    uint256 public Tps;

    uint256 nextTps;

    uint256 public lastUpdateTime;

    EnumerableSet.AddressSet stakers;

    struct Staker {
        uint256 stake;
        uint256 rewardMissed;
        uint256 rewardGained;
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
        uint256 rewardDistribution,
        uint256 time
    );

    constructor(
        address _asset,
        uint256 _rewardTime,
        uint256 _rewardValue,
        uint256 _Tps
    ) {
        asset = _asset;
        rewardTime = _rewardTime;
        rewardValue = _rewardValue;
        Tps = 0;
        lastUpdateTime = block.timestamp;
    }

    function UpdateTPS(uint256 lastAmount) private returns (uint256) {
        uint256 testTotal = totalStaked;
        /*if (totalStaked > lastAmount) {
            testTotal -= lastAmount;
        }

        if (block.timestamp - lastUpdateTime > rewardTime) {
            console.log(block.timestamp);
            console.log(lastUpdateTime);
            console.log(rewardValue);
            console.log(testTotal);
            console.log(rewardTime);
            console.log(
                ((((block.timestamp - lastUpdateTime)) * rewardValue) *
                    10**18) / (testTotal * rewardTime)
            );
            Tps +=
                (((block.timestamp - lastUpdateTime) * rewardValue) * 10**18) /
                (testTotal * rewardTime);
            console.log(Tps);
            lastUpdateTime = block.timestamp;
        }*/
        if (totalStaked > 0) {
            Tps +=
                (((block.timestamp - lastUpdateTime) * rewardValue) * 10**18) /
                (totalStaked * rewardTime);
            console.log("shit");
            console.log(block.timestamp);
            console.log(lastUpdateTime);
            console.log(Tps);
            lastUpdateTime = block.timestamp;
            return (Tps);
        }
    }

    /*function UpdateRewardDistribution(uint256 claimAmount)
        private
        returns (uint256)
    {
        return rewardDistribution + ;
    }*/

    function Stake(uint256 amount) external whenNotPaused {
        Tps = UpdateTPS(amount);
        IERC20(asset).safeTransferFrom(msg.sender, address(this), amount);
        Staker memory currentStaker;
        uint256 _rewardMissed = (amount * Tps) / 10**18;

        if (stakers.length() > 1) {
            currentStaker.rewardMissed += _rewardMissed;
            console.log("estimate reward missed");
        }

        if (!stakers.contains(msg.sender)) {
            console.log("creating new object of struct");
            stakers.add(msg.sender);
            currentStaker = Staker({
                stake: amount,
                rewardMissed: _rewardMissed,
                rewardGained: 0
            });
            //TODO: mb rano prisvaivayu
            usersStakes[msg.sender] = currentStaker;
        } else {
            currentStaker = usersStakes[msg.sender];
            currentStaker.stake += amount;
        }

        totalStaked += amount;

        emit Staked(msg.sender, amount, Tps, block.timestamp);
    }

    function UnStake(uint256 amount, address to) external whenNotPaused {
        require(
            to != address(0),
            "Staking::UnStake: invalid address to unstake"
        );
        require(
            usersStakes[msg.sender].stake >= amount,
            "Staking::UnStake: unstake amount exceeds amount at stake"
        );
        IERC20(asset).safeTransferFrom(address(this), to, amount);
        Staker memory currentStaker = usersStakes[msg.sender];
        currentStaker.stake -= amount;
        currentStaker.rewardGained += amount * Tps;

        totalStaked -= amount;

        emit UnStaked(to, amount, UpdateTPS(amount), block.timestamp);
    }

    function claimRewards(address to) external whenNotPaused {
        Staker memory currentStaker = usersStakes[msg.sender];

        uint256 claimAmount = currentStaker.stake -
            currentStaker.rewardMissed +
            currentStaker.rewardGained;

        //uint256 newRewardDistribution = UpdateRewardDistribution(claimAmount);

        IERC20(asset).safeTransferFrom(address(this), to, claimAmount);

        //emit Claimed(to, claimAmount, newRewardDistribution, block.timestamp);
    }

    function getStakeInfo(address addressOfStaker)
        external
        view
        returns (Staker memory)
    {
        return usersStakes[addressOfStaker];
    }
}
