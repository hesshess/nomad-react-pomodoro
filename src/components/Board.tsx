import styled from 'styled-components';

const BoardWrap = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const BoardCard = styled.div`
  font-size: 30px;
  color: rgb(255, 255, 255, 0.9);
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Point = styled.div`
  color: rgb(249, 170, 131);
`;
const PointName = styled.div``;

export default function Board() {
  return (
    <BoardWrap>
      <BoardCard>
        <Point>0/4</Point>
        <PointName>Round</PointName>
      </BoardCard>
      <BoardCard>
        <Point>0/12</Point>
        <PointName>Goal</PointName>
      </BoardCard>
    </BoardWrap>
  );
}
