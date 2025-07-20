import type { ILabel } from '../types';

export const getLabelStr = (labels: ILabel[]): string => {
  return labels.map((l) => l.text).join('; ');
};
