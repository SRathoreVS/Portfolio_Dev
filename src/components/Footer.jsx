export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-slate-500 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        © {new Date().getFullYear()} Satyam Rathore. Built with React +
        Tailwind.
      </div>
    </footer>
  );
}
