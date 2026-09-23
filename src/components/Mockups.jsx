// CSS-only illustrations of each project's UI. Not screenshots.

export function ScoreboardMockup() {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border-2 border-ink bg-ink p-4 text-paper" role="img" aria-label="Ilustrasi tampilan Universal Scoreboard">
      <div className="flex items-center justify-between font-mono text-[11px] font-bold tracking-widest uppercase">
        <span className="text-paper/60">Lapangan 1 · Badminton</span>
        <span className="flex items-center gap-1.5 text-signal">
          <span className="live-dot">●</span> Live
        </span>
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-xl bg-black/30 p-4">
        <div className="text-center">
          <p className="font-mono text-xs text-paper/60">TIM A</p>
          <p className="digit mt-1 font-mono text-5xl font-bold text-lamp">21</p>
        </div>
        <p className="font-mono text-xl text-paper/40">:</p>
        <div className="text-center">
          <p className="font-mono text-xs text-paper/60">TIM B</p>
          <p className="digit mt-1 font-mono text-5xl font-bold text-paper">19</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 font-mono text-[11px] font-bold">
        {['Bola', 'Basket', 'Tenis', 'Badminton'].map((sport) => (
          <span
            key={sport}
            className={`rounded-full px-3 py-1 ${sport === 'Badminton' ? 'bg-lamp text-ink' : 'border border-paper/30 text-paper/70'}`}
          >
            {sport}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-paper/60">
        {['Lap. 1', 'Lap. 2', 'Lap. 3'].map((court, i) => (
          <div key={court} className="rounded-lg border border-paper/20 p-2">
            <p>{court}</p>
            <p className="mt-1 text-sm font-bold text-paper">{['21–19', '11–8', '3–6'][i]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SpotfinderMockup() {
  const places = [
    { name: 'Kopi Senja', rating: '4.6', meta: '0.4 km · Buka sekarang', tone: 'from-amber-300 to-orange-400' },
    { name: 'Warung Pojok', rating: '4.3', meta: '0.9 km · Buka sekarang', tone: 'from-stone-300 to-amber-200' },
  ]
  return (
    <div className="flex flex-col gap-3 rounded-2xl border-2 border-ink bg-[#fffaf3] p-4" role="img" aria-label="Ilustrasi tampilan SpotFinder">
      <div className="flex gap-2">
        <div className="flex-1 rounded-lg border border-amber-200 bg-white px-3 py-2 text-xs text-stone-500">
          Malioboro, Yogyakarta
        </div>
        <div className="rounded-lg bg-amber-700 px-3 py-2 text-xs font-semibold text-white">Cari</div>
      </div>
      <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold">
        {['Ngopi', 'Makan', 'Nongkrong', 'Pom Bensin'].map((cat) => (
          <span
            key={cat}
            className={`rounded-full px-3 py-1 ${cat === 'Ngopi' ? 'bg-amber-700 text-white' : 'border border-amber-300 text-amber-900'}`}
          >
            {cat}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {places.map((place) => (
          <div key={place.name} className="overflow-hidden rounded-xl border border-amber-200 bg-white">
            <div className={`h-16 bg-gradient-to-br ${place.tone}`} />
            <div className="p-2">
              <p className="text-xs font-semibold text-stone-900">{place.name}</p>
              <p className="text-[11px] text-stone-700">
                <span className="text-amber-500">★</span> {place.rating}
              </p>
              <p className="text-[10px] text-stone-500">{place.meta}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="self-center rounded-full bg-amber-700 px-4 py-1.5 text-[11px] font-semibold text-white">
        Coba ke Kopi Senja!
      </p>
    </div>
  )
}
