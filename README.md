# @ryantjoy/admin-kit

Shared admin UI for the CardBoard, Omes, and Compass back offices. One
stylesheet, React primitives, a shell. No dependency on Next, Tailwind, or
any site code.

v1.2 is a light-theme refresh: 8px spacing, softer radii, calm neutrals,
CardBoard gold as the accent, shadows on cards and panels, a clearer button
ladder, and a visible focus ring that still contrasts on gold.

## Install (from a git tag, no registry)

    npm install github:RyanTJoy/admin-kit#v1.2.0

Until the tag ships, pin a branch or commit:

    npm install github:RyanTJoy/admin-kit#cursor/admin-kit-v1-2-0-refresh-d2d6

In the admin layout:

    import '@ryantjoy/admin-kit/styles.css'

All kit rules live in `@layer ak`. Sites using Tailwind v4 must declare the
layer order before importing Tailwind so kit rules beat preflight but lose to
utilities:

    @layer theme, base, ak, components, utilities;
    @import 'tailwindcss';

Set the font once in the site's global CSS so the kit uses the loaded face:

    .ak-shell { --ak-font: var(--font-inter), system-ui, sans-serif; }

## Brand

    const brand = { name: 'CardBoard', tagline: 'Operations', accent: '#e5b924', accentInk: '#0a1628' }
    <AdminShell brand={brand} nav={nav} currentPath={pathname} link={NextLink}>...</AdminShell>

`accent` is used for the primary button, the current nav tab, and progress.
Keyboard focus is a 2px ink ring with a 2px offset so it stays visible on gold.

At 900px and below, overflow nav items move under More. The phone tab bar
still pins the first four `phone` items (or the first four internal items).
Desktop nav does not grow a stray scroller.

## Buttons

Variants: `primary`, `secondary`, `quiet` (alias `ghost`), `danger`.
Pass `disabledReason` to show helper text under a disabled control.

    <Button disabled disabledReason="Add a title first">Next</Button>

## ConfirmDialog

    <ConfirmDialog
      open={open}
      title="Mark this order paid?"
      description="The pay link closes."
      confirmLabel="Mark paid"
      tone="danger"
      onConfirm={confirm}
      onCancel={() => setOpen(false)}
    />

## Layers

tokens (styles.css) → primitives (Button, Field, Segmented, Badge, Card,
Stat, ProgressBar, Banner, EmptyState, Skeleton, List, Row, Menu,
ActionGroup, ConfirmDialog) → shell (AdminShell, PageHeader, SectionHeader,
LoginGate).

## Demo

    npm run demo

## Release

    npm test && npm run typecheck && npm run build
    git add -A && git commit -m "vX.Y.Z"
    git tag vX.Y.Z && git push && git push --tags

`dist/` is committed on purpose: sites install from the tag with no build.
