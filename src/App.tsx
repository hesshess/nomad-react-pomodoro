import styled from 'styled-components';
import Board from './components/Board';
import Timer from './components/Timer';
import Btn from './components/Btn';
import Duration from './components/Duration';

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

export default function App() {
  return (
    <>
      <Wrapper>
        <Title>Pomodoro🍅</Title>
        <Duration></Duration>
        <Timer></Timer>
        <Btn />
        <Board></Board>
      </Wrapper>
    </>
  );
}
