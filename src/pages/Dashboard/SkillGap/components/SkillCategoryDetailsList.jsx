import H3 from "../../../../ui/H3";
import SkillCategoryDetailsItems from "./SkillCategoryDetailsItems";

function SkillCategoryDetailsList({ category, icon, skills }) {

  return (
    <div className="rounded-2xl bg-white px-7 py-7">
      <div className="py-2">
        <H3>
          <i className={`fa-solid text-xl ${icon} pr-2`}></i>
          {category}
        </H3>
      </div>
      <div>
        {/* name: "Desain Sistem Skalabel",
          status: "Pengembangan",
          statusType: "warning", */}
        {skills.map((skill) => (
          <SkillCategoryDetailsItems
            name={skill.name}
            status={skill.status}
            statusType={skill.statusType}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillCategoryDetailsList;
