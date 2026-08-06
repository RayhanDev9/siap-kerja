import HeaderSection from "../components/HeaderSection";
import dataCareerExplorer from "./components/dataCareerExplorer";
import FilterCategoriesItems from "./components/FilterCategoriesItems";
import JobListingsItems from "./components/JobListingsItems";
import Section from "./../../../ui/Section";
import TopBar from "../../../ui/TopBar";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import { useSelector } from "react-redux";
import Loader from "../../../ui/Loader";

function CareerExplorer() {
  const { careersData, isLoading, error } = useSelector(
    (state) => state.careerExplorer,
  );
  console.info(careersData);

  // const { title, description } = careersData.headerData;
  const title = "Eksplorasi Karir";
  const description =
    "Temukan peluang karir yang sesuai dengan profil AI Anda.";
  const { filterCategories } = careersData;
  const { jobListings } = careersData;

  if (isLoading) {
    return <Loader />;
  }

  if (error) return <Error />;
  return (
    <Section>
      <div className="mx-auto flex flex-col gap-5 md:w-2xl lg:w-full">
        {/* Top bar lg */}
        <TopBar placeholder="cari peran, keahlian, atau industri" />
        <HeaderSection title={title} description={description} />
        {/* // Filter data input serch*/}
        <motion.div variants={cardVariants} className="lg:hidden">
          <div className="relative w-[90vw] md:w-2xl lg:w-full">
            <input
              type="text"
              name="filter"
              id="filter"
              placeholder="cari peran, keahlian, atau industri"
              className="w-[100%] rounded-2xl bg-white py-2 pl-10 ring-2 ring-slate-300 outline-none"
            />
            <i class="fa-solid fa-magnifying-glass absolute top-3 left-3"></i>
          </div>
        </motion.div>

        {/* catagory filter */}
        <div className="no-scrollbar flex gap-3 overflow-x-auto py-2 whitespace-nowrap">
          {filterCategories.map((item) => (
            <FilterCategoriesItems
              key={item.id}
              id={item.id}
              label={item.label}
              isActive={item.isActive}
            />
          ))}
        </div>

        {/*  jobListings */}
        <div className="grid grid-cols-1 justify-items-center gap-7 md:mx-auto md:w-2xl md:grid-cols-2 lg:mx-0.5 lg:w-full">
          {jobListings.map((item) => (
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
