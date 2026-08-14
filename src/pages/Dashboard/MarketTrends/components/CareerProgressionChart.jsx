import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";
import dataMarketTrends from "./dataMarketTrends";
import { useSelector } from "react-redux";
import Loader from "../../../../ui/Loader";

// 1. Data disesuaikan agar menghasilkan efek tangga (stair-step)
// Label sumbu X hanya diisi untuk index tertentu sesuai gambar

// 2. Daftar warna dari biru pudar (kiri) ke biru gelap (kanan)
const COLORS = ["#d1e0f7", "#aabcfa", "#85a4f2", "#5886e8", "#0052cc"];

const CareerProgressionChart = () => {
  // const data = dataMarketTrends.jobGrowth.chartData;
  const data = useSelector(
    (state) => state.marketTrends.marketTrendsData.jobGrowth.chartData,
  );
  const { isLoading, error } = useSelector((state) => state.marketTrends);
  if (isLoading) {
    return <Loader />;
  }

  if (error) return <Error />;
  return (
    <div className="w-full max-w-lg rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
      <div className="mt-4 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            // Menghilangkan jarak antar bar agar saling menempel
            barCategoryGap={0}
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis
              dataKey="name"
              // Garis bawah sumbu X
              axisLine={{ stroke: "#f3f4f6", strokeWidth: 2 }}
              // Menghilangkan jarum penanda kecil
              tickLine={false}
              // Mengatur gaya teks label
              CareerProgressionChart
              tick={{ fill: "#6b7280", fontSize: 12, dy: 10 }}
              // Memaksa recharts merender semua tick termasuk string kosong
              interval={0}
            />

            {/* YAxis disembunyikan sesuai referensi gambar */}

            <Bar dataKey="value">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  // Memasukkan warna secara berurutan sesuai array COLORS
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CareerProgressionChart;
