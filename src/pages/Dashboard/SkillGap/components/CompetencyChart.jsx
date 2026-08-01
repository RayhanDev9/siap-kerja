import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CompetencyChart = ({ competencyMatrix }) => {
  // 1. Data Mentah Anda
  const rawData = competencyMatrix;

  // 2. Transformasi Data agar sesuai dengan format Recharts
  const formattedData = rawData.labels.map((label, index) => {
    return {
      subject: label, // Nama kategori di sudut
      keahlianAnda: rawData.datasets[0].data[index], // Nilai Biru
      targetPeran: rawData.datasets[1].data[index], // Nilai Ungu
    };
  });

  return (
    <div style={{ width: "100%", height: 400, fontFamily: "sans-serif" }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={formattedData}>
          {/* Garis Jaring (Grid) */}
          <PolarGrid />

          {/* Label Sudut (UI Design, UX Research, dll) */}
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#4b5563", fontSize: 12, fontWeight: 500 }}
          />

          {/* Sumbu Skala: Sembunyikan angka agar bersih seperti di gambar, set max 100 */}
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={false}
            axisLine={false}
          />

          {/* Radar 1: Target Peran (Garis Ungu Putus-putus) */}
          {/* Ditempatkan lebih awal agar posisinya di bawah/belakang warna biru */}
          <Radar
            name="Target Peran"
            dataKey="targetPeran"
            stroke="#6f42c1"
            strokeWidth={2}
            strokeDasharray="5 5" // Membuat efek garis putus-putus
            fill="#6f42c1"
            fillOpacity={0.1}
            dot={{ r: 3, fill: "#6f42c1" }} // Menambahkan titik di sudut
          />

          {/* Radar 2: Keahlian Anda (Garis Biru Solid) */}
          <Radar
            name="Keahlian Anda"
            dataKey="keahlianAnda"
            stroke="#0d6efd"
            strokeWidth={2}
            fill="#0d6efd"
            fillOpacity={0.3}
            dot={{ r: 4, fill: "#0d6efd" }} // Menambahkan titik di sudut
          />

          {/* Legenda di bagian bawah dengan bentuk lingkaran */}
          <Legend iconType="circle" wrapperStyle={{ paddingTop: "20px" }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompetencyChart;
