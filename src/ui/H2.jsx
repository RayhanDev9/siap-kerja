function H2({ children, type }) {
  const base = " text-xl font-medium tracking-normal";

  const className = {
    primary: base + "  py-8",
    secondry: base + " py-2",
  };
  console.info(className[type]);

  return <h2 className={className[type]}>{children}</h2>;
}

export default H2;
