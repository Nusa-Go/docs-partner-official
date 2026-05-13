import React from "react";
import { Link } from "react-router-dom";
// Gunakan ikon yang pasti tersedia di hampir semua versi lucide
import { Mail, MapPin, Phone } from "lucide-react";
import { Icon } from "@iconify/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialMedia = [
    {
      icon: <Icon icon="mdi:instagram" width={20} height={20} />,
      link: 'https://www.instagram.com/nusagoofficial?igsh=anA3OWhpMjBsczh5&utm_source=qr'
    },
    {
      icon: <Icon icon="mdi:facebook" width={20} height={20} />,
      link: 'https://www.facebook.com/share/18eqKnNGfr/?mibextid=wwXIfr'
    },
    {
      icon: <Icon icon="mdi:twitter" width={20} height={20} />,
      link: 'https://x.com/Nusagoofficial'
    },
    {
      icon: <Icon icon="mdi:linkedin" width={20} height={20} />,
      link: 'https://www.linkedin.com/company/pt-nusago-digital-travelindo'
    }
  ];

  return (
    <footer className="w-full relative mt-20">
      {/* Unique Background Shape (Top Wave) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px] text-primary"
          fill="currentColor"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>

      <div className="bg-primary pt-10 pb-16 md:pb-24">
        <div className="max-w-[1600px] mx-auto px-6 text-white relative">
          {/* Glass Decor Blob */}
          <div className="absolute top-0 right-0 -translate-y-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/5 rounded-full blur-[80px] md:blur-[150px] pointer-events-none" />

          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

              {/* Left Section: Brand & Tagline */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-[32px] md:text-[22px] font-black tracking-[-0.04em] mb-4 md:mb-6 leading-tight">
                    NusaGo <span className="text-white/40 font-medium">Partner</span>
                  </h2>
                  <p className="text-white/80 max-w-lg leading-relaxed text-[16px] md:text-[18px] font-medium">
                    Ekosistem digital terpadu untuk efisiensi pengelolaan properti dan armada Anda. Bersama membangun masa depan pariwisata Indonesia yang lebih cerdas.
                  </p>
                </div>

                <div className="flex gap-4">
                  {socialMedia.map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-500 cursor-pointer border border-white/10 group"
                    >
                      <span className="group-hover:scale-110 transition-transform duration-500">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Section: Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Card */}
                <a 
                  href="mailto:nusagoofficial@email.com"
                  className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 group block"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-primary transition-colors duration-500">
                    <Mail size={22} />
                  </div>
                  <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em] mb-2">Email Support</p>
                  <p className="font-bold text-[15px] md:text-[16px] break-all">nusagoofficial@email.com</p>
                </a>

                {/* WhatsApp Card */}
                <a 
                  href="https://wa.me/6281125502261?text=Halo%20NusaGo%2C%20saya%20tertarik%20untuk%20bergabung%20menjadi%20mitra%20dan%20ingin%20meminta%20bantuan%20untuk%20pendaftaran.%20Terima%20kasih."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 group block"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-primary transition-colors duration-500">
                    <Phone size={22} />
                  </div>
                  <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em] mb-2">WhatsApp</p>
                  <p className="font-bold text-[15px] md:text-[16px]">0811-2550-2261</p>
                </a>

                {/* Office Card - Spanning 2 columns on small+ */}
                <div className="sm:col-span-2 p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 group flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-primary transition-colors duration-500">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em] mb-2">Office Center</p>
                    <p className="font-bold text-[15px] md:text-[16px]">Yogyakarta, Indonesia</p>
                    <p className="text-white/60 text-[13px] mt-1 font-medium italic">Pusat Inovasi Digital NusaGo</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="h-[1px] w-full bg-white/10 mt-20 mb-12" />

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-white/30 text-[11px] font-black uppercase tracking-[0.2em]">
              <p>&copy; {currentYear} PT NusaGo Digital Travelindo. <span className="hidden md:inline">|</span> Crafted with excellence.</p>
              <div className="flex gap-10">
                <span className="hover:text-white cursor-pointer transition-colors duration-300">Terms</span>
                <span className="hover:text-white cursor-pointer transition-colors duration-300">Privacy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;