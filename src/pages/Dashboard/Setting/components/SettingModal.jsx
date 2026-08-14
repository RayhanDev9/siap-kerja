import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import Email from "../../../../ui/Email";
import InputName from "../../../../ui/InputName";
import Password from "../../../../ui/Password";
import Text from "../../../../ui/Text";
import SettingModalShell from "./SettingModalShell";

function SettingModal({
  isOpen,
  onClose,
  title,
  fields = [],
  onSubmit,
  submitLabel = "Simpan Perubahan",
  errorMessage = "",
}) {
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
                title={title}
                onClose={onClose}
                onSubmit={onSubmit}
                submitLabel={submitLabel}
              >
                <div className="space-y-5">
                  {fields.map((field, index) => {
                    const key =
                      field.name ?? `${field.label ?? "field"}-${index}`;

                    if (field.type === "email") {
                      return (
                        <Email
                          key={key}
                          label={field.label}
                          value={field.value ?? ""}
                          onChange={field.onChange}
                          disabled={field.disabled}
                          placeholder={field.placeholder}
                        />
                      );
                    }

                    if (field.type === "password") {
                      return (
                        <Password
                          key={key}
                          label={field.label}
                          value={field.value ?? ""}
                          onChange={field.onChange}
                          placeholder={field.placeholder}
                        />
                      );
                    }

                    return (
                      <InputName
                        key={key}
                        label={field.label}
                        value={field.value ?? ""}
                        onChange={field.onChange}
                        disabled={field.disabled}
                        placeholder={field.placeholder}
                      />
                    );
                  })}

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

export default SettingModal;
