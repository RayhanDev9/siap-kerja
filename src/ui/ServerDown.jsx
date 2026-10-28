import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ServerDown({ onRetry, isLoading = false }) {
  const [showTips, setShowTips] = useState(false);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-8 dark:bg-black transition-colors duration-200">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl dark:bg-rose-600/15" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl dark:bg-amber-600/15" />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-xl backdrop-blur-md sm:p-10 dark:border-white/10 dark:bg-neutral-900/90"
      >
        {/* Animated Icon & Badge */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-5 flex items-center justify-center">
            {/* Outer pulse circle */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.35, 0.1, 0.35],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-28 w-28 rounded-full bg-rose-500/20 dark:bg-rose-500/30"
            />

            {/* Inner icon container */}
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white shadow-lg shadow-rose-500/25">
              <i className="fa-solid fa-server text-3xl"></i>
              {/* Small disconnected badge indicator */}
              <span className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-rose-600 text-[11px] text-white ring-4 ring-white dark:ring-neutral-900">
                <i className="fa-solid fa-triangle-exclamation"></i>
              </span>
            </div>
          </div>

          {/* Status Chip */}
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/40 dark:text-rose-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500"></span>
            </span>
            Koneksi Server Terputus (503 / Offline)
          </div>

          {/* Title & Description */}
          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Server Sedang Tidak Tersedia
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-neutral-300">
            Aplikasi tidak dapat terhubung ke server SiapKerja saat ini. Server mungkin sedang dalam pemeliharaan berkala atau koneksi jaringan terputus.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-3">
          <button
            type="button"
            onClick={onRetry}
            disabled={isLoading}
            className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition-all hover:bg-blue-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500"
          >
            {isLoading ? (
              <>
                <i className="fa-solid fa-circle-notch animate-spin text-base"></i>
                <span>Menghubungkan Ulang...</span>
              </>
            ) : (
              <>
                <i className="fa-solid fa-arrows-rotate text-base transition-transform group-hover:rotate-180"></i>
                <span>Coba Hubungkan Lagi</span>
              </>
            )}
          </button>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <Link
              to="/login"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-900 active:scale-[0.98] sm:text-sm dark:border-neutral-800 dark:bg-neutral-800/60 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
            >
              <i className="fa-solid fa-right-to-bracket text-xs"></i>
              Ke Halaman Login
            </Link>

            <Link
              to="/landingPage"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-900 active:scale-[0.98] sm:text-sm dark:border-neutral-800 dark:bg-neutral-800/60 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
            >
              <i className="fa-solid fa-house text-xs"></i>
              Ke Landing Page
            </Link>
          </div>
        </div>

        {/* Collapsible Diagnostics / Tips */}
        <div className="mt-6 border-t border-slate-100 pt-4 dark:border-neutral-800/70">
          <button
            type="button"
            onClick={() => setShowTips(!showTips)}
            className="flex w-full items-center justify-between text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-neutral-400 dark:hover:text-neutral-200"
          >
            <span>
              <i className="fa-regular fa-circle-question mr-1.5"></i>
              Butuh bantuan atau langkah perbaikan?
            </span>
            <i
              className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${
                showTips ? "rotate-180" : ""
              }`}
            ></i>
          </button>

          {showTips && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 space-y-2 rounded-xl bg-slate-50 p-3.5 text-xs text-slate-600 dark:bg-neutral-800/50 dark:text-neutral-300"
            >
              <div className="flex items-start gap-2">
                <i className="fa-solid fa-wifi mt-0.5 text-blue-500"></i>
                <span>Pastikan koneksi internet di perangkat Anda aktif dan stabil.</span>
              </div>
              <div className="flex items-start gap-2">
                <i className="fa-solid fa-shield-halved mt-0.5 text-blue-500"></i>
                <span>
                  Jika backend menggunakan tunnel Ngrok, pastikan URL endpoint backend masih aktif dan valid.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <i className="fa-solid fa-clock-rotate-left mt-0.5 text-blue-500"></i>
                <span>Silakan tunggu 1-2 menit lalu klik tombol "Coba Hubungkan Lagi".</span>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default ServerDown;
