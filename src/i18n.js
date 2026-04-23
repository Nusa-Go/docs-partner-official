import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navbar
      "nav_home": "Home",
      "nav_guide": "Guides",
      "nav_dashboard": "Dashboard",

      // Hero
      "hero_title_1": "Control",
      "hero_title_2": "Center.",
      "hero_subtitle": "Smart solutions and interactive guides to accelerate your business growth.",
      "btn_video": "Watch Tutorial",
      "btn_main_info": "Main Info",
      "btn_tech_service": "Technical",

      // Categories
      "cat_reg_title": "Registration",
      "cat_reg_price": "Start Now",
      "cat_reg_desc": "Steps to register your property unit into the NusaGo ecosystem.",
      "cat_reg_features": ["Document Verification", "Upload Photos", "Inventory Mgt"],

      "cat_sec_title": "Account Security",
      "cat_sec_price": "Max Protection",
      "cat_sec_desc": "Guide for login, OTP verification, and partner account security.",
      "cat_sec_features": ["2-Factor Auth", "Data Encryption", "Activity Logs"],

      "cat_id_title": "Identity Services",
      "cat_id_price": "Legal Partner",
      "cat_id_desc": "Complete your personal data, legality documents, and identity verification.",
      "cat_id_features": ["ID/License Validation", "Business Profile", "Real-time Update"],

      "btn_learn_more": "Learn More",

      // FAQ
      "faq_title_1": "Answer",
      "faq_title_2": "Center.",
      "faq_subtitle": "Find quick answers to common partner questions.",
      "faqs_list": [
        { "q": "How do I register my first property?", "a": "Log in to the partner dashboard, select 'Add Property', then follow the verification steps." },
        { "q": "How long does the verification process take?", "a": "Account verification takes between 1–3 business days after documents are received." },
        { "q": "How to change room prices?", "a": "Open the 'Room Management' menu and adjust prices on the calendar in real-time." }
      ],

      // Footer
      "footer_title_1": "Need",
      "footer_title_2": "Personal Help?",
      "btn_support": "Contact Support"
    }
  },
  id: {
    translation: {
      // Navbar
      "nav_home": "Beranda",
      "nav_guide": "Panduan",
      "nav_dashboard": "Dashboard",

      // Hero
      "hero_title_1": "Pusat",
      "hero_title_2": "Bantuan.",
      "hero_subtitle": "Solusi cerdas dan panduan interaktif untuk akselerasi pertumbuhan bisnis Anda.",
      "btn_video": "Tonton Tutorial",
      "btn_main_info": "Info Utama",
      "btn_tech_service": "Teknis",

      // Categories
      "cat_reg_title": "Pendaftaran",
      "cat_reg_price": "Mulai Sekarang",
      "cat_reg_desc": "Langkah mendaftarkan unit properti Anda ke ekosistem NusaGo.",
      "cat_reg_features": ["Verifikasi Dokumen", "Unggah Foto Unit", "Manajemen Inventori"],

      "cat_sec_title": "Keamanan Akun",
      "cat_sec_price": "Proteksi Maksimal",
      "cat_sec_desc": "Panduan login, verifikasi OTP, dan pengamanan akun partner.",
      "cat_sec_features": ["Autentikasi 2-Faktor", "Enkripsi Data", "Log Aktivitas"],

      "cat_id_title": "Layanan Identitas",
      "cat_id_price": "Legalitas Partner",
      "cat_id_desc": "Lengkapi data diri, dokumen legalitas, dan verifikasi identitas Anda.",
      "cat_id_features": ["Validasi KTP/SIUP", "Profil Bisnis", "Update Real-time"],

      "btn_learn_more": "Pelajari Sekarang",

      // FAQ
      "faq_title_1": "Pusat",
      "faq_title_2": "Jawaban.",
      "faq_subtitle": "Temukan jawaban cepat untuk pertanyaan umum partner.",
      "faqs_list": [
        { "q": "Bagaimana cara mendaftarkan properti pertama saya?", "a": "Masuk ke dashboard partner, pilih 'Tambah Properti', lalu ikuti langkah verifikasi." },
        { "q": "Berapa lama proses verifikasi akun?", "a": "Verifikasi akun berlangsung antara 1–3 hari kerja setelah dokumen diterima." },
        { "q": "Bagaimana cara mengubah harga kamar?", "a": "Buka menu 'Manajemen Kamar' dan atur harga pada kalender secara real-time." }
      ],

      // Footer
      "footer_title_1": "Butuh",
      "footer_title_2": "Bantuan Khusus?",
      "btn_support": "Hubungi Support"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'id',
    interpolation: { escapeValue: false }
  });

export default i18n;