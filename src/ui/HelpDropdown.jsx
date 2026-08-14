import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

function HelpDropdown() {
  const helpItems = [
    { id: 1, label: "Panduan Penggunaan", icon: "fa-book" },
    { id: 2, label: "FAQ (Tanya Jawab)", icon: "fa-comments" },
    { id: 3, label: "Hubungi Dukungan", icon: "fa-headset" },
    { id: 4, label: "Laporkan Bug / Kendala", icon: "fa-bug" },
    { id: 5, label: "Tentang SiapKerja (v1.0.0)", icon: "fa-info-circle" }, 
  ];

  return (
    <div className="relative z-50">
      <Popover>
        {/* Button Bantuan */}
        <PopoverButton className="cursor-pointer text-slate-700 transition-colors hover:text-blue-500 dark:text-white dark:hover:text-blue-400">
          <i className="far fa-question-circle text-base sm:text-sm lg:text-xl"></i>
        </PopoverButton>

        {/* Dropdown Menu */}
        <PopoverPanel
          anchor="bottom end"
          className="mt-2 w-max rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-neutral-900 dark:bg-[#181818]"
        >
          {/* Header */}
          <div className="border-b border-slate-200 px-4 py-3 dark:border-neutral-900">
            <p className="text-xs font-semibold text-slate-600 md:text-sm lg:text-base dark:text-slate-400">
              PUSAT BANTUAN
            </p>
          </div>

          {/* Menu Items */}
          <div className="p-1.5">
            {helpItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  console.log(`Clicked: ${item.label}`);
                }}
                className="group relative flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/60"
              >
                <i
                  className={`fa-solid ${item.icon} text-xs text-slate-500 group-hover:text-blue-500 md:text-base dark:text-slate-400 dark:group-hover:text-blue-400`}
                ></i>
                <span className="text-xs whitespace-nowrap text-white/80 md:text-base">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
          {/* Footer */}
        
        </PopoverPanel>
      </Popover>
    </div>
  );
}

export default HelpDropdown;

  // {/* <div className="space-x-2 border-t border-slate-200 px-4 py-2 dark:border-white/25 hover:dark:border-white/35">
  //           <i
  //             className={`fa-solid fa-info-circle pl-1 text-xs text-slate-500 group-hover:text-blue-500 md:text-base dark:text-slate-400 dark:group-hover:text-blue-400`}
  //           ></i>
  //           <span className="text-xs whitespace-nowrap text-white/80 md:text-base">
  //             Tentang SiapKerja (v1.0.0)
  //           </span>
  //           {/* <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
              
  //           </p> */}
  //         </div> */}