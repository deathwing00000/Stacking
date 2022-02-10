import { expect } from "chai";
import { timeStamp } from "console";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";

export function shouldBehaveCorrectly(): void {
  it("should works according the table correctly", async function () {
    this.hre.ethers.provider.send("evm_increaseTime", [591]);
    this.hre.ethers.provider.send("evm_mine", []);
    expect(
      await this.Staking.connect(this.staker1).stake(
        this.hre.ethers.utils.parseEther("1000")
      )
    ).to.be.ok;

    /* console.log(await (await this.Staking.lastUpdateTime()).toString());
    //console.log(await this.Staking.getStakeInfo(this.staker1.address)); */
    expect((await this.Staking.getStakeInfo(this.staker1.address))[0]).to.be.ok;

    this.hre.ethers.provider.send("evm_increaseTime", [599]);
    this.hre.ethers.provider.send("evm_mine", []);
    expect(
      await this.Staking.connect(this.staker2).stake(
        this.hre.ethers.utils.parseEther("2000")
      )
    ).to.be.ok;

    expect((await this.Staking.stakingInfo())[4]).to.be.closeTo(
      this.hre.ethers.utils.parseEther("0.1"),
      1e12
    );
    /* console.log(await (await this.Staking.lastUpdateTime()).toString());
    //console.log(await this.Staking.getStakeInfo(this.staker2.address)); */

    this.hre.ethers.provider.send("evm_increaseTime", [599]);
    this.hre.ethers.provider.send("evm_mine", []);

    expect(
      await this.Staking.connect(this.staker3).stake(
        this.hre.ethers.utils.parseEther("2500")
      )
    ).to.be.ok;

    expect((await this.Staking.stakingInfo())[4]).to.be.closeTo(
      this.hre.ethers.utils.parseEther("0.1333333333"),
      1e12
    );

    /* console.log(await (await this.Staking.lastUpdateTime()).toString());
    //console.log(await this.Staking.getStakeInfo(this.staker3.address));
    //console.log(await this.Staking.Tps()); */

    //console.log("here double staking");
    this.hre.ethers.provider.send("evm_increaseTime", [599]);
    this.hre.ethers.provider.send("evm_mine", []);

    //console.log("here first staking");
    expect(
      await this.Staking.connect(this.staker1).stake(
        this.hre.ethers.utils.parseEther("1500")
      )
    ).to.be.ok;

    expect((await this.Staking.stakingInfo())[4]).to.be.closeTo(
      this.hre.ethers.utils.parseEther("0.1515151515"),
      1e12
    );

    //console.log("here second staking");

    expect(
      await this.Staking.connect(this.staker4).stake(
        this.hre.ethers.utils.parseEther("5000")
      )
    ).to.be.ok;

    this.hre.ethers.provider.send("evm_increaseTime", [1798]);
    this.hre.ethers.provider.send("evm_mine", []);

    expect(
      await this.Staking.connect(this.staker2).stake(
        this.hre.ethers.utils.parseEther("5000")
      )
    ).to.be.ok;

    expect(
      await this.Staking.connect(this.staker3).stake(
        this.hre.ethers.utils.parseEther("1000")
      )
    ).to.be.ok;

    expect((await this.Staking.stakingInfo())[4]).to.be.closeTo(
      this.hre.ethers.utils.parseEther("0.1765151515"),
      1e12
    );

    this.hre.ethers.provider.send("evm_increaseTime", [598]);
    this.hre.ethers.provider.send("evm_mine", []);

    expect(
      await this.Staking.connect(this.staker4).stake(
        this.hre.ethers.utils.parseEther("30000")
      )
    ).to.be.ok;

    this.hre.ethers.provider.send("evm_increaseTime", [1799]);
    this.hre.ethers.provider.send("evm_mine", []);

    //console.log(await this.TKN.balanceOf(this.Staking.address));
    expect(
      await this.Staking.connect(this.staker1).claimRewards(
        this.staker1.address
      )
    ).to.be.ok;

    expect((await this.Staking.stakingInfo())[4]).to.be.closeTo(
      this.hre.ethers.utils.parseEther("0.1883207071"),
      1e12
    );

    //console.log(await this.TKN.balanceOf(this.Staking.address));
    expect(await this.TKN.balanceOf(this.staker1.address)).to.be.closeTo(
      this.hre.ethers.utils.parseEther("243.5290"),
      1e14
    );

    expect(
      await this.Staking.connect(this.staker2).claimRewards(
        this.staker2.address
      )
    ).to.be.ok;
    expect(await this.TKN.balanceOf(this.staker2.address)).to.be.closeTo(
      this.hre.ethers.utils.parseEther("235.6692"),
      1e14
    );

    expect(
      await this.Staking.connect(this.staker3).claimRewards(
        this.staker3.address
      )
    ).to.be.ok;
    expect(await this.TKN.balanceOf(this.staker3.address)).to.be.closeTo(
      this.hre.ethers.utils.parseEther("149.2740"),
      1e14
    );

    expect(
      await this.Staking.connect(this.staker4).claimRewards(
        this.staker4.address
      )
    ).to.be.ok;
    expect(await this.TKN.balanceOf(this.staker4.address)).to.be.closeTo(
      this.hre.ethers.utils.parseEther("371.5278"),
      1e14
    );

    //console.log(await this.Staking.getStakeInfo(this.staker1.address));

    //console.log(await this.TKN.balanceOf(this.Staking.address));
  });

  it("should stake and unstake correctly", async function () {
    //console.log(await this.TKN.balanceOf(this.staker1.address));

    this.hre.ethers.provider.send("evm_increaseTime", [591]);
    this.hre.ethers.provider.send("evm_mine", []);
    expect(
      await this.Staking.connect(this.staker1).stake(
        this.hre.ethers.utils.parseEther("1000")
      )
    ).to.be.ok;

    /* console.log(await (await this.Staking.lastUpdateTime()).toString());
    //console.log(await this.Staking.getStakeInfo(this.staker1.address)); */
    expect((await this.Staking.getStakeInfo(this.staker1.address))[0]).to.be.ok;

    this.hre.ethers.provider.send("evm_increaseTime", [599]);
    this.hre.ethers.provider.send("evm_mine", []);
    expect(
      await this.Staking.connect(this.staker2).stake(
        this.hre.ethers.utils.parseEther("2000")
      )
    ).to.be.ok;
    /* console.log(await (await this.Staking.lastUpdateTime()).toString());
    //console.log(await this.Staking.getStakeInfo(this.staker2.address)); */

    this.hre.ethers.provider.send("evm_increaseTime", [599]);
    this.hre.ethers.provider.send("evm_mine", []);

    expect(
      await this.Staking.connect(this.staker3).stake(
        this.hre.ethers.utils.parseEther("2500")
      )
    ).to.be.ok;

    /* console.log(await (await this.Staking.lastUpdateTime()).toString());
    //console.log(await this.Staking.getStakeInfo(this.staker3.address));
    //console.log(await this.Staking.Tps()); */

    this.hre.ethers.provider.send("evm_increaseTime", [599]);
    this.hre.ethers.provider.send("evm_mine", []);

    expect(
      await this.Staking.connect(this.staker1).stake(
        this.hre.ethers.utils.parseEther("1500")
      )
    ).to.be.ok;

    expect(
      await this.Staking.connect(this.staker4).stake(
        this.hre.ethers.utils.parseEther("5000")
      )
    ).to.be.ok;

    this.hre.ethers.provider.send("evm_increaseTime", [1798]);
    this.hre.ethers.provider.send("evm_mine", []);

    expect(
      await this.Staking.connect(this.staker2).stake(
        this.hre.ethers.utils.parseEther("5000")
      )
    ).to.be.ok;

    expect(
      await this.Staking.connect(this.staker3).stake(
        this.hre.ethers.utils.parseEther("1000")
      )
    ).to.be.ok;

    //console.log("unstaking");
    //console.log(await this.Staking.getStakeInfo(this.staker2.address));

    //testing requires
    await expect(
      this.Staking.connect(this.staker2).unStake(
        this.hre.ethers.utils.parseEther("5000"),
        this.hre.ethers.constants.AddressZero
      )
    ).to.be.revertedWith("Staking::UnStake: invalid address to unstake");

    await expect(
      this.Staking.connect(this.staker2).unStake(
        this.hre.ethers.utils.parseEther("10000"),
        this.staker2.address
      )
    ).to.be.revertedWith(
      "Staking::UnStake: unstake amount exceeds amount at stake"
    );

    //
    expect(
      await this.Staking.connect(this.staker2).unStake(
        this.hre.ethers.utils.parseEther("5000"),
        this.staker2.address
      )
    ).to.be.ok;

    expect(await this.TKN.balanceOf(this.staker2.address)).to.be.eq(
      this.hre.ethers.utils.parseEther("5000")
    );

    expect(
      (await this.Staking.getStakeInfo(this.staker2.address))[2]
    ).to.be.closeTo(
      this.hre.ethers.utils.parseEther("882.575757575757565"),
      1e8
    );
    //console.log((await this.Staking.getStakeInfo(this.staker2.address))[2]);
  });
}
