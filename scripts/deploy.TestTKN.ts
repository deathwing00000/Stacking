import fs from "fs";
import dotenv from "dotenv";

import { TestTKN } from "../src/types/TestTKN";
import { TestTKN__factory } from "../src/types/factories/TestTKN__factory";

import hre from "hardhat";

//npx hardhat run scripts/deploy.TestTKN.ts --network rinkeby
async function main() {
  const net = hre.network.name;
  const config = dotenv.parse(fs.readFileSync(`.env${net}`));
  for (const parameter in config) {
    process.env[parameter] = config[parameter];
  }
  const Token: TestTKN__factory = <TestTKN__factory>(
    await hre.ethers.getContractFactory("TestTKN")
  );

  console.log(`Token deploying...`);

  const token: TestTKN = <TestTKN>(
    await Token.deploy(
      config.TOKEN_NAME as string,
      config.TOKEN_SYMBOL as string
    )
  );
  await token.deployed();

  //Sync env file
  fs.appendFileSync(
    `.envrinkeby`,
    `\r\# Token deployed at \rTOKEN_ADDRESS=${token.address}\r`
  );

  console.log(`Token deployed to: ${token.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
