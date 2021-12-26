import { useRef, useEffect } from 'react';
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  LegendComponent,
  GridComponent,
  TitleComponent,
} from 'echarts/components';
import { PieChart, LineChart, BarChart, ScatterChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TooltipComponent,
  LegendComponent,
  GridComponent,
  TitleComponent,
  PieChart,
  LineChart,
  BarChart,
  ScatterChart,
  CanvasRenderer,
]);

export type SizeProps = Partial<{
  width: number;
  height: number;
}>;

export const useEchart = ({
  chartContainerRef,
  options,
  size,
  click
}: {
  chartContainerRef: any;
  options: object;
  size?: SizeProps;
  click?: Function;
}) => {
  const echartRef = useRef<any>(null);

  useEffect(() => {
    if (chartContainerRef?.current) {
      // 避免重复初始化
      echartRef.current = !echartRef?.current
        ? echarts.init(chartContainerRef.current)
        : echartRef.current;
      echartRef.current.setOption({ ...options });
    }
    if (click) {
      echartRef.current.on('click', click);
    }
    return () => {
      echartRef?.current?.clear();
    };
  }, [chartContainerRef, options]);

  useEffect(() => {
    if (size && echartRef?.current) {
      echartRef?.current.resize({
        height: size?.height ?? 'auto',
        width: size?.width ?? 'auto',
      });
    }
  }, [size]);
};
