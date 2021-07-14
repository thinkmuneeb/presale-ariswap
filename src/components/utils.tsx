import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

export const _rate = 0.3; // rate to buy tokens
const requiredNetwork = "Ropsten";
const requiredChainId = "0x3";
const MAX_INT =
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";

const presaleAddress = "0xa27fFC06B51c16FD4f34235F66F788E7a640eaff";
const usdtAddress = "0x5573ef0204a1391cD1c4Fd2f2062E1b264492946";
const tokenAddress = "0xDe2dA7D1128A20F55cb270604F37C2c20480ECc4";

const presaleAbi = JSON.parse(
  '[{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"contract IERC20","name":"_usdt","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdt","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]'
);
const erc20Abi = JSON.parse(
  '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
);

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

export const _isApproved = async () => {
  const provider: any = await detectEthereumProvider();

  if (provider) {
    const web3 = new Web3(provider);

    const acc = await provider.request({
      method: "eth_requestAccounts",
    });

    const usdt = new web3.eth.Contract(erc20Abi, usdtAddress);

    const allowed = await usdt.methods.allowance(acc[0], presaleAddress).call();
    return 100 < Number(web3.utils.fromWei(allowed));
  }
};

export const _approve = async (setValue: any) => {
  console.log("him");

  const provider: any = await detectEthereumProvider();

  if (provider) {
    console.log("himaa");
    const web3 = new Web3(provider);

    const acc = await provider.request({
      method: "eth_requestAccounts",
    });

    const usdt = new web3.eth.Contract(erc20Abi, usdtAddress);
    console.log("himmm");

    try {
      await usdt.methods
        .approve(presaleAddress, MAX_INT)
        .send({ from: acc[0] })
        .on("confirmation", (i: any) => {
          if (i === 0) setValue(true);
        });
    } catch (e) {
      console.log("him" + e);
    }
  }
};

export const _buyTokens = async (tokensAmount: any) => {
  console.log("him");

  const provider: any = await detectEthereumProvider();

  if (provider) {
    console.log("himaa");
    const web3 = new Web3(provider);

    const acc = await provider.request({
      method: "eth_requestAccounts",
    });

    const presale = new web3.eth.Contract(presaleAbi, presaleAddress);
    try {
      await presale.methods
        .buyTokens(web3.utils.toWei("" + tokensAmount))
        .send({ from: acc[0] })
        .on("confirmation", (i: any) => {
          if (i === 0) alert("Tokens Bought!");
        });
    } catch (e) {
      console.log("him" + e);
    }
  }
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

// const presale = new web3.eth.Contract(
//   JSON.parse(
//     '[{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"contract IERC20","name":"_usdt","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokens","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdt","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]'
//   ),
//   presaleAddress
// );

// const token = new web3.eth.Contract(
//   JSON.parse(
//     '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
//   ),
//   "0x79577596812375f95c4e5fd727f7efb37bef6282"
// );

// const allowed = await token.methods.symbol().call(); // todo check without {from} in .call()
// console.log(allowed);

// const res = await token.methods
//   .approve(presaleAddress, MAX_INT)
//   .send({ from: acc[0] });

// const rate = await presale.methods.buyTokens("100").send({ from: acc[0] });
// console.log({ rate });