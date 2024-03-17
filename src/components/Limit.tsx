import React, { useRef } from 'react';
import { durState } from '../atom';
import { useSetRecoilState } from 'recoil';

const Limit = () => {
  const setLimit = useSetRecoilState(durState);
  // input을 받으므로 HTMLInputElement의 제너릭 타입으로 설정해준다.
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  // form 에서 주어지는 매개변수이므로 FormEvent의 타입으로 설정해준다.
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    setLimit(() => Number(enteredText) * 60);
    todoTextInputRef.current!.value = '';
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="number"
        ref={todoTextInputRef}
        placeholder={'Set your time!'}
      />
      <button>minutes</button>
    </form>
  );
};

export default Limit;
