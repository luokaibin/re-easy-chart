import { useMemo } from 'react';
import { Theme, ChartProps, ChartType } from '../types';

export const useGrid = (params?: Theme['padding'], chartType?: ChartProps['chartType']) => {
  const { top = 20, left = 30, right = 10, bottom = 30 } = params ?? {};
  const grid = useMemo(
    () => {
      if (chartType === ChartType.PIE) {
        return undefined;
      }
      return {
        top,
        left,
        right,
        bottom,
      };
    },
    [chartType, top, left, right, bottom],
  );
  return grid;
};
