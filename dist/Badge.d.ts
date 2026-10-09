import type { ReactNode } from 'react';
export type BadgeTone = 'neutral' | 'accent' | 'ok' | 'warn' | 'danger';
export declare function Badge({ tone, children }: {
    tone?: BadgeTone;
    children: ReactNode;
}): import("react").JSX.Element;
