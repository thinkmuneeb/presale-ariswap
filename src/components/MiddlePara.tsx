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
`;

const MiddlePara = () => {
  return (
    <MiddleSection>
      <div className='first-para'>
        <span>
          1)PURCHASE VIA DESKTOP: USE YOUR COMPUTER OR MOBILE THAT SUPPORTS
          DESKTOP BROWSING. LAUNCH GOOGLE CHROME BROWSER. SEARCH FOR BINANCE
          SMART CHAIN extension. LINK BINANCE SMART FUND WALLET WITH BINANCE
          SMART CHAIN (ETH). CLICK ON "Connect" INPUT The Amount You Want To
          BUY. CLICK "Buy Presale". CONFIRM YOUR TRANSACTION. CHECK WALLET FOR
          TOKENS.
        </span>
        <br />
        <br />
        <span>
          2)PURCHASE VIA MOBILE: Kindly Fund Your Trust Wallet With ETH. Load
          This Buying Website Via Dapp Browser On Trust Wallet. Change Network
          To Ethereum(ETH). CLICK ON "Connect" INPUT The Amount You
          Want To BUY. CLICK "Buy Presale". CONFIRM YOUR TRANSACTION. CHECK
          WALLET FOR TOKENS.
        </span>
      </div>
      <div className='second-para'>
        <span>PRESALE IS LIVE, BUY NOW AND RECEIVE 5% TO 20% BONUS</span>
      </div>
    </MiddleSection>
  );
};

export default MiddlePara;
