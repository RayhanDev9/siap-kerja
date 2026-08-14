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
      icon: "fa-envelope",
      action: "Kirim Email",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "WhatsApp",
      detail: "+62 856 9209 7048",
      icon: "fa-brands fa-whatsapp ",
      action: "Chat Sekarang",
      color: "text-green-600 dark:text-green-500",
    },
    {
      title: "Komunitas Discord",
      detail: "discord.gg/siapkerja",
      icon: "fa-brands fa-discord ",
      action: "Gabung Discord",
      color: "text-indigo-600 dark:text-indigo-400",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-sm dark:border dark:border-white/20 dark:bg-neutral-900"
            >
              <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 dark:bg-neutral-800`}>
                <i className={`fa-solid ${method.icon} text-3xl ${method.color}`}></i>
              </div>
              <H3 className="mb-1">{method.title}</H3>
              <Text className="mb-6">{method.detail}</Text>
              <button className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                {method.action}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Support;
