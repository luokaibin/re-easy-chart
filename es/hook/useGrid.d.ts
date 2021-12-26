import { Theme } from '../types';
export declare const useGrid: (params?: Theme['padding'], chartType?: ("area" | "line" | "bar" | "scatter" | "pie") | undefined) => {
    top: number;
    left: number;
    right: number;
    bottom: number;
} | undefined;
