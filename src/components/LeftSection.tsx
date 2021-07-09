import React from "react";
import Title from "./Title";
import styled from "styled-components";
import InputConverter from "./InputConverter";
import MiddlePara from "./MiddlePara";
import CountdownTimer from "./CountdownTimer";

const Section = styled.div`
  max-width: 515px;
  margin-left: auto;
  margin-right: auto;
`;

const LeftSection = () => {
  return (
    <Section>
      <Title />
      <InputConverter />
      <MiddlePara />
      <div className="py-2"> 
        <CountdownTimer eventDate={Date.now() + 500000000} />
      </div>
    </Section>
  );
};

export default LeftSection;
