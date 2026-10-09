import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from './cx.js';
export function buttonClass(variant = 'secondary', size = 'md', extra) {
    return cx('ak-btn', `ak-btn--${variant}`, `ak-btn--${size}`, extra);
}
export function Button({ variant = 'secondary', size = 'md', busy = false, busyLabel = 'Working…', className, children, disabled, type = 'button', ...rest }) {
    return (_jsx("button", { type: type, className: buttonClass(variant, size, className), disabled: disabled || busy, "aria-busy": busy || undefined, ...rest, children: busy ? busyLabel : children }));
}
