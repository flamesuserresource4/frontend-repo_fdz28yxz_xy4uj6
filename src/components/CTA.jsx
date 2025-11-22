function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-600/20 via-indigo-600/20 to-cyan-500/10 p-8 backdrop-blur-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center">Be an early creator on Inculture</h3>
          <p className="mt-3 text-slate-200/90 text-center">Get early access, product updates, and a chance to pitch your IP. We’re onboarding founding storytellers now.</p>

          <form className="mt-6 grid sm:grid-cols-[1fr_auto] gap-3">
            <input type="email" placeholder="Enter your email" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" required />
            <button className="rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 hover:shadow-lg hover:shadow-fuchsia-500/20 transition-shadow">Join waitlist</button>
          </form>

          <p className="mt-3 text-xs text-white/70 text-center">By joining, you agree to receive updates. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}

export default CTA
