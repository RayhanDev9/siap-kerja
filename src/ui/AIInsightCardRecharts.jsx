import React from "react";
import { BarChart, Bar, Cell, ResponsiveContainer } from "recharts";

// Data statis untuk contoh (bisa diganti dengan data dari API)
const data = [
  { name: "Awal", score: 30 },
  { name: "Menengah", score: 65 },
  { name: "Tinggi", score: 100 },
];

const AIInsightCardRecharts = () => {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-6 font-sans shadow-sm">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-bold tracking-wider text-gray-400">
          AI INSIGHT
        </h3>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 text-violet-600"
        >
          <path d="M11.64 5.23a.75.75 0 011.22 0l2.25 3.21 3.86.32a.75.75 0 01.42 1.3l-2.9 2.59.85 3.82a.75.75 0 01-1.1.8l-3.37-1.95-3.37 1.95a.75.75 0 01-1.1-.8l.85-3.82-2.9-2.59a.75.75 0 01.42-1.3l3.86-.32 2.25-3.21z" />
        </svg> */}
      </div>

      {/* Recharts Container Section */}
      <div className="mb-5 h-48 rounded-xl bg-slate-50/70 p-4 pt-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            {/* Kita sembunyikan XAxis & YAxis agar tampilannya minimalis seperti gambar */}

            <Bar
              dataKey="score"
              radius={[12, 12, 0, 0]} // Membuat bagian atas melengkung
              barSize={70} // Mengatur kelebaran batang
            >
              {data.map((entry, index) => {
                // Menentukan warna dan efek untuk masing-masing batang
                const isHighest = index === 2; // Batang ke-3 (index 2)

                return (
                  <Cell
                    key={`cell-${index}`}
                    // Warna fill mengikuti referensi gambar
                    fill={
                      isHighest
                        ? "#7c3aed"
                        : index === 1
                          ? "#c7d2fe"
                          : "#e0e7ff"
                    }
                    // CSS Filter untuk memberikan efek glow pada batang tertinggi
                    style={{
                      filter: isHighest
                        ? "drop-shadow(0px 10px 15px rgba(124, 58, 237, 0.6))"
                        : "none",
                    }}
                  />
                );
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Footer Section */}
      <div className="text-[17px] font-bold text-gray-700">
        Tingkat Kecocokan Karier: <span className="text-violet-600">94%</span>
      </div>
    </div>
  );
};

export default AIInsightCardRecharts;
