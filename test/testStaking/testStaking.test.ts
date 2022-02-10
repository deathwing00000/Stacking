import { artifacts, ethers, waffle } from "hardhat";
//import { ethers } from "ethers";
import hre from "hardhat";
import dotenv from "dotenv";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import fs from "fs";
import type { TestTKN } from "../../src/types/TestTKN";
import type { Staking } from "../../src/types/Staking";
import { Signers } from "../types";

import { shouldDeployCorrectly } from "./testStaking.deployment";
import { shouldBehaveCorrectly } from "./testStaking.behavior";
describe("Unit tests", function () {
  // gather deployment info
  const network = hre.network.name;
  const config = dotenv.parse(fs.readFileSync(`.env${network}`));
  for (const parameter in config) {
    process.env[parameter] = config[parameter];
  }
  before(async function () {
    const testTKN = await hre.ethers.getContractFactory("TestTKN");
    this.TKN = <TestTKN>(
      await testTKN.deploy(
        config.TOKEN_NAME as string,
        config.TOKEN_SYMBOL as string
      )
    );
    console.log(`Deployed to: ${this.TKN.address}`);

    //console.log(`Deployed to: ${this.Staking.address}`);
  });

  describe("Test Staking", function () {
    beforeEach(async function () {
      this.signers = {} as Signers;
      this.hre = hre;
      const signers: SignerWithAddress[] = await hre.ethers.getSigners();
      [
        ,
        this.signers.admin,
        this.staker1,
        this.staker2,
        this.staker3,
        this.staker4,
      ] = await ethers.getSigners();
      /*this.signers.admin = signers[0];
      this.staker1 = signers[1];
      this.staker2 = signers[2];
      this.staker3 = signers[3];
      this.staker4 = signers[4];
      this.gateway = signers[5];*/

      const staking = await hre.ethers.getContractFactory("Staking");
      this.Staking = <Staking>(
        await staking.deploy(
          this.TKN.address,
          600,
          this.hre.ethers.utils.parseEther("100"),
          0
        )
      );

      await this.TKN.burn(
        this.staker1.address,
        this.TKN.balanceOf(this.staker1.address)
      );
      await this.TKN.burn(
        this.staker2.address,
        this.TKN.balanceOf(this.staker2.address)
      );
      await this.TKN.burn(
        this.staker3.address,
        this.TKN.balanceOf(this.staker3.address)
      );
      await this.TKN.burn(
        this.staker4.address,
        this.TKN.balanceOf(this.staker4.address)
      );

      await this.TKN.mint(
        this.staker1.address,
        this.hre.ethers.utils.parseEther("2500")
      );
      /*console.log("staker1 minted");
      console.log(await this.TKN.balanceOf(this.staker1.address));*/
      await this.TKN.balanceOf(this.staker1.address);

      await this.TKN.connect(this.staker1).approve(
        this.Staking.address,
        this.hre.ethers.utils.parseEther("2500")
      );

      //minting also to stakers 2,3,4

      await this.TKN.mint(
        this.staker2.address,
        this.hre.ethers.utils.parseEther("7000")
      );

      await this.TKN.connect(this.staker2).approve(
        this.Staking.address,
        this.hre.ethers.utils.parseEther("7000")
      );

      await this.TKN.mint(
        this.staker3.address,
        this.hre.ethers.utils.parseEther("3500")
      );

      await this.TKN.connect(this.staker3).approve(
        this.Staking.address,
        this.hre.ethers.utils.parseEther("3500")
      );

      await this.TKN.mint(
        this.staker4.address,
        this.hre.ethers.utils.parseEther("35000")
      );

      await this.TKN.connect(this.staker4).approve(
        this.Staking.address,
        this.hre.ethers.utils.parseEther("35000")
      );

      //console.log(`Deployed to: ${this.Staking.address}`);
    });

    shouldDeployCorrectly();

    shouldBehaveCorrectly();
  });
});
