import { useMemo } from 'react';
import { UseLegendProps } from '../types';
import uniq from 'lodash-es/uniq';
import { useAxisField } from './useAxisField';

export const useLegendData = ({
  group,
  dataSource,
  position,
  chartType,
}: Pick<UseLegendProps, 'group'|'dataSource'|'position'|'chartType'>) => {
  const { xAxisField } = useAxisField(position);
  const legendData = useMemo(() => {
    if (chartType === 'pie') {
      return dataSource.map(item => item[xAxisField]);
    }
    if (!group) {
      return [];
    }
    const lengendData = dataSource
      .filter(item => Boolean(item[group]))
      .map(item => item[group].toString());
    return uniq(lengendData);
  }, [group, dataSource, xAxisField, chartType]);
  return legendData;
};
