import React from "react";
import styled from "styled-components";

const MiddleSection = styled.div`
  max-width: 450px;
  .first-para {
    font-size: 12px;
    color: ${(props) => props.theme.text.secondary};
  }

  .second-para {
    color: ${(props) => props.theme.text.tertiary};
    margin-top: 24px;
    font-weight: bold;
    font-size: 20px;
  }
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const MiddlePara = () => {
  const link = "https://pancakeswap.finance/swap?outputCurrency=0x55d398326f99059ff775485246999027b3197955";
  return (
    <MiddleSection>
      <div className="first-para">
        <span>
          1)PURCHASE VIA DESKTOP: USE YOUR COMPUTER OR MOBILE THAT SUPPORTS
          DESKTOP BROWSING. LAUNCH GOOGLE CHROME BROWSER. SEARCH FOR METAMASK extension.
          <a href={link}> Visit PancakeSwap to connect to BSC Mainnet and get some USDT </a>
          CLICK ON "CONNECT" INPUT The Amount You Want To BUY. CLICK "BUY PRESALE".
          CONFIRM YOUR TRANSACTION. CHECK WALLET FOR TOKENS.
        </span>
        <br />
        <br />
        <span>
          2)PURCHASE VIA MOBILE: Kindly Fund Your METAMASK Wallet With BNB.
          Open app  Metamask Wallet and
          <a href={link}> Visit PancakeSwap to connect to BSC Mainnet and get some USDT </a>
          Now load this Buying Website Via Browser in Metamask Wallet.
          To Binance Smart Chain Mainnet (BSC Mainnet). CLICK ON "Connect" INPUT The Amount You Want To BUY.
          CLICK "Buy Presale". CONFIRM YOUR TRANSACTION. CHECK WALLET FOR
          TOKENS.
        </span>
      </div>
      <div className="second-para">
        <span>PRESALE IS LIVE, BUY NOW AND RECEIVE 5% TO 20% BONUS</span>
      </div>
    </MiddleSection>
  );
};

export default MiddlePara;
