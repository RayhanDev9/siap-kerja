import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import Section from "./../../../ui/Section";
import HeaderSection from "./../components/HeaderSection";
import TopBar from "../../../ui/TopBar";
import Loader from "../../../ui/Loader";
import Error from "../../../ui/Error";
import { cardVariants } from "../../../util/animations";
import {
  catagory,
  fetchCareerExplorer,
  filterSavedCareers,
  toggleSaveJob,
} from "../../../features/dashboard/careerExplorerSlice";
import FilterCategoriesItems from "../CareerExplorer/components/FilterCategoriesItems";
import JobListingsItems from "../CareerExplorer/components/JobListingsItems";
import Text from "../../../ui/Text";
import { useNavigate } from "react-router";
import H3 from "../../../ui/H3";

const filterCategories = [
  { id: "all", label: "Semua" },
  { id: "tech", label: "Teknologi" },
  { id: "business", label: "Bisnis" },
  { id: "creative", label: "Kreatif" },
];

function SavedCareers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    careersData,
    filteredJobs,
    isLoading,
    error,
    activeCategory,
    savedCareers,
    filteredSavedCareers,
  } = useSelector((state) => state.careerExplorer);

  // 2. Filter data lowongan
  useEffect(() => {
    dispatch(fetchCareerExplorer());
  }, []);

  // 1. Filter karir yang tersimpan saat pertama kali halaman dimuat
  useEffect(() => {
    dispatch(filterSavedCareers());
  }, [dispatch]);
  if (isLoading || !careersData) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  // 3. Tentukan data yang ditampilkan (prioritaskan hasil filter)
  const displayList = filteredSavedCareers || savedCareers || [];

  function handleCategory(categoryLabel) {
    dispatch(filterSavedCareers(categoryLabel));
  }

  function handleCategorySearch(e) {
    dispatch(filterSavedCareers(e.target.value));
  }

  function handleToggleSave(jobId) {
    dispatch(toggleSaveJob(jobId)).then(() => {
      dispatch(fetchCareerExplorer()).then(() => {
        dispatch(filterSavedCareers("semua"));
      });
    });
  }
  return (
    <Section>
      <div className="flex flex-col gap-7">
        {/* Top bar */}
        <TopBar placeholder="cari peran, keahlian, atau industri" />

        <HeaderSection
          title="Karier Tersimpan"
          description="Lanjutkan perjalanan menuju peran impian Anda."
        />

        {/* Search Mobile */}
        <motion.div variants={cardVariants} className="lg:hidden">
          <div className="relative w-[90vw] md:w-2xl lg:w-full">
            <input
              type="text"
              name="filter"
              id="filter"
              onChange={handleCategorySearch}
              placeholder="cari peran, keahlian, atau industri"
              className="w-full rounded-2xl bg-white py-2 pr-4 pl-10 ring-2 ring-slate-300 outline-none"
            />
            <i className="fa-solid fa-magnifying-glass absolute top-3 left-3 text-slate-400"></i>
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="no-scrollbar flex gap-3 overflow-x-auto py-2 whitespace-nowrap">
          {filterCategories.map((item) => (
            <FilterCategoriesItems
              key={item.id}
              id={item.id}
              label={item.label}
              isActive={
                item.label.toLowerCase() === (activeCategory || "semua")
              }
              onClick={handleCategory}
            />
          ))}
        </div>

        {/* Job Listings */}
        {displayList.length === 0 ? (
          <motion.div
            variants={cardVariants}
            className="flex min-h-[50vh] w-full flex-col items-center justify-center rounded-2xl bg-white p-7 text-center dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
          >
            {/* Lingkaran Ikon Visual */}
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35">
              <i className="fa-regular fa-bookmark text-3xl text-blue-500 dark:text-blue-400"></i>
            </div>

            {/* Judul & Deskripsi */}
            <H3 className="text-lg font-bold text-slate-800 dark:text-white">
              Belum Ada Karier Tersimpan
            </H3>
            <Text className="mt-1.5 max-w-sm text-sm text-slate-500 dark:text-slate-400">
              Simpan lowongan yang menarik minat Anda saat menjelajah agar mudah
              ditemukan kembali di sini.
            </Text>

            {/* Tombol Aksi Menuju Halaman Eksplorasi */}
            <button
              onClick={() => navigate("/careerExplorer")}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 active:scale-95"
            >
              <i className="fa-solid fa-compass"></i>
              <span>Jelajahi Karier Sekarang</span>
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 justify-items-center gap-7 md:mx-auto md:w-2xl md:grid-cols-2 lg:mx-0.5 lg:w-full">
            {displayList.map((item) => (
              <JobListingsItems
                key={item.id}
                id={item.id}
                title={item.title}
                company={item.company}
                matchPercentage={item.match_percentage}
                skills={item.skills}
                salary={item.salary}
                linkText={item.apply_url}
                isSaved={item.is_saved}
                onHandleToggleSave={handleToggleSave}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

export default SavedCareers;
