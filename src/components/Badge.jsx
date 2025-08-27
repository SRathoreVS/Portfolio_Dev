export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-xl border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-sm text-sky-200">
      {children}
    </span>
  );
}
