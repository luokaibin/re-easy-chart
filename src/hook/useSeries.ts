import { useMemo } from 'react';
import { UseSeries, ChartType } from '../types';
import { useAxisField } from './useAxisField';
import { useSeriesData } from './useSeriesData';

export const useSeries = (params?: UseSeries): any => {
  const {
    position = '',
    group,
    dataSource = [],
    lengendData,
    chartType = ChartType.LINE,
    smooth = false,
    connectNulls = true,
    stack = false,
    pie,
    // circle = false,
    labelShow = true,
    padding = {},
  } = params || {};
  const { xAxisField, yAxisField } = useAxisField(position);
  const seriesData = useSeriesData({
    xField: xAxisField,
    yField: yAxisField,
    lengendData,
    dataSource,
    group,
    chartType,
  });
  const series = useMemo(() => {
    if (chartType === ChartType.PIE) {
      return [
        {
          type: chartType,
          data: seriesData,
          radius: pie?.circle ? ['40%', '75%'] : ['0', '75%'],
          label: {
            show: labelShow,
          },
          itemStyle: pie?.circleItem,
          ...padding,
        },
      ];
    }
    const type = [ChartType.LINE, ChartType.AREA].includes(chartType) ? ChartType.LINE : chartType;
    if (lengendData?.length) {
      return lengendData?.map(lengend => ({
        name: lengend,
        type,
        data: seriesData[lengend],
        smooth: [ChartType.LINE, ChartType.AREA].includes(chartType) ? smooth : undefined,
        connectNulls: [ChartType.LINE, ChartType.AREA].includes(chartType) ? connectNulls : undefined,
        stack: ([ChartType.LINE, ChartType.PIE, ChartType.AREA].includes(chartType) && stack) ? lengend : undefined,
        areaStyle: chartType === ChartType.AREA ? {} : undefined,
        label: {
          show: labelShow,
        },
      }));
    }
    return [
      {
        type,
        data: seriesData,
        smooth,
        connectNulls,
        areaStyle: chartType === ChartType.AREA ? {} : undefined,
        label: {
          show: labelShow,
        },
      },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lengendData, seriesData]);
  return series;
};
