import React from "react";
// Import Listbox dari Headless UI
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import dataSpecializations from "../pages/Onboarding/Page4/dataSpecializations"; // Sesuaikan path-nya

function SelectSpecialization({ value, onChange }) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor="specialization"
        className="text-sm font-medium text-gray-700"
      >
        Spesialisasi
      </label>

      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          {/* Tombol Utama Listbox */}
          <ListboxButton
            id="specialization"
            // pl-10 ditambahkan agar teks tidak menabrak ikon briefcase di kiri
            className="relative w-full cursor-pointer rounded-xl border border-gray-200 bg-white py-3 pr-10 pl-10 text-left text-sm transition outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          >
            {/* Teks placeholder atau nilai yang dipilih */}
            <span
              className={`block truncate ${value ? "text-gray-900" : "text-gray-500"}`}
            >
              {value ? value.name : "Pilih bidang keahlian utama"}
            </span>

            {/* Ikon Chevron (Panah Bawah) di Kanan */}
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <i className="fa-solid fa-chevron-down text-sm text-gray-400"></i>
            </span>
          </ListboxButton>

          {/* Ikon Briefcase di Kiri (Dirapikan) */}
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <i className="fa-solid fa-briefcase text-gray-400"></i>
          </span>

          {/* Opsi Dropdown */}
          <ListboxOptions className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none">
            {dataSpecializations.map((spec) => (
              <ListboxOption
                key={spec.id}
                className={({ focus }) =>
                  `relative cursor-pointer py-3 pr-4 pl-10 transition-colors select-none ${
                    focus ? "bg-blue-50 text-blue-600" : "text-gray-700"
                  }`
                }
                value={spec}
              >
                {({ selected, focus }) => (
                  <>
                    <span
                      className={`block truncate ${selected ? "font-medium text-blue-600" : "font-normal"}`}
                    >
                      {spec.name}
                    </span>

                    {/* Ikon Checkmark (Centang) jika item ini dipilih */}
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                        <i className="fa-solid fa-check text-xs"></i>
                      </span>
                    ) : null}
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}

export default SelectSpecialization;
