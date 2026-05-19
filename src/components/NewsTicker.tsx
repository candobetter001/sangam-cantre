import { Link } from "react-router-dom";

const TICKER_ITEMS = [
  { text: "NEW: Cultural Intelligence & Inclusive Governance — Now Available", href: "/publications" },
  { text: "UPCOMING: Annual Conference on Culture & Public Policy 2026", href: "/events" },
  { text: "Sangam Centre recognised at Swaraj International Conference 2025", href: "/awards" },
  { text: "Podcast launching soon on Spotify & Apple Podcasts", href: "/podcast" },
  { text: "New Publication: Pluralistic Environmental Governance Model", href: "/publications" },
  { text: "Open Positions — Work With Sangam Centre", href: "/work-with-us" },
];

export default function NewsTicker() {
  return (
    <div className="bg-teal-700 dark:bg-teal-900 text-white py-1.5 overflow-hidden print-hidden select-none">
      <div className="flex items-center">
        <span className="bg-red-600 text-white text-xs font-bold px-3 py-0.5 shrink-0 uppercase tracking-wider">
          Updates
        </span>
        <div className="overflow-hidden flex-1 ml-2">
          <div className="ticker-track text-sm">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="inline-block">
                <Link to={item.href} className="hover:underline">
                  {item.text}
                </Link>
                <span className="mx-8 opacity-40">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
