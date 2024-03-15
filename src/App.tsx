import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Start } from './components/Start';
import { Pause } from './components/Pause';

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
  color: rgb(236, 240, 241);
  font-size: 80px;
`;

const CardWrap = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: rgb(236, 240, 241);
  opacity: 0.7;
  font-size: 50px;
`;

const Card = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(194, 54, 22);
  height: 150px;
  width: 100px;
  border-radius: 5px;
  font-size: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Btn = styled(motion.div)`
  background-color: rgb(249, 170, 131, 0.8);
  /* color: rgb(236, 240, 241, 0.8); */
  color: rgb(194, 54, 22);
  width: 40px;
  border-radius: 100px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoardWrap = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Board = styled.div`
  font-size: 30px;
  color: rgb(255, 255, 255, 0.9);
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Point = styled.div`
  color: rgb(236, 240, 241, 0.7);
`;
const PointName = styled.div``;

export default function App() {
  return (
    <>
      <Wrapper>
        <Title>🍅Pomodoro🍅</Title>
        <p>1500000ms</p>
        <CardWrap>
          <Card>00</Card>:<Card>00</Card>
        </CardWrap>
        <Btn>
          <Start />
        </Btn>
        <BoardWrap>
          <Board>
            <Point>0/4</Point>
            <PointName>Round</PointName>
          </Board>
          <Board>
            <Point>0/4</Point>
            <PointName>Goal</PointName>
          </Board>
        </BoardWrap>
      </Wrapper>
    </>
  );
}
