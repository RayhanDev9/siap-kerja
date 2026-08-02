function Logo({ type }) {
  const base = "text-primary inline-block font-semibold tracking-wide";

  const className = {
    small: base + " text-2xl  sm:text-3xl lg:text-4xl",
    large: base + " text-3xl sm:text-4xl lg:text-5xl",
  };
  return (
    <div className="flex items-center">
      <span className={className[type]}>SiapKerja</span>
    </div>
  );
}

export default Logo;
