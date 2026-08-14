import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Email from "../../../../../ui/Email";
import Text from "../../../../../ui/Text";
import { validateEmail } from "../../../../../util/helpers";
import SettingModalShell from "./components/SettingModalShell";

function AlamatEmailModal({ isOpen, onClose, profileData }) {
  const [currentEmail, setCurrentEmail] = useState(profileData?.email ?? "");
  const [newEmail, setNewEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (profileData) {
      setCurrentEmail(profileData.email ?? "");
      setNewEmail("");
      setErrorMessage("");
    }
  }, [isOpen, profileData]);

  if (!profileData) return null;

  const handleSubmit = () => {
    const error = validateEmail(newEmail.trim());
    setErrorMessage(error);

    if (!error) {
      onClose();
    }
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
                title="Alamat Email"
                onClose={onClose}
                onSubmit={handleSubmit}
              >
                <div className="space-y-5">
                  <Email
                    label="Email Saat Ini"
                    value={currentEmail}
                    onChange={() => {}}
                    disabled
                  />
                  <Email
                    label="Email Baru"
                    value={newEmail}
                    onChange={(e) => {
                      setNewEmail(e.target.value);
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

export default AlamatEmailModal;