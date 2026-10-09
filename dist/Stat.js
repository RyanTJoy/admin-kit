import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function StatRow({ children }) {
    return _jsx("div", { className: "ak-statrow", children: children });
}
export function Stat({ label, value, hint }) {
    return (_jsxs("div", { className: "ak-stat", children: [_jsx("p", { className: "ak-eyebrow", children: label }), _jsx("p", { className: "ak-stat__value", children: value }), hint && _jsx("p", { className: "ak-stat__hint", children: hint })] }));
}
