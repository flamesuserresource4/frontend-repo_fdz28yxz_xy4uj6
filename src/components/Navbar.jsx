import { Menu, Play, Film } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-md mt-4 px-4">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500 grid place-items-center">
              <Film className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight">Inculture</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#showcase" className="text-sm text-slate-300 hover:text-white transition-colors">Showcase</a>
            <a href="#about" className="text-sm text-slate-300 hover:text-white transition-colors">About</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#cta" className="hidden sm:inline-flex bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">Join waitlist</a>
            <button className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-lg border border-white/10 hover:bg-white/10">
              <Menu className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
