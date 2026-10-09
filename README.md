# @ryantjoy/admin-kit

Shared admin UI for the CardBoard, Omes, and Compass back offices. One
stylesheet, React primitives, a shell. No dependency on Next, Tailwind, or
any site code.

## Install (from a git tag, no registry)

    npm install github:RyanTJoy/admin-kit#v1.0.0

In the admin layout:

    import '@ryantjoy/admin-kit/styles.css'

Set the font once in the site's global CSS so the kit uses the loaded face:

    .ak-shell { --ak-font: var(--font-inter), system-ui, sans-serif; }

## Brand

    const brand = { name: 'CardBoard', tagline: 'Operations', accent: '#e5b924', accentInk: '#0a1628' }
    <AdminShell brand={brand} nav={nav} currentPath={pathname} link={NextLink}>...</AdminShell>

`accent` is used for the primary button and the current nav tab only.

## Layers

tokens (styles.css) → primitives (Button, Field, Segmented, Badge, Card,
Stat, ProgressBar, Banner, EmptyState, Skeleton, List, Row, Menu,
ActionGroup) → shell (AdminShell, PageHeader, SectionHeader, LoginGate).

## Demo

    npm run demo

## Release

    npm test && npm run typecheck && npm run build
    git add -A && git commit -m "vX.Y.Z"
    git tag vX.Y.Z && git push && git push --tags

`dist/` is committed on purpose: sites install from the tag with no build.
