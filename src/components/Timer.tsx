import styled from 'styled-components';
import { cardNumSelector } from '../atom';
// import { useRecoilValue } from 'recoil';

const CardWrap = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: rgb(249, 170, 131);
  font-size: 50px;
`;

const Card = styled.div`
  background-color: rgb(249, 170, 131);
  color: rgb(194, 54, 22);
  height: 150px;
  width: 100px;
  border-radius: 5px;
  font-size: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.6);
`;

export default function Timer() {
  //   const [minutes, seconds] = useRecoilValue(cardNumSelector);
  return (
    <CardWrap>
      <Card>00</Card>:<Card>00</Card>
    </CardWrap>
  );
}
