import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React, { useRef } from 'react';
import { useEchart, useSeries, useLegend, useAxis, useGrid, useTooltip } from './hook';
import { colors } from './const';
export * from './types';
export var Chart = function Chart(props) {
  var _props$theme, _props$theme2, _props$theme3, _props$theme4, _props$theme5, _props$theme6, _props$theme7, _props$theme8, _props$theme9, _props$theme10, _props$theme11;

  var chartContainerRef = useRef(null);
  var chartType = props.chartType,
      position = props.position,
      _props$group = props.group,
      group = _props$group === void 0 ? '' : _props$group,
      dataSource = props.dataSource,
      chartHeight = props.height;
  var grid = useGrid(props === null || props === void 0 ? void 0 : (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.padding, chartType);
  var legend = useLegend(_objectSpread({
    group: group,
    dataSource: dataSource,
    chartType: chartType,
    position: position
  }, props === null || props === void 0 ? void 0 : (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.legend));
  var series = useSeries({
    position: position,
    lengendData: legend.data,
    dataSource: dataSource,
    group: group,
    chartType: chartType,
    smooth: props === null || props === void 0 ? void 0 : (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.smooth,
    circle: props === null || props === void 0 ? void 0 : (_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.circle,
    connectNulls: props === null || props === void 0 ? void 0 : (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.connectNulls,
    stack: props === null || props === void 0 ? void 0 : (_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.stack,
    labelShow: props === null || props === void 0 ? void 0 : (_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.labelShow,
    padding: props === null || props === void 0 ? void 0 : (_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.padding
  });
  var xAxis = useAxis(props === null || props === void 0 ? void 0 : (_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.xAxis, chartType);
  var yAxis = useAxis(props === null || props === void 0 ? void 0 : (_props$theme10 = props.theme) === null || _props$theme10 === void 0 ? void 0 : _props$theme10.yAxis, chartType);
  var tooltip = useTooltip(props === null || props === void 0 ? void 0 : (_props$theme11 = props.theme) === null || _props$theme11 === void 0 ? void 0 : _props$theme11.tooltip);
  useEchart({
    chartContainerRef: chartContainerRef,
    options: {
      legend: legend,
      series: series,
      xAxis: xAxis,
      grid: grid,
      yAxis: yAxis,
      color: colors,
      tooltip: tooltip,
      title: props.title
    },
    size: {
      height: chartHeight
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: chartContainerRef,
    style: {
      height: chartHeight
    }
  });
};