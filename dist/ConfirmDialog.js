'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useId, useRef } from 'react';
import { Button } from './Button.js';
export function ConfirmDialog({ open, title, description, children, confirmLabel = 'Confirm', cancelLabel = 'Cancel', tone = 'default', busy = false, onConfirm, onCancel, }) {
    const titleId = useId();
    const descId = useId();
    const cancelRef = useRef(null);
    const hasBody = Boolean(description || children);
    useEffect(() => {
        if (!open)
            return;
        const prev = document.activeElement;
        cancelRef.current?.focus();
        function onKey(event) {
            if (event.key === 'Escape' && !busy)
                onCancel();
        }
        document.addEventListener('keydown', onKey);
        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = original;
            prev?.focus?.();
        };
    }, [open, busy, onCancel]);
    if (!open)
        return null;
    return (_jsx("div", { className: "ak-dialog-backdrop", onMouseDown: (event) => {
            if (event.target === event.currentTarget && !busy)
                onCancel();
        }, children: _jsxs("div", { role: "dialog", "aria-modal": "true", "aria-labelledby": titleId, "aria-describedby": hasBody ? descId : undefined, className: "ak-dialog", children: [_jsx("h2", { id: titleId, className: "ak-dialog__title", children: title }), hasBody && (_jsxs("div", { id: descId, className: "ak-dialog__body", children: [description && _jsx("p", { children: description }), children] })), _jsxs("div", { className: "ak-dialog__actions", children: [_jsx(Button, { ref: cancelRef, onClick: onCancel, disabled: busy, children: cancelLabel }), _jsx(Button, { variant: tone === 'danger' ? 'danger' : 'primary', onClick: onConfirm, busy: busy, busyLabel: "Working\u2026", children: confirmLabel })] })] }) }));
}
