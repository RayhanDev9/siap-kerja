import React, { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";
import dataCities from "../pages/Onboarding/Page4/dataCities";

// Data dummy
const cities = dataCities;

function SelectLocation({ value, onChange, onBlur }) {
  const [query, setQuery] = useState("");

  const filteredCities =
    query === ""
      ? cities
      : cities.filter((city) => {
          return city.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    // Struktur luar disamakan persis dengan referensi: flex flex-col gap-2
    <div className="flex flex-col gap-2">
      <label htmlFor="location" className="text-sm font-medium text-gray-700">
        Domisili Saat Ini
      </label>

      <Combobox value={value} onChange={onChange}>
        {/* Wrapper disamakan persis: relative */}
        <div className="relative">
          {/* 
            Class pada ComboboxInput disamakan 100% dengan input text.
            Ditambahkan id="location" agar terhubung dengan htmlFor di label.
          */}
          <ComboboxInput
            id="location"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-10 text-sm transition outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            displayValue={(city) => (city ? city.name : "")}
            onChange={(event) => setQuery(event.target.value)}
            onBlur={onBlur}
            placeholder="Pilih Kota atau Kabupaten"
          />

          {/* Ikon disamakan posisinya, ditambah pointer-events-none agar tidak memblokir klik */}
          <i className="fa-solid fa-location-dot pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"></i>

          {/* 
            Penyesuaian gaya Dropdown agar senada dengan input (rounded-xl, text-sm) 
          */}
          <ComboboxOptions className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none">
            {filteredCities.length === 0 && query !== "" ? (
              <div className="relative cursor-default px-4 py-3 text-gray-700 select-none">
                Kota tidak ditemukan.
              </div>
            ) : (
              filteredCities.map((city) => (
                <ComboboxOption
                  key={city.id}
                  className={({ focus }) =>
                    `relative cursor-pointer py-3 pr-4 pl-10 transition-colors select-none ${
                      // Mengubah warna hover menjadi biru muda (bg-blue-50) agar lebih elegan
                      focus ? "bg-blue-50 text-blue-600" : "text-gray-700"
                    }`
                  }
                  value={city}
                >
                  {({ selected, focus }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? "font-medium text-blue-600" : "font-normal"}`}
                      >
                        {city.name}
                      </span>
                      {selected ? (
                        <>
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${focus ? "text-blue-600" : "text-blue-600"}`}
                          >
                            <i className="fa-solid fa-check text-xs"></i>
                          </span>
                        </>
                      ) : null}
                    </>
                  )}
                </ComboboxOption>
              ))
            )}
          </ComboboxOptions>
          <i className="fa-solid fa-chevron-down text-sm pointer-events-none absolute top-1/2 right-4 z-10 -translate-y-1/2 text-gray-400"></i>
        </div>
      </Combobox>
    </div>
  );
}

export default SelectLocation;
