import Button from "../../../ui/Button";
import AIInsightCardRecharts from "../../../ui/AIInsightCardRecharts";
import FeaturedFeatures from "./FeaturedFeatures";
import Section from "../../../ui/Section";
import Progres from "../../../ui/Progres";

function Main() {
  return (
    <Section>
      <div className="space-y-7 overflow-x-hidden">
        <section className="mx-auto w-full sm:w-4/5 md:w-[70%] lg:grid lg:w-full lg:grid-cols-2 lg:gap-5">
          <div className="col-span-1">
            <h1 className="text-center text-3xl lg:text-5xl leading-10 lg:leading-20 font-bold capitalize">
              Temukan Karir masa depan anda dengan
              <span className="text-primary block capitalize"> ai</span>
            </h1>
            <div>
              <p className="text-center text-lg">
                Platform cerdas yang menganalisis keahlian Anda, memetakan
                potensi, dan membimbing langkah karier selanjutnya.
              </p>
              <div className="flex justify-center max-xs:flex-col  xs:gap-5">
                <div className="text-center">
                  <Button to="/login" type="primary">
                    Mulai Sekarang
                  </Button>
                </div>
                <div className=" self-center text-center lg:block">
                  <Button to="/" type="generalSecondary">
                    Eksplorasi Karir
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 hidden rotate-2 rounded-2xl bg-white p-7 transition-all duration-300 hover:rotate-0 lg:block">
            <div className="flex gap-2 border-b border-slate-300 p-7">
              <span className="pr-2">
                <i class="fa-solid fa-user-cog rounded-full bg-purple-100 p-3 text-purple-600"></i>
              </span>
              <div>
                {" "}
                <p className="font-semibold">Analisis Keterampilan Selesai</p>
                <p>Cocok dengan 450+ peran</p>
              </div>
            </div>
            <div className="space-y-4">
              <Progres progressPercentage="90"></Progres>
              <Progres progressPercentage="40" thame="bg-blue-500"></Progres>
              <Progres progressPercentage="50" thame="bg-orange-500"></Progres>
              <Progres progressPercentage="10" thame="bg-blue-500"></Progres>
              <Progres progressPercentage="60" thame="bg-orange-500"></Progres>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="xs:justify-center col-span-1 flex min-w-lg pt-7 text-center lg:mt-16 lg:inline-block">
            <AIInsightCardRecharts />
          </div>

          <div className="col-span-2">
            <FeaturedFeatures />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Main;
