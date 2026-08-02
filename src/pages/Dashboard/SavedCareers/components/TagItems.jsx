import Text from "../../../../ui/Text";

function TagItems({ label, theme }) {
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
    // Fallback (nilai default) jika "theme" tidak ditemukan di object ini
    default: {
      bg: "bg-gray-100",
      text: "text-gray-500",
    },
  };

  console.info(themeColorConfig[theme], theme);

  const activeTheme = themeColorConfig[theme] || themeColorConfig.default;

  return (
    <Text
      className={`${activeTheme.bg} rounded-2xl px-2 py-1 ${activeTheme.text} inline-block font-bold`}
    >
      {label}
    </Text>
  );
}

export default TagItems;
