import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useOnScreen from "../Hook/useOnScreen";

const BalanceStyle = styled.div`
  .balance {
    color: ${(props) => props.theme.text.quinary};
    text-transform: uppercase !important;
    font-size: 12px;
  }

  .value {
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

const Balance = () => {
  const [visible, setVisible] = useState(false);
  const [balance, setBalance] = useState<number>(0);

  const ref = useRef<any>();
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setVisible(isVisible);
    }
  }, [isVisible]);
  return (
    <BalanceStyle ref={ref} className={visible ? "visible-section" : ""}>
      {/* <div className='balance'>Your Balance</div>
      <div className='value'>0</div> */}
    </BalanceStyle>
  );
};

export default Balance;
