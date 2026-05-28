import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary: "bg-[#5e17eb] text-white hover:scale-105",
    orange: "bg-[#ff914d] text-white hover:scale-105",
    outline:
      "border border-[#5e17eb] text-[#5e17eb] hover:bg-[#5e17eb] hover:text-white",
    ghost:
      "border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20",
    text: "px-0 py-0 text-[#5e17eb] hover:text-[#ff914d]",
  };

  const isText = variant === "text";
  const base = isText
    ? "inline-flex items-center justify-center font-bold transition"
    : "inline-flex items-center justify-center rounded-full px-7 py-4 font-bold transition";

  const classes = `${base} ${styles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
