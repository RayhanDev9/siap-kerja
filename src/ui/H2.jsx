function H2({ children, type = "primary" }) {
  const base = " tracking-normal";

  const className = {
    primary: base + "  py-8  text-xl font-medium",
    secondry: base + `py-2  text-xl  font-medium`,
    secondaryBold: base + `py-2  text-xl  font-bold`,
    netural: base + " py-1  text-2xl font-bold  ",
  };
  console.info(className[type]);

  return <h2 className={className[type]}>{children}</h2>;
}

export default H2;
