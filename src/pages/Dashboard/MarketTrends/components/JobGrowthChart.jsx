import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Data fallback jika props dari API sedang loading / kosong
const defaultData = [{ name: "Memuat...", value: 0 }];

function JobGrowthChart({ chartData }) {
  // 1. PENGAMANAN: Pastikan data tidak undefined. Kalau kosong, pakai defaultData
  const safeChartData =
    chartData && chartData.length > 0 ? chartData : defaultData;

  // Gradasi warna bar dari kiri ke kanan (terang ke pekat)
  const barColors = ["#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6"];

  return (
    // ⚠️ WAJIB beri tinggi pasti (h-64 / h-[260px]) di div pembungkus
    <div className="h-64 w-full pt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={safeChartData} // Gunakan safeChartData
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          {/* Sumbu X: Nama Kategori */}
          {/* 2. PERBAIKAN: Ubah "role" jadi "name" sesuai API Laravel */}
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />

          {/* Sumbu Y disembunyikan agar tampilan minimalis */}
          <YAxis hide domain={[0, "auto"]} />

          {/* Tooltip saat hover */}
          <Tooltip
            cursor={{ fill: "rgba(255, 255, 255, 0.05)" }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border border-white/10 bg-neutral-800 px-3 py-1.5 shadow-lg">
                    <p className="text-xs text-neutral-400">
                      {/* 3. PERBAIKAN: Ubah payload.role jadi payload.name */}
                      {payload[0].payload.name}
                    </p>
                    <p className="text-sm font-bold text-blue-400">
                      +{payload[0].value}% Pertumbuhan
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />

          {/* Bar Diagram */}
          {/* 4. PERBAIKAN: Ubah "growth" jadi "value" sesuai API Laravel */}
          <Bar dataKey="value" radius={[6, 6, 0, 0]}>
            {safeChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={barColors[index % barColors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default JobGrowthChart;
