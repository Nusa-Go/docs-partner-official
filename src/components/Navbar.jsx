import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, LayoutGrid } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchItems = [
    { label: "Register Akun", slug: "register-akun" },
    { label: "Login Dashboard", slug: "login" },
    { label: "Verifikasi OTP", slug: "verifikasi-otp" },
    { label: "Ganti Password", slug: "ganti-password" },
    { label: "Daftar Hotel", slug: "daftar-hotel" },
    { label: "Daftar Kost", slug: "daftar-kost" },
    { label: "Daftar Villa", slug: "daftar-villa" }
  ];

  const filteredResults = searchItems.filter(item => 
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 font-roboto">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        
        {/* LOGO SECTION */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-9 h-9 overflow-hidden rounded-xl transition-transform duration-300 group-hover:rotate-6 bg-slate-100">
            <img 
              src="/nus.png" 
              alt="Logo" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex flex-col">
            <span className="block font-bold text-[15px] md:text-lg leading-tight text-slate-900 tracking-tight">
              NusaGo <span className="text-primary">Partner</span>
            </span>
            <span className="block text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-0.5">
              Docs & Help Center
            </span>
          </div>
        </Link>

        {/* DESKTOP SEARCH & CTA */}
        <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
          <div className="relative group w-full max-w-[240px]">
            <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
              <Search size={14} />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari panduan..."
              className="w-full bg-slate-100 border-transparent py-2 pl-10 pr-4 rounded-xl text-[12px] font-bold outline-none focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all duration-300"
            />
            
            {searchQuery && (
              <div className="absolute top-full right-0 w-64 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                {filteredResults.length > 0 ? (
                  filteredResults.slice(0, 5).map((item) => (
                    <button 
                      key={item.slug}
                      onClick={() => {
                        navigate(`/docs/${item.slug}`);
                        setSearchQuery("");
                      }}
                      className="w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50 text-slate-700 transition-colors border-b border-slate-50 last:border-0"
                    >
                      <span className="font-bold text-[11px]">{item.label}</span>
                      <ArrowRight size={12} className="text-primary/30" />
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-3 text-[11px] text-slate-400 font-medium italic">Tidak ditemukan...</div>
                )}
              </div>
            )}
          </div>
          
          <a 
            href="https://partner.nusago.id" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-2 bg-slate-900 text-white text-[12px] font-bold rounded-xl shadow-xl shadow-slate-900/5 hover:bg-primary transition-all active:scale-95 shrink-0"
          >
            Masuk
          </a>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="flex md:hidden items-center gap-1">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-xl transition-all ${isOpen ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'}`}
            >
              {isOpen ? <X size={20} /> : <LayoutGrid size={20} />}
            </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[400px] border-b border-slate-100' : 'max-h-0'}`}>
        <div className="p-4 bg-slate-50/50 flex flex-col gap-4">
          {/* Mobile Search */}
          <div className="relative">
             <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
             <input 
              type="text" 
              placeholder="Cari sesuatu..." 
              className="w-full bg-white border border-slate-200 py-3 pl-12 pr-4 rounded-xl text-[13px] font-bold outline-none focus:border-primary/50 transition-all" 
             />
          </div>

          {/* Quick Links / Mobile CTA */}
          <div className="grid grid-cols-1 gap-2">
            <a 
              href="https://partner.nusago.id" 
              className="flex items-center justify-center gap-2 py-4 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 font-bold text-[13px] active:scale-[0.98] transition-transform"
            >
              Buka Dashboard Partner
              <ArrowRight size={16} />
            </a>
            <Link 
              to="/docs"
              onClick={() => setIsOpen(false)}
              className="text-center py-3 text-slate-500 font-bold text-[12px] hover:text-primary transition-colors"
            >
              Lihat Semua Dokumentasi
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;