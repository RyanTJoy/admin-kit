'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export function Segmented({ label, value, options, onChange, }) {
    return (_jsx("div", { role: "group", "aria-label": label, className: "ak-seg", children: options.map((option) => (_jsx("button", { type: "button", className: "ak-seg__btn", "aria-pressed": option.value === value, disabled: option.disabled, onClick: () => onChange(option.value), children: option.label }, option.value))) }));
}
