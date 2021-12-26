import { useMemo } from 'react';
import { useLegendData } from './useLegendData';
export var useLegend = function useLegend(params) {
  var _ref = params !== null && params !== void 0 ? params : {},
      _ref$group = _ref.group,
      group = _ref$group === void 0 ? '' : _ref$group,
      _ref$dataSource = _ref.dataSource,
      dataSource = _ref$dataSource === void 0 ? [] : _ref$dataSource,
      _ref$enable = _ref.enable,
      enable = _ref$enable === void 0 ? false : _ref$enable,
      fontSize = _ref.fontSize,
      color = _ref.color,
      _ref$chartType = _ref.chartType,
      chartType = _ref$chartType === void 0 ? 'line' : _ref$chartType,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? '' : _ref$position,
      _ref$itemHeight = _ref.itemHeight,
      itemHeight = _ref$itemHeight === void 0 ? 14 : _ref$itemHeight;

  var data = useLegendData({
    group: group,
    dataSource: dataSource,
    position: position,
    chartType: chartType
  });
  return useMemo(function () {
    return {
      type: 'scroll',
      bottom: 0,
      data: data,
      show: enable,
      icon: 'roundRect',
      itemHeight: itemHeight,
      textStyle: {
        color: color,
        fontSize: fontSize // 图例文字大小

      },
      formatter: function formatter(label) {
        if ((label === null || label === void 0 ? void 0 : label.length) > 30) {
          var reg = /(.{12}).*(.{12})/;
          return label.replace(reg, '$1......$2');
        }

        return label;
      },
      tooltip: {
        show: true
      }
    };
  }, [data, enable, itemHeight, color, fontSize]);
};