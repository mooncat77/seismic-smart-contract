const hre = require("hardhat");

async function main() {
  const Lock = await hre.ethers.getContractFactory("Lock");
  console.log("Deploying contract...");

  // Set unlock time to 1 hour from now (in seconds)
  const unlockTime = Math.floor(Date.now() / 1000) + 3600;

  // Deploy the contract
  const lock = await Lock.deploy(unlockTime, { value: hre.ethers.parseEther("0.01") });

  // Wait for the transaction to be mined
  const txReceipt = await lock.waitForDeployment();
  
  console.log("Transaction hash:", txReceipt.deploymentTransaction().hash);
  console.log("Contract address:", lock.target); // Use .target instead of .address in newer ethers
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
