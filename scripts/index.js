import { ethers } from "ethers";
import path from "path";
import fs from "fs";
import { cwd } from "process";
import { configDotenv } from "dotenv";

configDotenv();

async function Main() {
  const ContractPath = path.join(cwd(), "artifacts/contracts");

  const contractFiles = {
    contract1: "AddressTransfer.sol/NFTManager.json",
    contract2: "Erc20.sol/BRTX.json",
    contract3: "MarketPlace.sol/BarterXmarketPlace.json",
  };

  const Config = {
    Url: `https://sepolia.infura.io/v3/${process.env.RPC_KEY}`,
    Account: process.env.PRIVATE_KEY,
    chainId: 11155111,
  };

  console.log(Config);

  const provider = new ethers.JsonRpcProvider(Config.Url);
  const Signer = new ethers.Wallet(Config.Account, provider);
  const BuildPath = path.join(cwd(), "scripts", "build");

  async function deployContract(filePath, folderName) {
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      return;
    }

    const contract = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const deploy = new ethers.ContractFactory(
      contract.abi,
      contract.bytecode,
      Signer
    );

    console.log(`Deploying ${folderName}...`);
    const gasLimit = 5000000;
    const contractAddress = "0xcAB8eE241Cd769eED53079b059603B6f7aB6641f";
    const tx = await deploy.deploy(contractAddress, { gasLimit });

    await tx.deploymentTransaction().wait();

    const addressOfContract = tx.target;

    const deploymentFolder = path.join(BuildPath, folderName);
    fs.mkdirSync(deploymentFolder, { recursive: true });

    const deploymentJson = {
      address: addressOfContract,
      chainId: Config.chainId,
    };
    fs.writeFileSync(
      path.join(deploymentFolder, "deployment.json"),
      JSON.stringify(deploymentJson, null, 2)
    );

    console.log(`${folderName} deployed at: ${addressOfContract}`);
  }

  // await deployContract(
  //   path.join(ContractPath, contractFiles.contract1),
  //   "contract1"
  // );
  // await deployContract(
  //   path.join(ContractPath, contractFiles.contract2),
  //   "contract2"
  // );
  await deployContract(
    path.join(ContractPath, contractFiles.contract3),
    "contract3"
  );
}

Main().catch((err) => {
  console.error(err);
});
