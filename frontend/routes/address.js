module.exports = (req, res, next) => {
  const WEB3 = req.app.get('web3');
  const address = req.params.address;

  WEB3.eth.getBalance(
    address,
    (error, balance) => {
      const results = {
        balance,
      };
      return res.json(results);
    });
}
