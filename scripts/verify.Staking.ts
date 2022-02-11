import fs from "fs";
import dotenv from "dotenv";

import hre from "hardhat";

//npx hardhat run scripts/verify.Staking.ts --network rinkeby
async function main() {
  const net = hre.network.name;
  const config = dotenv.parse(fs.readFileSync(`.env${net}`));
  for (const parameter in config) {
    process.env[parameter] = config[parameter];
  }

  console.log("starting verify Staking");
  try {
    await hre.run("verify:verify", {
      address: config.STAKING_ADDRESS as string,
      contract: "contracts/Staking.sol:Staking",
      constructorArguments: [
        config.TOKEN_ADDRESS as string,
        config.REWARD_PERIOD as string,
        config.REWARD_PER_PERIOD as string,
        config.START_TPS as string,
      ],
    });
    console.log("verify success");
  } catch (e: any) {
    console.log(e.message);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
