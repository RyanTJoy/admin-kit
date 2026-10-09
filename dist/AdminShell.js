'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { brandVars } from './brand';
import { KitLink, LinkContext } from './link';
function isCurrent(item, currentPath, homeHref) {
    if (item.external)
        return false;
    if (item.href === homeHref)
        return currentPath === homeHref;
    return currentPath === item.href || currentPath.startsWith(item.href + '/');
}
export function AdminShell({ brand, nav, currentPath, link, primaryAction, children, }) {
    const homeHref = nav[0]?.href ?? '/';
    const renderLink = (item, className) => (_jsx(KitLink, { href: item.href, className: className, "aria-current": isCurrent(item, currentPath, homeHref) ? 'page' : undefined, target: item.external ? '_blank' : undefined, rel: item.external ? 'noopener noreferrer' : undefined, children: item.label }, item.href));
    return (_jsx(LinkContext.Provider, { value: link ?? null, children: _jsxs("div", { className: "ak-shell", style: brandVars(brand), children: [_jsxs("header", { className: "ak-header", children: [_jsxs("div", { className: "ak-header__row", children: [_jsxs(KitLink, { href: homeHref, className: "ak-brand", children: [brand.logo ? _jsx("img", { className: "ak-brand__logo", src: brand.logo, alt: "" }) : _jsx("span", { className: "ak-brand__mark", "aria-hidden": "true" }), _jsx("span", { className: "ak-brand__name", children: brand.name }), brand.tagline && _jsx("span", { className: "ak-brand__tag", children: brand.tagline })] }), primaryAction] }), _jsx("nav", { "aria-label": "Admin sections", className: "ak-nav", children: nav.map((item) => renderLink(item, 'ak-nav__link')) })] }), _jsx("main", { className: "ak-page", children: children }), _jsx("nav", { "aria-label": "Admin sections, phone", className: "ak-tabbar", children: nav.filter((item) => !item.external).slice(0, 5).map((item) => renderLink(item, 'ak-tabbar__link')) })] }) }));
}
