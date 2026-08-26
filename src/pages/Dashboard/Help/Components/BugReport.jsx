import React, { useState } from "react";
import Section from "../../../../ui/Section";
import HeaderSection from "../../components/HeaderSection";
import Text from "../../../../ui/Text";
import TopBar from "../../../../ui/TopBar";
// Import hook yang baru dibikin (sesuaikan path-nya ya bro)
import { useHelp } from "./../../../../hooks/useHelp";

const BugReport = () => {
  const { submitBugReport, isLoading } = useHelp(); // Panggil hook-nya

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
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Bungkus data ke dalam FormData (Wajib karena ada file gambar)
    const dataToSend = new FormData();
    dataToSend.append("title", formData.title);
    dataToSend.append("category", formData.category);
    dataToSend.append("description", formData.description);

    // Perhatikan key 'screenshot' ini harus SAMA persis dengan request di controller Laravel lu
    if (formData.file) {
      dataToSend.append("screenshot", formData.file);
    }

    // 2. Tembak API via useHelp
    const result = await submitBugReport(dataToSend);

    // 3. Kalau sukses, arahkan ke WhatsApp
    if (result.success) {
      const adminWA = "6285692097048"; // Ganti nomor admin lu (pakai 62)
      const imageUrl = result.data?.image_url;

      // Susun pesan WA
      let pesanWA = `*LAPORAN BUG SIAPKERJA*%0A%0A`;
      pesanWA += `*Judul:* ${formData.title}%0A`;
      pesanWA += `*Kategori:* ${formData.category}%0A`;
      pesanWA += `*Deskripsi:* ${formData.description}%0A`;

      if (imageUrl) {
        pesanWA += `%0A*Link Screenshot:* ${imageUrl}`;
      }

      // Buka WA di tab baru
      window.open(`https://wa.me/${adminWA}?text=${pesanWA}`, "_blank");

      // Reset Form kembali kosong
      setFormData({
        title: "",
        category: "Dashboard",
        description: "",
        file: null,
      });
      alert("Laporan berhasil dikirim!");
    } else {
      alert("Gagal: " + result.message);
    }
  };

  return (
    <Section>
      <TopBar placeholder="Tentang kami..." isSerch={false} />

      <div className="flex flex-col gap-6">
        <HeaderSection
          title="Laporkan Bug / Kendala"
          description="Bantu kami meningkatkan SiapKerja dengan melaporkan masalah yang Anda temukan."
        />

        <div className="mx-auto w-full max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 dark:border-white/10 dark:bg-neutral-900"
          >
            {/* Input Judul */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="title"
                className="text-sm font-medium text-slate-700 md:text-base lg:text-lg dark:text-slate-300"
              >
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
                disabled={isLoading}
                className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm text-slate-800 transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none md:text-base lg:text-lg dark:border-white/20 dark:text-slate-200 dark:focus:border-blue-500"
              />
            </div>

            {/* Input Kategori */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="category"
                className="text-sm font-medium text-slate-700 md:text-base lg:text-lg dark:text-slate-300"
              >
                Kategori
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full appearance-none rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm text-slate-800 transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none md:text-base lg:text-lg dark:border-white/20 dark:text-slate-200 dark:focus:border-blue-500"
              >
                <option value="Dashboard" className="bg-white dark:bg-neutral-800">Dashboard</option>
                <option value="Career Explorer" className="bg-white dark:bg-neutral-800">Career Explorer</option>
                <option value="Saved Careers" className="bg-white dark:bg-neutral-800">Saved Careers</option>
                <option value="Market Trends" className="bg-white dark:bg-neutral-800">Market Trends</option>
                <option value="Analytics" className="bg-white dark:bg-neutral-800">Analytics</option>
                <option value="Skill Gap" className="bg-white dark:bg-neutral-800">Skill Gap</option>
                <option value="Roadmap" className="bg-white dark:bg-neutral-800">Roadmap</option>
                <option value="Courses" className="bg-white dark:bg-neutral-800">Courses</option>
                <option value="Settings" className="bg-white dark:bg-neutral-800">Settings</option>
                {/* Opsi Baru: Autentikasi */}
                <option value="Auth" className="bg-white dark:bg-neutral-800">Autentikasi (Login / Register)</option>
                <option value="Lainnya" className="bg-white dark:bg-neutral-800">Lainnya</option>
              </select>
            </div>

            {/* Input Deskripsi */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="description"
                className="text-sm font-medium text-slate-700 md:text-base lg:text-lg dark:text-slate-300"
              >
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
                disabled={isLoading}
                className="w-full resize-none rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm text-slate-800 transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none md:text-base lg:text-lg dark:border-white/20 dark:text-slate-200 dark:focus:border-blue-500"
              ></textarea>
            </div>

            {/* Input File */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700 md:text-base lg:text-lg dark:text-slate-300">
                Lampiran Screenshot (Opsional)
              </label>
              <label
                htmlFor="file-upload"
                className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 py-8 transition-colors hover:border-blue-400 hover:bg-blue-50/50 dark:border-white/20 dark:bg-neutral-900/50 dark:hover:border-blue-500 dark:hover:bg-neutral-800"
              >
                <i className="fa-solid fa-cloud-arrow-up mb-3 text-3xl text-slate-400 transition-colors group-hover:text-blue-500"></i>
                <Text className="text-sm font-medium text-slate-700 md:text-base lg:text-lg dark:text-slate-300">
                  {formData.file
                    ? formData.file.name
                    : "Klik untuk unggah gambar screenshot"}
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
                  disabled={isLoading}
                />
              </label>
            </div>

            {/* Tombol Submit dengan indikator Loading */}
            <button
              type="submit"
              disabled={isLoading}
              className={`mt-2 w-full rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all md:text-base lg:text-lg ${
                isLoading
                  ? "cursor-not-allowed bg-blue-400"
                  : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg active:scale-95 dark:bg-blue-600 dark:hover:bg-blue-500"
              }`}
            >
              {isLoading ? "Mengirim Laporan..." : "Kirim Laporan"}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default BugReport;