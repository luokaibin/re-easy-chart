export var useAxis = function useAxis(params, chartType) {
  if (chartType === 'pie') {
    return undefined;
  }

  var _ref = params !== null && params !== void 0 ? params : {},
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      _ref$enable = _ref.enable,
      enable = _ref$enable === void 0 ? true : _ref$enable,
      _ref$lineColor = _ref.lineColor,
      lineColor = _ref$lineColor === void 0 ? '#cecece' : _ref$lineColor,
      tickTextColor = _ref.tickTextColor,
      gridLineEnable = _ref.gridLineEnable,
      _ref$gridLineColor = _ref.gridLineColor,
      gridLineColor = _ref$gridLineColor === void 0 ? '#ececec' : _ref$gridLineColor,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'category' : _ref$type,
      tickFontSize = _ref.tickFontSize,
      _ref$tickLength = _ref.tickLength,
      tickLength = _ref$tickLength === void 0 ? 5 : _ref$tickLength,
      _ref$tickLineColor = _ref.tickLineColor,
      tickLineColor = _ref$tickLineColor === void 0 ? '#cecece' : _ref$tickLineColor,
      _ref$nameGap = _ref.nameGap,
      nameGap = _ref$nameGap === void 0 ? 15 : _ref$nameGap,
      _ref$nameFontSize = _ref.nameFontSize,
      nameFontSize = _ref$nameFontSize === void 0 ? 12 : _ref$nameFontSize,
      _ref$nameColor = _ref.nameColor,
      nameColor = _ref$nameColor === void 0 ? '#b0b0b0' : _ref$nameColor,
      tickTextFormatter = _ref.tickTextFormatter;

  var axis = [{
    type: type,
    nameLocation: 'center',
    name: enable ? name : '',
    nameGap: nameGap,
    axisLine: {
      // 轴线
      show: enable,
      lineStyle: {
        color: lineColor
      }
    },
    axisTick: {
      // 刻度
      show: enable,
      length: tickLength,
      lineStyle: {
        color: tickLineColor
      }
    },
    axisLabel: {
      show: enable,
      color: tickTextColor || nameColor,
      fontSize: tickFontSize || nameFontSize,
      formatter: tickTextFormatter
    },
    splitLine: {
      show: gridLineEnable !== null && gridLineEnable !== void 0 ? gridLineEnable : enable,
      lineStyle: {
        color: gridLineColor
      }
    },
    nameTextStyle: {
      fontSize: nameFontSize,
      color: nameColor
    }
  }];
  return axis;
};