import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import InputName from "../../../../../ui/InputName";
import Email from "../../../../../ui/Email";
import H3 from "../../../../../ui/H3";

function NamaPengunaModal({ isOpen, onClose, profileData }) {
  if (!profileData) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[60] "
        onClose={onClose}
        preventScroll={false}
      >
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
              <DialogPanel className="w-[92vw] max-w-xl overflow-hidden rounded-2xl bg-white p-4 text-left shadow-2xl sm:p-6 dark:bg-neutral-900 dark:text-white">
                <div className="mb-5 flex items-center justify-between">
                  <Dialog.Title
                    as="h3"
                    className="text-lg  font-bold text-slate-900 capitalize sm:text-xl lg:text-2xl dark:text-white"
                  >
                    Profile Pengguna
                  </Dialog.Title>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
                    aria-label="Tutup modal"
                  >
                    <i className="fa-solid fa-xmark text-lg"></i>
                  </button>
                </div>

                <div className="space-y-5">
                  <div className="space-y-5">
                    <InputName
                      value={profileData.namaLengkap}
                      onChange={() => {}}
                      disabled
                      label="Nama Saat Ini"
                    />
                    <InputName
                      // value={profileData.namaLengkap}
                      // onChange={() => {}}
                      label="Nama Baru"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-xl border border-slate-200 px-4 py-2.5 font-medium text-slate-700 transition hover:bg-slate-100 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/10"
                    >
                      Tutup
                    </button>
                    <button
                      type="button"
                      className="rounded-xl bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700"
                    >
                      Simpan Perubahan
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default NamaPengunaModal;
