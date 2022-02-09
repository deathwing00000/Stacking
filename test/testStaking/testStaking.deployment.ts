import { expect } from "chai";

export function shouldDeployCorrectly(): void {
  it("should deploy correctly", async function () {
    expect(await this.TKN.name()).to.be.eq("testToken");
    expect(await this.TKN.symbol()).to.be.eq("TKN");
    expect(await this.Staking.asset()).to.be.eq(this.TKN.address);
    expect(await this.Staking.rewardTime()).to.be.eq(1);
    expect(await this.Staking.rewardValue()).to.be.eq(
      this.hre.ethers.utils.parseEther("100")
    );
    expect(await this.Staking.Tps()).to.be.eq(
      this.hre.ethers.utils.parseEther("0.1")
    );
  });
}
