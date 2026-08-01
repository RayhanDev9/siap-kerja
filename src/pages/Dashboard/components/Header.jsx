// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// function Header() {
//   const [humberger, setHumberger] = useState(false);
//   function handleHumberger() {
//     setHumberger(() => !humberger);
//   }
//   return (
//     <header className="px-2">
//       {/* Humberger */}
//       <div
//         onClick={handleHumberger}
//         className="flex  flex-col gap-1.5 px-5 py-7"
//       >
//         <span
//           className={`inline-block h-1 w-6 bg-black transition-all duration-300 ${humberger ? "translate-y-2.5 rotate-45" : ""}`}
//         ></span>
//         <span
//           className={`inline-block h-1 w-6 bg-black transition-all duration-300 ${humberger ? "opacity-0" : ""}`}
//         ></span>
//         <span
//           className={`inline-block h-1 w-6 bg-black transition-all duration-300 ${humberger ? "-translate-y-2.5 -rotate-45" : ""}`}
//         ></span>
//       </div>
      
//     </header>
//   );
// }

// export default Header;
