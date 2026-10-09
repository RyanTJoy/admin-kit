import type { ComponentProps } from 'react';
export type ButtonVariant = 'primary' | 'secondary' | 'quiet' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export declare function buttonClass(variant?: ButtonVariant, size?: ButtonSize, extra?: string): string;
export type ButtonProps = ComponentProps<'button'> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    busy?: boolean;
    busyLabel?: string;
};
export declare function Button({ variant, size, busy, busyLabel, className, children, disabled, type, ...rest }: ButtonProps): import("react").JSX.Element;
