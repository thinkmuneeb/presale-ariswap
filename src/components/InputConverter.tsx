import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import Icon from "../assets/coin_usdt.png";
import IconLogo from "../assets/logo.png";
import Button from "./Button";
import {
  _approve,
  _buyTokens,
  _connectButtonWork,
  _connectButtonWorkWithoutPrompt,
  _isApproved,
  _rate,
} from "./utils";

const SecondText = styled.p`
  font-size: 1.3rem;
  font-weight: 100;
  line-height: 1.75rem;
  text-transform: uppercase !important;
  /* text-align: left !important; */
  /* max-width: 400px; */
  margin-bottom: 1.25rem;
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-fill-mode: both;
  @keyframes fadeInDown {
    from {
      transform: translate3d(0, 40px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
`;

const Converter = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .user-input {
    margin-top: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    background-color: ${({ theme }) => theme.inputBackground} !important;
    border-radius: 6px;
    @media (max-width: 991px) {
      width: 100%;
    }
  }

  input {
    background: transparent;
    color: ${({ theme }) => theme.text.primary} !important;
    border: none;
    padding: 10px 15px;
    text-align: right;
    font-size: 15px;
    width: 170px;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[name="converter"] {
    pointer-events: none;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.text.primary} !important;
    opacity: 0.7; /* Firefox */
  }

  .icon-arrow {
    margin-top: 4px;
    text-align: center;
    svg {
      font-size: 1.5em;
    }
    @media (max-width: 991px) {
      /* width: 100%; */
      display: none;
    }
  }

  .converter-input {
    margin-top: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    background-color: ${({ theme }) => theme.inputBackground} !important;
    border-radius: 6px;
    @media (max-width: 991px) {
      width: 100%;
    }
  }
  .button-container {
    .button-approve {
      width: 40%;
      @media (max-width: 1020px) {
        width: 100%;
      }
    }
    .button-swap {
      width: 25%;
      @media (max-width: 991px) {
        width: 100%;
      }
    }
  }
`;

const IconImage = styled.img`
  margin: 7px;
  height: 30px;
`;

const InputConverter = () => {
  const [num, setNum] = useState<number>(0);
  const [usdtApproved, setUsdtApproved] = useState<boolean>(false);
  const [connected, setConnected] = useState<boolean>(false);

  const onChange = (e: any) => {
    setNum(e.currentTarget.value);
  };

  const setConnectButtonText = () => {};
  const doit = async () => {
    console.log("useEffect InputConverter.tsx");
    const res = await _connectButtonWorkWithoutPrompt();
    if (res) setConnected(true); // setConnected(res)

    const approved: any = await _isApproved();
    setUsdtApproved(approved);
  };

  useEffect(() => {
    doit();
  }, []);

  return (
    <div className="mb-5">
      <SecondText>BUY ARI TOKENS WITH USDT</SecondText>
      <Converter>
        <div className="user-input">
          <IconImage src={Icon} alt="" />
          <input
            type="number"
            onChange={onChange}
            placeholder="Enter USDT Amount"
            id="quantity"
            name="quantity"
            min="0"
          />
        </div>
        <div className="icon-arrow">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>

        <div className="converter-input">
          <IconImage src={IconLogo} alt="" />
          <input
            readOnly
            type="number"
            id="quantity"
            name="converter"
            placeholder="ARI Amount"
            value={num ? num * _rate : ""}
            min="-100"
          />
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center button-container w-100">
          <div className="my-3 button-approve">
            {!connected && (
              <Button
                onClick={async () => {
                  await _connectButtonWork(setConnectButtonText);
                  setConnected(true);
                }}
                text="CONNECT"
              />
            )}
            {connected && !usdtApproved && (
              <Button
                onClick={async () => {
                  await _approve(setUsdtApproved);
                }}
                text="APPROVE PRESALE"
              />
            )}
            {connected && usdtApproved && (
              <Button
                onClick={async () => {
                  await _buyTokens(num * _rate);
                }}
                text="BUY PRESALE"
              />
            )}
          </div>
        </div>
      </Converter>
    </div>
  );
};

export default InputConverter;
