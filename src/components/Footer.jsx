import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Globe, MessageCircle, Share2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary font-roboto">
      <div className="max-w-[1600px] mx-auto px-6 py-16 md:p-24 text-white relative overflow-hidden">
        
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            <div className="lg:col-span-5 space-y-8 md:space-y-10">
              <div>
                <h2 className="text-[18px] font-bold tracking-tight mb-4 md:mb-6">
                  NusaGo <span className="text-white/40">Partner</span>
                </h2>
                <p className="text-white/70 max-w-sm leading-relaxed text-[14px] md:text-[15px] font-medium">
                  Solusi terintegrasi untuk mengelola listing properti dan kendaraan Anda dalam satu platform ekosistem digital.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white shrink-0 transition-transform group-hover:rotate-6">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] text-white/50 font-black uppercase tracking-[0.2em] mb-0.5">Email Support</p>
                    <span className="font-bold text-[14px] md:text-[15px]">support@nusago.id</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white shrink-0 transition-transform group-hover:rotate-6">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] text-white/50 font-black uppercase tracking-[0.2em] mb-0.5">Office Center</p>
                    <span className="font-bold text-[14px] md:text-[15px]">Yogyakarta, Indonesia</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Kolom Tengah & Kanan: Navigasi & Sosmed */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
              <div className="space-y-6 md:space-y-8">
                <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white/50">Tautan</h4>
                <ul className="space-y-3 md:space-y-4 text-white/80 font-bold text-[14px] md:text-[15px]">
                  <li><Link to="/" className="hover:text-white transition-colors">Beranda</Link></li>
                  <li><Link to="/artikel" className="hover:text-white transition-colors">Dokumentasi</Link></li>
                  <li><Link to="/bantuan" className="hover:text-white transition-colors">Pusat Bantuan</Link></li>
                </ul>
              </div>

              <div className="space-y-6 md:space-y-8">
                <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white/50">Kategori</h4>
                <ul className="space-y-3 md:space-y-4 text-white/80 font-bold text-[14px] md:text-[15px]">
                  <li className="hover:text-white cursor-pointer transition-colors">Hotel & Vila</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Kost & Homestay</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Rental Armada</li>
                </ul>
              </div>

              <div className="space-y-6 md:space-y-8 col-span-2 md:col-span-1">
                <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white/50">Media Sosial</h4>
                <div className="flex gap-3">
                  {[<MessageCircle size={20} />, <Globe size={20} />, <Share2 size={20} />].map((icon, i) => (
                    <div key={i} className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-slate-900 transition-all cursor-pointer border border-white/5 shadow-lg">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Garis Pembatas (Divider) */}
          <div className="h-[1px] w-full bg-white/10 my-12 md:my-16" />

          {/* Barisan Bawah (Copyright) */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-center">
            <p>&copy; {currentYear} NusaGo Partner - All rights reserved.</p>
            <div className="flex gap-6 md:gap-10">
              <span className="hover:text-white cursor-pointer transition-colors">Syarat & Ketentuan</span>
              <span className="hover:text-white cursor-pointer transition-colors">Kebijakan Privasi</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;