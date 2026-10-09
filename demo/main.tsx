/// <reference types="vite/client" />
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import '../src/styles.css'
import {
  ActionGroup, AdminShell, Badge, Banner, Button, Card, Checkbox, EmptyState, Field, Input, List, LoginGate, Menu, MenuItem,
  PageHeader, ProgressBar, Row, SectionHeader, Segmented, Select, Skeleton, Stat, StatRow, Textarea, type Brand,
} from '../src/index'

const BRANDS: Record<string, Brand> = {
  cardboard: { name: 'CardBoard', tagline: 'Operations', accent: '#e5b924', accentInk: '#0a1628' },
  compass: { name: 'Compass Sports Cards', tagline: 'Operations', accent: '#0f766e', accentInk: '#ffffff' },
  omes: { name: "O.M.E's Card Shop", tagline: 'Operations', accent: '#7c2d12', accentInk: '#ffffff' },
}
const NAV = [
  { href: '/admin', label: 'Breaks' },
  { href: '/admin/orders', label: 'Orders' },
  { href: '/admin/purchases', label: 'Buying' },
  { href: '/admin/accounting', label: 'Money' },
  { href: '/admin/live', label: 'Live control' },
  { href: 'https://admin.shopify.com', label: 'Shopify inventory ↗', external: true },
]

function Demo() {
  const [brand, setBrand] = useState<keyof typeof BRANDS>('cardboard')
  const [layout, setLayout] = useState<'focus' | 'stack'>('focus')
  return (
    <AdminShell brand={BRANDS[brand]} nav={NAV} currentPath="/admin" primaryAction={<Button variant="primary" size="sm">+ New break</Button>}>
      <PageHeader eyebrow="Kit demo" title="Every component" description="Switch the brand to see how one accent carries a whole back office." actions={<Segmented label="Brand" value={brand} options={Object.keys(BRANDS).map((k) => ({ value: k as keyof typeof BRANDS, label: BRANDS[k as keyof typeof BRANDS].name }))} onChange={setBrand} />} />
      <div className="ak-stack">
        <Card title="Buttons" description="One primary per page. Everything else is secondary or quiet.">
          <ActionGroup>
            <Button variant="primary">Go live</Button>
            <Button>Setup &amp; boxes</Button>
            <Button variant="quiet">Preview ↗</Button>
            <Button variant="danger">Remove</Button>
            <Button busy busyLabel="Updating…">Save</Button>
            <Menu label="More"><MenuItem href="#">Accounting</MenuItem><MenuItem onClick={() => {}}>Return to selling</MenuItem></Menu>
          </ActionGroup>
        </Card>
        <StatRow>
          <Stat label="Available to buy" value="2" />
          <Stat label="Open spots" value="34" />
          <Stat label="Spot value sold" value="$290" hint="tonight" />
        </StatRow>
        <Card title="Fields">
          <div className="ak-stack ak-stack--tight">
            <Field label="Title" hint="customer facing" htmlFor="d-title"><Input id="d-title" defaultValue="Break #039: 2026 Bowman Football" /></Field>
            <Field label="Description" htmlFor="d-desc"><Textarea id="d-desc" defaultValue="Claim a school. Every card ships." /></Field>
            <Field label="Lot" htmlFor="d-lot"><Select id="d-lot"><option>2026 Bowman Football Hobby</option></Select></Field>
            <Checkbox label="Venmo" defaultChecked />
            <Segmented label="Layout" value={layout} options={[{ value: 'focus', label: 'Focus' }, { value: 'stack', label: 'Stack' }]} onChange={setLayout} />
          </div>
        </Card>
        <div className="ak-stack ak-stack--tight">
          <Banner title="Accounting is not reconciled. Closing is blocked." tone="danger">Shopify has 2 sold spots. The ledger has 0.</Banner>
          <Banner tone="warn" action={<Button size="sm">Enter cost</Button>}>Cost not entered for this break.</Banner>
          <Banner>Rips tomorrow live on TikTok around 8:30pm CST.</Banner>
        </div>
        <section>
          <SectionHeader title="Available to buy" description="All of these stay open for customers." count={2} />
          <List>
            <Row eyebrow="Break #039" title={<h3>2026 Bowman Football</h3>} meta="31 of 37 spots sold · $2,140 sold" trailing={<ActionGroup><Badge tone="accent">Filling now</Badge><Button variant="primary" size="sm">Test board</Button><Button size="sm">Setup &amp; boxes</Button></ActionGroup>}>
              <div style={{ marginTop: 8 }}><ProgressBar value={31} max={37} label="31 of 37 spots sold" /></div>
            </Row>
            <Row eyebrow="Break #040" title={<h3>Big League Chew</h3>} meta="12 of 15 spots sold" trailing={<Badge>On deck 1</Badge>} />
          </List>
        </section>
        <EmptyState title="No breaks yet" body="Build a break, add its boxes and prices, then publish it." action={<Button variant="primary">Build the first break</Button>} />
        <Skeleton lines={4} label="Loading breaks" />
        <Card title="Login gate" description="What an operator sees before unlocking.">
          <LoginGate title="CardBoard Admin" onSubmit={() => {}} error="Wrong password. Try again." />
        </Card>
        <div className="ak-actions"><Badge>Draft</Badge><Badge tone="accent">Filling now</Badge><Badge tone="ok">Live</Badge><Badge tone="warn">Needs cost</Badge><Badge tone="danger">Untracked</Badge></div>
      </div>
    </AdminShell>
  )
}

createRoot(document.getElementById('root')!).render(<Demo />)
