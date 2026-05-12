export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} Tarjousputki · B2B tarjouspyyntöputket LVI- ja talotekniikkayrityksille.
    </footer>
  );
}
