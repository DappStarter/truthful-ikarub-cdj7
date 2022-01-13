require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remember coin gesture neck flat gather'; 
let testAccounts = [
"0x27838db96b139ef5ddd0cccf1281a3c140b9671f0a7d05817481edb7bef33b41",
"0x39dd42f7804c3167d18433fc63b340b907d87fb2dae0d2e41c2287ac5a552618",
"0xb4580a3727b574d2d1264b1dba13e875430c60db0ed98088c1b3d4f1d3211498",
"0xa6d134f62e1f8ed97307963dcd6fadcf3f15ca205491fb10c89d05dde03e0e40",
"0x82bb5bb39f8f0d932596f73c807f06e376c74461f2cb4d1a3362be70728bcba1",
"0x753322069bd7867da33e19505bfcccd50d5f670da70530abfe221a13981b1184",
"0x082b840b44f0b95b96625c128d7085b54691235b5987746ceb41296854ab295a",
"0xc5b090fc9fe9d8f1d49abea2ae79939115004add82676a7f0d70574574f9f038",
"0xc84eba16703876057941945554c68aaa614f40279a165a03ff37e47d7ce24cab",
"0x5fbed05a7b0040cf3a47fef9e54fbb535bbb97955757a8cdeaf03ea193114dae"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


