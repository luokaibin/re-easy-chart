import { useMemo } from 'react';
import { UseAxis } from '../types';

export const useSplitLine = ({ gridLineColor, grindLineWidth }: Pick<UseAxis, 'grindLineWidth'|'gridLineColor'>) => {
  const splitLine = useMemo(
    () => ({
      show: true,
      lineStyle: { color: gridLineColor, width: grindLineWidth },
    }),
    [gridLineColor, grindLineWidth],
  );
  return splitLine;
};
