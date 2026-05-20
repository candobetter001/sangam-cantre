export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[110] focus:bg-teal-600 focus:text-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:no-underline focus:font-medium"
    >
      Skip to main content
    </a>
  );
}
