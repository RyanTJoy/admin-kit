'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { buttonClass } from './Button.js';
import { KitLink } from './link.js';
import { cx } from './cx.js';
export function Menu({ label = 'More', variant = 'secondary', size = 'md', icon = false, ariaLabel, children, }) {
    const ref = useRef(null);
    useEffect(() => {
        function onDocClick(event) {
            const el = ref.current;
            if (el && el.open && !el.contains(event.target))
                el.open = false;
        }
        document.addEventListener('click', onDocClick);
        return () => document.removeEventListener('click', onDocClick);
    }, []);
    return (_jsxs("details", { ref: ref, className: "ak-menu", children: [_jsx("summary", { role: "button", className: buttonClass(variant, size, icon ? 'ak-btn--icon' : undefined), "aria-label": ariaLabel, children: label }), _jsx("div", { className: "ak-menu__list", role: "menu", children: children })] }));
}
export function MenuItem({ href, danger = false, children, ...rest }) {
    const className = cx('ak-menu__item', danger && 'ak-menu__item--danger');
    if (href)
        return _jsx(KitLink, { href: href, role: "menuitem", className: className, children: children });
    return _jsx("button", { type: "button", role: "menuitem", className: className, ...rest, children: children });
}
