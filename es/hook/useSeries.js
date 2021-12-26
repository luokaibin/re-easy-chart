import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { useMemo } from 'react';
import { useAxisField } from './useAxisField';
import { useSeriesData } from './useSeriesData';
export var useSeries = function useSeries(params) {
  var _ref = params || {},
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? '' : _ref$position,
      group = _ref.group,
      _ref$dataSource = _ref.dataSource,
      dataSource = _ref$dataSource === void 0 ? [] : _ref$dataSource,
      lengendData = _ref.lengendData,
      _ref$chartType = _ref.chartType,
      chartType = _ref$chartType === void 0 ? 'line' : _ref$chartType,
      _ref$smooth = _ref.smooth,
      smooth = _ref$smooth === void 0 ? false : _ref$smooth,
      _ref$connectNulls = _ref.connectNulls,
      connectNulls = _ref$connectNulls === void 0 ? true : _ref$connectNulls,
      _ref$stack = _ref.stack,
      stack = _ref$stack === void 0 ? false : _ref$stack,
      _ref$circle = _ref.circle,
      circle = _ref$circle === void 0 ? false : _ref$circle,
      _ref$labelShow = _ref.labelShow,
      labelShow = _ref$labelShow === void 0 ? true : _ref$labelShow,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? {} : _ref$padding;

  var _useAxisField = useAxisField(position),
      xAxisField = _useAxisField.xAxisField,
      yAxisField = _useAxisField.yAxisField;

  var seriesData = useSeriesData({
    xField: xAxisField,
    yField: yAxisField,
    lengendData: lengendData,
    dataSource: dataSource,
    group: group,
    chartType: chartType
  });
  var series = useMemo(function () {
    if (chartType === 'pie') {
      return [_objectSpread({
        type: chartType,
        data: seriesData,
        radius: circle ? ['40%', '75%'] : ['0', '75%'],
        label: {
          show: labelShow
        }
      }, padding)];
    }

    var type = ['line', 'area'].includes(chartType) ? 'line' : chartType;

    if (lengendData === null || lengendData === void 0 ? void 0 : lengendData.length) {
      return lengendData === null || lengendData === void 0 ? void 0 : lengendData.map(function (lengend) {
        return {
          name: lengend,
          type: type,
          data: seriesData[lengend],
          smooth: chartType === 'line' ? smooth : undefined,
          connectNulls: chartType === 'line' ? connectNulls : undefined,
          stack: ['line', 'pie', 'area'].includes(chartType) && stack ? lengend : undefined,
          areaStyle: chartType === 'area' ? {} : undefined,
          label: {
            show: labelShow
          }
        };
      });
    }

    return [{
      type: type,
      data: seriesData,
      smooth: smooth,
      connectNulls: connectNulls,
      areaStyle: chartType === 'area' ? {} : undefined,
      label: {
        show: labelShow
      }
    }]; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lengendData, seriesData]);
  return series;
};