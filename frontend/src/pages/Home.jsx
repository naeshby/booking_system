import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const SERVICES = [
  { icon: '📸', label: 'Photography' },
  { icon: '🎨', label: 'Graphic Design' },
  { icon: '💻', label: 'Web Design' },
  { icon: '🖨️', label: 'Custom Printing' },
  { icon: '🎬', label: 'Video Animation' },
]

const STEPS = [
  { step: '01', title: 'Choose a Service', desc: 'Pick from photography, design, print, web, or animation.' },
  { step: '02', title: 'Pick a Date & Time', desc: 'Select a slot that works for you — we confirm within 2 hours.' },
  { step: '03', title: 'Get Creative', desc: 'We get to work and deliver results that exceed expectations.' },
]

export default function Home() {
  useEffect(() => {
    document.title = 'Glamour Shots — Creative Services & Booking'
  }, [])

  return (
    <div className="min-h-screen bg-cream font-body">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display text-xl font-bold text-ink">
            Glamour<span className="text-brand-600">Shots</span>
          </span>
          <Link to="/book" className="btn-primary text-xs px-5 py-2.5">
            Book Now
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-100 rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold px-4 py-2 rounded-full mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: '0s', animationFillMode: 'forwards' }}
          >
            <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
            Now accepting appointments
          </div>

          <h1
            className="font-display text-5xl md:text-7xl text-ink leading-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            Creative services,
            <br />
            <span className="italic text-brand-700">beautifully delivered.</span>
          </h1>

          <p
            className="text-ink-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Photography, graphic design, web design, custom printing, and video animation — all in one place. Book your appointment in under 60 seconds.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <Link to="/book" className="btn-primary px-8 py-4 text-base">
              Book an Appointment →
            </Link>
            <a
              href="mailto:hello@glamourshots.co"
              className="btn-outline px-8 py-4 text-base"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services strip */}
      <section className="py-16 px-6 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-ink-muted mb-10">
            What we do
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
            {SERVICES.map(({ icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 group cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center text-2xl group-hover:bg-brand-100 group-hover:scale-110 transition-all duration-200">
                  {icon}
                </div>
                <span className="text-sm font-medium text-ink text-center leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-ink mb-4">How it works</h2>
            <p className="text-ink-muted text-base max-w-xl mx-auto">
              From booking to final delivery, we keep it simple and efficient.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map(({ step, title, desc }, i) => (
              <div key={step} className="card p-8 hover:shadow-md transition-shadow duration-300">
                <p className="font-mono text-4xl font-bold text-brand-200 mb-4">{step}</p>
                <h3 className="font-display text-xl text-ink mb-3">{title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 bg-ink">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-slate-400 text-base mb-10 leading-relaxed">
            Book an appointment today and let's create something you'll be proud of.
          </p>
          <Link to="/book" className="inline-flex items-center gap-2 bg-accent hover:bg-amber-400 text-ink font-semibold text-sm px-8 py-4 rounded-lg transition-all duration-200 active:scale-95 shadow-lg">
            Book Your Appointment →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-slate-100 bg-cream">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-bold text-ink">
            Glamour<span className="text-brand-600">Shots</span>
          </span>
          <p className="text-ink-muted text-xs">
            © {new Date().getFullYear()} Glamour Shots Creative Services. All rights reserved.
          </p>
          <Link to="/book" className="text-xs text-brand-600 hover:underline font-medium">
            Book Appointment
          </Link>
        </div>
      </footer>
    </div>
  )
}
