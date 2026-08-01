import H2 from "./../../../../ui/H2";

function EducationItems({ institution, degree, period, gpa }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-white p-7">
      <div className="flex flex-wrap gap-x-7">
        <div>
          <i class="fa-solid fa-graduation-cap rounded-md bg-blue-50 px-2 py-2.5 text-2xl text-blue-600"></i>
        </div>
        <div>
          <H2 type="secondry">{institution}</H2>
          <p>{degree}</p>
          <p>
            {period} • {gpa}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationItems;
