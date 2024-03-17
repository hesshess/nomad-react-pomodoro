import { motion } from 'framer-motion';
import styled from 'styled-components';

const One = styled(motion.div)`
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
interface Inum {
  num: string;
}

function Card({ num }: Inum) {
  return (
    <One
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      {num}
    </One>
  );
}

export default Card;
