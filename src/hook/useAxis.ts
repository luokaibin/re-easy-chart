import { ThemeAxis, ChartProps } from '../types';

export const useAxis = (params?: ThemeAxis, chartType?: ChartProps['chartType']) => {
  if (chartType === 'pie') {
    return undefined;
  }
  const {
    name = '',
    enable = true,
    lineColor = '#cecece',
    tickTextColor,
    gridLineEnable,
    gridLineColor = '#ececec',
    type = 'category',
    tickFontSize,
    tickLength = 5,
    tickLineColor = '#cecece',
    nameGap = 15,
    nameFontSize = 12,
    nameColor = '#b0b0b0',
    tickTextFormatter,
  } = params ?? {};
  const axis = [
    {
      type,
      nameLocation: 'center', // 坐标轴名称显示位置 中间 不可修改 和 tea-chart 尽量保持一致
      name: enable ? name : '',
      nameGap,
      axisLine: {
        // 轴线
        show: enable,
        lineStyle: {
          color: lineColor,
        },
      },
      axisTick: {
        // 刻度
        show: enable,
        length: tickLength,
        lineStyle: {
          color: tickLineColor,
        },
      },
      axisLabel: {
        show: enable,
        color: tickTextColor || nameColor,
        fontSize: tickFontSize || nameFontSize,
        formatter: tickTextFormatter,
      },
      splitLine: {
        show: gridLineEnable ?? enable,
        lineStyle: {
          color: gridLineColor,
        },
      },
      nameTextStyle: {
        fontSize: nameFontSize,
        color: nameColor,
      },
    },
  ];
  return axis;
};
