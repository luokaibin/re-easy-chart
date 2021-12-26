export var useTooltip = function useTooltip(params) {
  var _ref = params || {},
      _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? 'item' : _ref$trigger,
      formatter = _ref.formatter,
      _ref$axisPointerType = _ref.axisPointerType,
      axisPointerType = _ref$axisPointerType === void 0 ? 'line' : _ref$axisPointerType;

  return {
    show: true,
    trigger: trigger,
    borderColor: 'rgba(0,0,0,0)',
    axisPointer: {
      type: axisPointerType // 鼠标移到图上的样式

    },
    formatter: formatter,
    confine: true,
    enterable: true
  };
};