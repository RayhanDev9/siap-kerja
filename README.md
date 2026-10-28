

# 🛠️ Rencana Perbaikan & Peningkatan UX (Sprint Fix)

Berikut adalah rencana perbaikan untuk 3 isu utama yang mempengaruhi pengalaman pengguna (UX):

---

## Fix 1: Token Kadaluarsa → Hapus Token & Redirect ke Login

### 🐛 Masalah
Ketika token akses sudah kadaluarsa (API mengembalikan status `401 Unauthorized`), aplikasi tidak membersihkan data sesi dan tidak mengarahkan pengguna ke halaman login secara otomatis. Hal ini menyebabkan pengguna "terjebak" di halaman yang blank atau error.

### 🎯 Target Perilaku
- Jika API mengembalikan `401`, hapus `token` dan `user` dari `localStorage`.
- Redirect otomatis ke halaman `/login`.
- Tampilkan notifikasi/pesan kepada pengguna bahwa sesi telah berakhir.

### 📂 File yang Diubah

| File | Perubahan |
|---|---|
| `src/features/errorSlice/errorMiddleware.js` | Perbaiki deteksi 401, pastikan redirect ke `/#/login` (HashRouter), tambah penghapusan semua key localStorage terkait sesi |
| `src/features/dashboard/profileSlice.js` | Tangkap error 401 di `fetchProfile`, dispatch action `logoutUser` |
| `src/features/auth/authSlice.js` | Tambahkan action `forceLogout` untuk membersihkan state auth dari middleware |
| `src/services/axiosConfig.js` | Tambahkan **response interceptor** untuk menangkap 401 secara global di semua request axios |

### 📋 Detail Implementasi

```
errorMiddleware.js
  └── Deteksi 401 dari semua action yang rejected
  └── Dispatch logoutUser() (Redux action)
  └── localStorage.clear() untuk semua data sesi
  └── Redirect ke /#/login

axiosConfig.js
  └── Tambah response interceptor
  └── Jika res.status === 401 → clear token → redirect login

profileSlice.js
  └── fetchProfile: jika res.status === 401 → thunkAPI.rejectWithValue({ status: 401 })
```

---

## Fix 2: Server Mati → Tampilkan Halaman "Server Sedang Down"

### 🐛 Masalah
Ketika backend/server sedang tidak aktif (network error, timeout, atau server down), aplikasi menampilkan loading spinner yang tidak berhenti (`<Loader />`). Ini adalah UX yang buruk karena pengguna tidak tahu apakah ada masalah atau harus menunggu.

### 🎯 Target Perilaku
- Jika terjadi **network error** (server tidak bisa diakses) atau **timeout**, tampilkan halaman khusus "Server Sedang Tidak Tersedia".
- Halaman ini berisi:
  - Ilustrasi/ikon server down
  - Pesan informatif (server sedang maintenance / tidak dapat dijangkau)
  - Tombol **"Coba Lagi"** untuk me-refresh/retry fetch
- Bedakan antara `loading`, `server error`, dan `unauthenticated`.

### 📂 File yang Diubah

| File | Perubahan |
|---|---|
| `src/ui/ServerDown.jsx` | **File baru** — Komponen halaman "Server Sedang Tidak Tersedia" dengan animasi dan tombol retry |
| `src/pages/Dashboard/AppLayout.jsx` | Tambahkan kondisi: jika `isServerError` → tampilkan `<ServerDown />` bukan `<Loader />` |
| `src/features/dashboard/profileSlice.js` | Bedakan error: network error (server down) vs 401 (expired token). Tambah state `isServerError` |
| `src/hooks/useFetch.jsx` | Tangkap error network dan set state `isServerError` di Redux |

### 📋 Detail Implementasi

```
profileSlice.js
  └── Tambah state: isServerError: false
  └── fetchProfile catch: jika TypeError (network error) → isServerError = true
  └── fetchProfile rejected: jika status 0 / network fail → isServerError = true

AppLayout.jsx
  └── Ambil isServerError dari Redux state
  └── if (isServerError) return <ServerDown onRetry={() => dispatch(fetchProfile())} />
  └── if (!dataProfile && isLoading) return <Loader />

ServerDown.jsx (file baru)
  └── Tampilan dengan ikon 🔌 atau ilustrasi server
  └── Pesan: "Server sedang tidak tersedia. Silakan coba beberapa saat lagi."
  └── Tombol retry yang dispatch ulang fetchProfile
  └── Animasi framer-motion
```

---

## Fix 3: Footer Landing Page Terpisah dari Dashboard

### 🐛 Masalah
Footer di halaman Landing Page (`/landingPage`) saat ini menggunakan komponen `Footer` dari `src/ui/Footer.jsx` yang sama dengan Footer di Dashboard. Footer Dashboard menggunakan `useLocation` dan `<Link>` dari React Router yang terhubung ke rute-rute dashboard (`/help/faq`, `/help/about`, dll.).

Ketika pengguna yang **belum login** mengklik link di Footer (misalnya dari Landing Page), mereka diarahkan ke rute dashboard yang membutuhkan autentikasi, menyebabkan **loading tanpa henti** karena `AppLayout` menunggu data profil yang tidak ada.

### 🎯 Target Perilaku
- Landing Page memiliki **Footer sendiri** yang berbeda dari Footer Dashboard.
- Footer Landing Page hanya berisi informasi publik (nama brand, deskripsi, link ke halaman publik seperti Login/Register).
- Footer Dashboard tetap seperti sedia kala dengan link ke halaman help internal.

### 📂 File yang Diubah

| File | Perubahan |
|---|---|
| `src/pages/LandingPage/components/Footer.jsx` | **Diisi ulang** — Buat Footer khusus Landing Page yang mandiri, tidak bergantung pada React Router internal dashboard |
| `src/pages/LandingPage/LandingPage.jsx` | Pastikan menggunakan `Footer` dari folder `components/` bukan dari `src/ui/` |
| `src/ui/Footer.jsx` | Tetap sama (hanya untuk Dashboard/AppLayout) |

### 📋 Detail Implementasi

```
LandingPage/components/Footer.jsx (diisi ulang)
  └── Tidak ada link ke /help/* (rute protected)
  └── Link hanya ke: /login, /register, /landingPage
  └── Informasi: nama app, copyright, deskripsi singkat
  └── Desain konsisten dengan tema Landing Page
  └── Tidak menggunakan useLocation (tidak perlu)

LandingPage.jsx
  └── Import Footer dari ./components/Footer
  └── Bukan dari ../../ui/Footer
```

---

## 📊 Ringkasan Perubahan File

| No | File | Status | Keterangan |
|---|---|---|---|
| 1 | `src/features/errorSlice/errorMiddleware.js` | 🔧 Diubah | Perbaiki deteksi 401 & redirect |
| 2 | `src/services/axiosConfig.js` | 🔧 Diubah | Tambah response interceptor 401 |
| 3 | `src/features/auth/authSlice.js` | 🔧 Diubah | Tambah action `forceLogout` |
| 4 | `src/features/dashboard/profileSlice.js` | 🔧 Diubah | Bedakan network error vs 401, tambah `isServerError` |
| 5 | `src/hooks/useFetch.jsx` | 🔧 Diubah | Tangkap error network |
| 6 | `src/pages/Dashboard/AppLayout.jsx` | 🔧 Diubah | Tampilkan `<ServerDown />` jika server mati |
| 7 | `src/ui/ServerDown.jsx` | 🆕 Baru | Halaman "Server Sedang Tidak Tersedia" |
| 8 | `src/pages/LandingPage/components/Footer.jsx` | 🔧 Diubah | Footer khusus Landing Page (isi ulang) |
| 9 | `src/pages/LandingPage/LandingPage.jsx` | ✅ Verifikasi | Pastikan import Footer dari folder lokal |

---

## 🔄 Alur Logika Baru (Flow Diagram)

```
User Buka Aplikasi
  │
  ├─→ AppLayout mount → useFetch() → fetchProfile()
  │     │
  │     ├─→ ✅ Sukses → Tampilkan Dashboard normal
  │     │
  │     ├─→ ❌ 401 Unauthorized (token expired)
  │     │     └─→ errorMiddleware deteksi
  │     │           └─→ clear localStorage (token, user)
  │     │                 └─→ dispatch forceLogout
  │     │                       └─→ redirect → /#/login
  │     │
  │     └─→ ❌ Network Error (server mati)
  │           └─→ profileSlice set isServerError = true
  │                 └─→ AppLayout render <ServerDown />
  │                       └─→ User klik "Coba Lagi"
  │                             └─→ dispatch fetchProfile() ulang
  │
  └─→ User di Landing Page
        └─→ Klik Footer → hanya ke /login atau /register (aman)
```
