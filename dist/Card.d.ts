import type { ReactNode } from 'react';
export declare function Card({ title, description, actions, tone, heading, className, children, }: {
    title?: string;
    description?: string;
    actions?: ReactNode;
    tone?: 'default' | 'accent';
    heading?: 'h2' | 'h3';
    className?: string;
    children: ReactNode;
}): import("react").JSX.Element;
