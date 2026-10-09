'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { brandVars } from './brand.js';
import { KitLink, LinkContext } from './link.js';
function isCurrent(item, currentPath, homeHref) {
    if (item.external)
        return false;
    if (item.href === homeHref)
        return currentPath === homeHref;
    return currentPath === item.href || currentPath.startsWith(item.href + '/');
}
export function AdminShell({ brand, nav, currentPath, link, primaryAction, children, }) {
    const homeHref = nav[0]?.href ?? '/';
    const moreRef = useRef(null);
    useEffect(() => {
        function onDocClick(event) {
            const el = moreRef.current;
            if (el && el.open && !el.contains(event.target))
                el.open = false;
        }
        document.addEventListener('click', onDocClick);
        return () => document.removeEventListener('click', onDocClick);
    }, []);
    useEffect(() => {
        if (moreRef.current)
            moreRef.current.open = false;
    }, [currentPath]);
    const internal = nav.filter((item) => !item.external);
    const flagged = internal.filter((item) => item.phone);
    const pinned = (flagged.length > 0 ? flagged : internal).slice(0, 4);
    const rest = nav.filter((item) => !pinned.includes(item));
    const restCurrent = rest.some((item) => isCurrent(item, currentPath, homeHref));
    const renderLink = (item, className) => (_jsx(KitLink, { href: item.href, className: className, "aria-current": isCurrent(item, currentPath, homeHref) ? 'page' : undefined, target: item.external ? '_blank' : undefined, rel: item.external ? 'noopener noreferrer' : undefined, children: item.label }, item.href));
    return (_jsx(LinkContext.Provider, { value: link ?? null, children: _jsxs("div", { className: "ak-shell", style: brandVars(brand), children: [_jsxs("header", { className: "ak-header", children: [_jsxs("div", { className: "ak-header__row", children: [_jsxs(KitLink, { href: homeHref, className: "ak-brand", children: [brand.logo ? _jsx("img", { className: "ak-brand__logo", src: brand.logo, alt: "" }) : _jsx("span", { className: "ak-brand__mark", "aria-hidden": "true" }), _jsx("span", { className: "ak-brand__name", children: brand.name }), brand.tagline && _jsx("span", { className: "ak-brand__tag", children: brand.tagline })] }), primaryAction] }), _jsx("nav", { "aria-label": "Admin sections", className: "ak-nav", children: nav.map((item) => renderLink(item, 'ak-nav__link')) })] }), _jsx("main", { className: "ak-page", children: children }), _jsxs("nav", { "aria-label": "Admin sections, phone", className: "ak-tabbar", children: [pinned.map((item) => renderLink(item, 'ak-tabbar__link')), rest.length > 0 && (_jsxs("details", { ref: moreRef, className: "ak-tabbar__more", children: [_jsx("summary", { className: "ak-tabbar__link", "data-current": restCurrent ? 'true' : undefined, children: "More" }), _jsx("div", { className: "ak-tabbar__sheet", role: "menu", children: rest.map((item) => renderLink(item, 'ak-menu__item')) })] }))] })] }) }));
}
