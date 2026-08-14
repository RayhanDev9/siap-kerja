import { div } from "framer-motion/client";
import Search from "./Search";
import Text from "./Text";
import Theme from "./Theme";

function TopBar({ placeholder, isSerch = true, onChange }) {
  return (
    <div className="hidden gap-5 lg:flex lg:justify-end">
      <div className="inline-block gap-5 rounded-2xl p-3 lg:flex dark:border dark:border-white/25 border border-slate-300 bg-white dark:bg-neutral-900 hover:dark:border-white/35">
        <div className="self-center">
          {isSerch && <Search placeholder={placeholder} onChange={onChange} />}
        </div>
        <div className="flex gap-5 self-center">
          <Theme />
          <div className="self-center">
            <i className="far fa-bell text-xl"></i>
          </div>
          <div className="self-center">
            <i className="far fa-question-circle text-xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
