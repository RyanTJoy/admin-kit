import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function EmptyState({ title, body, action }) {
    return (_jsxs("div", { className: "ak-empty", children: [_jsx("p", { className: "ak-empty__title", children: title }), body && _jsx("p", { className: "ak-empty__body", children: body }), action] }));
}
