#!/bin/bash
#
# Start the Ethereum custom blockchain
#
parity \
  --config /supplychainid/blockchain/SupplyChainID.toml \
  --chain=/supplychainid/blockchain/SupplyChainID.json \
  --no-hardware-wallets \
  --tx-queue-per-sender 100000 \
  --logging info --log-file /supplychainid/logs/blockchain.debug.log \
  daemon /supplychainid/blockchain/SupplyChainID.pid
