import Spline from '@splinetool/react-spline'
import { Play } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 md:pt-32 md:pb-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(40%_40%_at_80%_0%,rgba(236,72,153,0.2),transparent_60%)]" />

      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Foreground content */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AI-powered microdramas for mythology & history
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_24px_rgba(168,85,247,0.2)]">
                Inculture
                <span className="block bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">The new-age Bollywood for the internet</span>
              </h1>

              <p className="mt-6 text-lg text-slate-200/90 max-w-xl">
                We create, distribute, and iterate — blending AI filmmaking with audience feedback to deliver bite-sized OTT experiences. Start with Indian mythology and history, scale to every story.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 font-semibold px-5 py-3 shadow-lg shadow-fuchsia-500/10 hover:shadow-fuchsia-500/20 transition-shadow">
                  <Play className="h-5 w-5" />
                  Watch demo
                </a>
                <a href="#features" className="inline-flex items-center gap-2 rounded-lg bg-white/10 text-white font-medium px-5 py-3 border border-white/10 hover:bg-white/15">
                  Explore features
                </a>
              </div>
            </div>

            <div className="md:col-span-6 lg:col-span-6">
              {/* Glass overlay to ensure text clickability over Spline */}
              <div className="pointer-events-none relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
                <div className="aspect-video w-full rounded-xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10" />
                <p className="mt-4 text-sm text-white/70">Immersive 3D teaser: astronaut reaching for stories across time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay to improve contrast and allow interaction */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
    </section>
  )
}

export default Hero
