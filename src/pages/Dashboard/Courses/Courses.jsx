import dataLearningRoadmap from "./components/dataLearningRoadmap";
import H2 from "../../../ui/H2";
import Section from "../../../ui/Section";
import Progres from "../../../ui/Progres";
import HeaderSection from "../components/HeaderSection";
import StageItems from "./components/StageItems";
import TopBar from "../../../ui/TopBar";
import Text from "../../../ui/Text";
import H3 from "../../../ui/H3";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../ui/Loader";
import Button from "../../../ui/Button";
import CardCourse from "./components/CardCourse";
import { useEffect } from "react";
import {
  fetchLearningRoadmap,
  selectCategoryCareer,
  selectedPathName,
  selectPathCourses,
} from "../../../features/dashboard/learningRoadmapSlice";

// export default LearningRoadmap;
const tes = ["tes", "tes", "tes"];

function Courses() {
  const dispatch = useDispatch();

  // 1. Tarik data user/profile dari Redux untuk dijadikan patokan
  const { data: dataProfile } = useSelector((state) => state.profile);

  const { data, selectedCourses, isLoading, error } = useSelector(
    (state) => state.learningRoadmap,
  );

  useEffect(() => {
    // 2. KUNCI PERBAIKAN: Pastikan dataProfile ADA dan data roadmap juga ADA / tidak kosong
    if (dataProfile && data) {
      const { category_slug, target_role_slug } = dataProfile;
      console.info("Target Role:", target_role_slug);

      dispatch(selectCategoryCareer(category_slug));
      dispatch(selectedPathName(target_role_slug));

      // Filter ini sekarang aman karena array 'data' sudah pasti terisi
      dispatch(selectPathCourses(target_role_slug));
    }
  }, [dataProfile, data, dispatch]);

  // Tampilkan loader saat data masih proses ditarik
  if (isLoading) return <Loader />;
  console.info(dataProfile.target_role_slug)
  console.log(selectedCourses);
  return (
    <Section>
      <div>
        <div className="flex flex-col gap-7">
          {/* Top bar Lg */}
          <TopBar
            placeholder="cari peran, keahlian, atau industri"
            isSerch={false}
          />
          {/* Header Section */}
          <div>
            <HeaderSection
              title="Katalog Kursus"
              description="Lanjutkan pembelajaran Anda untuk mencapai tujuan karir berikutnya."
              icon="fa-solid fa-briefcase pr-2"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7">
            {selectedCourses.map((course) => (
              <CardCourse
                key={course.course_id}
                id={course.course_id}
                img={course.img}
                status={course.status}
                titleCourse={course.titleCourse}
                steps={course.steps}
                rating={course.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Courses;
