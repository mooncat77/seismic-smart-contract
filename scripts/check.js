const hre = require("hardhat");

async function main() {
  const lock = await hre.ethers.getContractAt("Lock", "0xE9f5e16A1FE4E192Ea6d91975f77058dbaE346d3");
  const unlockTime = await lock.unlockTime();
  console.log("Unlock time:", unlockTime.toString());
}

main().catch(console.error);
