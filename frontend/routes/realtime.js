module.exports = async (req, res, next) => {
  const BLOCKCHAIN = req.app.get('blockchain');

  BLOCKCHAIN
    .getTransactions()
    .then((response) => {
      let results = response.map((tx) => {
        tx.payload = JSON.stringify(tx.payload, null, 2);
        return tx;
      });
      res.render('realtime', {
        transactions: results,
      });
    })
    .catch((error) => {
      console.log('Fetching transactions failed', error);
      return res.status(500).json({ error: 'Fetching transactions failed', e: error });
    });
}
