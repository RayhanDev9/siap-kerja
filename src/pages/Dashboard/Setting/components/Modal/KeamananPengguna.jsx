import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Password from "../../../../../ui/Password";
import Text from "../../../../../ui/Text";
import { validatePassword } from "../../../../../util/helpers";
import SettingModalShell from "./components/SettingModalShell";

function KeamananPenggunaModal({ isOpen, onClose }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setCurrentPassword("");
    setNewPassword("");
    setErrorMessage("");
  }, [isOpen]);

  const handleSubmit = () => {
    const currentError = validatePassword(currentPassword);
    const newError = validatePassword(newPassword);

    if (currentError || newError) {
      setErrorMessage(currentError || newError);
      return;
    }

    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[60]" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/45 backdrop-blur-[2px]" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-3 text-center sm:p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <SettingModalShell
                title="Keamanan Pengguna"
                onClose={onClose}
                onSubmit={handleSubmit}
              >
                <div className="space-y-5">
                  <Password
                    label="Kata Sandi Saat Ini"
                    value={currentPassword}
                    onChange={(e) => {
                      setCurrentPassword(e.target.value);
                      if (errorMessage) setErrorMessage("");
                    }}
                  />
                  <Password
                    label="Kata Sandi Baru"
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                      if (errorMessage) setErrorMessage("");
                    }}
                  />
                  {errorMessage && (
                    <Text className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-600 dark:bg-red-500/10 dark:text-red-300">
                      {errorMessage}
                    </Text>
                  )}
                </div>
              </SettingModalShell>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default KeamananPenggunaModal;