import { type ComponentProps, type ReactNode } from 'react';
export declare function Menu({ label, children }: {
    label?: string;
    children: ReactNode;
}): import("react").JSX.Element;
export declare function MenuItem({ href, children, ...rest }: ComponentProps<'button'> & {
    href?: string;
}): import("react").JSX.Element;
