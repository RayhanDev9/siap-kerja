import HeaderSection from "../components/HeaderSection";
// atau sesuaikan titik-titiknya (../) tergantung letak folder aslinya
import dataCareerExplorer from "./components/dataCareerExplorer";
import FilterCategoriesItems from "./components/FilterCategoriesItems";
import JobListingsItems from "./components/JobListingsItems";
import Section from "./../../../ui/Section";
import TopBar from "../../../ui/TopBar";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../ui/Loader";
import {
  catagory,
  fetchCareerExplorer,
  toggleSaveJob,
} from "./../../../features/dashboard/careerExplorerSlice";
import { filter } from "framer-motion/client";
import { useEffect } from "react";

const filterCategories = [
  { id: "all", label: "Semua", isActive: true },
  { id: "tech", label: "Teknologi", isActive: false },
  { id: "business", label: "Bisnis", isActive: false },
  { id: "creative", label: "Kreatif", isActive: false },
];
function CareerExplorer() {
  const { careersData, filteredJobs, isLoading, error, activeCategory } =
    useSelector((state) => state.careerExplorer);

  // Gunakan filteredJobs jika ada isinya, fallback ke jobListings asli

  // Menggunakan optional chaining dan pengecekan fallback array kosong
  const filteredJobsToDisplay =
    filteredJobs && filteredJobs.length > 0
      ? filteredJobs
      : careersData?.data || [];

  console.info(filteredJobsToDisplay);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCareerExplorer());
  }, [dispatch]);

  function handleCategory(category) {
    dispatch(catagory(category));
  }
  function handleCategorySearch(e) {
    if (e.target.value.length < 5) return;
    dispatch(catagory(e.target.value));
  }

  function handleToggleSave(jobId) {
    dispatch(toggleSaveJob(jobId)).then(() => {
      // Ambil ulang data fresh dari server secara otomatis
      dispatch(fetchCareerExplorer());
    });
  }

  if (isLoading) {
    return <Loader />;
  }

  if (error) return <Error />;
  return (
    <Section>
      <div className="mx-auto flex flex-col gap-5 md:w-2xl lg:w-full">
        <TopBar
          placeholder="cari peran, keahlian, atau industri"
          onChange={handleCategorySearch}
        />
        <HeaderSection
          title="Eksplorasi Karir"
          description="Temukan peluang karir yang sesuai dengan profil AI Anda."
        />

        <motion.div variants={cardVariants} className="lg:hidden">
          <div className="relative w-[90vw] md:w-2xl lg:w-full">
            <input
              type="text"
              name="filter"
              id="filter"
              onChange={handleCategorySearch}
              placeholder="cari peran, keahlian, atau industri"
              className="w-[100%] rounded-2xl bg-white py-2 pl-10 ring-2 ring-slate-300 outline-none"
            />
            <i className="fa-solid fa-magnifying-glass absolute top-3 left-3"></i>
          </div>
        </motion.div>

        {/* category filter */}
        <div className="no-scrollbar flex gap-3 overflow-x-auto py-2 whitespace-nowrap">
          {filterCategories.map((item) => (
            <FilterCategoriesItems
              key={item.id}
              id={item.id}
              label={item.label}
              isActive={item.label.toLowerCase() === activeCategory}
              onClick={handleCategory}
            />
          ))}
        </div>

        {/* jobListings (Menggunakan listingsToDisplay) */}
        <div className="grid grid-cols-1 justify-items-center gap-7 md:mx-auto md:w-2xl md:grid-cols-2 lg:mx-0.5 lg:w-full">
          {filteredJobsToDisplay.map((item) => (
            <JobListingsItems
              title={item.title}
              company={item.company}
              // badge={item.badge}
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
      </div>
    </Section>
  );
}

export default CareerExplorer;
