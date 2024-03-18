import styled from 'styled-components';

import Card from './Card';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  durState,
  playState,
  roundState,
  timeSelector,
  timeState,
} from '../atom';
import { useEffect } from 'react';

const CardWrap = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  color: rgb(249, 170, 131);
  font-size: 50px;
`;

function Timer() {
  const [min, sec] = useRecoilValue(timeSelector);
  const duration = useRecoilValue(durState);
  const [isPlay, setIsPlay] = useRecoilState(playState);
  const [time, setTime] = useRecoilState(timeState);
  const setRnd = useSetRecoilState(roundState);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    if (!isPlay) {
      clearInterval(timer);
    }
    if (time >= duration) {
      clearInterval(timer);
      setIsPlay((curr) => false);
      setTime(0);
      setRnd((curr) => curr + 1);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isPlay, setTime, time, duration, setIsPlay, setRnd]);

  return (
    <>
      <CardWrap>
        <Card num={min} key={'min' + min} />
        &nbsp; : &nbsp;
        <Card num={sec} key={'sec' + sec} />
      </CardWrap>
    </>
  );
}

export default Timer;
