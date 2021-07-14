import detectEthereumProvider from "@metamask/detect-provider";
// import Web3 from "web3";

const requiredNetwork = "Ropsten";
const requiredChainId = "0x3";

const _doThis = async (todo: any, prompt: any) => {
  const provider: any = await detectEthereumProvider();
  if (provider) {
    if (prompt || (await provider.isConnected())) {
      const acc = await provider.request({
        method: "eth_requestAccounts",
      });
      const chainId = await provider.request({
        method: "eth_chainId",
      });

      if (chainId === requiredChainId) {
        // setConnectButtonText("Connected: " + showAddress(acc[0]));
        todo(acc[0]);
        return true;
      } else {
        alert("Please switch network to " + requiredNetwork);
        return false;
      }
    } else {
      return false;
    }
  } else {
    alert("Please install MetaMask!");
    return false;
  }
};

const showAddress = (_address: any) => {
  return (
    _address.substr(0, 4) +
    "****" +
    _address.substr(_address.length - 4, _address.length)
  );
};

export const _connectButtonWork = async (setConnectButtonText: any) => {
  return await _doThis((account: any) => {
    setConnectButtonText("Connected: " + showAddress(account));
  }, true);
};

export const _connectButtonWorkWithoutPrompt = async () => {
  return await _doThis(() => {}, false);
};

export default _doThis;

// const web3 = new Web3(provider);
// const presale = new web3.eth.Contract(
//   JSON.parse(
//     '[{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"contract IERC20","name":"_usdt","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdt","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]'
//   ),
//   "0xa27fFC06B51c16FD4f34235F66F788E7a640eaff"
// );
// const rate = await presale.methods
//   .buyTokens("100")
//   .send({ from: acc[0] });
// console.log({ rate });
