import Section from "../../../ui/Section";
import H2 from "../../../ui/H2";
import TopBar from "../../../ui/TopBar";
import Button from "../../../ui/Button";
import HeaderSection from "./../components/HeaderSection";
import dataSetting from "./components/dataSetting";
import OtherSettingsItems from "./components/OtherSettingsItems";
import Text from "../../../ui/Text";
import H3 from "../../../ui/H3";
import Email from "../../../ui/Email";
import InputName from "../../../ui/InputName";
import Password from "../../../ui/Password";
import { useState } from "react";
import { validatePassword } from "../../../util/helpers";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion

function Setting() {
  const { profilPengguna, keamanan, pengaturanLainnya } = dataSetting;
  const { namaLengkap, email, fotoProfil } = profilPengguna;
  const [inputPasswordOld, setInputPasswordOld] = useState("");
  const [textErrorInputPasswordOld, setTextErrorInputPasswordOld] =
    useState("");
  const [inputPasswordNew, setInputPasswordNew] = useState("");
  const [textErrorInputPasswordNew, setTextErrorInputPasswordNew] =
    useState("");

  function handleSubmit() {
    const passworErrordOld = validatePassword(inputPasswordOld);
    const passwordErrorNew = validatePassword(inputPasswordNew);

    setTextErrorInputPasswordOld(passworErrordOld);
    setTextErrorInputPasswordNew(passwordErrorNew);
  }

  return (
    <Section>
      <div className="flex flex-col gap-7 pb-7">
        {/* Top bar Lg */}
        <TopBar
          placeholder="cari peran, keahlian, atau industri"
          isSerch={false}
        />
        {/* Header Section */}
        <HeaderSection
          title="Pengaturan"
          description="Kelola preferensi akun dan aplikasi anda"
        ></HeaderSection>
        
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {/* Profile Penggunna */}
          <div className="space-y-5 rounded-2xl bg-white p-7">
            <motion.div variants={cardVariants}>
              {/* Heading profile */}
              <H2 type="secondry">
                <i class="fa-solid fa-user pr-3 text-slate-700"></i>Profile
                Penggunna
              </H2>
            </motion.div>

            {/* foto profile and data diri */}
            <motion.div variants={cardVariants} className="flex gap-6">
              <img
                className="inline-block h-20 w-20 shrink-0 rounded-full object-cover sm:h-24 sm:w-24 md:h-26 md:w-28 lg:h-32 lg:w-32"
                src={`${fotoProfil}`}
                alt={`${namaLengkap}`}
              />
              <div className="min-w-0 self-center">
                <H3 className="md:text-md truncate">{namaLengkap}</H3>
                <Text className="md:text-md w-full truncate">{email}</Text>
                <button className="font-semibold text-blue-900 md:text-base">
                  Ganti foto
                </button>
              </div>
            </motion.div>

            {/* input nama lengkap dan gmail disable */}
            <div className="flex flex-col gap-1.5 lg:grid lg:grid-cols-1 lg:gap-7">
              {/* username */}
              <div className="lg:col-span-1">
                <InputName value="Budi santoso" disabled={true} />
              </div>
              {/*  */}
              {/* Input Email */}
              <div className="lg:col-span-1">
                <Email value="budisantoso@gmail.com" disabled={true} />
              </div>
            </div>

            {/* Button */}
            {/* <div className="inline-block">
            <Button type="generalPrimary">Simpan Perubahan</Button>
          </div> */}
          </div>
          {/* Keamanan Penggunna lg*/}
          <div className="hidden space-y-5 rounded-2xl bg-white p-7 lg:block">
            {/* Heading profile */}
            <motion.div variants={cardVariants}>
              <H2 type="secondry">
                <i class="fa-solid fa-lock pr-3 text-slate-700"></i>Keamanan
                Penggunna
              </H2>
            </motion.div>

            {/* input nama lengkap dan gmail disable */}
            <div className="flex flex-col gap-1.5 lg:grid lg:grid-cols-1 lg:gap-7">
              {/* username */}
              <div className="lg:col-span-1">
                {/* Input Password */}
                <Password
                  value={inputPasswordOld}
                  onChange={(e) => setInputPasswordOld(e.target.value)}
                />
                {textErrorInputPasswordOld && (
                  <Text className="my-3 rounded-2xl bg-red-600 px-2 py-2 text-red-50">
                    {textErrorInputPasswordOld}
                  </Text>
                )}
              </div>
              {/*  */}
              {/* Input Email */}
              <div className="lg:col-span-1">
                {/* Input Password */}
                <Password
                  value={inputPasswordNew}
                  onChange={(e) => setInputPasswordNew(e.target.value)}
                />
                {textErrorInputPasswordNew && (
                  <Text className="my-3 rounded-2xl bg-red-600 px-2 py-2 text-red-50">
                    {textErrorInputPasswordNew}
                  </Text>
                )}
              </div>
            </div>
            {/* Button */}
            <motion.div variants={cardVariants}>
              <Button type="generalSecondary" onClick={handleSubmit}>
                Simpan Perubahan
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Keamanan Penggunna mobile*/}
        <div className="space-y-5 rounded-2xl bg-white p-7 lg:hidden">
          {/* Heading profile */}
          <motion.div variants={cardVariants}>
            <H2 type="secondry">
              <i class="fa-solid fa-lock pr-3 text-slate-700"></i>Keamanan
              Penggunna
            </H2>
          </motion.div>

          {/* input nama lengkap dan gmail disable */}
          <div className="flex flex-col gap-1.5 lg:grid lg:grid-cols-1 lg:gap-7">
            {/* username */}
            <div className="lg:col-span-1">
              {/* Input Password */}
              <Password
                value={inputPasswordOld}
                onChange={(e) => setInputPasswordOld(e.target.value)}
              />
              {textErrorInputPasswordOld && (
                <Text className="my-3 rounded-2xl bg-red-600 px-2 py-2 text-red-50">
                  {textErrorInputPasswordOld}
                </Text>
              )}
            </div>
            {/*  */}
            {/* Input Email */}
            <div className="lg:col-span-1">
              {/* Input Password */}
              <Password
                value={inputPasswordNew}
                onChange={(e) => setInputPasswordNew(e.target.value)}
              />
              {textErrorInputPasswordNew && (
                <Text className="my-3 rounded-2xl bg-red-600 px-2 py-2 text-red-50">
                  {textErrorInputPasswordNew}
                </Text>
              )}
            </div>
          </div>
          {/* Button */}
          <motion.div variants={cardVariants}>
            <Button type="generalSecondary" onClick={handleSubmit}>
              Simpan Perubahan
            </Button>
          </motion.div>
        </div>

        {/* Pengaturan lainnya */}
        <div className="rounded-2xl bg-white px-7">
          {pengaturanLainnya.map((item) => (
            <OtherSettingsItems
              kategori={item.kategori}
              status={item.status}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Setting;
