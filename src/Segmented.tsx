'use client'
export type SegmentedOption<T extends string> = { value: T; label: string; disabled?: boolean }

export function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: T
  options: SegmentedOption<T>[]
  onChange: (value: T) => void
}) {
  return (
    <div role="group" aria-label={label} className="ak-seg">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className="ak-seg__btn"
          aria-pressed={option.value === value}
          disabled={option.disabled}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
