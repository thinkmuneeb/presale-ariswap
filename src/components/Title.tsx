import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-family: "Roboto", sans-serif !important;
  font-size: 1.75rem;
  line-height: 1.2;
  text-transform: uppercase !important;
  /* text-align: left !important; */
  font-weight: 550;
  /* max-width: 400px; */
  margin-bottom: 1.25rem;
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 1s;
  animation-delay: 0.4s;
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

const Title = () => {
  return (
    <StyledTitle>
      JOIN THE $68.45 BILLION
      <br />
      SOUVENIR INDUSTRY
    </StyledTitle>
  );
};

export default Title;
