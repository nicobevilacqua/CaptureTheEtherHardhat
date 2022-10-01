# Capture the Ether with Hardhat

Challenges from [Capture the ether](https://capturetheether.com/) on hardhat.
## How to use:

1. Clone this repo.
2. Complete the challenges on `./test/`.
3. Verify the result running ``yarn test``.

## Challenges

1. [Deploy a contract](#deploy-a-contract)
2. [Call me](#call-me)
3. [Choose a nickname](#choose-a-nickname)
4. [Guess the number](#guess-the-number)
5. [Guess the secret number](#guess-the-secret-number)
6. [Guess the random number](#guess-the-random-number)
7. [Guess the new number](#guess-the-new-number)
8. [Predict the future](#predict-the-future)
9. [Predict the block hash](#predict-the-block-hash)
10. [Token sale](#token-sale)
11. [Token whale](#token-whale)
12. [Retirement fund](#retirement-fund)
13. [Mapping](#mapping)
14. [Donation](#donation)
15. [Fifty years](#fifty-years)
16. [Fuzzy identity](#fuzzy-identity)
17. [Public Key](#public-key)
18. [Account Takeover](#account-takeover)
19. [Assume ownership](#assume-ownership)
20. [Token bank](#token-bank)
## Warmup

The warmup challenges are intended to get you familiar with the way Capture the Ether works and the tools you need to use.

### Deploy a contract

To complete this challenge, you need to deploy a new contract on hardhat.

* Contract: [./contracts/DeployChallenge.sol
](./contracts/DeployChallenge.sol)
* Test File: [./test/01-DeployAContract.test.ts
](./test/01-DeployAContract.test.ts)
* Run it with ``yarn deploy-a-contract``


### Call me

To complete this challenge, all you need to do is call the function named ``callme``.

- Contract: [./contracts/CallMeChallenge.sol
  ](./contracts/CallMeChallenge.sol)
- Test File: [./test/02-CallMe.test.ts
  ](./test/02-CallMe.test.ts)
- Run it with ```yarn call-me```

### Choose a nickname

To complete this challenge you need to track your nickname on the Capture the Ether contract.

- Contract: [./contracts/NicknameChallenge.sol
  ](./contracts/NicknameChallenge.sol)
- Test File: [./test/03-ChooseANickname.test.ts
  ](./test/03-ChooseANickname.test.ts)
- Run it with `yarn choose-a-nickname`

## Lotteries

Feeling lucky? These challenges will show how hard it is to run a fair lottery.

### Guess the number

I’m thinking of a number. All you have to do is guess it.

- Contract: [./contracts/GuessTheNumberChallenge.sol
  ](./contracts/GuessTheNumberChallenge.sol)
- Test File: [./test/04-GuessTheNumber.test.ts
  ](./test/04-GuessTheNumber.test.ts)
- Run it with `yarn guess-the-number`

### Guess the secret number

Putting the answer in the code makes things a little too easy.

This time I’ve only stored the hash of the number. Good luck reversing a cryptographic hash!

- Contract: [./contracts/GuessTheSecretNumberChallenge.sol
  ](./contracts/GuessTheSecretNumberChallenge.sol)
- Test File: [./test/05-GuessTheSecretNumber.test.ts
  ](./test/05-GuessTheSecretNumber.test.ts)
- Run it with `yarn guess-the-secret-number`

### Guess the random number

This time the number is generated based on a couple fairly random sources.

- Contract: [./contracts/GuessTheRandomNumberChallenge.sol
  ](./contracts/GuessTheRandomNumberChallenge.sol)
- Test File: [./test/06-GuessTheRandomNumber.test.ts
  ](./test/06-GuessTheRandomNumber.test.ts)
- Run it with `yarn guess-the-random-number`

### Guess the new number

The number is now generated on-demand when a guess is made.

- Contract: [./contracts/GuessTheNewNumberChallenge.sol
  ](./contracts/GuessTheNewNumberChallenge.sol)
- Test File: [./test/07-GuessTheNewNumber.test.ts
  ](./test/07-GuessTheNewNumber.test.ts)
- Run it with `yarn guess-the-new-number`

### Predict the future

This time, you have to lock in your guess before the random number is generated. To give you a sporting chance, there are only ten possible answers.

Note that it is indeed possible to solve this challenge without losing any ether.

- Contract: [./contracts/PredictTheFutureChallenge.sol
  ](./contracts/PredictTheFutureChallenge.sol)
- Test File: [./test/08-PredictTheFuture.test.ts
  ](./test/08-PredictTheFuture.test.ts)
- Run it with `yarn predict-the-future`

### Predict the block hash

Guessing an 8-bit number is apparently too easy. This time, you need to predict the entire 256-bit block hash for a future block.

- Contract: [./contracts/PredictTheBlockHashChallenge.sol
  ](./contracts/PredictTheBlockHashChallenge.sol)
- Test File: [./test/09-PredictTheBlockHash.test.ts
  ](./test/09-PredictTheBlockHash.test.ts)
- Run it with `yarn predict-the-block-hash`

## Math

These challenges use a variety of techniques, but they all involve a bit of math.

### Token sale

This token contract allows you to buy and sell tokens at an even exchange rate of 1 token per ether.

The contract starts off with a balance of 1 ether. See if you can take some of that away.

- Contract: [./contracts/TokenSaleChallenge.sol
  ](./contracts/TokenSaleChallenge.sol)
- Test File: [./test/10-TokenSale.test.ts
  ](./test/10-TokenSale.test.ts)
- Run it with `yarn token-sale`

### Token whale

This ERC20-compatible token is hard to acquire. There’s a fixed supply of 1,000 tokens, all of which are yours to start with.

Find a way to accumulate at least 1,000,000 tokens to solve this challenge.

- Contract: [./contracts/TokenWhaleChallenge.sol
  ](./contracts/TokenWhaleChallenge.sol)
- Test File: [./test/11-TokenWhale.test.ts
  ](./test/11-TokenWhale.test.ts)
- Run it with `yarn token-whale`

### Retirement fund

This retirement fund is what economists call a [commitment device](https://en.wikipedia.org/wiki/Commitment_device
). I’m trying to make sure I hold on to 1 ether for retirement.

I’ve committed 1 ether to the contract below, and I won’t withdraw it until 10 years have passed. If I do withdraw early, 10% of my ether goes to the **beneficiary** (you!).

I really don’t want you to have 0.1 of my ether, so I’m resolved to leave those funds alone until 10 years from now. Good luck!

- Contract: [./contracts/RetirementFundChallenge.sol
  ](./contracts/RetirementFundChallenge.sol)
- Test File: [./test/12-RetirementFund.test.ts
  ](./test/12-RetirementFund.test.ts)
- Run it with `yarn retirement-fund`

### Mapping

Who needs mappings? I’ve created a contract that can store key/value pairs using just an array.

- Contract: [./contracts/MappingChallenge.sol
  ](./contracts/MappingChallenge.sol)
- Test File: [./test/13-Mapping.test.ts
  ](./test/13-Mapping.test.ts)
- Run it with `yarn mapping`

### Donation

A candidate you don’t like is accepting campaign contributions via the smart contract below.

To complete this challenge, steal the candidate’s ether.

- Contract: [./contracts/DonationChallenge.sol
  ](./contracts/DonationChallenge.sol)
- Test File: [./test/14-Donation.test.ts
  ](./test/14-Donation.test.ts)
- Run it with `yarn donation`

### Fifty years

This contract locks away ether. The initial ether is locked away until 50 years has passed, and subsequent contributions are locked until even later.

All you have to do to complete this challenge is wait 50 years and withdraw the ether. If you’re not that patient, you’ll need to combine several techniques to hack this contract.

- Contract: [./contracts/FiftyYearsChallenge.sol
  ](./contracts/FiftyYearsChallenge.sol)
- Test File: [./test/15-FiftyYears.test.ts
  ](./test/15-FiftyYears.test.ts)
- Run it with `yarn fifty-years`

## Accounts

These challenges test your understanding of Ethereum accounts.

### Fuzzy identity

This contract can only be used by me (smarx). I don’t trust myself to remember my private key, so I’ve made it so whatever address I’m using in the future will work:

1. I always use a wallet contract that returns “smarx” if you ask its name.
2. Everything I write has bad code in it, so my address always includes the hex string **badc0de**.

To complete this challenge, steal my identity!

- Contract: [./contracts/FuzzyIdentityChallenge.sol
  ](./contracts/FuzzyIdentityChallenge.sol)
- Test File: [./test/16-FuzzyIdentity.test.ts
  ](./test/16-FuzzyIdentity.test.ts)
- Run it with `yarn fuzzy-identity`

### Public Key

Recall that an address is the last 20 bytes of the keccak-256 hash of the address’s public key.

To complete this challenge, find the public key for the owner's account.

- Contract: [./contracts/PublicKeyChallenge.sol
  ](./contracts/PublicKeyChallenge.sol)
- Test File: [./test/17-PublicKey.test.ts
  ](./test/17-PublicKey.test.ts)
- Run it with `yarn public-key`

### Account Takeover

To complete this challenge, send a transaction from the owner's account.

- Contract: [./contracts/AccountTakeoverChallenge.sol
  ](./contracts/AccountTakeoverChallenge.sol)
- Test File: [./test/18-AccountTakeover.test.ts
  ](./test/18-AccountTakeover.test.ts)
- Run it with `yarn account-takeover`

## Miscellaneous

These challenges defy categorization.

### Assume ownership

To complete this challenge, become the owner.

- Contract: [./contracts/AssumeOwnershipChallenge.sol
  ](./contracts/AssumeOwnershipChallenge.sol)
- Test File: [./test/19-AssumeOwnership.test.ts
  ](./test/19-AssumeOwnership.test.ts)
- Run it with `yarn assume-ownership`

### Token bank

I created a token bank. It allows anyone to deposit tokens by transferring them to the bank and then to withdraw those tokens later. It uses [ERC 223](https://github.com/ethereum/EIPs/issues/223
) to accept the incoming tokens.

The bank deploys a token called “Simple ERC223 Token” and assigns half the tokens to me and half to you. You win this challenge if you can empty the bank.

- Contract: [./contracts/TokenBankChallenge.sol
  ](./contracts/TokenBankChallenge.sol)
- Test File: [./test/20-TokenBank.test.ts
  ](./test/20-TokenBank.test.ts)
- Run it with `yarn token-bank`

---

Built by [@SMARX](https://twitter.com/smarx
)
