import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Wajib di-import agar kalender tidak berantakan

function InputDateOfBirth({ value, onChange, onBlur }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="Date" className="text-sm font-medium text-gray-700">
        Tanggal Lahir
      </label>

      <div className="relative">
        <DatePicker
          selected={value} // DatePicker menggunakan props 'selected', bukan 'value'
          onChange={onChange}
          onBlur={onBlur}
          id="Date"
          placeholderText="Pilih tanggal lahir..."
          dateFormat="dd/MM/yyyy" // Format tampilan tanggal
          required
          showYearDropdown // Memunculkan dropdown untuk Tahun
          showMonthDropdown // Memunculkan dropdown untuk Bulan
          dropdownMode="select"
          // Class Tailwind milikmu dimasukkan ke sini
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-10 text-sm transition outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          // Properti khusus DatePicker agar lebarnya mengikuti parent (penting)
          wrapperClassName="w-full"
        />

        {/* Ikon ditambahkan pointer-events-none agar klik tembus ke input datepicker */}
        <i className="fa-solid fa-calendar-days pointer-events-none absolute top-1/2 left-4 z-10 -translate-y-1/2 text-gray-400"></i>
      </div>
    </div>
  );
}

export default InputDateOfBirth;
