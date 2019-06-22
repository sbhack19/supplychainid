module.exports = async (req, res, next) => {
  const BLOCKCHAIN = req.app.get('blockchain');
  const { mnemonic, payload } = req.body;

  if (!mnemonic || mnemonic.split(' ').length !== 12) {
    return res.status(400).json({ error: 'Invalid mnemonic'});
  }

  if (!payload) {
    return res.status(400).json({ error: 'Missing event payload'});
  }

  const account = BLOCKCHAIN.createAccount(mnemonic);

  BLOCKCHAIN
    .recordData(account.account, payload)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      console.log('Error saving event data', error);
      return res.status(500).json({ error: 'Recording event data failed', e: error });
    });
}
