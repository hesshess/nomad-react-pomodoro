import { useRecoilState } from 'recoil';
import { playState } from '../atom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Pause } from './Pause';
import { Start } from './Start';

const CircleBtn = styled(motion.div)`
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

function Btn() {
  const [isPlay, setIsPlay] = useRecoilState(playState);

  const onClick = () => {
    setIsPlay((curr) => !curr);
  };

  return (
    <CircleBtn
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      onClick={onClick}
    >
      {isPlay ? <Pause /> : <Start />}
    </CircleBtn>
  );
}
export default Btn;
