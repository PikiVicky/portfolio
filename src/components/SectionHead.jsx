export default function SectionHead({ index, label, title }) {
  return (
    <div className="mb-10 flex flex-col gap-3">
      <p className="flex items-center gap-3 font-mono text-xs font-bold tracking-widest text-signal-deep uppercase">
        <span className="rounded bg-ink px-2 py-1 text-lamp">{index}</span>
        {label}
      </p>
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}
