import Progres from "../../../../ui/Progres";

function Skills({ skill, progressPercentage }) {
  console.info(skill, progressPercentage);
  return (
    <>
      {/* progres */}
      <div className="flex justify-between">
        <span>{skill}</span>
        <span>{progressPercentage}%</span>
      </div>
      <Progres skill={skill} progressPercentage={progressPercentage} />
    </>
  );
}

export default Skills;
