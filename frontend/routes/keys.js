// Obviously never do this for real
const bip39 = require('bip39');
const hdkey = require('hdkey');

// Ethereum based HD key derivation path
const HDPATH_ROOT = "m/44'/60'/0'/0/0";


module.exports = (req, res, next) => {

  const WEB3 = req.app.get('web3');

  const keys = [];
  for (let i = 0; i < 10; i += 1) {
    const mnemonic = bip39.generateMnemonic();
    const hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeedSync(mnemonic));
    const key = hdwallet.derive(HDPATH_ROOT);
    const account = WEB3.eth.accounts.privateKeyToAccount(key.privateKey);

    keys.push({
      address: account.address,
      mnemonic,
      private: key.privateKey.toString('hex'),
      public: key.publicKey.toString('hex'),
    });
  }

  return res.send(`<pre>${JSON.stringify(keys, null, 2)}</pre>`);
}
