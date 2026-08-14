import React from "react";
import Section from "../../../../ui/Section";
import TopBar from "../../../../ui/TopBar";
import HeaderSection from "../../components/HeaderSection";
import { motion } from "framer-motion";
import { cardVariants } from "../../../../util/animations";
import H3 from "../../../../ui/H3";
import Text from "../../../../ui/Text";

const BugReport = () => {
  return (
    <Section>
      <div className="flex flex-col gap-6">
        <TopBar placeholder="Laporkan bug..." isSerch={false} />
        <HeaderSection 
          title="Laporkan Bug / Kendala" 
          description="Bantu kami meningkatkan SiapKerja dengan melaporkan masalah yang Anda temukan."
        />

        <motion.div
          variants={cardVariants}
          className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-8 shadow-sm dark:border dark:border-white/20 dark:bg-neutral-900"
        >
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Judul Masalah
              </label>
              <input
                type="text"
                placeholder="Contoh: Gagal memuat skor kesiapan"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-neutral-800 dark:text-white"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Kategori
              </label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 dark:border-white/10 dark:bg-neutral-800 dark:text-white">
                <option>Dashboard</option>
                <option>Profil</option>
                <option>Rekomendasi AI</option>
                <option>Lainnya</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Deskripsi Detail
              </label>
              <textarea
                rows="4"
                placeholder="Jelaskan apa yang terjadi dan langkah untuk mereproduksinya..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 dark:border-white/10 dark:bg-neutral-800 dark:text-white"
              ></textarea>
            </div>
            <button className="w-full rounded-xl bg-red-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600">
              Kirim Laporan
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default BugReport;
