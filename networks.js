var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('3ac42c2f'),
  addressVersion: 0x37,
  privKeyVersion: 153,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('722289f938fdc4fe5f1940a4b5b0528210b2f3dae28740778d35016aae8c0000'),
    merkle_root: hex('f8d91b2c93bd7222515770b67f20d3380edf8292548daeb3b0ce82fd5'),
    height: 0,
    nonce: 663024,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1457184666,
    bits: 504365040,
  },
  dnsSeeds: [
    'seed.kekdaq.com',
    'seed.pepecoin.co'
  ],
  defaultClientPort: 29377
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('fcc1b7dc'),
  addressVersion: 0x71,
  privKeyVersion: 241,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('9E555073D0C4F36456DB8951F449704D544D2826D9AA60636B40374626780ABB'),
    merkle_root: hex('696AD20E2DD4365C7459B4A4A5AF743D5E92C6DA3229E6532CD605F6533F2A5B'),
    height: 0,
    nonce: 997879,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1391503289,
    bits: 504365040,
  },
  dnsSeeds: [
    'testdoge-seed.lionservers.de',
    'testdoge-seed-static.lionservers.de'
  ],
  defaultClientPort: 44556
};
