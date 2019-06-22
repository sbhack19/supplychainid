// Obviously never do this for real!


module.exports = (req, res, next) => {
  const BLOCKCHAIN = req.app.get('blockchain');

  const keys = [];
  for (let i = 0; i < 10; i += 1) {
    const account = BLOCKCHAIN.createAccount();
    delete account.account;
    keys.push(account);
  }

  return res.send(`<pre>${JSON.stringify(keys, null, 2)}</pre>`);
}
