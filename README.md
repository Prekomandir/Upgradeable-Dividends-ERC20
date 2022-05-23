# Upgradeable-Dividends-ERC20
1. npx hardhat and initialize the project
2. install all the plugins/dependencies specified by hardhat
3. Setup your .env file and hardhat.config file.
4. Enter the 3 required addresses in the deploy.js script (router address, liquidity and marketing wallet addresses).
5. npx hardhat compile
6. npx hardhat run scripts/deploy.js --network rinkeby(or whatever network you intend to use as specified in the hardhat.config file)
7. npx hardhat verify "contract address" --network rinkeby "constructor par1","constructor par2"

The code just barely makes the 24kb size limitation but it does ;). Have fun playing with crypto dividends
