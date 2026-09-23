import { projects } from '../data'
import { ScoreboardMockup, SpotfinderMockup } from './Mockups'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

const MOCKUPS = { scoreboard: ScoreboardMockup, spotfinder: SpotfinderMockup }

function LinkButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border-2 border-ink px-4 py-1.5 text-sm font-semibold transition hover:bg-lamp"
    >
      {children}
    </a>
  )
}

export default function Projects() {
  return (
    <section id="proyek" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHead index="03" label="Proyek" title="Dua proyek eksplorasi yang bisa dicoba langsung." />
      <div className="flex flex-col gap-16">
        {projects.map((project, i) => {
          const Mockup = MOCKUPS[project.id]
          return (
            <Reveal key={project.id}>
              <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <Mockup />
                  <p className="mt-2 text-center font-mono text-[11px] text-ink-soft">Ilustrasi tampilan</p>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="font-mono text-xs font-bold tracking-widest text-signal-deep uppercase">
                    {project.kind}
                  </p>
                  <h3 className="font-display text-3xl font-extrabold tracking-tight">{project.title}</h3>
                  <p className="text-lg font-medium text-balance">{project.tagline}</p>
                  <p className="leading-relaxed text-ink-soft">{project.description}</p>
                  <ul className="flex list-disc flex-col gap-1.5 pl-5 text-sm text-ink-soft marker:text-signal">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-ink/30 bg-card px-3 py-1 font-mono text-xs font-medium"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  {(project.repo || project.demo) && (
                    <div className="flex flex-wrap gap-3 pt-1">
                      {project.demo && <LinkButton href={project.demo}>Coba demo</LinkButton>}
                      {project.repo && <LinkButton href={project.repo}>Kode di GitHub</LinkButton>}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
