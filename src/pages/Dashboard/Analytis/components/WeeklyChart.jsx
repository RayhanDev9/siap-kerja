import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useSelector } from "react-redux";

const getTodayName = () => {
  const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  return days[new Date().getDay()]; 
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md bg-gray-800 px-3 py-1 text-sm text-white shadow-md">
        {`${payload[0].payload.fullName || payload[0].payload.name}: ${payload[0].value}`}
      </div>
    );
  }
  return null;
};

const CustomTick = ({ x, y, payload }) => {
  const today = getTodayName();
  const isHighlighted = payload.value === today;

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
  const { daily_chart: data = [] } = useSelector(
    (state) =>
      state.analytics?.analyticsData?.data?.profile_engagement || {
        daily_chart: [],
      },
  );

  const today = getTodayName();

  return (
    <div className="w-full rounded-xl border border-gray-100 bg-slate-100 p-4 sm:p-6 shadow-sm dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
      
      {/* 1. Tambahkan overflow-x-auto untuk mengaktifkan scroll horizontal */}
      <div className="w-full overflow-x-auto overflow-y-hidden rounded-lg border border-gray-100 bg-white dark:border dark:border-white/25 dark:bg-black hover:dark:border-white/35">
        
        {/* 2. Paksa lebar minimal (min-w-[500px]) agar chart tidak kegencet di mobile */}
        {/* Di layar sm ke atas, min-w-full akan membuatnya kembali responsif normal */}
        <div className="h-64 min-w-[500px] p-4 sm:min-w-full sm:h-72">
          
          <ResponsiveContainer width="100%" height="100%" className="focus:outline-none">
            <BarChart
              data={data}
              margin={{ top: 20, right: 10, left: 10, bottom: 0 }}
              style={{ outline: "none" }}
            >
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={<CustomTick />}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "transparent" }}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={48}>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.name === today ? "#3b82f6" : "#dbeafe"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

        </div>
      </div>
    </div>
  );
};

export default WeeklyChart;