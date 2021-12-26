import { UseSeries } from '../types';
export declare const useSeries: (params?: UseSeries | undefined) => {
    name: string;
    type: "area" | "line" | "bar" | "scatter";
    data: any;
    smooth: boolean | undefined;
    connectNulls: boolean | undefined;
    stack: string | undefined;
    areaStyle: {} | undefined;
    label: {
        show: boolean;
    };
}[] | {
    top?: number | undefined;
    left?: number | undefined;
    bottom?: number | undefined;
    right?: number | undefined;
    type: "pie";
    data: any;
    radius: string[];
    label: {
        show: boolean;
    };
}[] | {
    type: "area" | "line" | "bar" | "scatter";
    data: any;
    smooth: boolean;
    connectNulls: boolean;
    areaStyle: {} | undefined;
    label: {
        show: boolean;
    };
}[];
