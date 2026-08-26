import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import dataSkillGap from "./components/dataSkillGap";
import Section from "./../../../ui/Section";
import H2 from "./../../../ui/H2";
import Progres from "./../../../ui/Progres";
import CompetencyChart from "./components/CompetencyChart";
import SkillCategoryDetailsList from "./components/SkillCategoryDetailsList";
import HeaderSection from "../components/HeaderSection";
import TopBar from "../../../ui/TopBar";
import { MarketDemandCardItems } from "./components/MarketDemandCardItems";
import Text from "../../../ui/Text";
import Loader from "../../../ui/Loader";
import { cardVariants } from "../../../util/animations";

import {
  fetchSkillGap,
  selectAllData,
} from "../../../features/dashboard/skillGapSlice";
import { fetchProfile } from "../../../features/dashboard/profileSlice";
import { mark } from "framer-motion/m";

function SkillGap() {
  const dispatch = useDispatch();

  const {
    skillGapData,
    isLoading,
    error,
    dataChart,
    overallReadiness,
    marketDemandData = [],
    roleSkillGroups = [],
  } = useSelector((state) => state.skillGap);

  const { data: profileData } = useSelector((state) => state.profile);

  const { selectedCourses } = useSelector((state) => state.learningRoadmap);

  // 1. Fetch data awal jika belum tersedia di store
  useEffect(() => {
    if (!profileData) {
      dispatch(fetchProfile());
    }
    if (!skillGapData) {
      dispatch(fetchSkillGap());
    }
  }, [dispatch, profileData, skillGapData]);

  // 2. Filter data berdasarkan target role slug user
  useEffect(() => {
    if (profileData?.target_role_slug && skillGapData) {
      const formattedSlug = profileData.target_role_slug
        .toLowerCase()
        .replace(/[-\s]+/g, "_");

      dispatch(selectAllData(formattedSlug));
    }
  }, [profileData?.target_role_slug, skillGapData, dispatch]);

  if (isLoading || !skillGapData) {
    return <Loader />;
  }

  if (error) {
    return (
      <Section>
        <Text className="font-semibold text-red-500">
          Terjadi kesalahan saat memuat data skill gap.
        </Text>
      </Section>
    );
  }

  console.info(skillGapData);

  const allSteps = selectedCourses.flatMap((item) => item.steps);
  const courseStepComplated = selectedCourses.flatMap((item) =>
    item.steps.filter((step) => step.status === "completed"),
  );

  // useEffect(
  //   function () {
  //     if (!isLoading) {
  //       dispatch(selectCourseStepComplated());
  //     }
  //   },
  //   [isLoading, dispatch, courseStepComplated],
  // );

  const progressPercentage =
    allSteps.length > 0
      ? Math.round((courseStepComplated.length / allSteps.length) * 100)
      : 0;

  console.info(roleSkillGroups);

  const { message, percentage } = overallReadiness;

  return (
    <Section>
      <div className="flex flex-col gap-7">
        <TopBar
          isSerch={false}
          placeholder="cari peran, keahlian, atau industri"
        />

        <HeaderSection
          title="Analisis Kesenjangan"
          description={`Evaluasi kesiapan Anda untuk peran ${profileData?.target_role || "Target Karir"}.`}
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Kesiapan Keseluruhan */}
          <motion.div variants={cardVariants} className="col-span-1">
            <div className="inline-block w-full space-y-3 rounded-2xl bg-white p-7 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
              <div className="flex justify-between">
                <H2 type="secondry">Kesiapan Ke Seluruhan</H2>
                <Text className="self-center text-2xl font-bold text-blue-800 dark:text-blue-500">
                  {progressPercentage}%
                </Text>
              </div>
              <Progres
                thame="bg-blue-700"
                progressPercentage={progressPercentage}
              />
              <Text>{overallReadiness.message}</Text>
            </div>
          </motion.div>

          {/* Matriks Kompetensi */}
          <motion.div
            variants={cardVariants}
            className="col-span-2 space-y-3 px-7 lg:rounded-2xl lg:bg-white lg:py-7 dark:lg:border dark:lg:border-white/25 dark:lg:bg-neutral-900 hover:dark:lg:border-white/35"
          >
            <H2 type="secondry">Matriks Kompetensi</H2>
            <div className="mt-7 rounded-2xl bg-white dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
              <CompetencyChart competencyMatrix={dataChart} />
            </div>
          </motion.div>
        </div>

        {/* Detail Kategori Keterampilan */}
        <div className="px-7">
          <motion.div variants={cardVariants}>
            <H2 type="secondry">Detail Kategori Keterampilan</H2>
          </motion.div>
          <div className="mt-7 grid grid-cols-1 gap-4 space-y-7 sm:grid-cols-1 md:grid-cols-2">
            {roleSkillGroups.map((item) => (
              <SkillCategoryDetailsList
                category={item.groupTitle}
                icon={item.groupIcon}
                skills={item.skills}
                key={item.skills}
              />
            ))}
          </div>
        </div>

        {/* Market Demand Heatmap */}
        <div className="flex w-full flex-col gap-6 rounded-3xl border border-gray-100 bg-white p-7 shadow-sm dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <motion.div variants={cardVariants} className="flex flex-col gap-1">
              <H2 type="secondry" className="text-2xl font-bold text-gray-900">
                Market Demand Heatmap
              </H2>
              <Text className="text-sm font-medium text-slate-500">
                Correlation of your skills against current market job postings.
              </Text>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="flex items-center gap-2"
            >
              <Text className="rounded-full bg-indigo-100 px-3 py-1.5 text-sm font-bold text-indigo-900 dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35">
                High Demand
              </Text>
              <Text className="rounded-full bg-slate-200 px-3 py-1.5 text-sm font-bold text-slate-700 dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35">
                Average
              </Text>
            </motion.div>
          </div>

          {/* Grid Cards Market Demand */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {marketDemandData && marketDemandData.length > 0 ? (
              marketDemandData.map((item, index) => (
                <MarketDemandCardItems
                  key={item.skill || index}
                  title={item.skill}
                  level={item.demand}
                  icon={item.icon}
                  bgClass={item.bgClass}
                  textClass={item.textClass}
                />
              ))
            ) : (
              <Text className="col-span-full text-slate-400">
                Data demand belum tersedia untuk target role ini.
              </Text>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default SkillGap;
