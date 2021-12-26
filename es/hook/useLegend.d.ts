import { UseLegendProps } from '../types';
export declare const useLegend: (params?: UseLegendProps | undefined) => {
    type: string;
    bottom: number;
    data: (string | number)[];
    show: boolean;
    icon: string;
    itemHeight: number;
    textStyle: {
        color: string | undefined;
        fontSize: number | undefined;
    };
    formatter: (label: string) => string;
    tooltip: {
        show: boolean;
    };
};
