function PrioritySkillsGapItems({ title, subtitle }) {
  return (
    <div className="flex w-full justify-between rounded-2xl bg-blue-50 p-3">
      <div className="text-lg">
        <h3 className="font-semibold">{title}</h3>
        <p>{subtitle}</p>
      </div>
      <button>
        <i className="fa-solid fa-circle-arrow-right text-3xl text-blue-600"></i>
      </button>
    </div>
  );
}

export default PrioritySkillsGapItems;
