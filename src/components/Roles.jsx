import { Building2, Shield, School } from 'lucide-react';

const roles = [
  {
    icon: Building2,
    title: 'Admin',
    highlights: [
      'Dashboard dengan rekap dan grafik',
      'Kelola data sarpras terverifikasi',
      'Pantau proposal & proyeksi anggaran',
      'Manajemen pengguna & aktivitas',
      'Kelola template & riwayat bantuan',
    ],
  },
  {
    icon: Shield,
    title: 'Verifikator',
    highlights: [
      'Periksa dan verifikasi data sarpras',
      'Terima / Tolak / Revisi dengan alasan',
      'Verifikasi proposal dan isi data tambahan',
      'Edit data terverifikasi kapan saja',
    ],
  },
  {
    icon: School,
    title: 'Sekolah',
    highlights: [
      'Kelola data sarpras sekolah sendiri',
      'Ajukan proposal bantuan',
      'Lihat riwayat bantuan yang diterima',
      'Dashboard ringkas untuk monitoring',
    ],
  },
];

export default function Roles() {
  return (
    <section id="roles" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Peran Pengguna
          </h2>
          <p className="mt-3 text-slate-600">Setiap peran memiliki akses dan tugas yang jelas.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <div key={r.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700 ring-1 ring-indigo-600/20">
                <r.icon size={20} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{r.title}</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                {r.highlights.map((h) => (
                  <li key={h} className="leading-relaxed">• {h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
