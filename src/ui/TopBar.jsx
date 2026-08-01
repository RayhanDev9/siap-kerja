import Search from "./Search";


function TopBar({ placeholder, isSerch = true }) {
  return (
    <div className="hidden gap-5 lg:flex lg:justify-end">
      {isSerch && <Search placeholder={placeholder} />}
      <div className="flex gap-5 self-center">
        <p>
          <i className="far fa-bell text-lg"></i>
        </p>
        <p>
          <i className="far fa-question-circle text-lg"></i>
        </p>
      </div>
    </div>
  );
}

export default TopBar;
