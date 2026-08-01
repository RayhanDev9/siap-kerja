import H2 from "../../../ui/H2";
import FeaturedFeaturesItems from "./FeaturedFeaturesItems";

const dataFeaturedFeatures = [
  {
    heading: "Analisis Tren Pasar",
    paraghraf:
      "     Dapatkan wawasan real-time tentang permintaan industri dan keahlian yang paling dicari saat ini.",
    bgColor: " bg-blue-200",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="blue"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
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
    heading: "Deteksi Celah Keamanan",
    paraghraf:
      "   Al kami memindai profil Anda untuk mengidentifikasi keterampilan yang perlu ditingkatkan untuk peran impian.",
    bgColor: "bg-red-200",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
        />
      </svg>
    ),
  },
  {
    heading: "Roadmap Personal",
    paraghraf:
      "  Rencana tindakan langkah demi langkah yang disesuaikan secara unik untuk mencapai tujuan karier Anda.",
    bgColor: "bg-purple-300",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
        />
      </svg>
    ),
  },
];

function FeaturedFeatures() {
  return (
    <section className="flex flex-col items-center">
      <div className="self-start">
        <H2 type="primary">Feature Unggulan</H2>
      </div>
      <div className="inline-block space-y-5">
        <div className="grid-cols-1 gap-5 max-sm:space-y-5 sm:grid sm:grid-cols-2">
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
