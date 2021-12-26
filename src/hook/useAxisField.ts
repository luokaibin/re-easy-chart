import { useMemo } from 'react';

export const useAxisField = (position: string) => {
  const axisField = useMemo(() => {
    const [xAxisField, yAxisField] = position.split('*');
    return {
      xAxisField,
      yAxisField,
    };
  }, [position]);
  return axisField;
};
