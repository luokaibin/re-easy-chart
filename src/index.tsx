import React, { useRef } from 'react';
import {
  useEchart,
  useSeries,
  useLegend,
  useAxis,
  useGrid,
  useTooltip,
} from './hook';
import { ChartProps } from './types';
import { colors } from './const';
export * from './types';

export const Chart: React.FC<ChartProps> = (props) => {
  const chartContainerRef = useRef(null);
  const {
    chartType,
    position,
    group = '',
    dataSource,
    height: chartHeight,
  } = props;
  const grid = useGrid(props?.theme?.padding, chartType);
  const legend = useLegend({
    group,
    dataSource,
    chartType,
    position,
    ...props?.theme?.legend,
  });
  const series = useSeries({
    position,
    lengendData: legend.data as string[],
    dataSource,
    group,
    chartType,
    smooth: props?.theme?.smooth,
    pie: props?.theme?.pie,
    connectNulls: props?.theme?.connectNulls,
    stack: props?.theme?.stack,
    labelShow: props?.theme?.labelShow,
    padding: props?.theme?.padding,
  });
  const xAxis = useAxis(props?.theme?.xAxis, chartType);
  const yAxis = useAxis(props?.theme?.yAxis, chartType);
  const tooltip = useTooltip(props?.theme?.tooltip);
  useEchart({
    chartContainerRef,
    options: { legend, series, xAxis, grid, yAxis, color: colors, tooltip, title: props.title },
    size: { height: chartHeight },
    click: props.click,
  });
  return (
    <div
      ref={chartContainerRef}
      style={{ height: chartHeight }}
    />
  );
};
