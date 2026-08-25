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
import Text from "../../../../ui/Text";

const defaultData = [{ name: "Memuat...", value: 0 }];

function JobGrowthChart({ chartData }) {
  const safeChartData =
    chartData && chartData.length > 0 ? chartData : defaultData;

  const barColors = ["#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6"];

  return (
    // Gunakan h-full flex-1 dengan min-height yang cukup
    <div className="min-h-[320px] w-full flex-1 pt-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={safeChartData}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 17, fontWeight: 600 }}
            dy={8}
          />
          <YAxis hide domain={[0, "auto"]} />
          <Tooltip
            cursor={{ fill: "rgba(255, 255, 255, 0.05)" }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border border-white/10 bg-neutral-800 px-3 py-1.5 shadow-lg">
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
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
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
