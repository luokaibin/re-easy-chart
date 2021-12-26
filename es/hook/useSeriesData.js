export var useSeriesData = function useSeriesData(_ref) {
  var lengendData = _ref.lengendData,
      dataSource = _ref.dataSource,
      _ref$xField = _ref.xField,
      xField = _ref$xField === void 0 ? '' : _ref$xField,
      _ref$yField = _ref.yField,
      yField = _ref$yField === void 0 ? '' : _ref$yField,
      group = _ref.group,
      chartType = _ref.chartType;
  var data;

  if (chartType === 'pie') {
    return dataSource.map(function (item) {
      return {
        name: item[xField],
        value: item[yField]
      };
    });
  }

  if (group && (lengendData === null || lengendData === void 0 ? void 0 : lengendData.length)) {
    data = lengendData.reduce(function (prev, curr) {
      var lengendFilter = dataSource.filter(function (item) {
        return item[group] === curr;
      });
      prev[curr] = lengendFilter.map(function (item) {
        return [item[xField], item[yField]];
      });
      return prev;
    }, {});
  } else {
    data = dataSource.map(function (item) {
      return [item[xField], item[yField]];
    });
  }

  return data;
};