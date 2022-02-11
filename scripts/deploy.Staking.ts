import fs from "fs";
import dotenv from "dotenv";

import type { Staking } from "../src/types/Staking";
import type { Staking__factory } from "../src/types/factories/Staking__factory";

import hre from "hardhat";

//npx hardhat run scripts/deploy.Staking.ts --network rinkeby
async function main() {
  const net = hre.network.name;
  const config = dotenv.parse(fs.readFileSync(`.env${net}`));
  for (const parameter in config) {
    process.env[parameter] = config[parameter];
  }
  console.log(`TOKEN deployed to: ${config.TOKEN_ADDRESS}`);
  console.log(`Staking deploying...`);

  const Staking: Staking__factory = <Staking__factory>(
    await hre.ethers.getContractFactory("Staking")
  );
  const staking: Staking = <Staking>(
    await Staking.deploy(
      config.TOKEN_ADDRESS as string,
      config.REWARD_PERIOD as string,
      config.REWARD_PER_PERIOD as string,
      config.START_TPS as string
    )
  );
  await staking.deployed();

  //Sync env file
  fs.appendFileSync(
    `.env${net}`,
    `\r\# Staking deployed at \rSTAKING_ADDRESS=${staking.address}\r`
  );

  console.log(`Staking deployed to: ${staking.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
