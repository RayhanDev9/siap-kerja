import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import dataAnalytis from "./dataAnalytis";

// Data estimasi berdasarkan gambar
const data = dataAnalytis.profileEngagement.chartData;

// Custom Tooltip untuk popup berwarna gelap "Kamis: 82"
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md bg-gray-800 px-3 py-1 text-sm text-white shadow-md">
        {`${payload[0].payload.fullName}: ${payload[0].value}`}
      </div>
    );
  }
  return null;
};

// Custom Tick untuk XAxis agar label 'Kam' berwarna biru dan tebal
const CustomTick = ({ x, y, payload }) => {
  const isHighlighted = payload.value === "Kam";
  return (
    <text
      x={x}
      y={y + 16}
      textAnchor="middle"
      fill={isHighlighted ? "#2563eb" : "#4b5563"}
      fontWeight={isHighlighted ? "bold" : "normal"}
      fontSize={14}
    >
      {payload.value}
    </text>
  );
};

const WeeklyChart = () => {
  return (
    <div className="w-full max-w-lg rounded-xl border border-gray-100 bg-slate-100 p-6 shadow-sm  dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
      <div className="h-64 rounded-lg border border-gray-100 bg-white p-4  dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
          >
            {/* Axis X Tanpa garis (axisLine={false}) dan tanpa jarum (tickLine={false}) */}
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={<CustomTick />}
            />

            {/* Menggunakan custom tooltip */}
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />

            {/* Bar utama dengan radius untuk lengkungan di atas */}
            <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  // Warna biru gelap untuk 'Kam', biru pudar untuk yang lain
                  fill={entry.name === "Kam" ? "#3b82f6" : "#dbeafe"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyChart;
