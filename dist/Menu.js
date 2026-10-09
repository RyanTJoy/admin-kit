'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { KitLink } from './link.js';
export function Menu({ label = 'More', children }) {
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
    return (_jsxs("details", { ref: ref, className: "ak-menu", children: [_jsx("summary", { className: "ak-btn ak-btn--secondary ak-btn--md", children: label }), _jsx("div", { className: "ak-menu__list", role: "menu", children: children })] }));
}
export function MenuItem({ href, children, ...rest }) {
    if (href)
        return _jsx(KitLink, { href: href, role: "menuitem", className: "ak-menu__item", children: children });
    return _jsx("button", { type: "button", role: "menuitem", className: "ak-menu__item", ...rest, children: children });
}
