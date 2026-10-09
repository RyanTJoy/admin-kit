import type { CSSProperties } from 'react';
export type Brand = {
    name: string;
    tagline?: string;
    logo?: string;
    accent: string;
    accentInk: string;
};
export declare function brandVars(brand: Brand): CSSProperties;
