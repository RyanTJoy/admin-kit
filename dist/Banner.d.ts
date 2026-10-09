import type { ReactNode } from 'react';
export type BannerTone = 'info' | 'warn' | 'danger';
export declare function Banner({ tone, title, action, children }: {
    tone?: BannerTone;
    title?: string;
    action?: ReactNode;
    children: ReactNode;
}): import("react").JSX.Element;
