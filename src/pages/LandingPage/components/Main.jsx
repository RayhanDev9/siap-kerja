import Button from "../../../ui/Button";
import AIInsightCardRecharts from "../../../ui/AIInsightCardRecharts";
import FeaturedFeatures from "./FeaturedFeatures";
import Section from "../../../ui/Section";
import Progres from "../../../ui/Progres";
import Text from "../../../ui/Text";
import { cardVariants, containerVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motio

function Main() {
  return (
    <Section>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-7 overflow-y-hidden overflow-x-hidden"
      >
        <section className="mx-auto  grid w-full gap-7 sm:w-4/5 md:w-[70%] lg:w-full lg:grid-cols-2 lg:gap-5">
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

          {/* Analisis keterampialn */}
          <motion.div
            variants={cardVariants}
            className="col-span-1 mt-7 rotate-2 rounded-2xl bg-white p-7 transition-all duration-300 hover:rotate-0 active:rotate-0 lg:mt-0 lg:block"
          >
            <div className="flex gap-2 border-b border-slate-300 p-7">
              <span className="pr-2">
                <i class="fa-solid fa-user-cog rounded-full bg-purple-100 p-3 text-purple-600 sm:text-2xl md:text-3xl lg:text-4xl"></i>
              </span>
              <div>
                {" "}
                <Text className="font-semibold">
                  Analisis Keterampilan Selesai
                </Text>
                <Text>Cocok dengan 450+ peran</Text>
              </div>
            </div>
            <div className="space-y-4">
              <Progres progressPercentage="90"></Progres>
              <Progres progressPercentage="40" thame="bg-blue-500"></Progres>
              <Progres progressPercentage="50" thame="bg-orange-500"></Progres>
              <Progres progressPercentage="10" thame="bg-blue-500"></Progres>
              <Progres progressPercentage="60" thame="bg-orange-500"></Progres>
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
      </motion.div>
    </Section>
  );
}

export default Main;
