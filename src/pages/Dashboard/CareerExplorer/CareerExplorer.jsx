import HeaderSection from "../components/HeaderSection";
import dataCareerExplorer from "./components/dataCareerExplorer";
import FilterCategoriesItems from "./components/FilterCategoriesItems";
import JobListingsItems from "./components/JobListingsItems";
import Section from "./../../../ui/Section";
import TopBar from "../../../ui/TopBar";
function CareerExplorer() {
  const { title, description } = dataCareerExplorer.headerData;
  const { filterCategories } = dataCareerExplorer;
  const { jobListings } = dataCareerExplorer;
  console.info(filterCategories);
  return (
    <Section>
      <div className="mx-auto flex flex-col gap-5 md:w-2xl lg:w-full">
        {/* Top bar lg */}
        <TopBar
          placeholder="cari peran, keahlian, atau industri"
        />
        <HeaderSection title={title} description={description} />
        {/* // Filter data input serch*/}
        <div className="lg:hidden">
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
        </div>

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
        <div className="flex flex-col items-center gap-7 md:mx-auto md:w-2xl lg:mx-0.5 lg:w-full">
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
