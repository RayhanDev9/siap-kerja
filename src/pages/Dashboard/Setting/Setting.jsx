import Section from "../../../ui/Section";
import H2 from "../../../ui/H2";
import TopBar from "../../../ui/TopBar";
import Button from "../../../ui/Button";
import HeaderSection from "./../components/HeaderSection";
import dataSetting from "./components/dataSetting";
import OtherSettingsItems from "./components/OtherSettingsItems";
import SettingModal from "./components/SettingModal";
import Text from "../../../ui/Text";
import Password from "../../../ui/Password";
import { useEffect, useState } from "react";
import { validatePassword } from "../../../util/helpers";
import { cardVariants } from "../../../util/animations";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../ui/Loader";
import { logoutUserThunk } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router";

function Setting() {
  const { settingData, isLoading, error } = useSelector(
    (state) => state.setting,
  );
  const { isLoading: isLoadingLogout, error: errorLogout } = useSelector(
    (state) => state.auth,
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { profilPengguna, keamanan, pengaturanLainnya } = settingData;
  const { namaLengkap, email, fotoProfil } = profilPengguna;

  const [inputPasswordOld, setInputPasswordOld] = useState("");
  const [textErrorInputPasswordOld, setTextErrorInputPasswordOld] =
    useState("");
  const [inputPasswordNew, setInputPasswordNew] = useState("");
  const [textErrorInputPasswordNew, setTextErrorInputPasswordNew] =
    useState("");

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [activeModal, setActiveModal] = useState(null);
  const [nameDraft, setNameDraft] = useState("");
  const [emailDraft, setEmailDraft] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [modalError, setModalError] = useState("");

  function handleSubmit() {
    const passworErrordOld = validatePassword(inputPasswordOld);
    const passwordErrorNew = validatePassword(inputPasswordNew);

    setTextErrorInputPasswordOld(passworErrordOld);
    setTextErrorInputPasswordNew(passwordErrorNew);
  }

  function handleLogout() {
    dispatch(logoutUserThunk())
      .unwrap()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.error("Logout gagal:", err);
        navigate("/login");
      });
  }

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const resetModalForm = () => {
    setNameDraft("");
    setEmailDraft("");
    setCurrentPassword("");
    setNewPassword("");
    setModalError("");
  };

  const handleOpenModal = (kategori) => {
    resetModalForm();
    setActiveModal(kategori);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    resetModalForm();
  };

  const openModalFields = {
    "Nama Pengguna": {
      title: "Nama Pengguna",
      submitLabel: "Simpan Perubahan",
      fields: [
        {
          type: "text",
          label: "Nama Saat Ini",
          value: profilPengguna?.namaLengkap ?? "",
          disabled: true,
        },
        {
          type: "text",
          label: "Nama Baru",
          value: nameDraft,
          placeholder: "Masukkan nama lengkap baru",
          onChange: (e) => {
            setNameDraft(e.target.value);
            if (modalError) setModalError("");
          },
        },
      ],
      onSubmit: () => {
        const trimmed = nameDraft.trim();
        const validationError = trimmed ? "" : "Nama tidak boleh kosong.";

        if (validationError) {
          setModalError(validationError);
          return;
        }

        handleCloseModal();
      },
    },
    "Alamat Email": {
      title: "Alamat Email",
      submitLabel: "Simpan Perubahan",
      fields: [
        {
          type: "email",
          label: "Email Saat Ini",
          value: profilPengguna?.email ?? "",
          disabled: true,
        },
        {
          type: "email",
          label: "Email Baru",
          value: emailDraft,
          placeholder: "nama@gmail.com",
          onChange: (e) => {
            setEmailDraft(e.target.value);
            if (modalError) setModalError("");
          },
        },
      ],
      onSubmit: () => {
        const trimmed = emailDraft.trim();
        const validationError = trimmed
          ? /^\S+@gmail\.com$/.test(trimmed)
            ? ""
            : "Format email tidak valid. Harap gunakan domain @gmail.com."
          : "Alamat email tidak boleh kosong.";

        if (validationError) {
          setModalError(validationError);
          return;
        }

        handleCloseModal();
      },
    },
    "Keamanan Pengguna": {
      title: "Keamanan Pengguna",
      submitLabel: "Simpan Perubahan",
      fields: [
        {
          type: "password",
          label: "Kata Sandi Saat Ini",
          value: currentPassword,
          placeholder: "Masukkan kata sandi saat ini",
          onChange: (e) => {
            setCurrentPassword(e.target.value);
            if (modalError) setModalError("");
          },
        },
        {
          type: "password",
          label: "Kata Sandi Baru",
          value: newPassword,
          placeholder: "Masukkan kata sandi baru",
          onChange: (e) => {
            setNewPassword(e.target.value);
            if (modalError) setModalError("");
          },
        },
      ],
      onSubmit: () => {
        const currentError =
          currentPassword.length >= 8
            ? ""
            : "Kata sandi tidak boleh kosong atau kurang dari 8 karakter.";
        const newError =
          newPassword.length >= 8 ? "" : "Kata sandi baru minimal 8 karakter.";
        const validationError = currentError || newError;

        if (validationError) {
          setModalError(validationError);
          return;
        }

        handleCloseModal();
      },
    },
  };

  const activeModalConfig = activeModal ? openModalFields[activeModal] : null;

  if (isLoading) {
    return <Loader />;
  }

  if (error) return <Error />;

  if (isLoadingLogout) {
    return <Loader />;
  }

  if (errorLogout) return <Error />;
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

      

        {/* Pengaturan lainnya */}
        <div className="overflow-hidden rounded-2xl  bg-white px-3 pb-7 md:p-7 sm:px-7 dark:border dark:border-white/25 dark:bg-neutral-900  md:gap-3 hover:dark:border-white/35 grid md:grid-cols-2">
          {dataSetting.pengaturanLainnya.map((item) => (
            <OtherSettingsItems
              key={item.id}
              kategori={item.kategori}
              status={item.status}
              icon={item.icon}
              onClick={() => handleOpenModal(item.kategori)}
            />
          ))}
        </div>

        {activeModalConfig && (
          <SettingModal
            isOpen={Boolean(activeModal)}
            onClose={handleCloseModal}
            title={activeModalConfig.title}
            fields={activeModalConfig.fields}
            onSubmit={activeModalConfig.onSubmit}
            submitLabel={activeModalConfig.submitLabel}
            errorMessage={modalError}
          />
        )}

        <div
          onClick={handleLogout}
          className="flex cursor-pointer items-center justify-end gap-40"
        >
          <div className="inline-block">
            <div className="jus flex items-center justify-center justify-items-center gap-1 rounded-2xl bg-red-500 px-5 py-2 transition-all duration-300 hover:bg-red-600">
              <div className="flex items-center gap-3">
                <h3 className="inline-block pb-1 text-sm font-semibold text-white sm:text-lg lg:text-xl">
                  Logout
                </h3>
                <i className="fa-solid fa-arrow-right-from-bracket text-xl text-white sm:text-xl lg:text-2xl"></i>
                {/* <Text className="text-sm text-white">
                  Akhiri sesi dan keluar dari akun
                </Text> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Setting;
