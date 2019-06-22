module.exports = async (req, res, next) => {
  const BLOCKCHAIN = req.app.get('blockchain');

  BLOCKCHAIN
    .getBalance(req.params.address)
    .then((balance) => {
      const results = {
        balance,
      };
      return res.json(results);
    });
}
