import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import dashboardData from "./dashboardData";

const CareerScoreChart = () => {
  // Data skor: 78 didapatkan, sisa 22 kosong (untuk mencapai 100)
  const{ scoreData} = dashboardData.careerReadiness;

  return (
    // Wrapper div dengan class relative agar teks angka bisa diletakkan tepat di tengah
    <div className="relative h-48 w-48">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* 1. Lapisan Lingkaran Latar Belakang (Ungu Muda/Pudar) */}
          <Pie
            data={[{ value: 100 }]} // Mengisi 100% lingkaran penuh
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70} // Disamakan dengan outerRadius
            outerRadius={70}
            strokeWidth={16} // Ketebalan garis lingkaran
            fill="none"
            stroke="#F3E8FF" // Warna ungu muda (setara Tailwind purple-100)
            isAnimationActive={false}
          />

          {/* 2. Lapisan Lingkaran Skor Utama (Ungu Tua Terpotong) */}
          <Pie
            data={scoreData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={70}
            startAngle={90} // 90 derajat = mulai dari titik atas jam 12
            endAngle={-270} // -270 derajat = berputar 360 derajat searah jarum jam
            strokeWidth={16}
          >
            {/* Bagian Skor (78) */}
            <Cell
              fill="none"
              stroke="#7C3AED" // Warna ungu tua (setara Tailwind violet-600)
              strokeDasharray="35 15" // Efek putus-putus: 35px garis, 15px celah/spasi
              strokeLinecap="round" // Membuat ujung potongan menjadi melengkung
            />
            {/* Bagian Sisa (22) - Dibuat transparan agar lapisan background terlihat */}
            <Cell fill="none" stroke="transparent" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Teks Skor di Tengah Lingkaran */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-blue-600">78</span>
        <span className="text-sm font-semibold text-gray-500">/ 100</span>
      </div>
    </div>
  );
};

export default CareerScoreChart;
