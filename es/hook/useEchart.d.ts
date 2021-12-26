export declare type SizeProps = Partial<{
    width: number;
    height: number;
}>;
export declare const useEchart: ({ chartContainerRef, options, size, }: {
    chartContainerRef: any;
    options: object;
    size?: Partial<{
        width: number;
        height: number;
    }> | undefined;
}) => void;
