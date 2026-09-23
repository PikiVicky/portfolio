import { about, profile } from '../data'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function About() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHead index="01" label="Tentang" title="Programmer yang suka memahami masalahnya dulu." />
      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="flex flex-col gap-5 text-lg leading-relaxed text-ink-soft lg:col-span-3">
          {about.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </Reveal>
        <div className="flex flex-col gap-4 lg:col-span-2">
          {profile.photo && (
            <Reveal>
              <figure className="mx-auto mb-4 max-w-xs -rotate-2 rounded-2xl border-2 border-ink bg-card p-3 shadow-[6px_6px_0_0_var(--color-signal)] transition hover:rotate-0 lg:max-w-none">
                <img
                  src={profile.photo}
                  alt={`Foto ${profile.name}`}
                  width="900"
                  height="1200"
                  loading="lazy"
                  className="aspect-[3/4] w-full rounded-lg object-cover"
                />
                <figcaption className="mt-3 text-center font-mono text-xs font-bold tracking-widest text-ink-soft uppercase">
                  Di luar layar
                </figcaption>
              </figure>
            </Reveal>
          )}
          {about.traits.map((trait, i) => (
            <Reveal key={trait.title} delay={i * 90}>
              <div className="rounded-xl border-2 border-ink bg-card p-5 shadow-[4px_4px_0_0_var(--color-ink)]">
                <h3 className="font-display text-xl font-bold">{trait.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{trait.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
