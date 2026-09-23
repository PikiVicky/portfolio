import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { profile } from './data'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-ink/10 px-4 py-8 text-center font-mono text-xs text-ink-soft">
        <p>
          Situs ini saya buat sendiri dengan React 19, Vite, dan Tailwind CSS 4.
          {profile.sourceRepo && (
            <>
              {' '}
              <a
                href={profile.sourceRepo}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-ink underline decoration-signal decoration-2 underline-offset-4 transition hover:text-signal-deep"
              >
                Lihat kodenya di GitHub
              </a>
            </>
          )}
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  )
}
