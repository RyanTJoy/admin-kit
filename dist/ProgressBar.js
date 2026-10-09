import { jsx as _jsx } from "react/jsx-runtime";
export function ProgressBar({ value, max, label }) {
    const percent = max <= 0 ? 0 : Math.max(0, Math.min(100, Math.round((value / max) * 100)));
    return (_jsx("div", { className: "ak-progress", role: "progressbar", "aria-label": label, "aria-valuenow": value, "aria-valuemin": 0, "aria-valuemax": max, children: _jsx("div", { className: "ak-progress__bar", style: { width: `${percent}%` } }) }));
}
