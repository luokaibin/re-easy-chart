import { useMemo } from 'react';
export var useAxisLabel = function useAxisLabel(_ref) {
  var labelColor = _ref.labelColor,
      labelFontSize = _ref.labelFontSize;
  var axisLabel = useMemo(function () {
    return {
      show: true,
      color: labelColor,
      fontSize: labelFontSize
    };
  }, [labelColor, labelFontSize]);
  return axisLabel;
};