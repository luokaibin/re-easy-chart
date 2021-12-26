import { useMemo } from 'react';
import uniq from 'lodash-es/uniq';
import { useAxisField } from './useAxisField';
export var useLegendData = function useLegendData(_ref) {
  var group = _ref.group,
      dataSource = _ref.dataSource,
      position = _ref.position,
      chartType = _ref.chartType;

  var _useAxisField = useAxisField(position),
      xAxisField = _useAxisField.xAxisField;

  var legendData = useMemo(function () {
    if (chartType === 'pie') {
      return dataSource.map(function (item) {
        return item[xAxisField];
      });
    }

    if (!group) {
      return [];
    }

    var lengendData = dataSource.filter(function (item) {
      return Boolean(item[group]);
    }).map(function (item) {
      return item[group].toString();
    });
    return uniq(lengendData);
  }, [group, dataSource, xAxisField, chartType]);
  return legendData;
};