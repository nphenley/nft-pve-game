const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("CoolGame");
  const gameContract = await gameContractFactory.deploy(
    ["Coingecko Gecko", "Opensea Boat", "Uniswap Unicorn"], // Names
    [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6T6afxWgARBlZH4RAcMY_X9bshMVU9ogHX2ER614mNHnY7fiDRi0gSY7enx-E2aRfXa0&usqp=CAU", // Images
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCx9kJifhFG_keXtC0USHFKGopNh01cit3NqxuG-i3sb7_7E_-b-fiFDFQ_7kZazmrEgY&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPP5p4-uqOzKujKBi4jlkUhTaxVXqE6kFcwb47j_97q7FSnduFEIImg7cT-0Zli9c1Fs&usqp=CAU",
    ],
    [100, 200, 300], // HP values
    [100, 50, 25],
    "Angel",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Q5hX_dHgNqKgBEg83B7WAzjx6MnTjE7Si-klB3dExo6Cyt1C4cSTafp7FDHDKj_hvZc&usqp=CAU",
    10000,
    50
  ); // Attack damage values
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();
  txn = await gameContract.attackBoss();
  await txn.wait();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
