import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useOnScreen from "../Hook/useOnScreen";

const Token = styled.div`
  .token-ratio {
    color: ${(props) => props.theme.text.quinary};
    text-transform: uppercase !important;
    font-size: 12px;
  }

  .converter {
    font-size: 1.87rem;
    color: ${(props) => props.theme.text.primary};
  }

  &.visible-section {
    animation-name: fadeInUp;
    animation-duration: 1s;
    animation-delay: 0.4s;
    animation-fill-mode: both;
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
  }
`;

const TokenRatio = () => {
  const [visible, setVisible] = useState(false);

  const ref = useRef<any>();
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setVisible(isVisible);
      console.log(isVisible);
    }
  }, [isVisible]);
  return (
    <Token ref={ref} className={visible ? "visible-section" : ""}>
      <div className='token-ratio'>Token Ratio</div>
      <div className='converter'>1 BNB = 10,000 ARI</div>
    </Token>
  );
};

export default TokenRatio;
