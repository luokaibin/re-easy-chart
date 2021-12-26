import { UseAxis } from '../types';
export declare const useSplitLine: ({ gridLineColor, grindLineWidth }: Pick<UseAxis, 'grindLineWidth' | 'gridLineColor'>) => {
    show: boolean;
    lineStyle: {
        color: string | undefined;
        width: string | undefined;
    };
};
