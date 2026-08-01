import H3 from "./../../../../ui/H3";

function Skills({ icon, name, description, rank, thame }) {
  // Object kondisi untuk memetakan nama "thame" ke class Tailwind
  const themeColorConfig = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-500",
    },
    purple: {
      bg: "bg-purple-100", // Sesuaikan dengan warna UI Anda
      text: "text-purple-600",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-500",
    },
    // Fallback (nilai default) jika "thame" tidak ditemukan di object ini
    default: {
      bg: "bg-gray-100",
      text: "text-gray-500",
    },
  };

  const activeTheme = themeColorConfig[thame] || themeColorConfig.default;

  return (
    <div className="flex justify-between rounded-2xl bg-white p-7">
      <div className="flex gap-5">
        <p>
          <i
            className={`${icon} ${activeTheme.bg} ${activeTheme.text} rounded-2xl p-4 text-2xl`}
          ></i>
        </p>
        <div>
          <H3>{name}</H3>
          <p>{description}</p>
        </div>
      </div>
      <p>{rank}</p>
    </div>
  );
}

export default Skills;
