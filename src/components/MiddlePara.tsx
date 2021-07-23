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
  return (
    <MiddleSection>
      <div className="first-para">
        <span>
          1)PURCHASE VIA DESKTOP: USE YOUR COMPUTER OR MOBILE THAT SUPPORTS
          DESKTOP BROWSING. LAUNCH GOOGLE CHROME BROWSER. SEARCH FOR METAMASK extension.
          CLICK ON "Connect" INPUT The Amount You Want To BUY. CLICK "Buy Presale".
          CONFIRM YOUR TRANSACTION. CHECK WALLET FOR TOKENS.
        </span>
        <br />
        <br />
        <span>
          2)PURCHASE VIA MOBILE: Kindly Fund Your METAMASK Wallet With ETH. Load
          This Buying Website Via Dapp Browser On Metamask Wallet. Change Network
          To Ethereum(ETH). CLICK ON "Connect" INPUT The Amount You Want To BUY.
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
