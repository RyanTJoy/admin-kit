'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
export const LinkContext = createContext(null);
export function KitLink(props) {
    const Component = useContext(LinkContext);
    if (Component)
        return _jsx(Component, { ...props });
    const { children, ...rest } = props;
    return _jsx("a", { ...rest, children: children });
}
