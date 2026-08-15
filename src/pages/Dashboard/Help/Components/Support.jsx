import React from "react";
import Section from "../../../../ui/Section";
import TopBar from "../../../../ui/TopBar";
import HeaderSection from "../../components/HeaderSection";
import { motion } from "framer-motion";
import { cardVariants } from "../../../../util/animations";
import H3 from "../../../../ui/H3";
import Text from "../../../../ui/Text";

const Support = () => {
  const contactMethods = [
    {
      title: "Email Dukungan",
      detail: "rayhanoi26@gmail.com",
      iconType: "fa-solid",
      icon: "fa-envelope",
      action: "Kirim Email",
      color: "text-blue-600 dark:text-blue-400",
      link: "mailto:rayhanoi26@gmail.com",
    },
    {
      title: "WhatsApp",
      detail: "+62 856 9209 7048",
      iconType: "fa-brands",
      icon: "fa-whatsapp",
      action: "Chat Sekarang",
      color: "text-green-600 dark:text-green-500",
      link: "https://wa.me/6285692097048",
    },
    {
      title: "Komunitas Discord",
      detail: "discord.gg/siapkerja",
      iconType: "fa-brands",
      icon: "fa-discord",
      action: "Gabung Discord",
      color: "text-indigo-600 dark:text-indigo-400",
      link: "https://discord.gg/siapkerja",
    },
    // --- TAMBAHAN SOSIAL MEDIA ---
    {
      title: "Instagram",
      detail: "@siapkerja",
      iconType: "fa-brands",
      icon: "fa-instagram",
      action: "Kunjungi Profil",
      color: "text-pink-600 dark:text-pink-500",
      link: "https://instagram.com/siapkerja",
    },
    {
      title: "Facebook",
      detail: "SiapKerja Official",
      iconType: "fa-brands",
      icon: "fa-facebook",
      action: "Kunjungi Halaman",
      color: "text-blue-700 dark:text-blue-500",
      link: "https://facebook.com/siapkerja",
    },
    {
      title: "Twitter / X",
      detail: "@siapkerja",
      iconType: "fa-brands",
      // Catatan: Jika fa-x-twitter tidak muncul, ganti dengan fa-twitter (tergantung versi FontAwesome kamu)
      icon: "fa-x-twitter",
      action: "Follow Kami",
      color: "text-slate-900 dark:text-white",
      link: "https://twitter.com/siapkerja",
    },
  ];

  return (
    <Section>
      <div className="flex flex-col gap-6">
        <TopBar placeholder="Cari dukungan..." isSerch={false} />
        <HeaderSection
          title="Hubungi Dukungan"
          description="Tim kami siap membantu Anda 24/7. Pilih saluran komunikasi yang paling nyaman bagi Anda."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // Mengikuti tema FAQ: hover effects, border transparent, shadow
              className="group flex flex-col items-center justify-center rounded-2xl border-2 border-transparent bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md dark:border-white/20 dark:bg-neutral-900"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 transition-colors group-hover:bg-blue-50 dark:bg-neutral-800 dark:group-hover:bg-neutral-800/80">
                <i
                  className={`${method.iconType} ${method.icon} text-4xl ${method.color} transition-transform duration-300 group-hover:scale-110`}
                ></i>
              </div>
              <H3 className="mb-1">{method.title}</H3>
              <Text className="mb-6">{method.detail}</Text>

              {/* Tombol diubah menjadi anchor (a) tag agar bisa langsung routing eksternal */}
              <a
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95 md:text-base dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                {method.action}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Support;
