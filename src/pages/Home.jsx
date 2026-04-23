import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { ShieldCheck, User, FileText, MessageSquare, ArrowRight, Search, ChevronDown, Building2, Car, Key, Sparkles } from "lucide-react";
import mockupImg from "../assets/on.png"; 
import homeImg from "../assets/home.jpeg";
import regisImg from "../assets/regis.png";
import profilImg from "../assets/profil.png";
import inputImg from "../assets/input.png";
import editImg from "../assets/edit.png";

// --- 0. REUSABLE COMPONENTS ---
const FAQItem = ({ q, a, isOpen, onClick }) => (
  <div className="mb-4">
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between p-6 text-left transition-all duration-500 rounded-[2rem] border ${
        isOpen ? "bg-white border-primary/30 shadow-xl scale-[1.02]" : "bg-white border-slate-100 hover:border-primary/20 shadow-sm"
      }`}
    >
      <span className={`font-bold text-[15px] md:text-base tracking-tight ${isOpen ? "text-primary" : "text-slate-700"}`}>
        {q}
      </span>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-primary text-white rotate-180" : "bg-slate-100 text-slate-400"}`}>
        <ChevronDown size={16} strokeWidth={3} />
      </div>
    </button>
    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
      <div className="px-8 py-6 text-[14px] md:text-[15px] text-slate-500 leading-relaxed font-medium border-l-2 border-primary/20 ml-4 mt-2 bg-slate-50/50 rounded-r-3xl">
        "{a}"
      </div>
    </div>
  </div>
);

const Home = () => {
  // --- 1. STATES ---
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // --- 2. DATA CATEGORIES (Pastikan data ini ada/diimport) ---
  const categories = [
    { 
      name: "Autentikasi", 
      items: [
        { label: "Register akun", slug: "register-akun" },
        { label: "Login", slug: "login" },
        { label: "Verifikasi otp", slug: "verifikasi-otp" },
        { label: "Ganti password", slug: "ganti-password" }
      ] 
    },
    { 
      name: "Form application", 
      items: [
        { label: "Daftar hotel", slug: "daftar-hotel" },
        { label: "Daftar kost", slug: "daftar-kost" },
        { label: "Daftar villa", slug: "daftar-villa" },
        { label: "Daftar homestay", slug: "daftar-homestay" },
        { label: "Tambah rental", slug: "tambah-rental" }
      ] 
    },
  ];

  // --- 3. LOGIKA FILTER PENCARIAN ---
  const filteredCategories = categories.map(cat => ({
    ...cat,
    items: cat.items.filter(item => 
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  const faqs = [
    { q: "Bagaimana cara mendaftarkan properti pertama saya?", a: "Silakan akses dashboard utama, pilih tab 'Properti', lalu lengkapi dokumen legalitas serta foto unit Anda." },
    { q: "Berapa lama proses verifikasi akun partner?", a: "Tim kami melakukan kurasi data dalam waktu 1 hingga 3 hari kerja untuk memastikan standar kualitas NusaGo." },
    { q: "Bagaimana cara mengatur harga secara fleksibel?", a: "Gunakan fitur 'Smart Calendar' di dashboard untuk mengubah harga harian atau musiman secara instan." },
    { q: "Kapan saya akan menerima pembayaran dari reservasi tamu?", a: "Dana hasil reservasi akan dicairkan ke saldo partner (NusaGo Pay) maksimal 24 jam setelah tamu melakukan Check-Out." },
    { q: "Bagaimana kebijakan jika tamu melakukan pembatalan?", a: "Partner dapat memilih tiga tingkatan kebijakan pembatalan: Fleksibel, Moderat, atau Ketat melalui menu pengaturan profil." },
    { q: "Apakah saya bisa mengelola lebih dari satu jenis properti?", a: "Ya, satu akun partner NusaGo dapat mengelola berbagai kategori properti seperti Kost, Hotel, dan Villa dalam satu dashboard terpusat." }
  ];

  return (
    <div className="bg-[#FDFDFD] min-h-screen antialiased overflow-x-hidden selection:bg-primary/10 selection:text-primary font-roboto">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="bg-primary relative overflow-hidden flex items-center min-h-screen lg:h-[calc(100vh-80px)] px-6 md:px-12 pt-28 pb-20 md:py-0">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-20">
          
          <div className="text-white space-y-7 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-[60px] font-black tracking-tighter leading-[0.95]">
                Ada yang bisa <br />
                <span className="text-white/30 font-light">kami bantu?</span>
              </h1>
              <p className="text-base md:text-lg text-white/60 max-w-sm mx-auto lg:mx-0 font-medium leading-relaxed border-l-2 border-white/20 pl-6 text-left">
                Pelajari ekosistem <span className="text-white font-bold">NusaGo partner</span> dan kembangkan bisnis properti anda lebih cepat.
              </p>
            </div>

            {/* Search Bar - Ramping & Berfungsi */}
            <div className="relative group max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none z-10">
                <Search size={18} className="text-white/40 group-focus-within:text-primary transition-colors" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari topik bantuan..."
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 py-3.5 md:py-4 pl-14 pr-6 rounded-2xl outline-none text-white placeholder:text-white/30 shadow-xl focus:bg-white focus:text-slate-800 focus:placeholder:text-slate-400 transition-all duration-500 font-bold text-sm"
              />
              
              {/* Dropdown Hasil Pencarian Singkat */}
              {searchQuery && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-2xl overflow-hidden z-[100] border border-slate-100 animate-in fade-in slide-in-from-top-2">
                  {filteredCategories.length > 0 ? (
                    filteredCategories.flatMap(cat => cat.items).slice(0, 5).map((item) => (
                      <Link 
                        key={item.slug}
                        to={`/docs/${item.slug}`}
                        className="flex items-center justify-between px-5 py-4 hover:bg-slate-50 text-slate-700 transition-colors border-b border-slate-50 last:border-0"
                      >
                        <span className="font-bold text-[13px]">{item.label}</span>
                        <ArrowRight size={14} className="text-slate-300" />
                      </Link>
                    ))
                  ) : (
                    <div className="px-5 py-4 text-[13px] text-slate-400 font-medium italic text-left">Topik tidak ditemukan...</div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mockup Area */}
          <div className="relative h-[350px] md:h-[500px] w-full flex justify-center lg:justify-end items-center perspective-[2000px]">
            <div className="absolute inset-0 z-0 flex justify-center items-center lg:justify-end">
                <div className="w-[280px] h-[280px] md:w-[450px] md:h-[450px] bg-white/10 backdrop-blur-3xl rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border border-white/20 lg:translate-x-10 shadow-[0_0_100px_rgba(255,255,255,0.1)]" />
            </div>
            <div className="relative w-[260px] md:w-[400px] h-full transform-gpu rotate-x-[8deg] rotate-y-[-12deg] rotate-z-[4deg] z-10 scale-90 md:scale-100">
              <div className="absolute top-4 right-8 md:right-12 w-[160px] md:w-[240px] z-10 opacity-30 grayscale-[0.5] blur-[1px]">
                <div className="relative rounded-[2.5rem] md:rounded-[3rem] p-2 bg-[#0F172A] border-[4px] border-slate-800">
                  <img src={mockupImg} alt="Back" className="rounded-[2rem] md:rounded-[2.4rem] w-full" />
                </div>
              </div>
              <div className="absolute bottom-4 md:bottom-8 left-0 md:left-4 w-[160px] md:w-[230px] z-20 transition-all duration-700 hover:translate-y-[-15px] hover:rotate-y-[10deg]">
                <div className="absolute inset-0 bg-black/40 blur-[40px] rounded-[3rem] translate-y-12 translate-x-12 -z-10" />
                <div className="relative rounded-[2.5rem] md:rounded-[3rem] p-1.5 md:p-2 bg-[#0F172A] border-[5px] border-slate-800 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)]">
                  <img src={mockupImg} alt="Front" className="rounded-[2rem] md:rounded-[2.5rem] w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. STARTING STEPS: VISUAL GUIDE --- */}
     <section className="py-20 bg-[#F8FDFA] font-roboto">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              Mulai langkah <span className="text-primary italic">anda.</span>
            </h2>
            <p className="text-slate-400 font-bold text-[10px] tracking-[0.4em] uppercase">
              Proses integrasi partner nusago
            </p>
          </div>

          {/* Steps Grid: Image + Text Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                img: regisImg, // Ganti dengan image langkah 1
                step: "LANGKAH 01", 
                title: "Registrasi Akun", 
                desc: "Daftarkan identitas bisnis anda melalui sistem autentikasi aman NusaGo." 
              },
              { 
                img: profilImg, // Ganti dengan image langkah 2
                step: "LANGKAH 02", 
                title: "Lengkapi Profil", 
                desc: "Validasi data partner untuk membangun kredibilitas di ekosistem digital kami." 
              },
              { 
                img: inputImg, // Ganti dengan image langkah 3
                step: "LANGKAH 03", 
                title: "Input Akomodasi", 
                desc: "Daftarkan unit properti atau armada kendaraan melalui form aplikasi khusus." 
              },
              { 
                img: editImg, // Ganti dengan image langkah 4
                step: "LANGKAH 04", 
                title: "Mulai Kelola", 
                desc: "Akses dashboard utama dan mulai operasikan bisnis anda secara mandiri." 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-[3rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-50 group hover:-translate-y-2 transition-all duration-500">
                
                {/* Image Container: Rounded as per reference */}
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 relative">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Text Content */}
                <div className="text-center px-4 pb-6 space-y-3">
                  <span className="text-[10px] font-black tracking-[0.3em] text-primary/50 group-hover:text-primary transition-colors">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight leading-none group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-[13px] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
     </section>

     {/* --- 2. KATEGORI BANTUAN SECTION (FULL WIDTH RED) --- */}
     <section className="py-20 md:py-28 bg-primary w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-none">
              Kategori <span className="text-white/40 italic">bantuan.</span>
            </h2>
            <div className="h-1 w-12 bg-white/30 mx-auto mt-6 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                title: "Autentikasi & akses", 
                desc: "Panduan login, register, dan verifikasi akun partner nusago secara aman.", 
                icon: <ShieldCheck size={28} />,
                link: "/docs/register-akun"
              },
              { 
                title: "Pengaturan profil", 
                desc: "Cara melengkapi identitas dan mengelola profil partner anda dengan mudah.", 
                icon: <User size={28} />,
                link: "/docs/login" 
              },
              { 
                title: "Pendaftaran properti", 
                desc: "Langkah mendaftarkan unit hotel, kost, atau armada ke ekosistem NusaGo.", 
                icon: <FileText size={28} />,
                link: "/docs/daftar-hotel"
              },
            ].map((item, idx) => (
              <Link 
                key={idx} 
                to={item.link}
                className="group relative p-8 md:p-10 rounded-[2rem] bg-white transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon Circle */}
                <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl rotate-6 group-hover:rotate-12 transition-all duration-500" />
                  <div className="relative z-10 text-primary">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-[14px] font-medium mb-8">
                  {item.desc}
                </p>

                <div className="mt-auto flex items-center gap-2 py-2.5 px-6 rounded-xl bg-slate-50 text-slate-500 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <span className="text-[10px] font-black uppercase tracking-widest">Detail</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Bottom Line Decor */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-50 overflow-hidden">
                  <div className="w-0 h-full bg-primary group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

     {/* --- 3. CATEGORIES SECTION: ADVANCED CAPABILITIES --- */}
<section className="py-16 md:py-20 px-6 max-w-7xl mx-auto relative lg:-mt-16">
  <div className="text-center mb-24">
    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
      Panduan <span className="text-primary">NusaGo partner</span>
    </h2>
    <p className="text-slate-400 font-bold text-xs tracking-[0.3em] mt-4 uppercase">Pusat bantuan & ekosistem digital</p>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-10 hidden lg:flex">
      <div className="w-[600px] h-[600px] border-[2px] border-dashed border-primary rounded-full animate-[spin_20s_linear_infinite]" />
    </div>

    <div className="space-y-24 z-10">
      <Link to="/docs/register-akun" className="flex flex-col items-center lg:items-end lg:text-right group cursor-pointer block">
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/30 mb-6 group-hover:bg-slate-900 transition-all duration-500">
          <ShieldCheck size={26} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">Autentikasi aman</h3>
        <p className="text-slate-500 text-sm font-medium max-w-[240px]">Panduan login, verifikasi OTP, dan keamanan akun mitra.</p>
      </Link>
      <Link to="/docs/daftar-hotel" className="flex flex-col items-center lg:items-end lg:text-right group cursor-pointer block">
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/30 mb-6 group-hover:bg-slate-900 transition-all duration-500">
          <FileText size={26} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">Pendaftaran properti</h3>
        <p className="text-slate-500 text-sm font-medium max-w-[240px]">Cara mendaftarkan hotel, kost, hingga villa ke sistem.</p>
      </Link>
    </div>

    <div className="relative flex justify-center items-center z-20 order-first lg:order-none">
      <div className="relative w-[240px] md:w-[280px] transition-all duration-700 hover:scale-105">
        <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full scale-150 -z-10" />
        <div className="relative rounded-[3.5rem] p-2 bg-slate-950 border-[8px] border-slate-900 shadow-[0_50px_100px_-20px_rgba(220,38,38,0.4)]">
          <img src={homeImg} alt="NusaGo App" className="rounded-[2.8rem] w-full object-cover aspect-[9/19.5]" />
        </div>
      </div>
    </div>

    <div className="space-y-24 z-10">
      <Link to="/docs/login" className="flex flex-col items-center lg:items-start lg:text-left group cursor-pointer block">
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/30 mb-6 group-hover:bg-slate-900 transition-all duration-500">
          <User size={26} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">Manajemen profil</h3>
        <p className="text-slate-500 text-sm font-medium max-w-[240px]">Lengkapi identitas bisnis dan kelola profil partner anda.</p>
      </Link>
      <div className="flex flex-col items-center lg:items-start lg:text-left group opacity-50 relative">
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/30 mb-6">
          <MessageSquare size={26} />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Chat operasional</h3>
          <span className="text-[10px] bg-slate-900 text-white px-2 py-0.5 rounded-full font-bold tracking-tighter">Coming soon</span>
        </div>
        <p className="text-slate-500 text-sm font-medium max-w-[240px]">Fitur komunikasi instan antara mitra dan pusat bantuan.</p>
      </div>
    </div>
  </div>
</section>

    {/* --- 4. QUICK START GUIDE (REFINED TYPOGRAPHY & COMPACT - RED BG) --- */}
<section className="py-12 md:py-16 bg-primary text-white w-full overflow-hidden font-roboto border-y border-white/10">
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-lg">
          <Sparkles size={12} className="text-white" />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white">System Overview</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.9] text-white">
          Kelola bisnis dalam <br />
          <span className="text-white/40 font-light italic">ekosistem terpadu.</span>
        </h2>
      </div>
      
      <p className="text-white/50 font-bold text-[13px] uppercase tracking-[0.2em] lg:text-right max-w-[240px] leading-relaxed">
        Integrasi cerdas untuk efisiensi operasional anda.
      </p>
    </div>

    {/* Grid: Teks dibuat lebih tebal & serasi dengan ikon */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
      {[
        { 
          icon: <Building2 size={26} strokeWidth={2} />, 
          title: "Akomodasi", 
          desc: "Manajemen hotel & villa dengan sistem pemesanan real-time." 
        },
        { 
          icon: <Key size={26} strokeWidth={2} />, 
          title: "Hunian", 
          desc: "Digitalisasi bisnis kost dengan laporan yang transparan." 
        },
        { 
          icon: <Car size={26} strokeWidth={2} />, 
          title: "Armada", 
          desc: "Optimalisasi armada untuk jangkauan pasar lebih luas." 
        }
      ].map((item, idx) => (
        <div 
          key={idx} 
          className="group flex flex-col space-y-5 p-8 rounded-3xl bg-white/10 hover:bg-white/20 transition-all duration-500 border border-white/10 hover:border-white/30"
        >
          {/* Icon Holder: Disesuaikan untuk BG Merah */}
          <div className="w-12 h-12 shrink-0 rounded-2xl bg-white flex items-center justify-center text-primary group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shadow-xl shadow-black/10">
            {item.icon}
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-white transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-white/70 text-[14px] leading-relaxed font-bold group-hover:text-white transition-colors duration-300">
              {item.desc}
            </p>
          </div>
          
          <div className="h-[2px] w-8 bg-white/30 group-hover:w-16 group-hover:bg-white transition-all duration-700" />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* --- 5. FAQ SECTION (ULTRA MODERN & COMPACT) --- */}
<section className="py-12 md:py-16 bg-white w-full overflow-hidden font-roboto">
  <div className="max-w-4xl mx-auto px-6 relative z-10">
    
    {/* Header: Slim & Sharp */}
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-primary/5 rounded-md">
          <div className="w-1 h-1 bg-primary rounded-full" />
          <span className="text-[9px] font-black tracking-[0.3em] uppercase text-primary">Common Questions</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 leading-none">
          Tanya <span className="text-slate-300 italic">jawab.</span>
        </h2>
      </div>
      <p className="text-slate-400 font-bold text-[11px] uppercase tracking-[0.2em] max-w-[180px] leading-relaxed">
        Pusat informasi bantuan cepat mitra.
      </p>
    </div>

    {/* Modern Interactive List */}
    <div className="grid grid-cols-1 gap-3">
      {faqs.map((faq, idx) => (
        <div 
          key={idx} 
          className={`group transition-all duration-500 rounded-3xl ${
            openFaq === idx ? "bg-slate-50 shadow-sm" : "bg-transparent hover:bg-slate-50/50"
          }`}
        >
          <button
            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
          >
            <div className="flex items-center gap-6">
              <span className={`text-[11px] font-black transition-all duration-500 ${openFaq === idx ? "text-primary scale-125" : "text-slate-300"}`}>
                {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
              </span>
              <h3 className={`font-bold text-lg md:text-xl tracking-tight transition-all duration-500 ${
                openFaq === idx ? "text-primary" : "text-slate-800"
              }`}>
                {faq.q}
              </h3>
            </div>
            
            <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${
              openFaq === idx 
              ? "bg-primary border-primary text-white rotate-180 shadow-lg shadow-primary/20" 
              : "border-slate-200 text-slate-400 group-hover:border-primary group-hover:text-primary"
            }`}>
              <ChevronDown size={16} strokeWidth={3} />
            </div>
          </button>

          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openFaq === idx ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}>
            <div className="px-14 md:px-20 pb-8 pt-0">
              <p className="text-slate-500 text-[15px] md:text-base leading-relaxed font-medium border-l-2 border-primary/20 pl-6">
                {faq.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* --- 6. FOOTER (ULTRA SLIM & DEEP BLACK) --- */}
<footer className="px-6 md:px-10 pb-12 font-roboto">
  <div className="bg-[#0A0F1C] rounded-[3rem] py-16 md:py-20 text-center text-white relative overflow-hidden shadow-2xl">
    
    {/* Subtle Ambient Glow */}
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary rounded-full blur-[100px]" />
    </div>
 
    <div className="max-w-2xl mx-auto relative z-10 px-6">
      {/* Badge: Minimalist Dark */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full mb-8 border border-white/10">
        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        <span className="text-[9px] font-black tracking-[0.3em] uppercase text-white/60">Ready to help</span>
      </div>
      
      <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tighter leading-tight">
        Butuh bantuan <span className="text-white/20 italic font-light">lebih lanjut?</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Tombol Utama: Primary Red */}
        <button className="w-full md:w-auto bg-primary hover:bg-white hover:text-primary text-white px-10 py-4 rounded-2xl text-[13px] font-black shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-3 group">
          Hubungi support <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
        
        {/* Tombol Sekunder: Dark Glass */}
        <button className="w-full md:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-4 rounded-2xl text-[13px] font-black transition-all">
          Cari panduan
        </button>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Home;