import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* Soft starfield dots */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.08),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.08),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.06),transparent_25%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} Inculture Labs</p>
          <div className="text-white/70 text-sm">Made with AI • Microdramas, macro impact</div>
        </div>
      </footer>
    </div>
  )
}

export default App
