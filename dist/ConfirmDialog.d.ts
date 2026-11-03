import { type ReactNode } from 'react';
export type ConfirmDialogTone = 'default' | 'danger';
export declare function ConfirmDialog({ open, title, description, children, confirmLabel, cancelLabel, tone, busy, onConfirm, onCancel, }: {
    open: boolean;
    title: string;
    description?: string;
    children?: ReactNode;
    confirmLabel?: string;
    cancelLabel?: string;
    tone?: ConfirmDialogTone;
    busy?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}): import("react").JSX.Element | null;
