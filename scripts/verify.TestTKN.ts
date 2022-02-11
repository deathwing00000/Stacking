import fs from "fs";
import dotenv from "dotenv";
import hre from "hardhat";

//npx hardhat run scripts/verify.TestTKN.ts --network rinkeby
async function main() {
  const net = hre.network.name;
  const config = dotenv.parse(fs.readFileSync(`.env${net}`));
  for (const parameter in config) {
    process.env[parameter] = config[parameter];
  }

  console.log("starting verify TestTKN");
  try {
    await hre.run("verify:verify", {
      address: config.TEST_TOKEN_ADDRESS as string,
      contract: "contracts/assets/TestTKN.sol:TestTKN",
      constructorArguments: [
        config.TOKEN_NAME as string,
        config.TOKEN_SYMBOL as string,
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
