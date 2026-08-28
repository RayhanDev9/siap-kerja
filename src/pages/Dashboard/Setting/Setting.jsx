import Section from "../../../ui/Section";
import HeaderSection from "./../components/HeaderSection";
import dataSetting from "./components/dataSetting";
import OtherSettingsItems from "./components/OtherSettingsItems";
import SettingModal from "./components/SettingModal";
import Loader from "../../../ui/Loader";
import Theme from "../../../ui/Theme"; // Sesuaikan path jika berbeda
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserThunk } from "../../../features/auth/authSlice";
import {
  updateProfile,
  updatePassword,
} from "../../../features/dashboard/profileSlice";
import { useNavigate } from "react-router";

function Setting() {
  const { isLoading: isLoadingLogout } = useSelector((state) => state.auth);
  const { data: profileData, isLoading: isLoadingProfile } = useSelector(
    (state) => state.profile,
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = profileData?.email ?? "";

  const [activeModal, setActiveModal] = useState(null);
  const [emailDraft, setEmailDraft] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("");
  const [modalError, setModalError] = useState("");

  const resetModalForm = () => {
    setEmailDraft("");
    setCurrentPassword("");
    setNewPassword("");
    setNewPasswordConfirmation("");
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

  function handleLogout() {
    dispatch(logoutUserThunk())
      .unwrap()
      .then(() => navigate("/login"))
      .catch((err) => {
        console.error("Logout gagal:", err);
        navigate("/login");
      });
  }

  const openModalFields = {
    "Alamat Email": {
      title: "Alamat Email",
      submitLabel: isLoadingProfile ? "Menyimpan..." : "Simpan Perubahan",
      fields: [
        {
          type: "email",
          label: "Email Saat Ini",
          value: email || "Belum ada email",
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

        dispatch(updateProfile({ email: trimmed }))
          .unwrap()
          .then(() => {
            handleCloseModal();
          })
          .catch((err) => {
            setModalError(err || "Gagal memperbarui alamat email.");
          });
      },
    },
    "Keamanan Pengguna": {
      title: "Keamanan Pengguna",
      submitLabel: isLoadingProfile ? "Menyimpan..." : "Simpan Kata Sandi",
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
          placeholder: "Minimal 8 karakter",
          onChange: (e) => {
            setNewPassword(e.target.value);
            if (modalError) setModalError("");
          },
        },
        {
          type: "password",
          label: "Konfirmasi Kata Sandi Baru",
          value: newPasswordConfirmation,
          placeholder: "Ulangi kata sandi baru",
          onChange: (e) => {
            setNewPasswordConfirmation(e.target.value);
            if (modalError) setModalError("");
          },
        },
      ],
      onSubmit: () => {
        if (!currentPassword) {
          setModalError("Kata sandi saat ini harus diisi.");
          return;
        }
        if (newPassword.length < 8) {
          setModalError("Kata sandi baru minimal 8 karakter.");
          return;
        }
        if (newPassword !== newPasswordConfirmation) {
          setModalError("Konfirmasi kata sandi baru tidak cocok.");
          return;
        }

        const payload = {
          current_password: currentPassword,
          new_password: newPassword,
          new_password_confirmation: newPasswordConfirmation,
        };

        dispatch(updatePassword(payload))
          .unwrap()
          .then(() => {
            handleCloseModal();
          })
          .catch((err) => {
            setModalError(err || "Gagal memperbarui kata sandi.");
          });
      },
    },
  };

  const activeModalConfig = activeModal ? openModalFields[activeModal] : null;

  if (isLoadingLogout) {
    return <Loader />;
  }

  return (
    <Section>
      <div className="flex flex-col gap-7 pb-7  lg:pt-0">
        <HeaderSection
          title="Pengaturan"
          description="Kelola preferensi akun dan keamanan Anda"
        />

        {/* KARTU PENGATURAN TEMA TAMPILAN */}
        <div className="flex flex-row gap-4 rounded-2xl bg-white px-4 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-7 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
          <div>
            <h3 className="text-base font-bold text-slate-900 md:text-lg dark:text-white">
              Tema Tampilan
            </h3>
            <p className="mt-1 text-xs text-slate-500 md:text-sm dark:text-slate-400">
              Sesuaikan mode terang atau gelap sesuai kenyamanan mata Anda.
            </p>
          </div>
          <div className=" sm:w-auto">
            <Theme />
          </div>
        </div>

        {/* GRID PENGATURAN LAINNYA */}
        <div className="grid overflow-hidden rounded-2xl bg-white px-3 py-7 shadow-sm sm:px-7 md:grid-cols-2 md:gap-3 md:p-7 dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35 space-y-3 md:space-y-0">
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

        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-3 rounded-2xl bg-red-500 px-5 py-2.5 transition-all duration-300 hover:bg-red-600 active:scale-95"
          >
            <span className="text-sm font-semibold text-white sm:text-base lg:text-lg">
              Logout
            </span>
            <i className="fa-solid fa-arrow-right-from-bracket text-lg text-white sm:text-xl"></i>
          </button>
        </div>
      </div>
    </Section>
  );
}

export default Setting;