import Button from "../../../ui/Button";
import AIInsightCardRecharts from "../../../ui/AIInsightCardRecharts";
import FeaturedFeatures from "./FeaturedFeatures";
import Section from "../../../ui/Section";
import Progres from "../../../ui/Progres";
import Text from "../../../ui/Text";
import { cardVariants, containerVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motio
import QNA from "./QNA"; // Di landing page
import Testimonial from "./Testimonial";
import H3 from "../../../ui/H3";

const skillsData = [
  {
    id: 1,
    name: "Problem Solving & Logika",
    percentage: "90",
    theme: "bg-purple-500",
  },
  { id: 2, name: "UI/UX Design", percentage: "85", theme: "bg-blue-500" },
  {
    id: 3,
    name: "Frontend Development",
    percentage: "75",
    theme: "bg-orange-500",
  },
  { id: 4, name: "Data Analysis", percentage: "60", theme: "bg-blue-500" },
  { id: 5, name: "Komunikasi Tim", percentage: "95", theme: "bg-orange-500" },
];

function Main() {
  return (
    <Section>
      <motion.div
        id="home"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-24 space-y-7 overflow-x-hidden overflow-y-hidden rounded-2xl"
      >
        <section className="mx-auto grid w-full gap-7 sm:w-4/5 md:w-[70%] lg:w-full lg:grid-cols-2 lg:gap-5">
          {/* Heading 1 */}
          <motion.div variants={cardVariants} className="col-span-1">
            <h1 className="text-center text-3xl leading-10 font-bold capitalize md:text-4xl lg:text-5xl lg:leading-20">
              Temukan Karir masa depan anda dengan
              <span className="text-primary block capitalize"> ai</span>
            </h1>
            <div>
              <Text className="text-center text-lg">
                Platform cerdas yang menganalisis keahlian Anda, memetakan
                potensi, dan membimbing langkah karier selanjutnya.
              </Text>
              <div className="max-xs:flex-col xs:gap-5 flex justify-center">
                <div className="text-center">
                  <Button to="/login" type="primary">
                    Mulai Sekarang
                  </Button>
                </div>
                <div className="self-center text-center lg:block">
                  <Button to="/" type="generalSecondary">
                    Eksplorasi Karir
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Analisis Keterampilan */}

          <motion.div
            variants={cardVariants}
            className="col-span-1 mt-7 rotate-2 rounded-2xl bg-white p-7 transition-all duration-300 hover:rotate-0 active:rotate-0 lg:mt-0 lg:block dark:border dark:border-white/25 dark:bg-neutral-900 dark:hover:border-white/35"
          >
            {/* Header Bagian Kartu */}
            <div className="flex items-center gap-4 border-b border-slate-300 pb-6 dark:border-white/10">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-500/20">
                <i className="fa-solid fa-user-cog text-2xl text-purple-600 dark:text-purple-400"></i>
              </span>
              <div className="flex flex-col">
                <H3 className="text-base font-semibold md:text-lg">
                  Analisis Keterampilan Selesai
                </H3>
                <Text className="text-sm text-slate-500 dark:text-slate-400">
                  Cocok dengan 450+ peran
                </Text>
              </div>
            </div>

            {/* Daftar Keterampilan (Looping) */}
            <div className="mt-6 flex flex-col gap-5">
              {skillsData.map((skill) => (
                <div key={skill.id} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-300">
                    <Text>{skill.name}</Text>
                    <Text>{skill.percentage}%</Text>
                  </div>
                  <Progres
                    progressPercentage={skill.percentage}
                    thame={skill.theme}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Chart and feature */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <motion.div
            variants={cardVariants}
            className="xs:justify-center col-span-1 flex min-w-lg pt-7 text-center lg:mt-16 lg:inline-block"
          >
            <AIInsightCardRecharts />
          </motion.div>

          <div variants={cardVariants} className="col-span-2">
            <FeaturedFeatures />
          </div>
        </div>

        <Testimonial />

        <QNA />
      </motion.div>
    </Section>
  );
}

export default Main;
