import { expect } from "chai";

export function shouldDeployCorrectly(): void {
  it("should deploy correctly", async function () {
    expect(await this.TKN.name()).to.be.eq("testToken");
    expect(await this.TKN.symbol()).to.be.eq("TKN");
    expect((await this.Staking.stakingInfo())[0]).to.be.eq(this.TKN.address);
    expect((await this.Staking.stakingInfo())[1]).to.be.eq(600);
    expect((await this.Staking.stakingInfo())[2]).to.be.eq(
      this.hre.ethers.utils.parseEther("100")
    );
    expect((await this.Staking.stakingInfo())[4]).to.be.eq(
      this.hre.ethers.utils.parseEther("0")
    );
  });
}
