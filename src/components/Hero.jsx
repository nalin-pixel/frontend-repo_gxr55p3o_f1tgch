import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm">
            SPIDOL · Sistem Pengelolaan Sarpras Online
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Kelola sarana dan prasarana sekolah secara modern, cepat, dan terstruktur.
          </h1>
          <p className="mt-4 text-slate-600">
            Mulai dari pengajuan proposal, verifikasi, hingga proyeksi anggaran—semua dalam satu
            platform terpadu untuk Admin, Verifikator, dan Sekolah.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            >
              Lihat Fitur
            </a>
            <a
              href="#roles"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              Peran Pengguna
            </a>
          </div>
        </div>
        <div className="h-[380px] w-full rounded-xl border border-slate-200 bg-white shadow-sm lg:h-[480px]">
          <Spline scene="https://prod.spline.design/7k1w3Q8M1N1oYQb0/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
    </section>
  );
}
