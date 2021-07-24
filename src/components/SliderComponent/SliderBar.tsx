import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "../Hook/useOnScreen";
import Web3 from "web3";
import { presaleAbi, presaleAddress, web3Provider } from "../utils";
import { truncNum2 } from "../InputConverter";

const fromWei = Web3.utils.fromWei;
const SliderDesign = styled.div`
  .label {
    font-size: 12px;
    color: ${(props) => props.theme.text.quaternary};
  }
  .digit {
    color: ${(props) => props.theme.text.primary};
    font-size: 14px;
    text-transform: capitalize;
    font-weight: 500;
  }
  .slide-style {
    .rc-slider-rail {
      background-color: rgba(22, 163, 254, 0.2);
      height: 6px;
    }
    .rc-slider-track {
      background-color: rgba(22, 163, 254, 0.2);
      height: 4px;
    }
    .rc-slider-handle {
      width: 18px;
      height: 18px;
      border: 2px solid #007bff;
      background-color: #007bff;
      :focus {
        border: none;
      }
    }
    .rc-slider-disabled {
      background-color: transparent;
    }
  }

  &.visible-section {
    animation-name: fadeInUp;
    animation-duration: 1s;
    animation-delay: 0.3s;
    animation-fill-mode: both;
    @keyframes fadeInUp {
      from {
        transform: translate3d(0, 40px, 0);
        opacity: 0;
      }
      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }
  }
`;

const SliderBar = () => {
  const [visible, setVisible] = useState(false);
  const [tokensSold, setTokensSold] = useState<number>(-1);

  const ref = useRef<any>();
  const isVisible = useOnScreen(ref);

  const seeTokensSold = async () => {
    const web3 = new Web3(web3Provider);
    
    // const web3 = new Web3(provider);
    const presale = new web3.eth.Contract(presaleAbi, presaleAddress);
    const tokensSold = fromWei(
      (await presale.methods.tokensSold().call()).toString()
    );
    setTokensSold(Number(tokensSold));
    console.log("Number(tokensSold): ", Number(tokensSold));
    console.log("tokensSold: ", tokensSold);
  };
  useEffect(() => {
    seeTokensSold();
  }, []);
  useEffect(() => {
    if (isVisible) {
      setVisible(isVisible);
    }
  }, [isVisible]);

  return (
    <SliderDesign ref={ref} className={visible ? "visible-section" : ""}>
      <div className="d-flex justify-content-between">
        <div className="sold">
          {/* https://mainnet.infura.io/v3/a30ce8978acb4d7da82e6d7e6b71afb7
           */}
          <span className="label">Sold -</span>{" "}
          <span className="digit">
            {tokensSold === -1 ? "Loading..." : truncNum2(tokensSold)} Tokens
          </span>
        </div>

        <div className="target">
          <span className="label">TARGET -</span>{" "}
          <span className="digit">20,000,000 Tokens</span>
        </div>
      </div>{" "}
      <div className="slide-style pt-5">
        <Slider
          min={0}
          max={10}
          defaultValue={tokensSold === -1 ? 0 : tokensSold}
          // defaultValue={1.33111}
          disabled
        />
      </div>
    </SliderDesign>
  );
};

export default SliderBar;
