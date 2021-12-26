import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { useRef, useEffect } from 'react';
import * as echarts from 'echarts/core';
import { TooltipComponent, LegendComponent, GridComponent, TitleComponent } from 'echarts/components';
import { PieChart, LineChart, BarChart, ScatterChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([TooltipComponent, LegendComponent, GridComponent, TitleComponent, PieChart, LineChart, BarChart, ScatterChart, CanvasRenderer]);
export var useEchart = function useEchart(_ref) {
  var chartContainerRef = _ref.chartContainerRef,
      options = _ref.options,
      size = _ref.size;
  var echartRef = useRef(null);
  useEffect(function () {
    if (chartContainerRef === null || chartContainerRef === void 0 ? void 0 : chartContainerRef.current) {
      // 避免重复初始化
      echartRef.current = !(echartRef === null || echartRef === void 0 ? void 0 : echartRef.current) ? echarts.init(chartContainerRef.current) : echartRef.current;
      echartRef.current.setOption(_objectSpread({}, options));
    }

    return function () {
      var _echartRef$current;

      echartRef === null || echartRef === void 0 ? void 0 : (_echartRef$current = echartRef.current) === null || _echartRef$current === void 0 ? void 0 : _echartRef$current.clear();
    };
  }, [chartContainerRef, options]);
  useEffect(function () {
    if (size && (echartRef === null || echartRef === void 0 ? void 0 : echartRef.current)) {
      var _size$height, _size$width;

      echartRef === null || echartRef === void 0 ? void 0 : echartRef.current.resize({
        height: (_size$height = size === null || size === void 0 ? void 0 : size.height) !== null && _size$height !== void 0 ? _size$height : 'auto',
        width: (_size$width = size === null || size === void 0 ? void 0 : size.width) !== null && _size$width !== void 0 ? _size$width : 'auto'
      });
    }
  }, [size]);
};