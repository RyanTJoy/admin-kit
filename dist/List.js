import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from './cx';
export function List({ ordered = false, className, children }) {
    const Tag = ordered ? 'ol' : 'ul';
    return _jsx(Tag, { className: cx('ak-list', className), children: children });
}
export function Row({ leading, eyebrow, title, meta, trailing, tone = 'default', children, }) {
    return (_jsxs("li", { className: cx('ak-row', tone === 'accent' && 'ak-row--accent'), children: [_jsxs("div", { className: "ak-row__body", children: [leading, _jsxs("div", { className: "ak-row__content", children: [eyebrow && _jsx("p", { className: "ak-eyebrow", children: eyebrow }), _jsx("div", { className: "ak-row__title", children: title }), meta && _jsx("p", { className: "ak-row__meta", children: meta }), children] })] }), trailing] }));
}
