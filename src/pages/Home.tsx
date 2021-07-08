import React from "react";
import { Col, Row } from "react-bootstrap";
import COVER from "../assets/cover.jpg";
import Button from "../components/Button";

const Home = () => (
  <div>
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
      </div>
    </div>
  </div>
);

export default Home;
