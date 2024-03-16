import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Start } from './components/Start';
import { Pause } from './components/Pause';
import Board from './components/Board';
import Timer from './components/Timer';
import { useRecoilState } from 'recoil';
import { msState, playState } from './atom';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(227, 65, 12);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: rgb(255, 255, 255);
  font-size: 80px;
  text-shadow: 1px 1px 2px rgb(249, 170, 131);
`;

const Btn = styled(motion.div)`
  background-color: rgb(249, 170, 131, 0.8);
  color: rgb(46, 106, 34, 0.8);
  width: 30px;
  border-radius: 100px;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.6);
`;

export default function App() {
  const [isplay, setIsplay] = useRecoilState(playState);
  const [ms, setMs] = useRecoilState(msState);
  //   const [round, setRound] = useRecoilState(roundState);

  const onClick = () => {
    console.log('before : ', isplay);
    setIsplay((p) => !p);
    console.log('after : ', isplay);
  };
  function minusOneSec() {
    setMs((prevMs) => prevMs - 1000);
  }
  //   let intervalId;
  //   if (isplay) {
  //     intervalId = setInterval(minusOneSec, 1000);
  //   } else {
  //     clearInterval(intervalId);
  //   }
  console.log('beforereder : ', isplay);
  return (
    <>
      <Wrapper>
        <Title>Pomodoro🍅</Title>
        <p></p>
        <Timer></Timer>
        <Btn
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={onClick}
        >
          {isplay ? <Pause /> : <Start />}
        </Btn>
        <Board></Board>
      </Wrapper>
    </>
  );
}
