import type { ReactNode } from 'react';
export declare function List({ ordered, className, children }: {
    ordered?: boolean;
    className?: string;
    children: ReactNode;
}): import("react").JSX.Element;
export declare function Row({ leading, eyebrow, title, meta, trailing, tone, children, }: {
    leading?: ReactNode;
    eyebrow?: string;
    title: ReactNode;
    meta?: ReactNode;
    trailing?: ReactNode;
    tone?: 'default' | 'accent';
    children?: ReactNode;
}): import("react").JSX.Element;
