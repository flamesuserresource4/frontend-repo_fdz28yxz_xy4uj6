import { PlayCircle } from 'lucide-react'

function Showcase() {
  return (
    <section id="showcase" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">AI-generated microdrama reels</h2>
          <a href="#cta" className="text-sm text-white/80 hover:text-white">See how it works →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/5] bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20" />
              <div className="absolute inset-0 grid place-items-center">
                <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="h-5 w-5" /> Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
    </section>
  )
}

export default Showcase
