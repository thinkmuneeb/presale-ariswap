import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Icon from "../assets/AB logo transparent.png";

const Page = styled.div`
  color: #fff;
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.background} !important;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner-alt {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    &.load-done {
      transition: all 0.4s;
      transform: scale(3);
      opacity: 0;
      border-color: transparent;
    }
    &:before {
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    &:after {
      border: 1px solid;
      border-top-color: #fff;
      border-right-color: transparent;
      border-left-width: 0;
      border-bottom-width: 0;
      animation: spin 1.5s linear infinite;
    }
  }

  .spinner-alt:after,
  .spinner-alt:before {
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .spinner {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 90px;
    height: 90px;
    margin: -35px 0 0 -35px;
    z-index: 1001;
  }
  .spinner-brand {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
  }
`;

const Loading = () => {
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 400);
  }, []);
  return (
    <Page>
      <div className="content">
        <span className={`spinner spinner-alt ${!pageLoading && "load-done"}`}>
          <img className="spinner-brand" src={Icon} alt="" />
        </span>
      </div>
    </Page>
  );
};

export default Loading;
