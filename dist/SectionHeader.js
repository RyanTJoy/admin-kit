import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from './cx';
export function SectionHeader({ title, description, count, level = 'h2', actions, }) {
    const Heading = level;
    return (_jsxs("div", { className: cx('ak-section', level === 'h3' && 'ak-section--sub'), children: [_jsxs("div", { children: [_jsx(Heading, { className: "ak-section__title", children: title }), description && _jsx("p", { className: "ak-section__desc", children: description })] }), actions ?? (count !== undefined && _jsx("span", { className: "ak-section__count", children: count }))] }));
}
