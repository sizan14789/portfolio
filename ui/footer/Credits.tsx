export default function Credits({ css }: { css: string }) {
  return (
    <p className={`text-xs md:text-sm text-(--muted)  ${css}`}>
      © {new Date().getFullYear()} Sizan Molla.
    </p>
  );
}
