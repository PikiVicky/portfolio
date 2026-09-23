import { profile } from '../data'

const LINKS = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#pengalaman', label: 'Pengalaman' },
  { href: '#proyek', label: 'Proyek' },
  { href: '#keahlian', label: 'Keahlian' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="rounded bg-ink px-2.5 py-1 font-mono text-sm font-bold tracking-widest text-lamp"
          aria-label="Ke atas"
        >
          {profile.initials}
        </a>
        <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-ink-soft transition hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#kontak"
          className="rounded-full bg-signal px-4 py-1.5 text-sm font-semibold text-ink transition hover:bg-lamp"
        >
          Hubungi saya
        </a>
      </nav>
    </header>
  )
}
