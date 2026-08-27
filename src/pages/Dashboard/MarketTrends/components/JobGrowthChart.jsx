import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import Text from "../../../../ui/Text";

const defaultData = [{ name: "Memuat...", value: 0 }];

function JobGrowthChart({ chartData }) {
  const safeChartData =
    chartData && chartData.length > 0 ? chartData : defaultData;

  const barColors = ["#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6"];

  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); 
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-[320px] w-full min-w-0 flex-1 pt-6">
      {/* Hapus outline bawaan saat di-klik/fokus */}
      <ResponsiveContainer width="99%" height="100%" className="focus:outline-none">
        <BarChart
          data={safeChartData}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          style={{ outline: "none" }} // <-- Ini yang ngilangin garis putihnya
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: isMobile ? 12 : 17, fontWeight: 600 }}
            dy={8}
          />
          <YAxis hide domain={[0, "auto"]} />
          <Tooltip
            cursor={{ fill: "rgba(255, 255, 255, 0.05)" }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border border-white/10 bg-neutral-800 px-3 py-1.5 shadow-lg outline-none">
                    <Text className="text-xs text-neutral-400">
                      {payload[0].payload.name}
                    </Text>
                    <Text className="text-sm font-bold">
                      <span className="text-blue-300">
                        +{payload[0].value}% Pertumbuhan
                      </span>
                    </Text>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar 
            dataKey="value" 
            radius={[8, 8, 0, 0]} 
            barSize={isMobile ? 40 : 60}
          >
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