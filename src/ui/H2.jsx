function H2({ children, type = "primary" }) {
  const base = " tracking-normal capitalize ";

  const className = {
    primary: base + "  py-8  text-xl sm:text-2xl lg:text-3xl font-medium",
    secondry: base + `py-2  text-xl sm:text-2xl lg:text-3xl  font-medium`,
    secondaryBold: base + `py-2  text-xl sm:text-2xl lg:text-3xl  font-bold`,
    netural: base + " py-1  text-2xl sm:text-3xl lg:text-4xl font-bold  ",
  };
  console.info(className[type]);

  return <h2 className={className[type]}>{children}</h2>;
}

export default H2;
