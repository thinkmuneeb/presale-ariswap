import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${(props) => props.theme.button.background};
  color: ${(props) => props.theme.button.text};
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.1em;
  padding: 0.75rem 1.8rem;
  border-radius: 8px;
  min-width: 140px;
  max-width: 100%;
  border-style: none;
  text-align: center;
  white-space: nowrap;
  display: inline-flex;
  justify-content: center;
  text-transform: uppercase;
  align-items: center;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  animation: 0.55s ease-out 0s 1 bgLoad;
  @keyframes bgLoad {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  &:hover {
    color: #fff;
  }
`;

interface IButton {
  text: String;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text = "", onClick }: IButton) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
