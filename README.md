# 💼 SiapKerja — Platform Bimbingan Karir & Kesiapan Kerja Digital

![React](https://img.shields.io/badge/React-19.2.7-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-8.1.1-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.12-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

**SiapKerja** adalah aplikasi web modern yang dirancang untuk membantu para pencari kerja, mahasiswa, dan profesional muda mempersiapkan karir di industri digital. Aplikasi ini menyediakan fitur evaluasi keahlian (*Skill Gap Analysis*), roadmap belajar terstruktur (*Learning Roadmap*), analisis tren industri serta standar gaji (*Market Trends*), eksplorasi karir (*Career Explorer*), hingga pelacakan jam belajar harian secara *real-time*.

---

## 🔗 Live Demo & Deployment

Aplikasi ini telah dipublikasikan dan dapat diakses langsung secara online:  
👉 **[SiapKerja - Live Demo](https://rayhandev9.github.io/siap-kerja/)**

---

## ✨ Fitur-Fitur Utama

### 1. 🌐 Landing Page Modern & Interaktif
- **Hero Showcase:** Visualisasi evaluasi keahlian talenta dengan animasi mulus (*Framer Motion*).
- **Visi & Misi:** Informasi seputar nilai-nilai dan dedikasi platform.
- **Fitur Unggulan:** Rangkuman layanan utama (Analisis Tren Pasar, Roadmap, Evaluasi Keterampilan).
- **Testimoni & Akordion FAQ:** Pengalaman alumni dan jawaban untuk pertanyaan seputar platform.
- **Dedicated Landing Footer:** Footer publik mandiri dengan navigasi *smooth scroll* tanpa memicu pemuatan rute *dashboard* yang dilindungi.

### 2. 🔐 Autentikasi & Manajemen Sesi yang Andal
- **Sistem Login & Register:** Terintegrasi dengan backend API token JWT (*Bearer Token*).
- **Auto-Logout saat Token Kadaluarsa:** Middleware Redux dan interceptor Axios otomatis mendeteksi status `401 Unauthorized`, menghapus data sesi di `localStorage`, dan mengalihkan pengguna kembali ke halaman Login.
- **Penanganan Server Offline:** Tampilan UI khusus `<ServerDown />` jika server backend mengalami gangguan atau koneksi terputus, dilengkapi tombol *retry* (Coba Hubungkan Lagi) agar pengalaman pengguna tetap terjaga.

### 3. 🎯 Onboarding Talenta Terarah
- Alur multi-langkah interaktif untuk memetakan latar belakang, minat spesialisasi, dan target karir sebelum memasuki dashboard utama.

### 4. 🧭 Career Explorer & Analisis Rekomendasi
- Menjelajahi berbagai posisi industri teknologi (Frontend, Backend, UI/UX, Data Analyst, dll.).
- Rincian kualifikasi, deskripsi tanggung jawab pekerjaan, dan penyimpanan karir favorit (*Saved Careers*).

### 5. 📊 Skill Gap Analysis & Market Trends
- **Skill Gap:** Mengidentifikasi keahlian yang sudah dikuasai dan kesenjangan kompetensi yang perlu ditingkatkan untuk mencapai peran impian.
- **Market Trends:** Grafik visual (*Recharts*) mengenai tren keahlian yang paling banyak dicari dan rentang standar gaji pasar kerja saat ini.

### 6. 🗺️ Learning Roadmap & Kursus
- Panduan modul pembelajaran terstruktur langkah demi langkah (*step-by-step*).
- Status progres belajar dan daftar rekomendasi materi pelatihan terkait.

### 7. ⏱️ Pelacak Waktu Belajar Aktif (*Active Time Tracker*)
- Hook kustom `useActiveTimeTracker` yang memantau durasi interaksi pengguna saat aktif belajar di aplikasi dan mencatatnya ke analitik dashboard mingguan.

### 8. 🌓 Dukungan Dark & Light Mode
- Desain antarmuka fleksibel yang mendukung mode gelap (*Dark Mode*) dan terang (*Light Mode*) dengan transisi visual yang nyaman di mata.

---

## 🛠️ Teknologi & Dependensi (Tech Stack)

| Kategori | Teknologi | Deskripsi |
|---|---|---|
| **Core Framework** | React 19 | Library UI reaktif generasi terbaru |
| **Build Tool** | Vite 8 | Development server super cepat dan bundler optimal |
| **State Management** | Redux Toolkit & React-Redux | Pengelolaan state global yang terstruktur |
| **Routing** | React Router v7 (`createHashRouter`) | Sistem navigasi ramah GitHub Pages tanpa reload |
| **Styling** | Tailwind CSS v4 | Framework styling berbasis utility-first |
| **Animasi** | Framer Motion | Animasi mikro, transisi halaman, dan efek hover halus |
| **Visualisasi Data** | Recharts | Komponen grafik interaktif dan responsif |
| **Komponen Pendukung** | Headless UI, React Datepicker, Skeleton | Komponen UI aksesibel dan *loading state* |
| **Hosting & Deploy** | GitHub Pages (`gh-pages`) | Otomatisasi deploy bundle produksi |

---

## 📁 Struktur Folder Proyek

```text
siap-kerja/
├── public/                 # Aset statis publik
├── src/
│   ├── assets/             # Gambar, ikon SVG, dan ilustrasi
│   ├── components/         # Komponen global reusable
│   ├── features/           # Redux slices per modul
│   │   ├── auth/           # authSlice (login, register, logout, forceLogout)
│   │   ├── course/         # courseSlice
│   │   ├── dashboard/      # profileSlice, marketTrendsSlice, skillGapSlice, dll.
│   │   ├── errorSlice/     # errorMiddleware (penanganan 401 & sesi)
│   │   └── onBoarding/     # onBoardingSlice
│   ├── hooks/              # Custom hooks (useFetch, useActiveTimeTracker, useHelp)
│   ├── pages/              # Halaman-halaman utama aplikasi
│   │   ├── Autentikasi/    # Login & Register
│   │   ├── Dashboard/      # AppLayout, Dashboard, CareerExplorer, Help, Profile, dll.
│   │   ├── LandingPage/    # LandingPage, Main, About, QNA, Testimonial, Footer
│   │   ├── Onboarding/     # Multi-step Onboarding (Page 1-5)
│   │   └── course/         # Halaman detail materi kursus
│   ├── services/           # Konfigurasi API Client (axiosConfig.js)
│   ├── ui/                 # Komponen dasar (Button, Header, ServerDown, Loader, Error)
│   ├── util/               # Konfigurasi animasi dan format data
│   ├── App.jsx             # Konfigurasi rute utama (createHashRouter)
│   ├── main.jsx            # Entry point React
│   └── store.js            # Inisialisasi store Redux
├── package.json            # Daftar paket dependensi dan npm scripts
├── vite.config.js          # Konfigurasi Vite & Tailwind CSS
└── README.md               # Dokumentasi proyek
```

---

## 💻 Panduan Instalasi Lokal

Ikuti langkah-langkah berikut untuk menjalankan proyek di komputer lokal:

### 1. Prasyarat
- Pastikan telah menginstal [Node.js](https://nodejs.org/) (versi 18+ disarankan).
- Git telah terpasang di sistem operasi Anda.

### 2. Klon Repositori
```bash
git clone https://github.com/RayhanDev9/siap-kerja.git
cd siap-kerja
```

### 3. Instalasi Dependensi
```bash
npm install
```

### 4. Menjalankan Server Pengembangan (Dev)
```bash
npm run dev
```
Buka browser dan akses alamat lokal yang ditampilkan pada terminal (biasanya `http://localhost:5173/`).

### 5. Membangun Bundle Produksi (Build)
```bash
npm run build
```

---

## 🚀 Panduan Deployment ke GitHub Pages

Proyek ini telah dikonfigurasi dengan skrip otomatisasi untuk deploy ke GitHub Pages:

```bash
npm run deploy
```
*Perintah di atas akan secara otomatis menjalankan `npm run build` (melalui script `predeploy`), lalu mempublikasikan folder `dist` ke branch `gh-pages` repositori Anda.*

---

## 🛡️ Konvensi dan Penanganan Kasus Kritis (Error Handling)

1. **Token Expired (401 Unauthorized):**
   - Interceptor Axios dan Redux `errorMiddleware` mendeteksi status 401.
   - Token dan data pengguna di `localStorage` langsung dihapus.
   - Pengguna dialihkan secara otomatis ke hash rute `#/login`.
2. **Koneksi Terputus / Server Mati:**
   - Jika endpoint backend gagal dihubungi (*Network Error* / 500+), aplikasi menampilkan komponen `src/ui/ServerDown.jsx`.
   - Pengguna dapat menekan tombol **"Coba Hubungkan Lagi"** untuk mencoba sinkronisasi data kembali tanpa perlu merefresh halaman secara manual.
3. **Pemisahan Footer:**
   - Landing Page memiliki footer tersendiri di `src/pages/LandingPage/components/Footer.jsx` yang bebas dari rute yang membutuhkan autentikasi profil, mencegah terjadinya pemuatan tanpa henti (*infinite loader*).

---

## 👥 Pengembang & Lisensi

- **Pengembang:** Muhamad Rayhan ([@RayhanDev9](https://github.com/RayhanDev9))
- **Lisensi:** Proyek ini dibuat untuk keperluan pengembangan dan portofolio profesional. Hak cipta dilindungi undang-undang.
