import type { ComponentProps, ReactNode } from 'react';
export declare function Field({ label, hint, htmlFor, children }: {
    label: string;
    hint?: string;
    htmlFor: string;
    children: ReactNode;
}): import("react").JSX.Element;
export declare function Input({ className, ...rest }: ComponentProps<'input'>): import("react").JSX.Element;
export declare function Textarea({ className, ...rest }: ComponentProps<'textarea'>): import("react").JSX.Element;
export declare function Select({ className, ...rest }: ComponentProps<'select'>): import("react").JSX.Element;
export declare function Checkbox({ label, className, ...rest }: ComponentProps<'input'> & {
    label: string;
}): import("react").JSX.Element;
