import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "../Hook/useOnScreen";

const SliderDesign = styled.div`
  .label {
    font-size: 12px;
    color: ${(props) => props.theme.text.quaternary};
  }
  .digit {
    color: ${(props) => props.theme.text.primary};
    font-size: 14px;
    text-transform: capitalize;
    font-weight: 500;
  }
  .slide-style {
    .rc-slider-rail {
      background-color: rgba(22, 163, 254, 0.2);
      height: 6px;
    }
    .rc-slider-track {
      background-color: rgba(22, 163, 254, 0.2);
      height: 4px;
    }
    .rc-slider-handle {
      width: 18px;
      height: 18px;
      border: 2px solid #007bff;
      background-color: #007bff;
      :focus {
        border: none;
      }
    }
    .rc-slider-disabled {
      background-color: transparent;
    }
  }

  &.visible-section {
    animation-name: fadeInUp;
    animation-duration: 1s;
    animation-delay: 0.3s;
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

const SliderBar = () => {
  const minValue = 667340.4889025;
  const maxValue = 20000000;
  const [visible, setVisible] = useState(false);

  const ref = useRef<any>();
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    
  }, []);
  useEffect(() => {
    if (isVisible) {
      setVisible(isVisible);
    }
  }, [isVisible]);

  return (
    <SliderDesign ref={ref} className={visible ? "visible-section" : ""}>
      <div className="d-flex justify-content-between">
        <div className="sold">
          {/* https://mainnet.infura.io/v3/a30ce8978acb4d7da82e6d7e6b71afb7
           */}
          <span className="label">Sold -</span>{" "}
          <span className="digit">667340.4889025 Tokens</span>
        </div>

        <div className="target">
          <span className="label">TARGET -</span>{" "}
          <span className="digit">20,000,000 Tokens</span>
        </div>
      </div>{" "}
      <div className="slide-style pt-5">
        <Slider min={0} max={maxValue} defaultValue={minValue} disabled />
      </div>
    </SliderDesign>
  );
};

export default SliderBar;
