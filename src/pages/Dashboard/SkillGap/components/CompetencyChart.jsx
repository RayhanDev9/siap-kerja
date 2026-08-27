import React, { useEffect, useRef } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Komponen kustom untuk memotong teks SVG maksimal 2 baris
const CustomTick = ({ payload, x, y, textAnchor }) => {
  const words = payload.value.split(" ");
  let line1 = payload.value;
  let line2 = "";

  if (words.length > 2) {
    const mid = Math.ceil(words.length / 2);
    line1 = words.slice(0, mid).join(" ");
    line2 = words.slice(mid).join(" ");

    if (line2.length > 18) {
      line2 = line2.substring(0, 18) + "...";
    }
  } else if (words.length === 2 && payload.value.length > 15) {
    line1 = words[0];
    line2 = words[1];
  }

  return (
    <text
      x={x}
      y={y}
      textAnchor={textAnchor}
      // Ukuran font diperbesar sedikit di layar lg
      className="fill-gray-600 text-[10px] font-medium sm:text-xs lg:text-sm dark:fill-gray-300"
    >
      <tspan x={x} dy={line2 ? -8 : 4}>
        {line1}
      </tspan>
      {line2 && (
        // Jarak vertikal (dy) diperbesar menjadi 18 agar tidak terlalu mepet
        <tspan x={x} dy={18}>
          {line2}
        </tspan>
      )}
    </text>
  );
};

const CompetencyChart = ({ competencyMatrix }) => {
  const scrollRef = useRef(null);

  let formattedData = [];

  if (Array.isArray(competencyMatrix)) {
    const chartItems =
      competencyMatrix.length > 8
        ? competencyMatrix.slice(0, 8)
        : competencyMatrix;

    formattedData = chartItems.map((item) => ({
      subject: item.name,
      keahlianAnda: Number(item.valueKeahlian) || 0,
      targetPeran: Number(item.valueTarget) || 0,
    }));
  } else if (competencyMatrix?.labels && competencyMatrix?.datasets) {
    formattedData = competencyMatrix.labels.map((label, index) => ({
      subject: label,
      keahlianAnda: Number(competencyMatrix.datasets[0]?.data?.[index]) || 0,
      targetPeran: Number(competencyMatrix.datasets[1]?.data?.[index]) || 0,
    }));
  }

  useEffect(() => {
    if (scrollRef.current && formattedData.length > 0) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      scrollRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, [formattedData]);

  if (formattedData.length === 0) {
    return (
      <div className="flex h-[350px] items-center justify-center text-slate-400">
        Data matriks kompetensi belum tersedia.
      </div>
    );
  }

  return (
    <div
      ref={scrollRef}
      className="w-full scroll-smooth overflow-x-auto overflow-y-hidden"
    >
      {/* 
        Tinggi grafik dibuat responsif: 
        380px di mobile/tablet, membesar jadi 480px di layar lg 
      */}
      <div
        className="min-w-[500px] h-[380px] w-full sm:min-w-full lg:h-[480px]"
        style={{ fontFamily: "sans-serif" }}
      >
        <ResponsiveContainer
          width="99%"
          height="100%"
          className="focus:outline-none"
        >
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="65%" // Diperbesar proporsinya
            data={formattedData}
            style={{ outline: "none" }}
          >
            <PolarGrid />

            <PolarAngleAxis dataKey="subject" tick={<CustomTick />} />

            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              tick={false}
              axisLine={false}
            />

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

            <Legend iconType="circle" wrapperStyle={{ paddingTop: "15px" }} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CompetencyChart;