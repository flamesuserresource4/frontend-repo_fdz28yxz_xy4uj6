import { Brain, Film, LineChart, Share2 } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 grid place-items-center mb-4">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
      <p className="text-slate-300/90 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_70%_10%,rgba(99,102,241,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Built for the next billion storytellers</h2>
          <p className="mt-3 text-slate-300/90 max-w-2xl mx-auto">From script to screen to stats — everything loops back to make the next episode better.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature icon={Brain} title="AI Writers' Room" desc="Prompt, iterate, and co-create mythic microdramas with fine-tuned story agents." />
          <Feature icon={Film} title="Auto-Production" desc="Text-to-video pipelines generate scenes, voices, music, and VFX in minutes." />
          <Feature icon={LineChart} title="Feedback DNA" desc="Engagement analytics flow back into models to sharpen pacing, arcs, and payoff." />
          <Feature icon={Share2} title="Everywhere OTT" desc="Distribute across mobile, web, and social with adaptive, snackable runtimes." />
        </div>
      </div>
    </section>
  )
}

export default Features
