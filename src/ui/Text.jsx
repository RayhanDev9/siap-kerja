function Text({ children, className = "" }) {
  return (
    <p
      className={`text-sm text-gray-700 md:text-base lg:text-lg dark:text-white/80 ${className}`}
    >
      {children}
    </p>
  );
}

export default Text;
