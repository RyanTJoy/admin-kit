export function ProgressBar({ value, max, label }: { value: number; max: number; label: string }) {
  const percent = max <= 0 ? 0 : Math.max(0, Math.min(100, Math.round((value / max) * 100)))
  return (
    <div className="ak-progress" role="progressbar" aria-label={label} aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
      <div className="ak-progress__bar" style={{ width: `${percent}%` }} />
    </div>
  )
}
