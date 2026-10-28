import React, { useState } from "react";

function Footer() {
  const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'terms' | 'security' | null

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="mt-auto w-full border-t border-slate-200 bg-white px-6 py-12 md:px-12 dark:border-neutral-800 dark:bg-neutral-900 transition-colors duration-200">
        <div className="mx-auto max-w-7xl">
          {/* Main Grid: 4 Kolom yang Bersih dan Terorganisir */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Kolom 1: Profil Brand */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/30">
                  <i className="fa-solid fa-briefcase text-lg"></i>
                </div>
                <span className="text-2xl font-black tracking-tight text-blue-800 dark:text-blue-500">
                  SiapKerja
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-neutral-400">
                Platform bimbingan karir digital terpadu untuk mengevaluasi kesenjangan keahlian, memantau alur roadmap belajar, dan menyiapkan talenta siap kerja.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/RayhanDev9/siap-kerja"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-blue-600 hover:text-blue-600 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-blue-500 dark:hover:text-blue-400"
                >
                  <i className="fa-brands fa-github text-base"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-blue-600 hover:text-blue-600 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-blue-500 dark:hover:text-blue-400"
                >
                  <i className="fa-brands fa-linkedin text-base"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-blue-600 hover:text-blue-600 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-blue-500 dark:hover:text-blue-400"
                >
                  <i className="fa-brands fa-instagram text-base"></i>
                </a>
              </div>
            </div>

            {/* Kolom 2: Navigasi Bagian Landing Page */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white">
                Navigasi
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm text-slate-600 dark:text-neutral-400">
                <li>
                  <a
                    href="#home"
                    onClick={(e) => scrollToSection(e, "home")}
                    className="transition hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => scrollToSection(e, "about")}
                    className="transition hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Tentang SiapKerja
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    onClick={(e) => scrollToSection(e, "features")}
                    className="transition hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Fitur Unggulan
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonial"
                    onClick={(e) => scrollToSection(e, "testimonial")}
                    className="transition hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Cerita Alumni / Testimoni
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => scrollToSection(e, "faq")}
                    className="transition hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Pertanyaan Umum (FAQ)
                  </a>
                </li>
              </ul>
            </div>

            {/* Kolom 3: Pusat Bantuan (Terpisah) */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white">
                Bantuan
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-neutral-400">
                <li className="flex items-start gap-2.5">
                  <i className="fa-regular fa-envelope mt-1 text-blue-600 dark:text-blue-400"></i>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 dark:text-neutral-500">Email Dukungan</span>
                    <a
                      href="mailto:support@siapkerja.id"
                      className="font-medium text-slate-700 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400"
                    >
                      support@siapkerja.id
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-headset mt-1 text-blue-600 dark:text-blue-400"></i>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 dark:text-neutral-500">Layanan Komunitas</span>
                    <span className="text-slate-700 dark:text-neutral-300">Tersedia 24/7 Online</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-location-dot mt-1 text-blue-600 dark:text-blue-400"></i>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 dark:text-neutral-500">Lokasi</span>
                    <span className="text-slate-700 dark:text-neutral-300">Jakarta, Indonesia</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Kolom 4: Legalitas (Terpisah) */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white">
                Legalitas
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm text-slate-600 dark:text-neutral-400">
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal("privacy")}
                    className="flex items-center gap-2 text-left transition hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <i className="fa-solid fa-shield-halved text-xs text-slate-400 dark:text-neutral-500"></i>
                    <span>Kebijakan Privasi</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal("terms")}
                    className="flex items-center gap-2 text-left transition hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <i className="fa-solid fa-file-contract text-xs text-slate-400 dark:text-neutral-500"></i>
                    <span>Ketentuan Layanan</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal("security")}
                    className="flex items-center gap-2 text-left transition hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <i className="fa-solid fa-lock text-xs text-slate-400 dark:text-neutral-500"></i>
                    <span>Keamanan Data</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-xs text-slate-500 sm:flex-row dark:border-neutral-800 dark:text-neutral-500">
            <div>
              &copy; {new Date().getFullYear()} SiapKerja. Hak cipta dilindungi undang-undang.
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600 dark:bg-neutral-800 dark:text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                Versi 2.1.0
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Kembali ke atas"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800"
              >
                <i className="fa-solid fa-arrow-up text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Popup Kebijakan Privasi / Ketentuan Layanan Statis (Tanpa pindah ke protected route) */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-neutral-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-neutral-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {activeModal === "privacy"
                  ? "Kebijakan Privasi SiapKerja"
                  : activeModal === "terms"
                  ? "Ketentuan Layanan SiapKerja"
                  : "Keamanan Data Pengguna"}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-neutral-800 dark:hover:text-white"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-neutral-300">
              {activeModal === "privacy" ? (
                <>
                  <p>
                    SiapKerja menghargai dan melindungi privasi data pribadi pengguna. Seluruh informasi seperti riwayat pembelajaran, evaluasi keahlian, dan target karir disimpan secara aman.
                  </p>
                  <p>
                    Data Anda hanya dimanfaatkan untuk memberikan rekomendasi pembelajaran yang relevan dan tidak akan diperjualbelikan kepada pihak ketiga tanpa persetujuan Anda.
                  </p>
                </>
              ) : activeModal === "terms" ? (
                <>
                  <p>
                    Dengan mengakses platform SiapKerja, Anda menyetujui ketentuan penggunaan materi edukasi, panduan kurikulum karir, dan fitur pelacakan waktu aktif untuk keperluan peningkatan kompetensi pribadi secara sah.
                  </p>
                  <p>
                    Setiap materi yang disediakan dilindungi oleh hak kekayaan intelektual SiapKerja dan mitra penyedia kurikulum terkait.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Kami menerapkan standar keamanan enkripsi SSL/TLS pada setiap pengiriman data antara browser Anda dan server kami.
                  </p>
                  <p>
                    Kata sandi disimpan menggunakan hashing satu arah (one-way hashing) standar industri dan sesi akses diamankan menggunakan token berbasis JSON Web Token (JWT).
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
              >
                Tutup Informasi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
