import HeaderSection from "../components/HeaderSection";
import FilterCategoriesItems from "./components/FilterCategoriesItems";
import JobListingsItems from "./components/JobListingsItems";
import Section from "./../../../ui/Section";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../ui/Loader";
import {
  catagory,
  fetchCareerExplorer,
  toggleSaveJob,
} from "./../../../features/dashboard/careerExplorerSlice";
import { useEffect } from "react";
import Text from "../../../ui/Text";
import H3 from "../../../ui/H3";

const filterCategories = [
  { id: "all", label: "Semua", isActive: true, detail: "Career" },
  { id: "tech", label: "Teknologi", isActive: false },
  { id: "business", label: "Bisnis", isActive: false },
  { id: "creative", label: "Kreatif", isActive: false },
];

function CareerExplorer() {
  const { careersData, filteredJobs, isLoading, error, activeCategory } =
    useSelector((state) => state.careerExplorer);

  // 🚀 PERBAIKAN LOGIKA PENCARIAN
  const isFiltering = activeCategory && activeCategory !== "semua";
  const filteredJobsToDisplay = isFiltering
    ? filteredJobs || []
    : careersData?.data || [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCareerExplorer());
  }, [dispatch]);

  function handleCategory(category) {
    dispatch(catagory(category));
  }

  function handleCategorySearch(e) {
    // Langsung tembak ke Redux setiap kali ada perubahan ketikan
    dispatch(catagory(e.target.value));
  }

  function handleToggleSave(jobId) {
    dispatch(toggleSaveJob(jobId)).then(() => {
      dispatch(fetchCareerExplorer());
    });
  }

  if (isLoading) {
    return <Loader />;
  }

  if (error)
    return (
      <div className="p-7 text-red-500">
        Terjadi kesalahan saat memuat data.
      </div>
    );

  return (
    <Section>
      <div className="mx-auto flex flex-col gap-6 md:w-2xl lg:w-full">
        <HeaderSection
          title="Eksplorasi Karir"
          description="Temukan peluang karir yang sesuai dengan profil Anda."
        />

        {/* Baris Filter & Pencarian Terpadu */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
        >
          {/* Kategori Filter (Kiri di Desktop, Atas di Mobile) */}
          <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2 whitespace-nowrap lg:pb-0">
            {filterCategories.map((item) => (
              <FilterCategoriesItems
                key={item.id}
                id={item.id}
                label={item.label}
                allDetail={item.detail ? item.detail : ""}
                isActive={
                  item.label.toLowerCase() === (activeCategory || "semua")
                }
                onClick={handleCategory}
              />
            ))}
          </div>

          {/* Search Bar (Kanan di Desktop, Bawah di Mobile) */}
          <div className="relative w-full shrink-0 lg:w-80 xs:w-64 ">
            <input
              type="text"
              name="filter"
              id="filter"
              onChange={handleCategorySearch}
              placeholder="Cari peran, keahlian, atau industri..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-2.5 pr-4 pl-11 text-sm text-slate-900 transition-all outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-white/25 dark:bg-neutral-900 dark:text-white hover:dark:border-white/35"
            />
            <i className="fa-solid fa-magnifying-glass absolute top-3.5 left-4 text-sm text-slate-400"></i>
          </div>
        </motion.div>

        {/* 🚀 PERBAIKAN TAMPILAN KOSONG SAAT SEARCH TIDAK DITEMUKAN */}
        {filteredJobsToDisplay.length === 0 ? (
          <motion.div
            variants={cardVariants}
            className="flex min-h-[40vh] w-full flex-col items-center justify-center rounded-2xl bg-white p-7 text-center dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
          >
            <i className="fa-solid fa-folder-open mb-4 text-6xl text-slate-200 dark:text-slate-700"></i>
            <H3 className="text-lg font-bold text-slate-800 dark:text-white">
              Karier Tidak Ditemukan
            </H3>
            <Text className="mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
              Tidak ada hasil yang cocok dengan kata kunci tersebut. Coba
              gunakan istilah lain atau periksa ejaan Anda.
            </Text>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 justify-items-center gap-7 md:mx-auto md:w-2xl md:grid-cols-2 lg:mx-0 lg:w-full lg:grid-cols-2 xl:grid-cols-3">
            {filteredJobsToDisplay.map((item) => (
              <JobListingsItems
                title={item.title}
                company={item.company}
                id={item.id}
                matchPercentage={item.match_percentage}
                skills={item.skills}
                salary={item.salary}
                linkText={item.apply_url}
                key={`${item.id}-${item.is_saved}`}
                onHandleToggleSave={handleToggleSave}
                isSaved={item.is_saved}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

export default CareerExplorer;
