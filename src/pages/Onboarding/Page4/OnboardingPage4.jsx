import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Tambahkan ini untuk navigasi
import Button from "../../../ui/Button";
import H2 from "../../../ui/H2";
import Section from "../../../ui/Section";
import ProgresOnboarding from "../components/ProgresOnboarding";
import { validateEmail, validateName } from "../../../util/helpers";
import Email from "../../../ui/Email";
import InputName from "../../../ui/InputName";
import InputDateOfBirth from "../../../ui/InputDateOfBirth";
import SelectLocation from "../../../ui/SelectLocation";
import SelectSpecialization from "../../../ui/SelectSpecialization";
import InputAboutMe from "../../../ui/InputAboutMe";
import ButtonMdOnboarding from "../components/ButtonMdOnboarding";
import Text from "../../../ui/Text";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function OnboardingPage4() {
  const navigate = useNavigate();

  // 1. Bersihkan nilai awal yang tadinya "rayhan@gmail.com" menjadi string kosong
  const [inputName, setInputName] = useState("");
  const [textErrorInputName, setTextErrorInputName] = useState("");

  const [inputEmail, setInputEmail] = useState("");
  const [textErrorInputEmail, setTextErrorInputEmail] = useState("");

  const [InputBirthDate, setInputBirthDate] = useState(null); // Gunakan null untuk tanggal
  const [textErrorInputBirthDate, setTextErrorInputBirthDate] = useState("");

  const [selectLocation, setSelectLocation] = useState(null); // Gunakan null untuk object location
  const [textErrorSelectLocation, setTextErrorSelectLocation] = useState("");

  const [selectSpecialization, setSelectSpecialization] = useState(null);
  const [textErrorSpecialization, setTextErrorSpecialization] = useState("");

  // Data about me tetap dipertahankan sebagai nilai default
  const [aboutMe, setAboutMe] = useState(
    "Halo, saya Muhamad Rayhan, mahasiswa yang antusias dalam software development. Saya fokus pada JavaScript, Java, dan teknologi front-end. Berpengalaman membangun web-based game dan aplikasi visualisasi 2D, serta terbiasa menggunakan Git/GitHub untuk kolaborasi proyek secara tim.",
  );
  const [textErrorAboutMe, setTextErrorAboutMe] = useState("");

  // 2. Fungsi Utama untuk mengecek semua data sebelum navigasi
  function handleSubmit() {
    // Validasi satu per satu
    const nameError = validateName(inputName);
    const emailError = validateEmail(inputEmail);
    const birthDateError = !InputBirthDate
      ? "Tanggal lahir tidak boleh kosong"
      : "";
    const locationError = !selectLocation ? "Domisili tidak boleh kosong" : "";
    const specializationError = !selectSpecialization
      ? "Spesialisasi tidak boleh kosong"
      : "";
    const aboutMeError =
      aboutMe.trim() === "" ? "Deskripsi tentang saya tidak boleh kosong" : "";

    // Setel state error agar muncul merah-merah di layar jika ada yang kosong
    setTextErrorInputName(nameError);
    setTextErrorInputEmail(emailError);
    setTextErrorInputBirthDate(birthDateError);
    setTextErrorSelectLocation(locationError);
    setTextErrorSpecialization(specializationError);
    setTextErrorAboutMe(aboutMeError);

    // 3. Pengecekan Akhir: Jika SEMUA error kosong (artinya data valid), baru pindah halaman
    if (
      nameError === "" &&
      emailError === "" &&
      birthDateError === "" &&
      locationError === "" &&
      specializationError === "" &&
      aboutMeError === ""
    ) {
      navigate("/");
    }
  }

  return (
    <>
      <div className="md:bg-white md:pb-7">
        <Section>
          <div className="space-y-7">
            <ProgresOnboarding progresOnboarding={3} />

            {/* Header */}
            <div className="rounded-2xl bg-white p-7 shadow-md">
              <motion.div variants={cardVariants} className="pb-1">
                <H2 type="secondaryBold">Lengkapi Profil Anda</H2>
              </motion.div>
              <motion.div variants={cardVariants}>
                {" "}
                <Text>
                  Langkah terakhir sebelum memulai perjalanan karir Anda.
                </Text>
              </motion.div>
            </div>

            <motion.div
              variants={cardVariants}
              className="flex flex-col items-center gap-5 p-7 text-center"
            >
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-slate-200 bg-slate-200 text-slate-600">
                <i className="fa-solid fa-camera-rotate text-3xl"></i>
              </div>
              <Text className="font-semibold text-blue-800">Unggah Foto</Text>
            </motion.div>

            {/* Input Name */}
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

            {/* Input Email */}
            <motion.div variants={cardVariants}>
              <Email
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
              />
              {textErrorInputEmail && (
                <Text className="my-3 rounded-2xl bg-red-600 px-2 py-2 text-sm text-red-50">
                  {textErrorInputEmail}
                </Text>
              )}
            </motion.div>

            {/* Input Date Of Birth */}
            <motion.div variants={cardVariants}>
              <InputDateOfBirth
                value={InputBirthDate}
                onChange={(date) => {
                  setInputBirthDate(date);
                  if (date) setTextErrorInputBirthDate("");
                }}
                onBlur={() => {
                  if (!InputBirthDate)
                    setTextErrorInputBirthDate(
                      "Tanggal lahir tidak boleh kosong",
                    );
                }}
              />
              {textErrorInputBirthDate && (
                <Text className="my-3 rounded-2xl bg-red-600 px-2 py-2 text-sm text-red-50">
                  {textErrorInputBirthDate}
                </Text>
              )}
            </motion.div>

            {/* Select Domisili */}
            <motion.div variants={cardVariants}>
              <SelectLocation
                value={selectLocation}
                onChange={(selectedCity) => {
                  setSelectLocation(selectedCity);
                  if (selectedCity) setTextErrorSelectLocation("");
                }}
                onBlur={() => {
                  if (!selectLocation)
                    setTextErrorSelectLocation("Domisili tidak boleh kosong");
                }}
              />
              {/* Perbaikan: Error Domisili dipindah ke sini agar rapi */}
              {textErrorSelectLocation && (
                <Text className="my-3 rounded-2xl bg-red-600 px-3 py-2 text-sm text-red-50">
                  {textErrorSelectLocation}
                </Text>
              )}
            </motion.div>

            {/* Select Specialization */}
            <motion.div variants={cardVariants}>
              {" "}
              <SelectSpecialization
                value={selectSpecialization}
                onChange={(selectedItem) => {
                  setSelectSpecialization(selectedItem);
                  if (selectedItem) setTextErrorSpecialization("");
                }}
              />
              {textErrorSpecialization && (
                <Text className="my-3 rounded-2xl bg-red-600 px-3 py-2 text-sm text-red-50">
                  {textErrorSpecialization}
                </Text>
              )}
            </motion.div>

            {/* Input About Me */}
            <motion.div variants={cardVariants}>
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
        </Section>

        {/* Tombol Selesai */}
        <motion.div
          variants={cardVariants}
          className="bg-white p-7 text-center md:hidden"
        >
          {/* 
            Ganti properti 'to' menjadi 'onClick={handleSubmit}'.
            Pastikan komponen <Button> milikmu mendukung props onClick. 
            Jika tidak mendukung, ganti dengan tag <button> standar seperti di halaman Register.
          */}

          <Button type="generalPrimary" onClick={handleSubmit}>
            Selesai
          </Button>
        </motion.div>
        <ButtonMdOnboarding button1="Lewati" button2="Selanjutnya" to="/" />
      </div>
    </>
  );
}

export default OnboardingPage4;
