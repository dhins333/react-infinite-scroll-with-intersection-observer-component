import type { ReactElement, FC } from 'react';
type TInfiniteScrollProps = {
    enabled?: boolean;
    threshold?: number;
    observeIndex?: number;
    itemParentType?: string;
    onLoadMore?: Function;
    items: ReactElement[];
};
export declare const InfiniteScroll: FC<TInfiniteScrollProps>;
export {};
