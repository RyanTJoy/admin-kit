import type { ReactNode } from 'react';
import { type Brand } from './brand.js';
import { type LinkComponent } from './link.js';
export type NavItem = {
    href: string;
    label: string;
    external?: boolean;
};
export declare function AdminShell({ brand, nav, currentPath, link, primaryAction, children, }: {
    brand: Brand;
    nav: NavItem[];
    currentPath: string;
    link?: LinkComponent;
    primaryAction?: ReactNode;
    children: ReactNode;
}): import("react").JSX.Element;
