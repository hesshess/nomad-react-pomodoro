import React, { useRef } from 'react';
import { durState, timeState } from '../atom';
import { useSetRecoilState } from 'recoil';

const Duration = () => {
  const setLimit = useSetRecoilState(durState);
  const setTime = useSetRecoilState(timeState);

  // input을 받으므로 HTMLInputElement의 제너릭 타입으로 설정해준다.
  const inputRef = useRef<HTMLInputElement>(null);

  // form 에서 주어지는 매개변수이므로 FormEvent의 타입으로 설정해준다.
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    const newMinutes =
      enteredText && Number(enteredText) > 0 ? Number(enteredText) : 25;
    if (newMinutes > 99) {
      alert('Maximum 99 minutes!');
      return;
    }
    setLimit(() => newMinutes * 60);
    setTime(() => newMinutes * 60);
    inputRef.current!.value = '';
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="number" ref={inputRef} placeholder={'Set your timer!'} />
      <button>minutes</button>
    </form>
  );
};

export default Duration;
