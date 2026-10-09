import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from './cx.js';
export function Card({ title, description, actions, tone = 'default', heading = 'h2', className, children, }) {
    const Heading = heading;
    return (_jsxs("section", { className: cx('ak-card', tone === 'accent' && 'ak-card--accent', className), children: [(title || actions) && (_jsxs("div", { className: "ak-card__head", children: [_jsxs("div", { children: [title && _jsx(Heading, { className: "ak-card__title", children: title }), description && _jsx("p", { className: "ak-card__desc", children: description })] }), actions] })), children] }));
}
