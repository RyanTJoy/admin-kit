import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from './cx.js';
export function Banner({ tone = 'info', title, action, children }) {
    return (_jsxs("div", { role: tone === 'danger' ? 'alert' : 'status', className: cx('ak-banner', tone !== 'info' && `ak-banner--${tone}`), children: [_jsxs("div", { children: [title && _jsx("p", { className: "ak-banner__title", children: title }), _jsx("div", { className: "ak-banner__body", children: children })] }), action] }));
}
