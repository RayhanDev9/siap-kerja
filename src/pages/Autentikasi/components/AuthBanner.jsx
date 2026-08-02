import Text from "../../../ui/Text";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function AuthBanner() {
  return (
    <div className="mx-auto hidden flex-col items-center bg-[#F4F6FF] lg:flex">
      <div className="flex h-screen w-full flex-col justify-between p-8 pl-12 lg:p-12">
        {/* Bagian Atas: Logo */}
        <motion.div variants={cardVariants} className="self-start">
          <h1 className="text-start text-4xl font-extrabold tracking-tight text-[#0033CC]">
            SiapKerja
          </h1>
        </motion.div>

        {/* Bagian Tengah: Gambar Ilustrasi */}
        <motion.div variants={cardVariants} className="flex flex-1 items-center">
          {/* 
          Catatan: Gambar 3D glass arrow tidak bisa dibuat murni dengan CSS.
          Kamu harus mengekspor gambar ilustrasi tersebut dari Figma (tanpa background), 
          lalu panggil file-nya di sini.
        */}
          <img
            src="https://plus.unsplash.com/premium_photo-1681487746049-c39357159f69?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // <-- UBAH PATH INI
            alt="Ilustrasi SiapKerja"
            className="w-full max-w-lg rounded-2xl object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Bagian Bawah: Card Teks */}
        <motion.div variants={cardVariants} className="w-full max-w-lg rounded-[24px] bg-white p-7 shadow-sm">
          <h3 className="text-2xl leading-snug font-bold text-slate-900">
            Navigasi masa depan Anda dengan kecerdasan.
          </h3>
          <Text className="mt-3 text-lg leading-relaxed text-slate-500">
            Wawasan karier berbasis AI untuk mendorong perjalanan profesional
            Anda ke depan.
          </Text>
        </motion.div>
      </div>
    </div>
  );
}

export default AuthBanner;
