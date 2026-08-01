import dataSavedCareers from "./components/dataSavedCareers";
import Section from "./../../../ui/Section";
import HeaderSection from "./../components/HeaderSection";
import SavedCareersItems from "./components/SavedCareersItems";
import TopBar from "../../../ui/TopBar";

// import { data } from "react-router";

function SavedCareers() {
  return (
    <Section>
      <div className="flex flex-col gap-7">
        {/* Top bar Lg */}
        <TopBar placeholder="cari peran, keahlian, atau industri" />
        
        <HeaderSection
          title="Karier Tersimpan"
          description="Lanjutkan perjalanan menuju peran impian Anda."
        />

        {dataSavedCareers.map((item) => (
          <SavedCareersItems
            tags={item.tags}
            role={item.role}
            salaryEstimate={item.salaryEstimate}
            label={item.skillReadiness.label}
            mastered={item.skillReadiness.mastered}
            total={item.skillReadiness.total}
            statusText={item.skillReadiness.statusText}
            progressPercentage={item.skillReadiness.progressPercentage}
            titleAiRecommendation={item.aiRecommendation.title}
            aiRecommendation={item.aiRecommendation}
          />
        ))}
      </div>
    </Section>
  );
}

export default SavedCareers;
