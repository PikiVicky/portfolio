import { experience } from '../data'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Experience() {
  return (
    <section id="pengalaman" className="scroll-mt-20 border-y border-ink/10 bg-paper-deep/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHead index="02" label="Pengalaman" title="Dari magang sampai memegang aplikasi sendiri." />
        <ol className="ml-2 border-l-2 border-ink/25">
          {experience.map((job) => (
            <li key={job.company} className="relative pb-12 pl-7 last:pb-0 sm:pl-10">
              <span
                className={`absolute top-1.5 -left-[9px] size-4 rounded-full border-2 border-ink ${
                  job.current ? 'bg-signal' : 'bg-paper'
                }`}
                aria-hidden="true"
              />
              <Reveal>
                <p className="inline-block rounded bg-ink px-2 py-1 font-mono text-xs font-bold tracking-wider text-lamp">
                  {job.period}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold">{job.role}</h3>
                <p className="text-ink-soft">
                  {job.company} · {job.place}
                </p>
                <p className="mt-3 max-w-2xl leading-relaxed">{job.summary}</p>
                <ul className="mt-3 flex max-w-2xl list-disc flex-col gap-1 pl-5 text-sm text-ink-soft marker:text-signal">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-ink/30 bg-card px-3 py-1 font-mono text-xs font-medium"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
