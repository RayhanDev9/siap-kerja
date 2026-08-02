
function Text({ children, className = "" }) {
  return (
    <p
      className={`text-gray-700 text-sm  md:text-base lg:text-lg ${className}`}
    >
      {children}
    </p>
  );
}

export default Text;
