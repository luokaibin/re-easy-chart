import { ThemeTooltip } from "../types";

export const useTooltip = (params?: ThemeTooltip) => {
  const { trigger = "item", formatter, axisPointerType = "line" } = params || {};
  return {
    show: true, // 是否显示提示框组件，包括提示框浮层和 axisPointer。 显示 和 tea-chart 尽量保持一致
    trigger,
    borderColor: "rgba(0,0,0,0)", // 边框色
    axisPointer: {
      type: axisPointerType, // 鼠标移到图上的样式
    },
    shadowStyle: {
      color: 'rgba(150,150,150,0.3)'
    },
    formatter,
    confine: true,
    enterable: true,
  };
};
