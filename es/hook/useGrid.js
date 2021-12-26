import { useMemo } from 'react';
export var useGrid = function useGrid(params, chartType) {
  var _ref = params !== null && params !== void 0 ? params : {},
      _ref$top = _ref.top,
      top = _ref$top === void 0 ? 20 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? 30 : _ref$left,
      _ref$right = _ref.right,
      right = _ref$right === void 0 ? 10 : _ref$right,
      _ref$bottom = _ref.bottom,
      bottom = _ref$bottom === void 0 ? 30 : _ref$bottom;

  var grid = useMemo(function () {
    if (chartType === 'pie') {
      return undefined;
    }

    return {
      top: top,
      left: left,
      right: right,
      bottom: bottom
    };
  }, [chartType, top, left, right, bottom]);
  return grid;
};