module.exports = async (req, res, next) => {
  const BLOCKCHAIN = req.app.get('blockchain');

  BLOCKCHAIN
    .getTransactions()
    .then(response => res.json(response))
    .catch((error) => {
      console.log('Fetching transactions failed', error);
      return res.status(500).json({ error: 'Fetching transactions failed', e: error });
    });
}
