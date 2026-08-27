import H2 from "../../../ui/H2";
import Section from "../../../ui/Section";
import Logo from "../../../ui/Logo";
import Button from "../../../ui/Button";
import Text from "../../../ui/Text";
import { containerVariants, cardVariants } from "../../../util/animations.js";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import { useDispatch, useSelector } from "react-redux";
import { fetchOnboarding } from "../../../features/onBoarding/onBoardingSlice.js";
import Loader from "../../../ui/Loader.jsx";
import { useNavigate } from "react-router";

function OnboardingPage1() {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.onBoarding);
  const navigate = useNavigate(); // 2. Inisialisasi navigate

  const handleMulai = async () => {
    try {
      // Tunggu sampai thunk selesai dan sukses
      await dispatch(fetchOnboarding()).unwrap();
      // Pindah halaman hanya jika berhasil
      navigate("/onboardingPage2");
    } catch (err) {
      console.error("Gagal mengambil data onboarding:", err);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) return <Error />;

  return (
    <>
      <div className="md:rounded-2xl md:bg-white md:pb-7 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
        <Section>
          <div className="space-y-7">
            {/* <ProgresOnboarding progresOnboarding={0} /> */}

            <div className="rounded-2xl bg-white p-7 shadow-md">
              <motion.div variants={cardVariants}>
                <Text className="pb-1 text-center">Onboarding</Text>
              </motion.div>
              <motion.div variants={cardVariants} className="text-center">
                <H2 type="secondaryBold">Selamat Datang</H2>
              </motion.div>
              <motion.div variants={cardVariants}>
                <img
                  src="https://www.shutterstock.com/image-illustration/abstract-glass-arrow-pointing-upwards-600w-2631659811.jpg"
                  alt=""
                  className="rounded-2xl object-cover p-3"
                />
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="flex justify-center"
              >
                <Logo type="small">Siap Kerja</Logo>
              </motion.div>
            </div>

            <div>
              <div className="space-y-7 text-center">
                <motion.div>
                  {" "}
                  <H2 type="secondry">Temukan Potensi Sejati Anda</H2>
                </motion.div>
                <motion.div variants={cardVariants}>
                  <Text>
                    168 Mitra Anda yang didukung AI dalam pengembangan karier.
                    Mari temukan peluang yang sangat sesuai dengan keterampilan
                    dan ambisi unik Anda.
                  </Text>
                </motion.div>
              </div>
            </div>
          </div>
        </Section>

        <motion.div
          variants={cardVariants}
          className="flex justify-between bg-white p-7 rounded-2xl shadow-2xl text-center dark:bg-neutral-900"
        >
          {/* <div className="inline-block">
            <Button type="secondry" to="/onboardingPage2">
              Lewati 
            </Button>
          </div> */}
          <div className="flex w-full justify-end self-end">
            <div className="inline-block">
              <Button
                onClick={handleMulai} // 4. Gunakan handler (tanpa prop 'to')
                type="generalPrimary"
              >
                Mulai
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default OnboardingPage1;
