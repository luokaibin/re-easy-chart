import { XAXisComponentOption } from 'echarts';
declare type IAxisLabel = Required<XAXisComponentOption>;
export interface ThemeAxis {
    /**
     * 坐标轴名称
     */
    name?: string;
    /**
     * 坐标轴名称与轴线的距离 默认15
     */
    nameGap?: number;
    /**
     * 是否显示 轴线 刻度 刻度标签 默认 true
     */
    enable?: boolean;
    /**
     * 轴线颜色 默认 cecece
     */
    lineColor?: string;
    /**
     * 刻度标签颜色 如果没有设置 默认取 nameColor
     */
    tickTextColor?: string;
    /**
     * 刻度标签的内容格式器，支持字符串模板和回调函数两种形式。
     * https://echarts.apache.org/zh/option.html#xAxis.axisLabel.formatter
     */
    tickTextFormatter?: IAxisLabel['axisLabel']['formatter'];
    /**
     * 是否显示 grid 分隔线
     */
    gridLineEnable?: boolean;
    /**
     * grid 分隔线颜色 默认 ececec
     */
    gridLineColor?: string;
    /**
     * 坐标轴类型 value 数值轴 category 类目轴 time 时间轴 默认 category
     */
    type?: 'value' | 'category' | 'time';
    /**
     * 刻度线长度 默认 5
     */
    tickLength?: number;
    /**
     * 刻度字体大小 如果没有设置 默认会取 nameFontSize
     */
    tickFontSize?: number;
    /**
     * 刻度线颜色 默认 cecece
     */
    tickLineColor?: string;
    /**
     * 坐标轴名称显示位置 默认 end
     */
    /**
     * 坐标轴名称的颜色 默认 b0b0b0
     */
    nameColor?: string;
    /**
     * 坐标轴名称文字的字体大小 默认12
     */
    nameFontSize?: number;
}
export interface ThemeLegend {
    /**
     * 是否显示图例 默认 false
     */
    enable?: boolean;
    /**
     * 图例文字大小
     */
    fontSize?: number;
    /**
     * 图例文字颜色
     */
    color?: string;
    /**
     * 图例标记的图形高度
     */
    itemHeight?: number;
}
declare type IFormat = ((params: Object | Array<any>, ticket: string, callback: Function) => string | HTMLElement | HTMLElement[]) | string;
interface Position {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
}
export interface ThemeTooltip {
    /**
     * 触发类型 item 散点图 饼图 axis 折线图 面积图 shadow 柱状图 默认 item
     */
    trigger?: 'item' | 'axis';
    /**
     * 指示器类型 柱状图推荐 shadow 默认 line
     * https://echarts.apache.org/zh/option.html#tooltip.axisPointer.type
     */
    axisPointerType?: 'line' | 'shadow' | 'none' | 'cross';
    /**
     * 提示框浮层内容格式器，支持字符串模板和回调函数两种形式。
     * https://echarts.apache.org/zh/option.html#tooltip.formatter
     */
    formatter?: IFormat;
}
export interface Theme {
    yAxis?: ThemeAxis;
    xAxis?: ThemeAxis;
    legend?: ThemeLegend;
    padding?: Position;
    tooltip?: ThemeTooltip;
    /**
     * 是否平滑曲线 仅折线图生效 默认 false
     */
    smooth?: boolean;
    /**
     * 是否启用堆叠模式 仅对 折线图 面积图 柱状图 生效 默认 false
     */
    stack?: boolean;
    /**
     * 是否连接空值 仅折线图生效 默认 true
     */
    connectNulls?: boolean;
    /**
     * 显示为环形图 饼图生效 默认false
     */
    circle?: boolean;
    /**
     * 是否在图形上显示标签 默认 true
     */
    labelShow?: boolean;
}
declare type ChartType = 'bar' | 'line' | 'scatter' | 'area' | 'pie';
interface TextStyle {
    color?: string;
    fontWeight?: string;
    fontSize?: number;
}
interface Title extends Position {
    text?: string;
    subtext?: string;
    show?: boolean;
    textStyle?: TextStyle;
}
export interface ChartProps {
    /**
     * 图表高度
     */
    height: number;
    dataSource: {
        [key: string]: string | number;
    }[];
    /**
     * 格式为 xfield(X轴字段key)*yfield(Y轴字段key) 如果是饼图 xfield 表示数据项的名称；yfield表示数据项值
     * https://echarts.apache.org/zh/option.html#series-pie.data
     */
    position: string;
    /**
     * 分组字段 对柱状图、折线图、面积图、散点图生效，饼图会忽略
     */
    group?: string;
    theme?: Theme;
    /**
     * bar 柱状图 line 折线图 area 面积图 scatter 散点图 pie 饼图
     */
    chartType: ChartType;
    title?: Title;
}
export interface UseSeries extends Pick<ChartProps, 'dataSource' | 'group' | 'position' | 'chartType'>, Pick<Theme, 'smooth' | 'stack' | 'connectNulls' | 'circle' | 'labelShow' | 'padding'> {
    lengendData?: string[];
}
export interface UseSeriesData extends Omit<UseSeries, 'position'> {
    xField?: string;
    yField?: string;
}
export interface UseLegendProps extends ThemeLegend, Pick<ChartProps, 'position' | 'chartType'> {
    group: string;
    dataSource: ChartProps['dataSource'];
    enable?: boolean;
}
export interface UseAxis extends Pick<ThemeAxis, 'name' | 'enable' | 'tickTextColor' | 'gridLineEnable' | 'gridLineColor' | 'type'> {
    labelColor?: string;
    labelFontSize?: number;
    grindLineWidth?: string;
}
export {};
