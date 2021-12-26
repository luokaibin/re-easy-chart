import { ThemeAxis } from '../types';
export declare const useAxis: (params?: ThemeAxis | undefined, chartType?: ("area" | "line" | "bar" | "scatter" | "pie") | undefined) => {
    type: "value" | "time" | "category";
    nameLocation: string;
    name: string;
    nameGap: number;
    axisLine: {
        show: boolean;
        lineStyle: {
            color: string;
        };
    };
    axisTick: {
        show: boolean;
        length: number;
        lineStyle: {
            color: string;
        };
    };
    axisLabel: {
        show: boolean;
        color: string;
        fontSize: number;
        formatter: string | ((value: string | number, index: number) => string) | {
            year?: (string[] | (string | ((value: string | number, index: number) => string))) | undefined;
            month?: (string[] | (string | ((value: string | number, index: number) => string))) | undefined;
            week?: (string[] | (string | ((value: string | number, index: number) => string))) | undefined;
            day?: (string[] | (string | ((value: string | number, index: number) => string))) | undefined;
            hour?: (string[] | (string | ((value: string | number, index: number) => string))) | undefined;
            minute?: (string[] | (string | ((value: string | number, index: number) => string))) | undefined;
            second?: (string[] | (string | ((value: string | number, index: number) => string))) | undefined;
            millisecond?: (string[] | (string | ((value: string | number, index: number) => string))) | undefined;
            inherit?: boolean | undefined;
        } | ((value: number, index: number, extra: {
            level: number;
        }) => string) | undefined;
    };
    splitLine: {
        show: boolean;
        lineStyle: {
            color: string;
        };
    };
    nameTextStyle: {
        fontSize: number;
        color: string;
    };
}[] | undefined;
