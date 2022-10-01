import { ethers, run } from 'hardhat';

async function main() {
  const Greeter = await ethers.getContractFactory('Greeter');
  const greeter = await Greeter.deploy('Hello, Hardhat!');

  await greeter.deployed();

  console.log('Greeter deployed to:', greeter.address);

  if (process.env.VERIFY) {
    // wait until the contract is available across the entire net
    await new Promise((resolve) => setTimeout(resolve, 1000 * 30));
    await run('verify:verify', {
      address: greeter.address,
      constructorArguments: ['Hello, Hardhat!'],
    });
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
