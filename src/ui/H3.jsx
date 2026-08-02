function H3({ children, fontThmae = "font-semibold" }) {
  return <h3 className={`capitalize text-lg sm:text-xl lg:text-2xl ${fontThmae}`}>{children}</h3>;
}

export default H3;
