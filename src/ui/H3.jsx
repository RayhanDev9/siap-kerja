function H3({ children, fontThmae = "font-semibold" }) {
  return <h3 className={`f text-lg ${fontThmae}`}>{children}</h3>;
}

export default H3;
