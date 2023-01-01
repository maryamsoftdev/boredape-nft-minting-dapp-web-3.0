const config = {
  title: 'BoredApe Dapp',
  description: 'A showcase dapp which is built for you to create your own',
//   contractAddress: '0x0312e42e4b55823a3C41769DC0B07F382dECc247',
//   maxMintAmount: 10,
//   presaleMaxMintAmount: 3,
//   price: 0.01
}
const onboardOptions = {
   dappId: 'cea1a743-6361-4e26-9ac9-d963253b9d96',
   networkId: 4, //rinkeby
   walletSelect:{
   wallets:[
     { walletName: "metamask", preferred: true },
     { walletName: "coinbase", preferred: true },
     { walletName: "walletLink", preferred: true, rpcUrl: RPC_URL, appName:'BoredApe Dapp', },
     { walletName: "trust", preferred: true, rpcUrl: RPC_URL },
     { walletName: "authereum" },
     {
    walletName: 'trezor',
    appUrl: APP_URL,
    email: CONTACT_EMAIL,
    rpcUrl: RPC_URL
  },
  {
    walletName: 'ledger',
    rpcUrl: RPC_URL
  },
  {
    walletName: 'lattice',
    rpcUrl: RPC_URL,
    appName: APP_NAME
  },
  {
    walletName: 'keepkey',
    rpcUrl: RPC_URL
  },
  {
    walletName: 'mewwallet',
    rpcUrl: RPC_URL
  },
  { 
    walletName: 'cobovault',
    rpcUrl: RPC_URL,
    appName: APP_NAME,
  },
  { 
    walletName: 'keystone',
    rpcUrl: RPC_URL,
    appName: APP_NAME,
  },
  {
    walletName: "fortmatic",
    apiKey: FORTMATIC_KEY,
    preferred: true
  },


]
}

export { config }