import { useMemo } from 'react';
import { UseAxis } from '../types';
export const useAxisLabel = ({ labelColor, labelFontSize }: Pick<UseAxis, 'labelColor'|'labelFontSize'>) => {
  const axisLabel = useMemo(
    () => ({ show: true, color: labelColor, fontSize: labelFontSize }),
    [labelColor, labelFontSize],
  );
  return axisLabel;
};
