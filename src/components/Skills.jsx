import { education, languages, skillGroups } from '../data'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Skills() {
  return (
    <section id="keahlian" className="scroll-mt-20 border-t border-ink/10 bg-paper-deep/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHead index="04" label="Keahlian" title="Alat yang saya pakai, dari layar sampai database." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 80}>
              <div className="h-full rounded-xl border-2 border-ink bg-card p-5">
                <h3 className="font-display text-lg font-bold">{group.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-md bg-paper-deep px-2.5 py-1 font-mono text-xs font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-xl font-bold">Pendidikan</h3>
            <ul className="mt-4 flex flex-col gap-4">
              {education.map((edu) => (
                <li key={edu.name} className="flex flex-col gap-0.5">
                  <span className="font-mono text-xs font-bold text-signal-deep">{edu.period}</span>
                  <span className="font-semibold">{edu.name}</span>
                  <span className="text-sm text-ink-soft">{edu.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="font-display text-xl font-bold">Bahasa</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {languages.map((lang) => (
                <li key={lang} className="rounded-full border-2 border-ink px-4 py-1 text-sm font-semibold">
                  {lang}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
