import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useMemo } from 'react';
export var useAxisField = function useAxisField(position) {
  var axisField = useMemo(function () {
    var _position$split = position.split('*'),
        _position$split2 = _slicedToArray(_position$split, 2),
        xAxisField = _position$split2[0],
        yAxisField = _position$split2[1];

    return {
      xAxisField: xAxisField,
      yAxisField: yAxisField
    };
  }, [position]);
  return axisField;
};