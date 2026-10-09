import type { ReactNode } from 'react';
export declare function StatRow({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function Stat({ label, value, hint }: {
    label: string;
    value: ReactNode;
    hint?: string;
}): import("react").JSX.Element;
