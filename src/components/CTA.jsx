import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-indigo-600">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{
        background: 'radial-gradient(1200px 400px at 50% -10%, rgba(255,255,255,0.65), transparent 60%)'
      }} />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Siap memulai dengan SPIDOL?
          </h2>
          <p className="mt-3 text-indigo-100">
            Hubungi tim Anda untuk aktivasi akun Admin, Verifikator, atau Sekolah dan mulai kelola data hari ini.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 shadow-sm transition hover:bg-indigo-50"
            >
              Dapatkan Akses <ArrowRight size={16} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Jelajahi Fitur
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
