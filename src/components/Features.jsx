import { ShieldCheck, FileCheck, BarChart3, Users2, Download } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Verifikasi Terstruktur',
    desc: 'Alur verifikasi data sarpras dan proposal dengan status Terima, Tolak, atau Revisi beserta catatan.',
  },
  {
    icon: FileCheck,
    title: 'Manajemen Proposal',
    desc: 'Proses pengajuan, pemeriksaan, dan persetujuan proposal yang rapi dan terdokumentasi.',
  },
  {
    icon: BarChart3,
    title: 'Proyeksi Anggaran',
    desc: 'Rekap anggaran berdasarkan jenjang, jenis prasarana, dan kondisi bangunan dalam bentuk tabel dan grafik.',
  },
  {
    icon: Users2,
    title: 'Manajemen Pengguna',
    desc: 'Kelola akun Admin, Verifikator, dan Sekolah dalam satu tempat dengan kontrol akses yang jelas.',
  },
  {
    icon: Download,
    title: 'Ekspor Laporan',
    desc: 'Ekspor data ke PDF, Excel, atau Word dengan template yang dapat disesuaikan.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Fitur Utama</h2>
          <p className="mt-3 text-slate-600">
            Dirancang untuk kebutuhan pengelolaan sarpras sekolah dari hulu ke hilir.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700 ring-1 ring-indigo-600/20">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
