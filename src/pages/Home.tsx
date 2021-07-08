import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import COVER from "../assets/cover.jpg";
import Button from "../components/Button";

const Page = styled.div`
  color: #fff;
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.background} !important;
  min-height: 100vh;
`;

const Home = () => (
  <Page>
    <div className="container container-fluid container-sm">
      <div className="text-right py-3">
        <Button onClick={() => {}} text="Connect" /> 
      </div>
      <div className="mt-5">
        <Row>
          <Col
            md={{
              span: 6,
            }}
            xs={{
              span: 12,
            }}
          >
            <div>Left Section</div>
          </Col>
          <Col
            md={{
              span: 6,
              order: "last",
            }}
            xs={{
              span: 12,
              order: "first",
            }}
          >
            <div className="text-center">
              <img className="w-100" src={COVER} alt="" />
            </div>
          </Col>
        </Row>
        <div className="py-5">
            Bottom Section
        </div>
        <div className="py-5">
            <small>COPYRIGHT © 2021 AMERIBUCKS PRESALE.</small>
        </div>
      </div>
    </div>
  </Page>
);

export default Home;
