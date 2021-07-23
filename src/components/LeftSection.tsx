import React from "react";
import Title from "./Title";
import styled from "styled-components";
import InputConverter from "./InputConverter";
import MiddlePara from "./MiddlePara";
import CountdownTimer from "./CountdownTimer";

const Section = styled.div`
  max-width: 515px;
  margin-right: auto;
  @media (max-width: 991px) {
    margin-left: auto;
  }
`;

const LeftSection = () => {
  return (
    <Section>
      <Title />
      <InputConverter />
      <MiddlePara />
      <div className="py-2">
        <CountdownTimer eventDate={new Date(2021, 6, 30, 18)} />
      </div>
    </Section>
  );
};

export default LeftSection;
