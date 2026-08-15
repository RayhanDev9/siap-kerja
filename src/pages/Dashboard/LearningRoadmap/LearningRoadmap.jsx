import React from "react";
import { useNavigate } from "react-router-dom";
import Section from "../../../ui/Section";
import HeaderSection from "../components/HeaderSection";
import TopBar from "../../../ui/TopBar";
import { motion } from "framer-motion";
import { cardVariants } from "../../../util/animations";

const LearningRoadmap = () => {
  const navigate = useNavigate();

  // Data statis untuk tahapan Roadmap
  const roadmapSteps = [
    {
      id: 1,
      title: "Tahap 1: Fondasi Desain & Riset",
      description:
        "Pahami dasar-dasar UI/UX, psikologi warna, dan cara melakukan riset pengguna yang efektif.",
      status: "completed", // completed, current, locked
    },
    {
      id: 2,
      title: "Tahap 2: Wireframing & Prototyping",
      description:
        "Mulai merancang struktur aplikasi menggunakan Figma dan membuat interaksi prototipe.",
      status: "current",
    },
    {
      id: 3,
      title: "Tahap 3: Design System & Handoff",
      description:
        "Pelajari cara membuat komponen yang dapat digunakan ulang dan bekerja sama dengan developer.",
      status: "locked",
    },
  ];

  return (
    <Section>
      <div className="flex flex-col gap-6">
        <TopBar placeholder="Cari tahap pembelajaran..." isSerch={false} />

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <HeaderSection
            title="Roadmap Pembelajaran"
            description="Ikuti alur belajar yang direkomendasikan AI untuk mencapai target karir Anda."
          />
          {/* Tombol Pindah ke Pages Courses */}
          <button
            onClick={() => navigate("/courses")}
            className="flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-95 md:text-base dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            <i className="fa-solid fa-book-open"></i>
            Lihat Katalog Kursus
          </button>
        </div>

        {/* Container Roadmap Timeline */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="mt-4 flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 dark:border-white/10 dark:bg-neutral-900"
        >
          <div className="relative ml-3 border-l-2 border-slate-200 dark:border-white/10">
            {roadmapSteps.map((step, index) => (
              <div key={step.id} className="relative mb-10 ml-8 last:mb-0">
                {/* Indikator Bulat (Timeline Dot) */}
                <span
                  className={`absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-white dark:ring-neutral-900 ${
                    step.status === "completed"
                      ? "bg-green-500"
                      : step.status === "current"
                        ? "animate-pulse bg-blue-500"
                        : "bg-slate-300 dark:bg-neutral-700"
                  }`}
                ></span>

                {/* Konten Tahapan */}
                <div className="flex flex-col gap-1">
                  <h3
                    className={`text-lg font-bold md:text-xl ${
                      step.status === "locked"
                        ? "text-slate-400 dark:text-slate-500"
                        : "text-slate-800 dark:text-white"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm md:text-base ${
                      step.status === "locked"
                        ? "text-slate-400/80 dark:text-slate-600"
                        : "text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {step.description}
                  </p>

                  {/* Status Badge */}
                  <div className="mt-2 flex">
                    <span
                      className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${
                        step.status === "completed"
                          ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                          : step.status === "current"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                            : "bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-400"
                      }`}
                    >
                      {step.status === "completed"
                        ? "Selesai"
                        : step.status === "current"
                          ? "Sedang Dipelajari"
                          : "Terkunci"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default LearningRoadmap;
