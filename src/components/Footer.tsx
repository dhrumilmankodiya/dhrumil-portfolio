export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          © {year} Dhrumil Mankodiya. All rights reserved.
        </p>
        <p className="text-xs text-gray-400">
          Designed & built with intention.
        </p>
      </div>
    </footer>
  );
}
