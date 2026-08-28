import { div } from "framer-motion/client";
import Search from "./Search";
import Text from "./Text";
import Theme from "./Theme";
import HelpDropdown from "./HelpDropdown";

function TopBar({ placeholder, isSerch = true, onChange }) {
  return (
    <div className="hidden gap-5 lg:flex lg:justify-end">
      <div className="inline-block gap-5 rounded-2xl border border-slate-300 bg-white p-3 lg:flex lg:items-center dark:border dark:border-white/25 dark:bg-neutral-900 hover:dark:border-white/35">
        {isSerch && (
          <div className="self-center">
            {" "}
            <Search placeholder={placeholder} onChange={onChange} />
          </div>
        )}

        <div className="flex gap-5 self-center">
          <Theme />
          {/* <div className="self-center">
            <i className="far fa-bell text-xl"></i>
          </div> */}
          <div className="self-center">
            {/* <HelpDropdown /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
