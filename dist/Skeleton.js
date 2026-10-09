import { jsx as _jsx } from "react/jsx-runtime";
export function Skeleton({ lines = 3, label = 'Loading' }) {
    return (_jsx("div", { className: "ak-skel", role: "status", "aria-label": label, children: Array.from({ length: lines }, (_, i) => _jsx("div", { className: "ak-skel__line" }, i)) }));
}
