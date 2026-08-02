import Search from "./Search";
import Text from "./Text";

function TopBar({ placeholder, isSerch = true }) {
  return (
    <div className="hidden gap-5 lg:flex lg:justify-end">
      {isSerch && <Search placeholder={placeholder} />}
      <div className="flex gap-5 self-center">
        <div className="self-center">
          <i className="far fa-bell text-2xl"></i>
        </div>
        <div className="self-center">
          <i className="far fa-question-circle text-2xl"></i>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
