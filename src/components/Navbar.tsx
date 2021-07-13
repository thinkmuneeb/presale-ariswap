import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Button from "../components/Button";
import Icon from "../assets/logo.png";
import ConnectModal from "./Modal/ConnectModal";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

const requiredNetwork = "Ropsten";
const requiredChainId = "0x3";

const Nav = styled.div`
  z-index: 3;
  padding: 15px 0;
  transition-duration: 0.4s;
  &.sticky {
    background-color: ${({ theme }) => theme.darkNav} !important;
    transition-duration: 0.5s;
    position: fixed;
    top: 0;
    width: 100%;
  }
  .nav-inside {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const IconImage = styled.img`
  width: 50px;
  height: auto;
  opacity: 0;
  animation-name: fadeInDown;
  animation-duration: 1s;
  /* animation-delay: 0.6s; */
  animation-fill-mode: both;
  @keyframes fadeInDown {
    from {
      transform: translate3d(0, -40px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
`;

const Navbar = () => {
  const [modalShow, setModalShow] = useState(false);
  const [height, setHeight] = useState(0);
  const [connectButtonText, setConnectButtonText] = useState("Connect");

  const showAddress = (_address: any) => {
    return (
      _address.substr(0, 4) +
      "****" +
      _address.substr(_address.length - 4, _address.length)
    );
  };
  const handleScroll = (e: any) => {
    setHeight(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <Nav className={height > 0 ? "sticky" : ""}>
      <div className="nav-inside container container-fluid container-sm">
        <a href="./" className="text-left">
          <IconImage src={Icon} alt="" />
        </a>

        <div className="text-right">
          <Button
            onClick={async () => {
              // setModalShow(true);

              const provider: any = await detectEthereumProvider();
              if (provider) {
                const acc = await provider.request({
                  method: "eth_requestAccounts",
                });
                const chainId = await provider.request({
                  method: "eth_chainId",
                });

                if (chainId === requiredChainId) {
                  setConnectButtonText("Connected: " + showAddress(acc[0]));
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
                } else {
                  alert("Please switch network to " + requiredNetwork);
                }
              } else {
                alert("Please install MetaMask!");
              }
            }}
            text={connectButtonText}
          />
        </div>
      </div>

      <ConnectModal show={modalShow} onHide={() => setModalShow(false)} />
    </Nav>
  );
};
export default Navbar;
