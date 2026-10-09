import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from './cx.js';
export function Field({ label, hint, htmlFor, children }) {
    return (_jsxs("div", { className: "ak-field", children: [_jsxs("label", { className: "ak-label", htmlFor: htmlFor, children: [label, hint && _jsx("span", { className: "ak-hint", children: hint })] }), children] }));
}
export function Input({ className, ...rest }) {
    return _jsx("input", { className: cx('ak-input', className), ...rest });
}
export function Textarea({ className, ...rest }) {
    return _jsx("textarea", { className: cx('ak-textarea', className), ...rest });
}
export function Select({ className, ...rest }) {
    return _jsx("select", { className: cx('ak-select', className), ...rest });
}
export function Checkbox({ label, className, ...rest }) {
    return (_jsxs("label", { className: cx('ak-check', className), children: [_jsx("input", { type: "checkbox", ...rest }), _jsx("span", { children: label })] }));
}
