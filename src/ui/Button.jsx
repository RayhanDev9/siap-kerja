import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block  text-sm sm:text-base lg:text-lg bg-blue-600 dark:bg-blue-600 font-semibold uppercase tracking-wide  transition-colors duration-300 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none disabled:cursor-not-allowed active:bg-blue-800 active:scale-95  hover:bg-blue-700 ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 my-8 rounded-md",
    small:
      base +
      " px-4 py-2 md:px-5 md:py-2.5 text-xs sm:text-sm lg:text-base my-8",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm lg:text-base my-8",
    autentikasi:
      base + " px-4 py-3 md:px-6 md:py-4 w-ful rounded-xl my-8 text-center",
    generalPrimary: base + " px-4 py-3 md:px-6 md:py-4 w-full  rounded-2xl",
    buttonCardLearning:
      base + "  px-4 py-2.5  md:px-6 md:py-3 w-full  rounded-lg",
    generalSecondary:
      " inline-block w-full text-sm sm:text-base lg:text-lg rounded-2xl border   font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-blue-600  hover:text-white hover:border-none active:bg-blue-600 active:text-white active:border-none  disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4 dark:bg-black",
    secondary:
      "inline-block text-sm sm:text-base lg:text-lg lg:text-base rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300   dark:bg-blue-500 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 dark:bg-black",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
