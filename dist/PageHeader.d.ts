import type { ReactNode } from 'react';
export declare function PageHeader({ eyebrow, title, description, back, actions, }: {
    eyebrow?: string;
    title: string;
    description?: string;
    back?: {
        href: string;
        label: string;
    };
    actions?: ReactNode;
}): import("react").JSX.Element;
