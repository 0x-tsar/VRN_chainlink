const Random = artifacts.require("RandomNumberConsumer");

module.exports = async () => {
  try {
    const vrn = await Random.deployed();
    const [account, account2, account3, _] = await web3.eth.getAccounts();
    console.log(`account ${account}`);
    console.log(`account2 ${account2}`);

    const random = await vrn.methods;
    // console.log(random);

    // const value = web3.utils.toWei("1");

    // const accruedFeesContract = await cards.retrieveFunds({ from: account });
    // const totalFundsCollected = await cards.totalFundsCollected();
    // console.log(parseInt(totalFundsCollected));
  } catch (e) {
    console.log(e);
  }
};
