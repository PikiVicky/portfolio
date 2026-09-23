import { profile } from '../data'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="kontak" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <Reveal>
        <div className="mx-auto max-w-4xl rounded-3xl border-2 border-ink bg-ink p-8 text-center text-paper shadow-[8px_8px_0_0_var(--color-signal)] sm:p-14">
          <p className="font-mono text-xs font-bold tracking-widest text-lamp uppercase">05 · Kontak</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Punya ide atau kebutuhan aplikasi? Ayo ngobrol.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-paper/70">
            Saya terbuka untuk diskusi soal pekerjaan, kolaborasi, atau sekadar bertukar cerita seputar pengembangan
            aplikasi.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-lamp px-6 py-3 text-sm font-bold text-ink transition hover:bg-signal"
            >
              {profile.email}
            </a>
            {profile.whatsapp && (
              <a
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border-2 border-paper/60 px-6 py-3 text-sm font-bold transition hover:bg-paper hover:text-ink"
              >
                WhatsApp
              </a>
            )}
          </div>
          <p className="mt-6 font-mono text-xs text-paper/50">{profile.location}</p>
        </div>
      </Reveal>
    </section>
  )
}
