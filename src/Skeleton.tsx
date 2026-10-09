export function Skeleton({ lines = 3, label = 'Loading' }: { lines?: number; label?: string }) {
  return (
    <div className="ak-skel" role="status" aria-label={label}>
      {Array.from({ length: lines }, (_, i) => <div key={i} className="ak-skel__line" />)}
    </div>
  )
}
