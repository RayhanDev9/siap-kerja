import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Section from "../../../ui/Section";
import HeaderSection from "../components/HeaderSection";
import TopBar from "../../../ui/TopBar";
import H3 from "../../../ui/H3";
import { motion } from "framer-motion";
import { cardVariants } from "../../../util/animations";
import { useDispatch, useSelector } from "react-redux";
// Pastikan path import ini sesuai dengan lokasi file slice lu
import {
  fetchLearningRoadmap,
  selectCategoryCareer,
  selectedPathName,
  selectPathCourses,
} from "../../../features/dashboard/learningRoadmapSlice";
import { fetchProfile } from "../../../features/dashboard/profileSlice";
import H2 from "../../../ui/H2";
import Loader from "../../../ui/Loader";

function LearningRoadmap() {
  const [activePath, setActivePath] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Ambil data kategori dan daftar kursus dari Redux
  const { selectedPath, selectedCourses, data, isLoading, error } = useSelector(
    (state) => state.learningRoadmap,
  );

  const { data: dataProfile } = useSelector((state) => state.profile);

  const handlePathChange = (pathName) => {
    setActivePath(pathName);
    dispatch(selectPathCourses(pathName));
  };

  useEffect(function () {
    if (!isLoading) dispatch(fetchLearningRoadmap());
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  return (
    <Section>
      <div className="flex flex-col gap-6">
        <TopBar placeholder="Cari tahap pembelajaran..." isSerch={false} />

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <HeaderSection
            title="Roadmap Pembelajaran"
            description="Ikuti alur belajar yang direkomendasikan untuk mencapai target karir Anda."
          />
          <button
            onClick={() => navigate("/courses")}
            className="flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-95 md:text-base dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            <i className="fa-solid fa-book-open"></i>
            Lihat Katalog Kursus
          </button>
        </div>

        {/* --- TABS UNTUK PILIH PATH (FE, BE, dll) --- */}
        {selectedPath && selectedPath.length > 0 && (
          <motion.div variants={cardVariants} className="scrollbar-hide mx-auto flex gap-2 overflow-x-auto pb-2">
            {/* {selectedPth.map((item, index) => ( */}
            <button
              onClick={() => handlePathChange(selectedPath)}
              className={`rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-all`}
            >
              <p className="mx-auto inline-block text-center text-2xl font-medium md:text-3xl lg:text-4xl">
                {selectedPath}
              </p>
            </button>
            {/* ))} */}
          </motion.div>
        )}

        {/* --- CONTAINER ROADMAP TIMELINE --- */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="mt-2 flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 dark:border-white/10 dark:bg-neutral-900"
        >
          {selectedCourses && selectedCourses.length > 0 ? (
            <div className="relative ml-3 border-l-2 border-slate-200 dark:border-white/10">
              {selectedCourses.map((course) => (
                <div
                  key={course.course_id}
                  className="relative mb-10 ml-8 last:mb-0"
                >
                  {/* Indikator Bulat (Timeline Dot) */}
                  <span
                    className={`absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-white dark:ring-neutral-900 ${
                      course.status === "completed"
                        ? "bg-green-500"
                        : course.status === "in_progress"
                          ? "animate-pulse bg-blue-500"
                          : "bg-slate-300 dark:bg-neutral-700"
                    }`}
                  ></span>

                  {/* Konten Tahapan */}
                  <div className="flex flex-col gap-1">
                    <H3
                      className={`text-lg font-bold md:text-xl ${
                        course.status === "locked"
                          ? "text-slate-400 dark:text-slate-500"
                          : "text-slate-800 dark:text-white"
                      }`}
                    >
                      {course.titleCourse}
                    </H3>

                    {/* Karena JSON Course tidak punya deskripsi, kita tampilkan jumlah steps */}
                    <p
                      className={`text-sm md:text-base lg:text-lg ${
                        course.status === "locked"
                          ? "text-slate-400/80 dark:text-slate-600"
                          : "text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      Terdiri dari {course.steps?.length || 0} modul
                      pembelajaran.
                    </p>

                    {/* Status Badge */}
                    <div className="mt-2 flex">
                      <span
                        className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium md:text-sm lg:text-base ${
                          course.status === "completed"
                            ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                            : course.status === "in_progress"
                              ? "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                              : "bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-400"
                        }`}
                      >
                        {course.status === "completed"
                          ? "Selesai"
                          : course.status === "in_progress"
                            ? "Sedang Dipelajari"
                            : "Terkunci"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-10 text-center text-slate-500 dark:text-slate-400">
              <p>Belum ada roadmap untuk pilihan ini.</p>
            </div>
          )}
        </motion.div>
      </div>
    </Section>
  );
}

export default LearningRoadmap;
