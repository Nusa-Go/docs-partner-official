import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import ArticlePage from './pages/ArticlePage';

// Helper agar setiap pindah halaman, scroll otomatis balik ke atas
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  return null;
};

function App() {
  // Inisialisasi Bahasa & Global Style
  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (!savedLang) {
      const browserLang = navigator.language.startsWith('id') ? 'id' : 'en';
      localStorage.setItem('lang', browserLang);
    }
    document.body.style.overflowX = 'hidden';
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* PARENT ROUTE: Layout (Navbar & Footer ada di sini) */}
        <Route path="/" element={<Layout />}>
          
          {/* Halaman Utama - Path: "/" */}
          <Route index element={<Home />} />
          
          {/* PERBAIKAN DI SINI: 
              Ubah 'artikel' menjadi 'docs' agar sesuai dengan Link 
              yang ada di Home.jsx dan ArticlePage.jsx 
          */}
          <Route path="docs">
            <Route index element={<ArticlePage />} />
            <Route path=":id" element={<ArticlePage />} />
          </Route>

          {/* Halaman 404 tetap di dalam Layout agar Navbar/Footer tidak hilang */}
          <Route path="*" element={
            <div className="min-h-[60vh] flex flex-col items-center justify-center bg-transparent py-20">
              <h1 className="text-9xl font-black text-primary opacity-10 absolute pointer-events-none uppercase">404</h1>
              <div className="text-center z-10">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Halaman tidak ditemukan</h2>
                <p className="text-slate-500 mb-8 font-medium">Panduan yang kamu cari tidak tersedia.</p>
                <button 
                  onClick={() => window.location.href = '/'}
                  className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-all"
                >
                  Kembali ke Beranda
                </button>
              </div>
            </div>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;