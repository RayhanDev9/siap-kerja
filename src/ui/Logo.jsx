function Logo({ type }) {
  const base = "text-primary inline-block font-semibold tracking-wide";

  const className = {
    small: base + " text-2xl lg:text-3xl",
    large: base + " text-3xl lg:text-4xl",
  };
  return (
    <div className="flex items-center">
      <span className={className[type]}>SiapKerja</span>
    </div>
  );
}

export default Logo;
