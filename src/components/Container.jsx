export default function Container({ children, className = "", size = "default" }) {
  const widths = {
    narrow: "max-w-2xl",
    default: "max-w-5xl",
    wide: "max-w-6xl",
  };
  return (
    <div className={`mx-auto w-full px-6 sm:px-8 ${widths[size]} ${className}`}>
      {children}
    </div>
  );
}
