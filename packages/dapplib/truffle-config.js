require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remind erosion grace fashion force security'; 
let testAccounts = [
"0xd2fc0dc798479dd3e9b98b345919ca5213162050cda5a2983500994f101e2fb8",
"0xeb0223217caa7a5d0a21dc763a24b972fe54bc24eda52b297cb1e3014c7885bc",
"0xb95817a41582361a7a78553d78a9bf6a64839512875ccf668b1e953fe8257d48",
"0xf08539fc0ba5b8d3c9be7ab32ed931745d42f289fb49c37beefb9806db772611",
"0x0535b2773cdc298d94a42613406d388593f287d926882131a1f73cb30f4b291b",
"0xb29fcb2a5ea1cef86d7864f0c7c317b2858b92251852bbddb7baed8b4e075706",
"0xb35158a9332cbb05299eec04b931e9e16773eb6dc74fdade87e69818aafd0d04",
"0x5814c5205a787f6cdbfabefac0812c05fa0d7b4c7dff44fcdfd4948e88bcb8d8",
"0x1a13e6374427fa60486a62adb7a04fe0dfde3a4ccd24382cdc39c015172ade0d",
"0x4ce8c4260d7f82b05a9eff569e1d41f892bdfbb0688f90f6ef2cfbb2f9a99c4b"
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


