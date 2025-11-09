import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Roles from './components/Roles';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} SPIDOL · Sistem Pengelolaan Informasi Data Sarpras Online
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <section id="overview" className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Apa itu SPIDOL?</h2>
            <p className="mt-3 text-slate-600">
              Platform terpadu untuk pengelolaan sarana dan prasarana sekolah secara online, mencakup
              pengajuan proposal, verifikasi data, proyeksi anggaran, manajemen pengguna, aktivitas,
              template ekspor, hingga riwayat bantuan—dirancang untuk Admin, Verifikator, dan Sekolah.
            </p>
          </div>
        </section>
        <Roles />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
