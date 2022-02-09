import { expect } from "chai";
import { timeStamp } from "console";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";

export function shouldBehaveCorrectly(): void {
  it("should stake in first second correctly", async function () {
    console.log(await (await this.Staking.lastUpdateTime()).toString());
    console.log(Math.floor(+new Date() / 10 ** 3));
    expect(
      await this.Staking.connect(this.staker1).Stake(
        this.hre.ethers.utils.parseEther("1000")
      )
    ).to.be.ok;

    console.log(await (await this.Staking.lastUpdateTime()).toString());
    //console.log(await this.Staking.getStakeInfo(this.staker1.address));
    expect((await this.Staking.getStakeInfo(this.staker1.address))[0]).to.be.ok;

    this.hre.ethers.provider.send("evm_increaseTime", [0]);
    this.hre.ethers.provider.send("evm_mine", []);

    expect(
      await this.Staking.connect(this.staker2).Stake(
        this.hre.ethers.utils.parseEther("2000")
      )
    ).to.be.ok;
    console.log(await (await this.Staking.lastUpdateTime()).toString());
    //console.log(await this.Staking.getStakeInfo(this.staker2.address));
  });
}
