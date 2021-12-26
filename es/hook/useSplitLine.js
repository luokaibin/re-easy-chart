import { useMemo } from 'react';
export var useSplitLine = function useSplitLine(_ref) {
  var gridLineColor = _ref.gridLineColor,
      grindLineWidth = _ref.grindLineWidth;
  var splitLine = useMemo(function () {
    return {
      show: true,
      lineStyle: {
        color: gridLineColor,
        width: grindLineWidth
      }
    };
  }, [gridLineColor, grindLineWidth]);
  return splitLine;
};