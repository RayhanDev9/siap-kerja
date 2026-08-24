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
  if (!competencyMatrix) return null;

  let formattedData = [];

  // 1. JIKA DATA BERBENTUK ARRAY LANGSUNG DARI API (dataChart)
  // Format: [{ name: "Node.js", valueKeahlian: 0, valueTarget: 85 }, ...]
  if (Array.isArray(competencyMatrix)) {
    // Ambil top 6-8 item agar chart radar tidak terlalu penuh/kusut
    const chartItems =
      competencyMatrix.length > 8
        ? competencyMatrix.slice(0, 8)
        : competencyMatrix;

    formattedData = chartItems.map((item) => ({
      subject: item.name,
      keahlianAnda: Number(item.valueKeahlian) || 0,
      targetPeran: Number(item.valueTarget) || 0,
    }));
  }
  // 2. JIKA DATA MASIH BERBENTUK FORMAT LAMA (labels & datasets)
  else if (competencyMatrix.labels && competencyMatrix.datasets) {
    formattedData = competencyMatrix.labels.map((label, index) => ({
      subject: label,
      keahlianAnda: Number(competencyMatrix.datasets[0]?.data?.[index]) || 0,
      targetPeran: Number(competencyMatrix.datasets[1]?.data?.[index]) || 0,
    }));
  }

  if (formattedData.length === 0) {
    return (
      <div className="flex h-[350px] items-center justify-center text-slate-400">
        Data matriks kompetensi belum tersedia.
      </div>
    );
  }

  return (
    <div style={{ width: "100%", height: 380, fontFamily: "sans-serif" }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={formattedData}>
          {/* Garis Jaring (Grid) */}
          <PolarGrid />

          {/* Label Sudut (Node.js, PHP, Python, dll) */}
          <PolarAngleAxis
            dataKey="subject"
            className="text-gray-600 dark:text-white"
            tick={{ fontSize: 12, fontWeight: 500 }}
          />

          {/* Sumbu Skala (0 - 100) */}
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={false}
            axisLine={false}
          />

          {/* Radar 1: Target Peran (Garis Ungu Putus-putus) */}
          <Radar
            name="Target Peran"
            className="dark:fill-purple-500 dark:stroke-purple-500"
            dataKey="targetPeran"
            stroke="#6f42c1"
            strokeWidth={2}
            strokeDasharray="5 5"
            fill="#6f42c1"
            fillOpacity={0.15}
            dot={{ r: 3, fill: "#6f42c1" }}
          />

          {/* Radar 2: Keahlian Anda (Garis Biru Solid) */}
          <Radar
            name="Keahlian Anda"
            dataKey="keahlianAnda"
            stroke="#0d6efd"
            className="dark:fill-blue-500 dark:stroke-blue-500"
            strokeWidth={2}
            fill="#0d6efd"
            fillOpacity={0.3}
            dot={{ r: 4, fill: "#0d6efd" }}
          />

          {/* Legenda di bagian bawah */}
          <Legend iconType="circle" wrapperStyle={{ paddingTop: "15px" }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompetencyChart;
