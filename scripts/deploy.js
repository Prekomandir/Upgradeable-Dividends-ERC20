// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy


    //enter values
    const RouterAddress = "";
    const marketingWallet = "";
    const liquidityWallet = "";
    //erc20 contract

    const ERC20 = await hre.ethers.getContractFactory("ERC20Dividend");
    const erc20 = await ERC20.deploy(marketingWallet, liquidityWallet); //constructor parameters => (address _marketingWallet, address _liquidityWallet)

    await erc20.deployed();

    console.log("ERC20 smart contract deployed to:", erc20.address);

    //dividend contract
    const Dividend = await hre.ethers.getContractFactory("DividendTracker");
    const dividend = await Dividend.deploy(erc20.address, RouterAddress); //constructor parameters => (address _tokenAddress, address _uniswapRouter)

    await dividend.deployed();

    console.log("Dividend smart contract deployed to:", dividend.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});