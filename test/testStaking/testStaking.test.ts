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
    this.signers = {} as Signers;
    this.hre = hre;
    const signers: SignerWithAddress[] = await hre.ethers.getSigners();
    this.signers.admin = signers[0];
    this.staker1 = signers[1];
    this.staker2 = signers[2];
    this.staker3 = signers[3];
    this.staker4 = signers[4];
    this.gateway = signers[5];

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

  describe("Test adapter", function () {
    beforeEach(async function () {
      const staking = await hre.ethers.getContractFactory("Staking");
      this.Staking = <Staking>(
        await staking.deploy(
          this.TKN.address,
          600,
          this.hre.ethers.utils.parseEther("100"),
          0
        )
      );
    });

    shouldDeployCorrectly();

    shouldBehaveCorrectly();
  });
});
