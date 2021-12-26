import { ThemeTooltip } from '../types';
export declare const useTooltip: (params?: ThemeTooltip | undefined) => {
    show: boolean;
    trigger: "item" | "axis";
    borderColor: string;
    axisPointer: {
        type: "none" | "line" | "cross" | "shadow";
    };
    formatter: (string | ((params: Object | any[], ticket: string, callback: Function) => string | HTMLElement | HTMLElement[])) | undefined;
    confine: boolean;
    enterable: boolean;
};
