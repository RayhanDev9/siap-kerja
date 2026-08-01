import H2 from "../../../ui/H2";

function HeaderSection({ title, description, icon = "" }) {
  return (
    <div>
      <H2 type="netural"> {title} </H2>

      <p>
        {icon && <i className={`${icon}`}></i>}
        {description}
      </p>
    </div>
  );
}

export default HeaderSection;
