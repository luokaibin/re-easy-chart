import { useMemo } from 'react';
import { ChartType, LegendIcon, UseLegendProps } from '../types';
import { useLegendData } from './useLegendData';

export const useLegend = (params?: UseLegendProps) => {
  const {
    group = '',
    dataSource = [],
    enable = false,
    fontSize,
    color,
    chartType = ChartType.LINE,
    position = '',
    itemHeight = 14,
    icon = LegendIcon.ROUNDRECT
  } = params ?? {};
  const data = useLegendData({ group, dataSource, position, chartType });
  return useMemo(
    () => ({
      type: 'scroll',
      bottom: 0,
      data,
      show: enable, // 是否显示图例
      icon, // 长方形图例 icon
      itemHeight,
      textStyle: {
        color, // 图例文字颜色
        fontSize, // 图例文字大小
      },
      formatter: (label: string) => {
        if (label?.length > 30) {
          const reg = /(.{12}).*(.{12})/;
          return label.replace(reg, '$1......$2');
        }
        return label;
      },
      tooltip: {
        show: true,
      },
    }),
    [data, enable, itemHeight, color, fontSize],
  );
};
