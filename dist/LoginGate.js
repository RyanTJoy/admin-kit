'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from './Button.js';
import { Field, Input } from './Field.js';
export function LoginGate({ title, onSubmit, error, busy = false, }) {
    const [password, setPassword] = useState('');
    function submit(event) {
        event.preventDefault();
        onSubmit(password);
    }
    return (_jsxs("form", { onSubmit: submit, className: "ak-login", children: [_jsx("h1", { className: "ak-login__title", children: title }), _jsx(Field, { label: "Password", htmlFor: "admin-password", children: _jsx(Input, { id: "admin-password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), autoFocus: true, autoComplete: "current-password" }) }), error && _jsx("p", { className: "ak-error", children: error }), _jsx(Button, { type: "submit", variant: "primary", disabled: busy || !password, busy: busy, busyLabel: "Unlocking\u2026", children: "Unlock" })] }));
}
