import { useEffect, useState } from 'react'
import { profile, stats, tickerItems } from '../data'

function useCountUp(target, duration = 900) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }
    let frame
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setValue(Math.round(target * (1 - (1 - progress) ** 3)))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, duration])

  return value
}

function ScoreCell({ value, suffix, label }) {
  const shown = useCountUp(value)
  const digits = String(shown).padStart(2, '0').split('')

  return (
    <div className="flex flex-col gap-3 bg-ink p-4 sm:p-5">
      <p
        className="flex items-end gap-1 font-mono text-4xl font-bold text-lamp tabular-nums sm:text-5xl"
        aria-label={`${value}${suffix} ${label}`}
      >
        {digits.map((digit, i) => (
          <span key={i} className="digit" aria-hidden="true">
            {digit}
          </span>
        ))}
        {suffix && (
          <span className="pb-1 text-2xl text-signal" aria-hidden="true">
            {suffix}
          </span>
        )}
      </p>
      <p className="text-xs leading-snug text-paper/70 sm:text-sm">{label}</p>
    </div>
  )
}

function Ticker() {
  // Two copies so the -50% translate loops seamlessly.
  const items = [...tickerItems, ...tickerItems]
  return (
    <div className="marquee overflow-hidden border-y border-ink/15 bg-paper-deep py-3" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="flex items-center font-mono text-sm font-bold tracking-wide whitespace-nowrap uppercase">
            <span className="px-5">{item}</span>
            <span className="text-signal">●</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <>
      <section id="top" className="mx-auto max-w-6xl px-4 pt-14 pb-12 sm:px-6 sm:pt-20">
        <p className="mb-6 font-mono text-sm font-bold tracking-widest text-signal-deep uppercase">
          {profile.role} · {profile.location}
        </p>
        <h1 className="font-display text-5xl leading-[1.02] font-extrabold tracking-tight text-balance sm:text-7xl lg:text-8xl">
          Saya membangun aplikasi dari <span className="marker">database</span> sampai layar.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Halo, saya <strong className="text-ink">{profile.name}</strong>. {profile.intro}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#proyek"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-signal-deep"
          >
            Lihat proyek
          </a>
          <a
            href="#kontak"
            className="rounded-full border-2 border-ink px-6 py-3 text-sm font-semibold transition hover:bg-lamp"
          >
            Hubungi saya
          </a>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border-2 border-ink shadow-[6px_6px_0_0_var(--color-signal)]">
          <div className="flex items-center justify-between bg-ink px-4 py-2 font-mono text-[11px] font-bold tracking-widest text-paper/60 uppercase sm:px-5">
            <span className="flex items-center gap-2">
              <span className="live-dot text-signal">●</span> Live · Ringkasan karier
            </span>
            <span className="hidden sm:inline">Skor sementara</span>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
            {stats.map((stat) => (
              <ScoreCell key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>
      <Ticker />
    </>
  )
}
