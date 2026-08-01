import H3 from "../../../../ui/H3";
function CategoryItems({ title, icon }) {
  const themeStyles = {
    technology: { bg: "bg-indigo-100", text: "text-indigo-800" },
    design: { bg: "bg-purple-100", text: "text-purple-900" },
    business: { bg: "bg-orange-100", text: "text-orange-900" },
    healthcare: { bg: "bg-red-100", text: "text-red-900" },
    education: { bg: "bg-slate-200", text: "text-slate-800" },
    environment: { bg: "bg-blue-200", text: "text-blue-800" },
  };

  // Fungsi bantuan (opsional, jika butuh default nilai)
  const getTheme = () => {
    return (
      themeStyles[title.toLowerCase()] || {
        bg: "bg-gray-100",
        text: "text-gray-800",
      }
    );
  };
  console.info(getTheme().bg, getTheme().text);
  return (
    <div className="w-40 xs:w-56 sm:w-64 space-y-3 rounded-2xl bg-white p-7 shadow-sm">
      <div className="text-center">
        <i
          className={`${icon} rounded-2xl ${getTheme().bg} ${getTheme().text} p-2`}
        ></i>
      </div>
      <div className="mx-auto text-center">
        <H3 type="small">{title}</H3>
      </div>
    </div>
  );
}

export default CategoryItems;
