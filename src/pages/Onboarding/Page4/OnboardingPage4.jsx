import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import H2 from "../../../ui/H2";
import Section from "../../../ui/Section";
import ProgresOnboarding from "../components/ProgresOnboarding";
import { validateName } from "../../../util/helpers";
import InputName from "../../../ui/InputName";
import InputAboutMe from "../../../ui/InputAboutMe";
import ButtonMdOnboarding from "../components/ButtonMdOnboarding";
import Text from "../../../ui/Text";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { completeYourProfile } from "../../../features/onBoarding/onBoardingSlice";
import Theme from "../../../ui/Theme";

function OnboardingPage4() {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.onBoarding);
  console.info(data);

  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = useState(null);

  const [inputName, setInputName] = useState("");
  const [textErrorInputName, setTextErrorInputName] = useState("");

  const [aboutMe, setAboutMe] = useState("");
  const [textErrorAboutMe, setTextErrorAboutMe] = useState("");

  useEffect(() => {
    if (data === null) {
      navigate("/onboardingPage1", { replace: true });
    }
  }, [data, navigate]);

  function handleSubmit() {
    const nameError = validateName(inputName);
    const aboutMeError =
      aboutMe.trim() === "" ? "Deskripsi tentang saya tidak boleh kosong" : "";
    console.log(aboutMeError);

    setTextErrorInputName(nameError);
    setTextErrorAboutMe(aboutMeError);

    if (nameError === "" && aboutMeError === "" && selectedFile !== null) {
      console.log("Data valid! Navigasi ke halaman selanjutnya.");

      dispatch(
        completeYourProfile({
          fullName: inputName,
          description: aboutMe,
          foto_profile: selectedFile,
        }),
      );

      navigate("/onboardingPage3");
    } else if (selectedFile === null) {
      alert("Foto profil tidak boleh kosong!");
    }
  }

  return (
    <>
      <div className="max-xs:pt-4 rounded-2xl md:pb-7 md:bg-white dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35 relative">
        <div className="right-0 xs:right-0 absolute top-0 z-50  lg:hidden">
          <Theme />
        </div>
        <Section>
          <div className="space-y-7">
            <ProgresOnboarding progresOnboarding={2} />

            <div className="rounded-2xl bg-white p-7 shadow-md dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
              <motion.div variants={cardVariants} className="pb-1">
                <H2 type="secondaryBold">Lengkapi Profil Anda</H2>
              </motion.div>
              <motion.div variants={cardVariants}>
                <Text>
                  Langkah terakhir sebelum memulai perjalanan karir Anda.
                </Text>
              </motion.div>
            </div>

            <motion.div
              variants={cardVariants}
              className="flex flex-col items-center gap-5 p-7 text-center"
            >
              <label
                htmlFor="upload-photo"
                className="group flex cursor-pointer flex-col items-center"
              >
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-slate-200 bg-slate-200 text-slate-600 transition-all dark:border dark:border-white/25 dark:bg-black group-hover:dark:border-white/35">
                  <i className="fa-solid fa-camera-rotate text-3xl dark:text-white"></i>
                </div>
                <Text className="mt-3 font-semibold text-blue-800">
                  Unggah Foto
                </Text>

                <input
                  id="upload-photo"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setSelectedFile(file);
                      console.log("File terpilih:", file);
                    }
                  }}
                />
              </label>

              {selectedFile && (
                <Text className="text-sm text-green-600">
                  File dipilih: {selectedFile.name}
                </Text>
              )}
            </motion.div>

            <div className="space-y-3">
              <motion.div variants={cardVariants}>
                <InputName
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                />
                {textErrorInputName && (
                  <Text className="my-3 rounded-2xl bg-red-600 px-2 py-2 text-sm text-red-50">
                    {textErrorInputName}
                  </Text>
                )}
              </motion.div>

              <motion.div variants={cardVariants} className="">
                <InputAboutMe
                  value={aboutMe}
                  onChange={(e) => {
                    setAboutMe(e.target.value);
                    if (e.target.value.trim() !== "") setTextErrorAboutMe("");
                  }}
                  onBlur={() => {
                    if (aboutMe.trim() === "")
                      setTextErrorAboutMe(
                        "Deskripsi tentang saya tidak boleh kosong",
                      );
                  }}
                />
                {textErrorAboutMe && (
                  <Text className="my-3 rounded-2xl bg-red-600 px-3 py-2 text-sm text-red-50">
                    {textErrorAboutMe}
                  </Text>
                )}
              </motion.div>
            </div>
          </div>
        </Section>

        <motion.div
          variants={cardVariants}
          className="bg-white p-7 text-center md:hidden dark:bg-neutral-900"
        ></motion.div>
        <ButtonMdOnboarding
          onFinish={handleSubmit}
          button1="sebelumnya"
          button2="Selanjutnya"
        />
      </div>
    </>
  );
}

export default OnboardingPage4;
