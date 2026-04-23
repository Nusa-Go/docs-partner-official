import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { 
  ChevronRight, 
  PlayCircle, 
  ThumbsUp, 
  ThumbsDown, 
  Menu, 
  X, 
  ArrowLeft,
  Heart,
  FileDown // Ikon untuk download
} from "lucide-react";

// --- 1. DATABASE KONTEN DOKUMENTASI ---
const docDatabase = {
  "register-akun": {
    category: "Autentikasi",
    breadcrumb: "Pendaftaran",
    title: "Cara mendaftar akun partner",
    steps: [
      "Kunjungi situs resmi NusaGo Partner dan pilih tombol 'Daftar Sekarang'.",
      "Isi formulir pendaftaran dengan nama lengkap, email bisnis, dan nomor telepon aktif.",
      "Cek kotak masuk email Anda untuk melakukan verifikasi alamat email.",
      "Tunggu proses kurasi akun oleh tim kami maksimal 1x24 jam."
    ],
    video: true,
    youtubeId: "rKA9LVQ5wSk",
    pdfLink: "/files/panduan-register.pdf" // Tambahkan link PDF di sini
  },
  "login": {
    category: "Autentikasi",
    breadcrumb: "Akses",
    title: "Panduan masuk ke dashboard",
    steps: [
      "Masukkan email dan kata sandi yang telah Anda daftarkan.",
      "Gunakan fitur 'Magic Link' jika Anda ingin masuk tanpa password melalui email.",
      "Jika mengaktifkan 2FA, masukkan kode verifikasi yang dikirim ke WhatsApp resmi kami.",
      "Klik 'Masuk' untuk mengakses ringkasan bisnis Anda secara real-time."
    ],
    video: false,
    pdfLink: "#"
  },
  "verifikasi-otp": {
    category: "Autentikasi",
    breadcrumb: "Keamanan",
    title: "Masalah verifikasi OTP",
    steps: [
      "Pastikan nomor WhatsApp yang Anda masukkan sudah benar dan terhubung ke internet.",
      "Tunggu minimal 60 detik sebelum mencoba menekan tombol 'Kirim Ulang'.",
      "Cek apakah nomor Anda tidak dalam masa tenggang atau terblokir.",
      "Jika tetap gagal, hubungi Support Center melalui tombol bantuan di bawah."
    ],
    video: false,
    pdfLink: "#"
  },
  "ganti-password": {
    category: "Keamanan",
    breadcrumb: "Pengaturan Akun",
    title: "Cara mengganti kata sandi",
    steps: [
      "Di halaman beranda, klik foto profil Anda di pojok kanan atas.",
      "Pilih opsi 'Keamanan' untuk masuk ke pengaturan kata sandi.",
      "Masukkan kata sandi baru Anda pada kolom yang tersedia.",
      "Masukkan kembali kata sandi baru Anda pada kolom konfirmasi untuk memastikan kecocokan.",
      "Klik tombol 'Perbarui Keamanan' untuk menyimpan perubahan."
    ],
    video: true,
    youtubeId: "rKA9LVQ5wSk",
    pdfLink: "/files/panduan-ganti-password.pdf"
  },
  "daftar-hotel": {
    category: "Form application",
    breadcrumb: "Akomodasi",
    title: "Cara mendaftarkan hotel baru",
    steps: [
      "Buka dashboard partner NusaGo dan pilih menu 'Form Application' di sidebar.",
      "Pilih kategori 'Hotel' dan mulai isi detail alamat serta jumlah kamar.",
      "Unggah foto properti dengan resolusi tinggi (minimal 5 foto terbaik).",
      "Input data teknis seperti jumlah lantai, tipe kasur, dan fasilitas pendukung.",
      "Tentukan harga dasar dan kebijakan pembatalan unit Anda."
    ],
    video: true,
    youtubeId: "-TqitXlw6WU",
    pdfLink: "https://drive.google.com/file/d/1l86OaTRk_2r_JZtKAlsb1_phrFwX210F/view?usp=drivesdk"
  },
  "daftar-kost": {
    category: "Form application",
    breadcrumb: "Hunian",
    title: "Mendaftarkan unit kost",
    steps: [
      "Pilih kategori 'Kos' pada menu pendaftaran formulir aplikasi.",
      "Lengkapi detail fasilitas (WiFi, Kamar Mandi Dalam, Listrik, dll).",
      "Tentukan periode sewa, apakah hanya bulanan atau bisa tahunan.",
      "Sematkan lokasi akurat menggunakan titik koordinat Google Maps.",
      "Lengkapi aturan kost seperti jam malam atau kebijakan tamu menginap."
    ],
    video: true,
    youtubeId: "QN2Zxm95Eew",
    pdfLink: "/files/panduan-daftar-kost.pdf"
  },
  "daftar-villa": {
    category: "Form application",
    breadcrumb: "Eksklusif",
    title: "Mendaftarkan unit villa",
    steps: [
      "Pilih kategori 'Villa' pada menu pendaftaran properti baru.",
      "Isi deskripsi keunggulan villa Anda (view pegunungan, private pool, dsb).",
      "Atur kapasitas maksimal tamu dan jumlah tempat tidur tersedia.",
      "Unggah foto eksterior dan interior dengan pencahayaan yang natural.",
      "Tentukan jadwal ketersediaan unit pada sistem kalender NusaGo."
    ],
    video: true,
    youtubeId: "dbUVz-xdlrk",
    pdfLink: "/files/panduan-daftar-villa.pdf"
  },
  "daftar-homestay": {
    category: "Form application",
    breadcrumb: "Lokal",
    title: "Mendaftarkan unit homestay",
    steps: [
      "Pilih menu 'Form Application' dan klik kategori 'Homestay'.",
      "Lengkapi detail ketersediaan ruangan dan fasilitas rumah tangga.",
      "Tentukan harga per malam dan kapasitas tamu yang diizinkan.",
      "Unggah foto ruangan yang bersih dan rapi untuk menarik minat tamu.",
      "Simpan dan ajukan verifikasi pendaftaran kepada tim NusaGo."
    ],
    video: true,
    youtubeId: "cynJy6Oj4YA",
    pdfLink: "/files/panduan-daftar-homestay.pdf"
  },
  "tambah-rental": {
    category: "Form application",
    breadcrumb: "Transportasi",
    title: "Menambah rental kendaraan",
    steps: [
      "Pilih menu pendaftaran dan tentukan kategori 'Rental Kendaraan'.",
      "Input data kendaraan (Merk, Tahun, Plat Nomor, dan Status Transmisi).",
      "Unggah foto kendaraan dari berbagai sisi (Depan, Samping, Interior).",
      "Tentukan tarif sewa harian dan syarat penyewaan (Lepas kunci/Sopir).",
      "Aktifkan status kendaraan agar tersedia di aplikasi NusaGo."
    ],
    video: true,
    youtubeId: "1gEKMG8fE1s",
    pdfLink: "/files/panduan-tambah-rental.pdf"
  }
};

// --- 2. STRUKTUR SIDEBAR ---
const categories = [
  { 
    name: "Autentikasi", 
    colorClass: "text-slate-900",
    items: [
      { label: "Register akun", slug: "register-akun" },
      { label: "Login", slug: "login" },
      { label: "Verifikasi otp", slug: "verifikasi-otp" },
      { label: "Ganti password", slug: "ganti-password" }
    ] 
  },
  { 
    name: "Form application", 
    colorClass: "text-slate-900",
    isSpecial: true,
    items: [
      { label: "Daftar hotel", slug: "daftar-hotel" },
      { label: "Daftar kost", slug: "daftar-kost" },
      { label: "Daftar villa", slug: "daftar-villa" },
      { label: "Daftar homestay", slug: "daftar-homestay" },
      { label: "Tambah rental", slug: "tambah-rental" }
    ] 
  },
];

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  
  const currentContent = docDatabase[id] || docDatabase["daftar-hotel"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
    setFeedbackSubmitted(false);
  }, [id]);

  const handleFeedback = () => {
    setFeedbackSubmitted(true);
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-[#374151] selection:bg-primary/10 selection:text-primary font-roboto">
      
      {/* --- FLOATING MOBILE TOGGLE --- */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed bottom-8 right-6 z-[80] w-14 h-14 bg-slate-900 text-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center active:scale-95 transition-all duration-300"
      >
        {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
      </button>

      {/* --- OVERLAY MOBILE --- */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[70] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-20 flex flex-col md:flex-row gap-12">
        
        {/* --- SIDEBAR: MODERN & RESPONSIVE --- */}
        <aside className={`
          fixed md:sticky top-0 md:top-28 left-0 z-[75] h-screen md:h-[calc(100vh-140px)] w-full md:w-64 
          transition-all duration-500 ease-in-out
          ${isMobileMenuOpen 
            ? 'translate-x-0 opacity-100' 
            : '-translate-x-full md:translate-x-0'
          }
        `}>
          {/* Mobile Background Blur Overlay */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-2xl md:bg-transparent -z-10" />

          <div className="h-full flex flex-col p-8 md:p-0 overflow-y-auto custom-scrollbar">
            
            {/* Mobile Header: Logo inside Sidebar */}
            <div className="md:hidden flex items-center justify-between mb-12">
               <div className="flex flex-col">
                  <h2 className="text-xl font-black text-slate-900 tracking-tighter font-roboto">
                    NusaGo <span className="text-primary">Partner</span>
                  </h2>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Documentation</span>
               </div>
               <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500"
               >
                 <X size={20} />
               </button>
            </div>
            
            <nav className="space-y-10">
              {categories.map((cat) => (
                <div key={cat.name} className="space-y-4">
                  {/* Category Label: Smaller, cleaner, bold */}
                  <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-300 px-4">
                    {cat.name}
                  </h4>
                  
                  <div className="flex flex-col gap-1">
                    {cat.items.map((item) => {
                      const isActive = id === item.slug;
                      return (
                        <button 
                          key={item.slug} 
                          onClick={() => {
                            navigate(`/docs/${item.slug}`);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`
                            group relative flex items-center gap-3 px-4 py-3 text-[13px] font-bold rounded-xl transition-all duration-300
                            ${isActive 
                              ? 'bg-primary/5 text-primary' 
                              : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                            }
                          `}
                        >
                          {/* Active Indicator Dot */}
                          {isActive && (
                            <div className="absolute left-0 w-1 h-5 bg-primary rounded-r-full" />
                          )}
                          
                          <span className={`transition-transform duration-300 ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'}`}>
                            {item.label}
                          </span>

                          {isActive && (
                            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>

            {/* Bottom Sidebar Info (Optional) */}
            <div className="mt-auto pt-10 md:hidden">
              <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10">
                <p className="text-[11px] font-bold text-primary leading-relaxed">
                  Butuh bantuan teknis lebih lanjut?
                </p>
                <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-900 mt-2 inline-block hover:underline">
                  Hubungi Support
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* --- MAIN CONTENT AREA --- */}
        <main className="flex-1 relative">
          <article className="bg-white border border-gray-100/50 rounded-[3rem] p-8 md:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
            
            {/* Breadcrumbs */}
            <nav className="text-[13px] font-bold text-slate-300 mb-12 flex items-center gap-3">
               <Link to="/" className="hover:text-primary transition-colors">Bantuan</Link>
               <ChevronRight size={14} className="opacity-30" /> 
               <span className="opacity-60">{currentContent.category}</span>
               <ChevronRight size={14} className="opacity-30" /> 
               <span className="text-primary tracking-tight">{currentContent.breadcrumb}</span>
            </nav>

            <header className="mb-14">
              <h1 className="text-3xl md:text-[44px] font-black text-slate-900 leading-[1.1] tracking-tighter">
                {currentContent.title}
              </h1>
            </header>
            
            {/* Content Steps */}
            <div className="space-y-5">
              {currentContent.steps.map((step, index) => (
                <div key={index} className="flex gap-6 p-8 rounded-[2.5rem] bg-[#FBFBFC] border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                  <div className="w-11 h-11 rounded-2xl bg-white shadow-sm text-slate-400 flex items-center justify-center text-sm font-black shrink-0 group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                    {index + 1}
                  </div>
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-slate-600 font-semibold pt-2">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Video Tutorial Section with Auto-Thumbnail */}
            {currentContent.video && currentContent.youtubeId && (
              <div className="mt-20">
                <div className="flex items-center gap-3 mb-8">
                   <div className="w-2 h-6 bg-primary rounded-full" />
                   <h3 className="text-xl font-black text-slate-900 tracking-tight">Tutorial Visual</h3>
                </div>
                <div className="relative aspect-video w-full bg-slate-900 rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl">
                   {/* Thumbnail Otomatis dari Youtube */}
                   <img 
                      src={`https://img.youtube.com/vi/${currentContent.youtubeId}/maxresdefault.jpg`} 
                      alt="Thumbnail" 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 grayscale-[0.5] group-hover:grayscale-0"
                   />
                   
                   {/* Overlay & Play Button */}
                   <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                   <div className="relative z-10 h-full w-full flex flex-col items-center justify-center">
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                         <PlayCircle size={40} className="text-white" />
                      </div>
                      <p className="text-white/80 text-[10px] font-black uppercase tracking-[0.3em] mt-6 group-hover:text-white transition-colors">Putar Video Panduan</p>
                   </div>

                   {/* Link Aktif ke YouTube */}
                   <a 
                      href={`https://www.youtube.com/watch?v=${currentContent.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-[20]"
                   />
                </div>

                {/* --- TOMBOL DOWNLOAD PANDUAN PDF --- */}
                {currentContent.pdfLink && (
                  <div className="mt-8 flex justify-center">
                    <a 
                      href={currentContent.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 hover:bg-primary hover:shadow-primary/30 active:scale-95"
                    >
                      {/* Effect background hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      
                      <div className="relative z-10 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-500">
                        <FileDown size={22} className="group-hover:bounce" />
                      </div>
                      
                      <div className="relative z-10 text-left">
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white/60 mb-0.5">Offline Access</p>
                        <span className="text-[12px] font-black tracking-tight uppercase">Download Modul</span>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Feedback Section */}
            <div className="mt-24 pt-12 border-t border-slate-50 flex flex-col items-center gap-8 text-center min-h-[200px] justify-center transition-all duration-500">
              {!feedbackSubmitted ? (
                <>
                  <div>
                    <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.3em] mb-2">Feedback Partner</p>
                    <h4 className="text-lg font-bold text-slate-800">Apakah panduan ini membantu Anda?</h4>
                  </div>
                  <div className="flex gap-4">
                    <button 
                      onClick={handleFeedback}
                      className="flex items-center gap-3 px-10 py-4 rounded-2xl border border-slate-100 text-[14px] font-black text-slate-500 hover:bg-primary hover:text-white hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 active:scale-95"
                    >
                      <ThumbsUp size={18} /> Ya
                    </button>
                    <button 
                      className="flex items-center gap-3 px-10 py-4 rounded-2xl border border-slate-100 text-[14px] font-black text-slate-500 hover:bg-slate-50 transition-all duration-500"
                    >
                      <ThumbsDown size={18} /> Tidak
                    </button>
                  </div>
                </>
              ) : (
                <div className="animate-in fade-in zoom-in duration-700 flex flex-col items-center">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-500">
                    <Heart size={32} fill="currentColor" className="animate-pulse" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-2">Terima kasih atas masukan Anda! 😊</h4>
                  <p className="text-sm font-bold text-slate-400">Kami akan terus meningkatkan kualitas layanan untuk Anda.</p>
                </div>
              )}
            </div>

            {/* Bottom Navigation Back */}
            <div className="mt-16 flex justify-center">
               <Link to="/" className="inline-flex items-center gap-3 px-6 py-3 text-slate-400 hover:text-primary font-bold text-sm transition-all group">
                  <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
                  Kembali ke Beranda Bantuan
               </Link>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default ArticlePage;