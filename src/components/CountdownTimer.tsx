import Countdown, { zeroPad } from "react-countdown";
import styled from "styled-components";

interface Timer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const renderTimer = ({ days, hours, minutes, seconds, completed }: Timer) => {
  if (completed) {
    return (
      <TimerContainer>
      <TimerItem>
        <span>00</span>
        <p>days</p>
      </TimerItem>
      <span className="cuot">:</span>
      <TimerItem>
        <span>00</span>
        <p>hours</p>
      </TimerItem>
        <span className="cuot">:</span>
      <TimerItem>
        <span>00</span>
        <p>minutes</p>
      </TimerItem>
      <span className="cuot">:</span>
      <TimerItem>
        <span>00</span>
        <p>seconds</p>
      </TimerItem>
    </TimerContainer>
    );
  }
  return (
    <TimerContainer>
      <TimerItem>
        <span>{zeroPad(days)}</span>
        <p>days</p>
      </TimerItem>
      <span className="cuot">:</span>
      <TimerItem>
        <span>{zeroPad(hours)}</span>
        <p>hours</p>
      </TimerItem>
        <span className="cuot">:</span>
      <TimerItem>
        <span>{zeroPad(minutes)}</span>
        <p>minutes</p>
      </TimerItem>
      <span className="cuot">:</span>
      <TimerItem>
        <span>{zeroPad(seconds)}</span>
        <p>seconds</p>
      </TimerItem>
    </TimerContainer>
  );
};

const CountdownTimer = ({
  eventDate,
}: {
  eventDate: string | Date | number;
}) => {
  return (
    <Countdown
      date={eventDate}
      renderer={({ days, hours, minutes, seconds, completed }) =>
        renderTimer({ days, hours, minutes, seconds, completed })
      }
    />
  );
};

export default CountdownTimer;

const TimerContainer = styled.div`
  margin-top: 25px;
  color: ${({ theme }) => theme.text.primary};
  /* text-align: center; */
`;

const TimerItem = styled.div`
  display: inline-block;
  text-align: center;
  margin: 0 1.5rem;
  span {
    font-size: 30px;
    font-weight: 500;
    color: #ffffff;
  }
  p {
    color: #aa9bb3;
    font-size: 15px;
    text-transform: capitalize;
  }
`;
