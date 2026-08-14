# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# 🚀 Siap Kerja

Aplikasi web modern yang dibangun menggunakan **React** dan **Vite**. Proyek ini dilengkapi dengan manajemen *state* global, visualisasi data, sistem *routing* yang dinamis, serta antarmuka yang interaktif dan responsif.

---

## 🔗 Live Demo

Aplikasi ini sudah berhasil di-deploy menggunakan **GitHub Pages** dan dapat diakses secara langsung melalui tautan berikut:  
👉 **[Siap Kerja - Live Preview](https://rayhandev9.github.io/siap-kerja-testing)**

---

## 🛠️ Teknologi & Library Utama (Tech Stack)

Proyek ini menggunakan ekosistem library JavaScript/React modern yang tercantum pada berkas `package.json`:

* **Core & Build Tool:** React (v19) & Vite (v8)
* **State Management:** Redux Toolkit (`@reduxjs/toolkit`) & React-Redux
* **Routing:** React Router (`react-router` & `react-router-dom` v7)
* **Styling & UI:** Tailwind CSS (v4), `@tailwindcss/vite`, & Headless UI (`@headlessui/react`)
* **Visualisasi Data:** Recharts
* **Animasi & Interaksi:** Framer Motion
* **Komponen Pendukung:** React Datepicker & React Loading Skeleton
* **Development & Deployment:** ESLint, Prettier, & GitHub Pages (`gh-pages`)

---

## 💻 Panduan Instalasi & Menjalankan Project Lokal

Saat mengklon proyek ini dari GitHub, folder `node_modules` **tidak ikut diunduh**. Oleh karena itu, Anda **wajib menginstal seluruh library** terlebih dahulu sebelum menjalankan aplikasi.

### Langkah 1: Clone Repository
Buka terminal/command prompt, lalu jalankan perintah berikut untuk mengunduh proyek ke komputer Anda:

```bash
git clone [https://github.com/RayhanDev9/siap-kerja-testing.git](https://github.com/RayhanDev9/siap-kerja-testing.git)
cd siap-kerja
```

---

# 🛠️ Rencana Pengembangan Halaman Help (Pusat Bantuan)

Berikut adalah rencana langkah-langkah untuk mengimplementasikan halaman bantuan yang responsif, teranimasi, dan terintegrasi dengan layout utama:

### 1. Konfigurasi Routing
Menambahkan rute anak (child routes) di bawah `AppLayout` pada `src/App.jsx` untuk setiap menu bantuan:
- `/help/guide` -> Panduan Penggunaan
- `/help/faq` -> FAQ (Tanya Jawab)
- `/help/support` -> Hubungi Dukungan
- `/help/bug-report` -> Laporkan Bug
- `/help/about` -> Tentang SiapKerja

### 2. Integrasi Navigasi (HelpDropdown)
- Memperbarui `src/ui/HelpDropdown.jsx` agar menggunakan `useNavigate` dari `react-router-dom`.
- Menghubungkan setiap item menu dengan rute yang telah dibuat.

### 3. Implementasi Komponen Halaman
Setiap halaman di `src/pages/Dashboard/Help/` akan mengikuti standar berikut:
- **Layout:** Menggunakan komponen `Section` dan `TopBar` untuk konsistensi.
- **Animasi:** Menerapkan `framer-motion` dengan `cardVariants` dari `src/util/animations.js`.
- **Responsivitas:** Menggunakan utility Tailwind CSS (`lg:grid-cols-2`, `sm:p-5`, dll).
- **Style:** Mengikuti tema *Dark/Light mode* yang sudah ada.

### 4. Detail Konten Halaman
- **FAQ:** Akordion interaktif untuk pertanyaan umum.
- **Support:** Formulir kontak atau informasi saluran dukungan.
- **Bug Report:** Formulir pelaporan kendala teknis.
- **About & Version:** Informasi aplikasi dan catatan rilis.
- **Guide:** Langkah-langkah penggunaan fitur utama aplikasi.