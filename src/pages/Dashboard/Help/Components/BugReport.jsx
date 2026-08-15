import React, { useState } from "react";
import Section from "../../../../ui/Section";
import HeaderSection from "../../components/HeaderSection";
import Text from "../../../../ui/Text";
import TopBar from "../../../../ui/TopBar";

const BugReport = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Dashboard",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    // Menyimpan file yang diunggah ke dalam state
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Laporan:", formData);
    // Tambahkan logika pengiriman data API di sini
    alert("Laporan berhasil dikirim!");
  };

  return (
    <Section>
        <TopBar placeholder="Tentang kami..." isSerch={false} />

      <div className="flex flex-col gap-6">
        <HeaderSection 
          title="Laporkan Bug / Kendala" 
          description="Bantu kami meningkatkan SiapKerja dengan melaporkan masalah yang Anda temukan."
        />

        {/* Form Container (Dibuat responsif dan posisinya di tengah) */}
        <div className="mx-auto w-full max-w-2xl">
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 dark:border-white/10 dark:bg-neutral-900"
          >
            {/* Field: Judul Masalah */}
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm md:text-base lg:text-lg font-medium text-slate-700 dark:text-slate-300">
                Judul Masalah
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Contoh: Gagal memuat skor kesiapan"
                required
                className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm md:text-base lg:text-lg text-slate-800 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-white/20 dark:text-slate-200 dark:focus:border-blue-500"
              />
            </div>

            {/* Field: Kategori */}
            <div className="flex flex-col gap-2">
              <label htmlFor="category" className="text-sm md:text-base lg:text-lg font-medium text-slate-700 dark:text-slate-300">
                Kategori
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full appearance-none rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm md:text-base lg:text-lg text-slate-800 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-white/20 dark:text-slate-200 dark:focus:border-blue-500"
              >
                <option value="Dashboard" className="bg-white dark:bg-neutral-800">Dashboard</option>
                <option value="Profil" className="bg-white dark:bg-neutral-800">Profil & Akun</option>
                <option value="Rekomendasi" className="bg-white dark:bg-neutral-800">Rekomendasi Karir</option>
                <option value="Roadmap" className="bg-white dark:bg-neutral-800">Roadmap Belajar</option>
                <option value="Lainnya" className="bg-white dark:bg-neutral-800">Lainnya</option>
              </select>
            </div>

            {/* Field: Deskripsi Detail */}
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-sm md:text-base lg:text-lg font-medium text-slate-700 dark:text-slate-300">
                Deskripsi Detail
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Jelaskan apa yang terjadi dan langkah untuk mereproduksinya..."
                rows="5"
                required
                className="w-full resize-none rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm md:text-base lg:text-lg text-slate-800 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-white/20 dark:text-slate-200 dark:focus:border-blue-500"
              ></textarea>
            </div>

            {/* FITUR BARU: Upload Screenshot */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base lg:text-lg font-medium text-slate-700 dark:text-slate-300">
                Lampiran Screenshot (Opsional)
              </label>
              <label 
                htmlFor="file-upload" 
                className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 py-8 transition-colors hover:border-blue-400 hover:bg-blue-50/50 dark:border-white/20 dark:bg-neutral-900/50 dark:hover:border-blue-500 dark:hover:bg-neutral-800"
              >
                <i className="fa-solid fa-cloud-arrow-up mb-3 text-3xl text-slate-400 transition-colors group-hover:text-blue-500"></i>
                <Text className="text-sm md:text-base lg:text-lg font-medium">
                  {formData.file ? formData.file.name : "Klik untuk unggah gambar screenshot"}
                </Text>
                <Text className="mt-1 text-xs text-slate-500">
                  Maksimal ukuran file: 5MB (JPG, PNG)
                </Text>
                <input 
                  id="file-upload" 
                  type="file" 
                  accept="image/png, image/jpeg" 
                  className="hidden" 
                  onChange={handleFileChange}
                />
              </label>
            </div>

            {/* Tombol Submit (Warna biru selaras dengan tema) */}
            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-blue-600 px-6 py-3.5 text-sm md:text-base lg:text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95 dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              Kirim Laporan
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default BugReport;