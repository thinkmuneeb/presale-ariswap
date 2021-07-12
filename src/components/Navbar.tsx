import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Button from "../components/Button";
import Icon from "../assets/logo.png";
import ConnectModal from "./Modal/ConnectModal";
import detectEthereumProvider from "@metamask/detect-provider";

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
                console.log("Ethereum successfully detected!");

                // From now on, this should always be true:
                // provider === window.ethereum

                // Access the decentralized web!

                const acc = await provider.request({
                  method: "eth_requestAccounts",
                });

                // Legacy providers may only have ethereum.sendAsync
                const chainId = await provider.request({
                  method: "eth_chainId",
                });
                console.log({ acc, chainId });
              } else {
                // if the provider is not detected, detectEthereumProvider resolves to null
                console.error("Please install MetaMask!");
              }
            }}
            text="Connect"
          />
        </div>
      </div>

      <ConnectModal show={modalShow} onHide={() => setModalShow(false)} />
    </Nav>
  );
};
export default Navbar;
