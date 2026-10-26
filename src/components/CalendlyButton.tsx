import Link from "next/link";

export default function CalendlyButton({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <Link className={className} style={style} href="/reservation">
      {children}
    </Link>
  );
}
