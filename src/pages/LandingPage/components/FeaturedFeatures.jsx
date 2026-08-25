import H2 from "../../../ui/H2";
import FeaturedFeaturesItems from "./FeaturedFeaturesItems";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motio
import Text from "../../../ui/Text";

const dataFeaturedFeatures = [
  {
    heading: "Analisis Tren Pasar",
    paraghraf:
      "Dapatkan wawasan langsung mengenai permintaan industri, standar gaji, dan keahlian yang paling dibutuhkan saat ini.",
    bgColor: "bg-blue-500",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-white sm:size-7 md:size-8 lg:size-9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
        />
      </svg>
    ),
  },
  {
    heading: "Analisis Kesenjangan Skill",
    paraghraf:
      "Identifikasi keahlian yang belum dikuasai secara tepat agar persiapan menuju peran impian menjadi lebih terarah.",
    bgColor: "bg-emerald-500",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-white sm:size-7 md:size-8 lg:size-9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
        />
      </svg>
    ),
  },
  {
    heading: "Roadmap Terstruktur",
    paraghraf:
      "Rencana tahapan belajar langkah demi langkah yang terorganisir untuk memandu penguasaan materi dari awal.",
    bgColor: "bg-purple-500",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-white sm:size-7 md:size-8 lg:size-9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.284a2.25 2.25 0 0 0-2.006 0L2.622 5.72A1.125 1.125 0 0 0 2 6.726v11.93c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
        />
      </svg>
    ),
  },
];

function FeaturedFeatures() {
  return (
    <section id="features" className="flex flex-col items-center">
      <motion.div variants={cardVariants} className="self-start pb-7">
        <H2 type="secondry">Feature Unggulan</H2>
        <Text>
          Platform komprehensif yang dirancang untuk mempercepat pertumbuhan
          karir Anda di era digital.
        </Text>
      </motion.div>
      <div className="inline-block space-y-5">
        <div className="grid-cols-1 gap-5 max-sm:space-y-5 sm:grid sm:grid-cols-3">
          {dataFeaturedFeatures.map((item) => (
            <FeaturedFeaturesItems
              heading={item.heading}
              paraghraf={item.paraghraf}
              svg={item.svg}
              bgColor={item.bgColor}
              key={item.heading}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedFeatures;
