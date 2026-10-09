import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { KitLink } from './link';
export function PageHeader({ eyebrow, title, description, back, actions, }) {
    return (_jsxs("div", { className: "ak-pagehead", children: [_jsxs("div", { children: [back && _jsxs(KitLink, { href: back.href, className: "ak-pagehead__back", children: ["\u2190 ", back.label] }), eyebrow && _jsx("p", { className: "ak-eyebrow", children: eyebrow }), _jsx("h1", { className: "ak-pagehead__title", children: title }), description && _jsx("p", { className: "ak-pagehead__desc", children: description })] }), actions && _jsx("div", { className: "ak-actions", children: actions })] }));
}
