import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

import BG from "../assets/bg.png";
import COVER from "../assets/cover.jpg";
import PresetParticle from "../components/PresetParticle";
import Navbar from "../components/Navbar";
import LeftSection from "../components/LeftSection";
import SliderBar from "../components/SliderComponent/SliderBar";
import Balance from "../components/SliderComponent/Balance";
import TokenRatio from "../components/SliderComponent/TokenRatio";
import Footer from "../components/Footer";

const Page = styled.div`
  .content {
    padding-top: 100px;
  }
  color: #fff;
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.background} !important;
  background-attachment: fixed;
  background-image: url(${BG});
  background-repeat: repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: contain;
  min-height: 100vh;
  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    background: linear-gradient(#ffffff6e, #ffffff6e) calc(1 * 100% / 6),
      linear-gradient(#ffffff6e, #ffffff6e) calc(2 * 100% / 6),
      linear-gradient(#ffffff6e, #ffffff6e) calc(3 * 100% / 6),
      linear-gradient(#ffffff6e, #ffffff6e) calc(4 * 100% / 6),
      linear-gradient(#ffffff6e, #ffffff6e) calc(5 * 100% / 6);
    background-size: 0.1px 100%; /* Control the width here*/
    opacity: 0.1;
    background-repeat: no-repeat;
  }
  .second-row {
    margin-top: 20px;
  }
  @media (max-width: 991px) {
    text-align: center;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  margin-bottom: 15px;
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 1s;
  animation-fill-mode: both;
  @media (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 991px) {
    width: 75%;
  }
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
`;

const Home = () => {
  return (
    <Page>
      <Navbar />
      <div className="container container-fluid container-sm  pt-2">
        <div className="mt-5 content">
          <Row>
            <Col
              lg={{
                span: 6,
              }}
              md={{
                span: 12,
              }}
              xs={{
                span: 12,
              }}
            >
              <div>
                <LeftSection />
              </div>
            </Col>
            <Col
              lg={{
                span: 6,
                order: "last",
              }}
              md={{
                span: 12,
                order: "first",
              }}
              xs={{
                span: 12,
                order: "first",
              }}
            >
              <div className="text-center">
                <CoverImage src={COVER} alt="" />
              </div>
            </Col>
          </Row>

          <Row className="second-row">
            <Col
              className="mt-2"
              md={{
                span: 6,
              }}
              xs={{
                span: 12,
              }}
              style={{
                paddingRight: "10%",
              }}
            >
              <SliderBar />
            </Col>

            <Col
              className="mt-4"
              md={{
                span: 4,
              }}
              xs={{
                span: 12,
              }}
            >
              <TokenRatio />
            </Col>
            <Col
              className="mt-4"
              md={{
                span: 2,
              }}
              xs={{
                span: 12,
              }}
            >
              <Balance />
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
      <PresetParticle />
    </Page>
  );
};

export default Home;
