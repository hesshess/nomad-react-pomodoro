import { atom, selector } from 'recoil';

export const durState = atom({
  key: 'duration',
  default: 1500,
});

export const playState = atom({
  key: 'play',
  default: false,
});

export const timeState = atom({
  key: 'time',
  default: 0,
});

export const timeSelector = selector<string[]>({
  key: 'timeSel',
  get: ({ get }) => {
    const allSeconds = get(durState) - get(timeState);
    const minutes = Math.floor(allSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (allSeconds % 60).toString().padStart(2, '0');
    return [minutes, seconds];
  },
});

export const roundState = atom({
  key: 'round',
  default: Number(localStorage.getItem('rounds')),
});

export const roundSelector = selector<number[]>({
  key: 'rndSel',
  get: ({ get }) => {
    const allRnds = get(roundState);
    localStorage.setItem('rounds', allRnds + '');
    const goals = Math.floor(allRnds / 4);
    const rounds = allRnds % 4;
    return [rounds, goals];
  },
});
