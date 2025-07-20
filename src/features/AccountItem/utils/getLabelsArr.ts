import type { ILabel } from '../types';

export const getLabelsArr = (value: string): ILabel[] => {
  const arr = value
    .split(';')
    .map((str) => str.trim())
    .filter((str) => str);

  return arr.map((text) => ({ text }) as ILabel);
};
