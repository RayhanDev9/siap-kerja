import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// --- DATA CONFIGURATION ---
const TOTAL_SEGMENTS = 12;
const dataSegments = Array.from({ length: TOTAL_SEGMENTS }, (_, i) => ({
  name: `segment-${i}`,
  value: 10,
}));

const activeIndices = [0, 3, 6, 9];

// --- STYLING CONFIGURATION ---
const colors = {
  active: "#2563EB",
  base: "#E8EAFD",
  text: "#2563EB",
};

const SegmentedRadialProgress = ({ mastered, total }) => {
  const PROGRESS_VALUE_TEXT = Math.floor((mastered / total) * 100);

  // Ukuran chart tetap 75x75
  const containerSize = 75;
  const chartMargin = { top: 0, right: 0, bottom: 0, left: 0 };

  // Radii tetap 25 & 30
  const innerRadiusBase = 25;
  const outerRadiusBase = 30;

  return (
    <div
      style={{
        position: "relative",
        width: containerSize,
        height: containerSize,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={chartMargin}>
          <Pie
            data={dataSegments}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={innerRadiusBase}
            outerRadius={outerRadiusBase}
            stroke="none"
            paddingAngle={3}
            /* 
              KUNCI SIMETRI PRESISI:
              103.5 deg memastikan segmen index 0 berada tegak lurus di tengah jam 12.
            */
            startAngle={103.5}
            endAngle={-256.5}
            isAnimationActive={false}
          >
            {dataSegments.map((entry, index) => {
              const isActive = activeIndices.includes(index);
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={isActive ? colors.active : colors.base}
                  stroke="none"
                />
              );
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* --- CENTRAL LABEL OVERLAY --- */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: colors.text,
          fontWeight: "bold",
          fontSize: "13px",
          userSelect: "none",
        }}
      >
        {PROGRESS_VALUE_TEXT}
      </div>
    </div>
  );
};

export default SegmentedRadialProgress;
