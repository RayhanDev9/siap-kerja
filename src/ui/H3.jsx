function H3({ children, fontThmae = "font-semibold",className="" }) {
  return <h3 className={`capitalize text-lg sm:text-xl lg:text-2xl ${fontThmae} dark:text-white ${className}`}>{children}</h3>;
}

export default H3;
