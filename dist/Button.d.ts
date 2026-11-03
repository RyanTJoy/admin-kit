import { type ComponentProps } from 'react';
export type ButtonVariant = 'primary' | 'secondary' | 'quiet' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export declare function buttonClass(variant?: ButtonVariant, size?: ButtonSize, extra?: string): string;
export type ButtonProps = ComponentProps<'button'> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    busy?: boolean;
    busyLabel?: string;
    disabledReason?: string;
};
export declare const Button: import("react").ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
