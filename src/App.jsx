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
        © {new Date().getFullYear()} {profile.name} · Dibuat dengan React, Vite, dan Tailwind CSS
      </footer>
    </>
  )
}
