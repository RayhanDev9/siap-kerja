import Button from "../../../ui/Button";
import FeaturedFeatures from "./FeaturedFeatures";
import Section from "../../../ui/Section";
import Progres from "../../../ui/Progres";
import Text from "../../../ui/Text";
import { cardVariants, containerVariants } from "../../../util/animations";
import { motion } from "framer-motion";
import QNA from "./QNA";
import Testimonial from "./Testimonial";
import About from "./About";
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
        className="mt-10 space-y-16 overflow-x-hidden overflow-y-hidden rounded-2xl"
      >
        {/* Hero Section */}
        <section className="mx-auto grid w-full items-center gap-7 sm:w-4/5 md:w-[70%] lg:w-full lg:grid-cols-2 lg:gap-8">
          {/* Heading & Deskripsi */}
          <motion.div variants={cardVariants} className="col-span-1 space-y-4">
            <h1 className="text-center text-3xl leading-tight font-bold capitalize md:text-4xl lg:text-start lg:text-5xl lg:leading-tight">
              Temukan Karir masa depan anda dengan
              <span className="text-primary block"> Data & Arah Pasti</span>
            </h1>
            <div>
              <Text className="text-center text-lg text-slate-600 lg:text-start dark:text-neutral-400">
                Platform terpadu untuk mengevaluasi keahlian, memantau alur
                roadmap belajar terstruktur, dan mengakses tolok ukur gaji
                industri terkini.
              </Text>
              <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-evenly">
                <div>
                  <Button to="/login" type="primary">
                    Mulai Sekarang
                  </Button>
                </div>
                <div className="inline-block self-center">
                  <Button to="/career-explorer" type="generalSecondary">
                    Eksplorasi Karir
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kartu Analisis Keterampilan */}
          <motion.div
            variants={cardVariants}
            className="col-span-1 rotate-1 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:rotate-0 dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35"
          >
            <div className="flex items-center gap-4 border-b border-slate-200 pb-5 dark:border-white/10">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-100 dark:bg-purple-500/20">
                <i className="fa-solid fa-user-gear text-xl text-purple-600 dark:text-purple-400"></i>
              </span>
              <div className="flex flex-col">
                <H3 className="text-base font-bold text-slate-900 md:text-lg dark:text-white">
                  Evaluasi Keterampilan Siap Kerja
                </H3>
                <Text className="text-xs text-slate-500 sm:text-sm dark:text-slate-400">
                  Tersinkronisasi dengan 450+ standar kompetensi
                </Text>
              </div>
            </div>

            {/* List Skills */}
            <div className="mt-6 flex flex-col gap-4">
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

        {/* Section About */}
        <About />

        {/* Section Fitur Unggulan */}
        <div className="w-full">
          <FeaturedFeatures />
        </div>

        {/* Section Testimonial */}
        <Testimonial />

        {/* Section FAQ / QNA */}
        <QNA />
      </motion.div>
    </Section>
  );
}

export default Main;
