const bip39 = require('bip39');
const hdkey = require('hdkey');
const Web3 = require('web3');
const _ = require('underscore');

// Ethereum based HD key derivation path
const HDPATH_ROOT = "m/44'/60'/0'/0/0";


class Blockchain {
  constructor() {
    this.web3 = new Web3('ws://18.194.33.239:8546');
  }

  createAccount(optMnemonic) {
    const mnemonic = optMnemonic || bip39.generateMnemonic();
    const hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeedSync(mnemonic));
    const key = hdwallet.derive(HDPATH_ROOT);
    const account = this.web3.eth.accounts.privateKeyToAccount(key.privateKey);
    return {
      account: account,
      address: account.address,
      mnemonic,
      private: key.privateKey.toString('hex'),
      public: key.publicKey.toString('hex'),
    };
  }


  getBalance(address) {
    return this.web3.eth.getBalance(address);
  }


  async getTransactions(page = 1) {
    const blocksPerPage = 50;
    const chainHeight = await this.web3.eth.getBlockNumber();

    const offset = (page - 1) * blocksPerPage;
    const pages = Math.ceil(chainHeight / blocksPerPage);

    const start = Math.max(0, chainHeight - offset);
    const end = Math.max(0, start - blocksPerPage);

    return Promise.all(
      _.range(start, end, -1)
        .map(height => this.web3.eth
          .getBlock(height, true)
          .then(blockObj => (blockObj.transactions))),
    ).then(transactions => [].concat(...transactions))
    .then(transactions => transactions.map(this.parseTransaction_.bind(this)));
  }


  parseTransaction_(txnObj) {
    let payload = {};
    if (txnObj.input) {
      try {
        let json = Buffer.from(txnObj.input.slice(2), 'hex').toString('utf8');
        payload = JSON.parse(json);
      } catch(e) {
        console.log('Failed to parse input to JSON', e);
      }
    }

    return {
      blockNumber: txnObj.blockNumber,
      blockHash: txnObj.blockHash,
      from: txnObj.from,
      gas: txnObj.gas,
      payload,
      transactionHash: txnObj.hash,
      value: this.web3.utils.fromWei(txnObj.value, 'ether'),
    };
  }


  async recordData(account, payload) {
    const data = Buffer.from(JSON.stringify(payload), 'utf8').toString('hex');
    const txn = {
      // Use the burn address for now to record data with no value transfered
      to: '0x0000000000000000000000000000000000000000',
      value: '0',
      data: `0x${data}`,
    };

    const gas = await this.web3.eth.estimateGas(txn);
    txn.gas = gas + 100000;

    const signedTransaction = await this.web3.eth.accounts.signTransaction(
      txn,
      account.privateKey.toString('hex'),
    );

    const { rawTransaction } = signedTransaction;
    const receipt = await this.web3.eth.sendSignedTransaction(rawTransaction);

    return {
      blockNumber: receipt.blockNumber,
      blockHash: receipt.blockHash,
      transactionHash: receipt.transactionHash,
      gasUsed: receipt.gasUsed,
    };
  }
}


module.exports = Blockchain;
