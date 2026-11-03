import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId } from 'react';
import { cx } from './cx.js';
export function buttonClass(variant = 'secondary', size = 'md', extra) {
    return cx('ak-btn', `ak-btn--${variant}`, `ak-btn--${size}`, extra);
}
export const Button = forwardRef(function Button({ variant = 'secondary', size = 'md', busy = false, busyLabel = 'Working…', disabledReason, className, children, disabled, type = 'button', ...rest }, ref) {
    const reasonId = useId();
    const showReason = Boolean(disabledReason);
    const button = (_jsx("button", { ref: ref, type: type, className: buttonClass(variant, size, className), disabled: disabled || busy, "aria-busy": busy || undefined, "aria-describedby": showReason ? reasonId : undefined, ...rest, children: busy ? busyLabel : children }));
    if (!showReason)
        return button;
    return (_jsxs("span", { className: "ak-btn-wrap", children: [button, _jsx("span", { id: reasonId, className: "ak-btn__reason", children: disabledReason })] }));
});
