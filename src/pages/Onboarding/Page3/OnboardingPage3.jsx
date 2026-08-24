import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";
import Button from "../../../ui/Button";
import H2 from "../../../ui/H2";
import Section from "../../../ui/Section";
import Text from "../../../ui/Text";
import ButtonMdOnboarding from "../components/ButtonMdOnboarding";
import ProgresOnboarding from "../components/ProgresOnboarding";
import dataSkill from "./components/dataSkill";
import SkillItems from "./components/SkillItems";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import H3 from "../../../ui/H3";
import { RoleSelection } from "../../../features/onBoarding/onBoardingSlice";
import { Navigate, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectedPathName, selectPathCourses } from "../../../features/dashboard/learningRoadmapSlice";

const currentRoles = [
  "Student",
  "Unemployed",
  "Junior Developer",
  "Senior Developer",
  "UI/UX Designer",
  "Product Manager",
  "Business Analyst",
  "Data Scientist",
  "DevOps Engineer",
  "QA Engineer",
];

function OnboardingPage3() {
  const { selectedCategoryData } = useSelector(
    (state) => state.learningRoadmap,
  );

  console.info(selectedCategoryData);

  const targetRoles = selectedCategoryData.map((item) => item.path);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.onBoarding);
  const navigate = useNavigate();
  const [selectedTargetRole, setSelectedTargetRole] = useState("");
  const [selectedCurrentRole, setSelectedCurrentRole] = useState("");
  const [queryTargetRole, setQueryTargetRole] = useState("");
  const [queryCurrentRole, setQueryCurrentRole] = useState("");
  const [openTargetRole, setOpenTargetRole] = useState(false);
  const [openCurrentRole, setOpenCurrentRole] = useState(false);

  useEffect(() => {
    if (data === null) {
      navigate("/onboardingPage1", { replace: true });
    }
  }, [data, navigate]);
  // Filter roles berdasarkan query
  const filteredTargetRoles =
    queryTargetRole === ""
      ? targetRoles
      : targetRoles.filter((role) =>
          role.toLowerCase().includes(queryTargetRole.toLowerCase()),
        );

  const filteredCurrentRoles =
    queryCurrentRole === ""
      ? currentRoles
      : currentRoles.filter((role) =>
          role.toLowerCase().includes(queryCurrentRole.toLowerCase()),
        );

  function handleNext() {
    if (selectedTargetRole && selectedCurrentRole) {
      dispatch(selectPathCourses(selectedTargetRole));
      dispatch(
        RoleSelection({
          target_role_slug: selectedTargetRole,
          current_role: selectedCurrentRole,
        }),
      );

      navigate("/onboardingPage5"); // Navigasi ke halaman onboarding selanjutnya
    }
  }
  return (
    <>
      <div className="md:rounded-2xl md:bg-white md:pb-3 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
        <Section>
          <div className="space-y-7">
            {/* Progres */}
            <ProgresOnboarding progresOnboarding={4} />

            {/*Header*/}
            <div className="rounded-2xl bg-white p-7 shadow-md dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
              <motion.div variants={cardVariants} className="pb-1">
                <H2 type="secondaryBold">
                  Pilih peran saat ini dan peran target anda
                </H2>
              </motion.div>
              <motion.div variants={cardVariants}>
                <Text className="">
                  Bantu kami menyesuaikan kurikulum agar sesuai dengan tujuan
                  karir
                </Text>
              </motion.div>
            </div>

            {/* Content - Combobox */}
            <div className="space-y-7 rounded-2xl bg-white p-7 shadow-md dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
              {/* Target Role */}
              <motion.div variants={cardVariants} className="space-y-2">
                <label className="block text-sm font-semibold">
                  <H3>Target Role (Peran Tujuan)</H3>
                </label>
                <Combobox
                  value={selectedTargetRole}
                  onChange={setSelectedTargetRole}
                  open={openTargetRole}
                  onOpen={() => setOpenTargetRole(true)}
                  onClose={() => setOpenTargetRole(false)}
                >
                  <div className="relative">
                    <ComboboxInput
                      className="w-full rounded-lg border-2 border-slate-200 bg-white px-4 py-3 text-lg text-slate-900 placeholder-slate-400 transition-all focus:border-blue-600 focus:outline-none md:text-xl dark:border dark:border-white/25 dark:bg-neutral-900 dark:text-white hover:dark:border-white/35"
                      displayValue={(role) => role}
                      onChange={(event) =>
                        setQueryTargetRole(event.target.value)
                      }
                      onFocus={() => setOpenTargetRole(true)}
                      placeholder="Pilih peran target..."
                    />
                    {/* <i className="fa-solid fa-chevron-down pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-slate-600"></i> */}
                    {openTargetRole && (
                      <ComboboxOptions className="absolute top-full right-0 left-0 z-50 mt-1 max-h-60 overflow-y-auto rounded-lg border-2 border-slate-200 bg-white text-lg shadow-lg md:text-xl dark:border dark:border-white/25 dark:bg-neutral-900 dark:text-white hover:dark:border-white/35">
                        {filteredTargetRoles.length === 0 ? (
                          <div className="px-4 py-2 text-slate-500">
                            Tidak ada peran yang ditemukan
                          </div>
                        ) : (
                          filteredTargetRoles.map((role) => (
                            <ComboboxOption
                              key={role}
                              value={role}
                              className="group cursor-pointer px-4 py-3 transition-colors hover:bg-blue-50 data-[selected]:bg-blue-100"
                            >
                              {role}
                            </ComboboxOption>
                          ))
                        )}
                      </ComboboxOptions>
                    )}
                  </div>
                </Combobox>
                <Text className="text-sm text-slate-500 md:text-lg">
                  Ini adalah tujuan karir utama Anda.
                </Text>
              </motion.div>

              {/* Current Role */}
              <motion.div variants={cardVariants} className="space-y-2">
                <label className="block text-sm font-semibold">
                  <H3> Current Role (Peran Saat Ini)</H3>
                </label>
                <Combobox
                  value={selectedCurrentRole}
                  onChange={setSelectedCurrentRole}
                  open={openCurrentRole}
                  onOpen={() => setOpenCurrentRole(true)}
                  onClose={() => setOpenCurrentRole(false)}
                >
                  <div className="relative">
                    <ComboboxInput
                      className="w-full rounded-lg border-2 border-slate-200 bg-white px-4 py-3 text-lg text-slate-900 placeholder-slate-400 transition-all focus:border-blue-600 focus:outline-none md:text-xl dark:border dark:border-white/25 dark:bg-neutral-900 dark:text-white hover:dark:border-white/35"
                      displayValue={(role) => role}
                      onChange={(event) =>
                        setQueryCurrentRole(event.target.value)
                      }
                      onFocus={() => setOpenCurrentRole(true)}
                      placeholder="Pilih peran Anda saat ini..."
                    />
                    <i className="fa-solid fa-chevron-down pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-slate-600"></i>
                    {openCurrentRole && (
                      <ComboboxOptions className="absolute top-full right-0 left-0 z-50 mt-1 max-h-60 overflow-y-auto rounded-lg border-2 border-slate-200 bg-white text-lg shadow-lg md:text-xl dark:border dark:border-white/25 dark:bg-neutral-900 dark:text-white hover:dark:border-white/35">
                        {filteredCurrentRoles.length === 0 ? (
                          <div className="px-4 py-2 text-slate-500">
                            Tidak ada peran yang ditemukan
                          </div>
                        ) : (
                          filteredCurrentRoles.map((role) => (
                            <ComboboxOption
                              key={role}
                              value={role}
                              className="group cursor-pointer px-4 py-3 transition-colors hover:bg-blue-50 data-[selected]:bg-blue-100"
                            >
                              {role}
                            </ComboboxOption>
                          ))
                        )}
                      </ComboboxOptions>
                    )}
                  </div>
                </Combobox>
                <Text className="text-sm text-slate-500 md:text-lg">
                  Untuk menentukan titik awal pembelajaran Anda.
                </Text>
              </motion.div>
            </div>
          </div>
        </Section>

        <ButtonMdOnboarding
          onFinish={handleNext}
          button1="Sebelumnya"
          button2="Selanjutnya"
        />
      </div>
    </>
  );
}

export default OnboardingPage3;
