import { atom, selector } from 'recoil';

export const playState = atom({
  key: 'play',
  default: false,
});

export const msState = atom({
  key: 'ms',
  default: 1500000,
});

export const cardNumSelector = selector<number[]>({
  key: 'seconds',
  get: ({ get }) => {
    const milliseconds = get(msState);
    const allSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(allSeconds / 60);
    const seconds = minutes % 60;
    return [minutes, seconds];
  },
});

export const roundState = atom({
  key: 'round',
  default: 0,
});
