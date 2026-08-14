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
} from "./../../../features/dashboard/careerExplorerSlice";

function CareerExplorer() {
  const { careersData, filteredJobs, isLoading, error } = useSelector(
    (state) => state.careerExplorer,
  );

  const title = "Eksplorasi Karir";
  const description =
    "Temukan peluang karir yang sesuai dengan profil AI Anda.";
  const { filterCategories } = careersData;

  // Gunakan filteredJobs jika ada isinya, fallback ke jobListings asli
  const listingsToDisplay = filteredJobs;

  const dispatch = useDispatch();

  function handleCategory(category) {
    dispatch(catagory(category));
  }
  function handleCategorySearch(e) {
    if (e.target.value.length < 5) return;
    dispatch(catagory(e.target.value));
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
        <HeaderSection title={title} description={description} />

        <motion.div variants={cardVariants} className="lg:hidden">
          <div className="relative w-[90vw] md:w-2xl lg:w-full">
            <input
              type="text"
              name="filter"
              id="filter"
              onChange={handleCategorySearch}
              placeholder="cari peran, keahlian, atau industri"
              className="w-[100%] rounded-2xl bg-white py-2 pl-10 ring-2 ring-slate-300 outline-none "
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
              isActive={item.isActive}
              onClick={handleCategory}
            />
          ))}
        </div>

        {/* jobListings (Menggunakan listingsToDisplay) */}
        <div className="grid grid-cols-1 justify-items-center gap-7 md:mx-auto md:w-2xl md:grid-cols-2 lg:mx-0.5 lg:w-full">
          {listingsToDisplay.map((item) => (
            <JobListingsItems
              title={item.title}
              company={item.company}
              badge={item.badge}
              matchPercentage={item.matchPercentage}
              skills={item.skills}
              salary={item.salary}
              linkText={item.linkText}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default CareerExplorer;
