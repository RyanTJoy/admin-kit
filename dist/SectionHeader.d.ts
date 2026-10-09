import type { ReactNode } from 'react';
export declare function SectionHeader({ title, description, count, level, actions, }: {
    title: string;
    description?: string;
    count?: number;
    level?: 'h2' | 'h3';
    actions?: ReactNode;
}): import("react").JSX.Element;
