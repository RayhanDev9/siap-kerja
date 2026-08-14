import React, { forwardRef } from "react";
import { DialogPanel, DialogTitle } from "@headlessui/react";

const SettingModalShell = forwardRef(function SettingModalShell(
  { title, onClose, onSubmit, submitLabel = "Simpan Perubahan", children },
  ref,
) {
  return (
    <DialogPanel
      ref={ref}
      className="w-[92vw] max-w-xl overflow-hidden rounded-2xl bg-white p-4 text-left shadow-2xl sm:p-6 dark:bg-neutral-900 dark:text-white"
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <DialogTitle
          as="h3"
          className="text-lg font-bold text-slate-900 capitalize sm:text-xl lg:text-2xl dark:text-white"
        >
          {title}
        </DialogTitle>

        <button
          type="button"
          onClick={onClose}
          className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label="Tutup modal"
        >
          <i className="fa-solid fa-xmark text-lg" />
        </button>
      </div>

      {/* Konten Form */}
      <div className="space-y-5">{children}</div>

      {/* Footer / Tombol Aksi */}
      <div className="mt-5 flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onClose}
          className="rounded-xl border border-slate-200 px-4 py-2.5 font-medium text-slate-700 transition hover:bg-slate-100 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/10"
        >
          Tutup
        </button>
        <button
          type="button"
          onClick={onSubmit ?? onClose}
          className="rounded-xl bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700"
        >
          {submitLabel}
        </button>
      </div>
    </DialogPanel>
  );
});

export default SettingModalShell;
