import { type ComponentType, type ReactNode } from 'react';
export type KitLinkProps = {
    href: string;
    className?: string;
    children?: ReactNode;
    target?: string;
    rel?: string;
    role?: string;
    'aria-current'?: 'page';
    'aria-label'?: string;
};
export type LinkComponent = ComponentType<KitLinkProps>;
export declare const LinkContext: import("react").Context<LinkComponent | null>;
export declare function KitLink(props: KitLinkProps): import("react").JSX.Element;
