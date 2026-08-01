import { useNavigate } from "react-router";
import Button from "../../../ui/Button";

function ButtonMdOnboarding({ button1, button2, to }) {
  const navigate = useNavigate();
  console.info(to);
  return (
    <div className="hidden justify-between bg-white p-7 text-center md:flex">
      <div className="inline-block">
        <Button type="secondry" onClick={() => navigate(-1)}>
          {button1}
        </Button>
      </div>
      <div className="inline-block">
        <Button type="generalPrimary" to={to}>
          {button2}
        </Button>
      </div>
    </div>
  );
}

export default ButtonMdOnboarding;
