import { type ComponentProps, type ReactNode } from 'react';
import { type ButtonSize, type ButtonVariant } from './Button.js';
export declare function Menu({ label, variant, size, icon, ariaLabel, children, }: {
    label?: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: boolean;
    ariaLabel?: string;
    children: ReactNode;
}): import("react").JSX.Element;
export declare function MenuItem({ href, danger, children, ...rest }: ComponentProps<'button'> & {
    href?: string;
    danger?: boolean;
}): import("react").JSX.Element;
