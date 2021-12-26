import { UseAxis } from '../types';
export declare const useAxisLabel: ({ labelColor, labelFontSize }: Pick<UseAxis, 'labelColor' | 'labelFontSize'>) => {
    show: boolean;
    color: string | undefined;
    fontSize: number | undefined;
};
