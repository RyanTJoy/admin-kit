import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from './cx';
export function Badge({ tone = 'neutral', children }) {
    return _jsx("span", { className: cx('ak-badge', tone !== 'neutral' && `ak-badge--${tone}`), children: children });
}
