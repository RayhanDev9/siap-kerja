import { Link } from "react-router-dom";

function Button({ children, disabled, to, type = "primary", onClick }) {
  // Base style untuk tombol primary/solid
  const base =
    "inline-block text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-wide transition-all duration-200 " +
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 active:scale-95 focus:outline-none " +
    "disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed disabled:active:scale-100 disabled:hover:bg-slate-300 " +
    "dark:bg-blue-600 dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500";

  // Base style untuk tombol secondary/outline
  const baseSecondary =
    "inline-block font-semibold uppercase tracking-wide transition-all duration-200 border border-stone-300 text-stone-600 " +
    "hover:bg-blue-600 hover:text-white hover:border-blue-600 active:scale-95 focus:outline-none " +
    "disabled:border-slate-200 disabled:text-slate-300 disabled:bg-transparent disabled:cursor-not-allowed disabled:active:scale-100 disabled:hover:bg-transparent disabled:hover:text-slate-300 disabled:hover:border-slate-200 " +
    "dark:border-neutral-700 dark:text-neutral-400 dark:disabled:border-neutral-800 dark:disabled:text-neutral-600";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 my-8 rounded-md",
    small:
      base +
      " px-4 py-2 md:px-5 md:py-2.5 text-xs sm:text-sm lg:text-base my-8",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm lg:text-base my-8",
    autentikasi:
      base + " px-4 py-3 md:px-6 md:py-4 w-full rounded-xl my-8 text-center",
    generalPrimary: base + " px-4 py-3 md:px-6 md:py-4 w-full rounded-2xl",
    buttonCardLearning:
      base + " px-4 py-2.5 md:px-6 md:py-3 w-full rounded-lg",
    generalSecondary:
      baseSecondary +
      " w-full text-sm sm:text-base lg:text-lg rounded-2xl px-4 py-3 md:px-6 md:py-4",
    secondary:
      baseSecondary +
      " rounded-full px-4 py-2.5 md:px-6 md:py-3.5 text-sm sm:text-base",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles[type]}
    >
      {children}
    </button>
  );
}

export default Button;