import { ChartType, UseSeriesData } from '../types';


export const useSeriesData = ({ lengendData, dataSource, xField = '', yField = '', group, chartType }: UseSeriesData) => {
  let data;
  if (chartType === ChartType.PIE) {
    return dataSource.map(item => ({ name: item[xField], value: item[yField] }));
  }
  if (group && lengendData?.length) {
    data = lengendData.reduce((prev: any, curr) => {
      const lengendFilter = dataSource.filter(item => item[group] === curr);
      prev[curr] = lengendFilter.map(item => ([item[xField], item[yField]]));
      return prev;
    }, {});
  } else {
    data = dataSource.map(item => ([item[xField], item[yField]]));
  }
  return data;
};
