import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Button from "../components/Button";
import { _connectButtonWork } from "../components/utils";
import Icon from "../assets/logo.png";
import ConnectModal from "./Modal/ConnectModal";

const Nav = styled.div`
  z-index: 3;
  padding: 15px 0;
  position: fixed;
  transition-duration: 0.4s;
  position: fixed;
  top: 0;
  width: 100%;
  &.sticky {
    background-color: ${({ theme }) => theme.darkNav} !important;
    transition-duration: 0.5s;
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

  const handleScroll = (e: any) => {
    setHeight(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <Nav className={height > 45 ? "sticky" : ""}>
      <div className="nav-inside container container-fluid container-sm">
        <a href="./" className="text-left">
          <IconImage src={Icon} alt="" />
        </a>

        <div className="text-right">
          <Button
            onClick={async () => {
              _connectButtonWork(setConnectButtonText);
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
