import Button from "../../../ui/Button";
import AIInsightCardRecharts from "../../../ui/AIInsightCardRecharts";
import FeaturedFeatures from "./FeaturedFeatures";

function Main() {
  return (
    <main className="px-5 py-6">
      <section>
        <h1 className="text-center text-5xl leading-20 font-bold capitalize">
          Temukan Karir masa depan anda dengan
          <span className="text-primary block capitalize"> ai</span>
        </h1>
        <div>
          <p className="text-center text-lg">
            Platform cerdas yang menganalisis keahlian Anda, memetakan potensi,
            dan membimbing langkah karier selanjutnya.
          </p>
          <div className="text-center">
            <Button type="primary">Mulai Sekarang</Button>
          </div>
          <div className="flex justify-center text-center">
            <AIInsightCardRecharts />
          </div>
        </div>
      </section>

      <FeaturedFeatures />
    </main>
  );
}

export default Main;
