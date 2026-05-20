import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, X, FileText, Calendar, Users, BookOpen, Mail, Award, Mic, Bookmark, Map, Shield, HelpCircle } from "lucide-react";

interface SearchEntry {
  title: string;
  url: string;
  description: string;
  icon: typeof Search;
  keywords?: string[];
}

const INDEX: SearchEntry[] = [
  { title: "Home", url: "/", description: "Sangam Centre home page", icon: BookOpen, keywords: ["home", "main"] },
  { title: "About", url: "/about", description: "About Sangam Centre", icon: Users, keywords: ["mission", "vision"] },
  { title: "Our Team", url: "/team", description: "Researchers, advisors, and operators", icon: Users, keywords: ["people", "researchers", "staff"] },
  { title: "Focus Areas", url: "/focus-areas", description: "What we research", icon: Search, keywords: ["topics", "areas"] },
  { title: "Publications", url: "/publications", description: "Research papers and policy briefs", icon: FileText, keywords: ["papers", "research", "briefs"] },
  { title: "Events", url: "/events", description: "Past and upcoming events", icon: Calendar, keywords: ["conferences", "dialogues"] },
  { title: "Media", url: "/media", description: "Press, videos, and appearances", icon: FileText, keywords: ["press", "news"] },
  { title: "Awards", url: "/awards", description: "Recognitions and affiliations", icon: Award, keywords: ["recognition"] },
  { title: "Podcast", url: "/podcast", description: "Long-form conversations launching soon", icon: Mic, keywords: ["audio", "spotify"] },
  { title: "Annual Reports", url: "/annual-report", description: "Year-by-year transparency reports", icon: FileText, keywords: ["transparency"] },
  { title: "Contact", url: "/contact", description: "Get in touch", icon: Mail, keywords: ["email", "phone"] },
  { title: "Work With Us", url: "/work-with-us", description: "Career and engagement opportunities", icon: Users, keywords: ["jobs", "careers"] },
  { title: "Volunteer", url: "/volunteer", description: "Sign up to volunteer", icon: Users, keywords: ["help", "contribute"] },
  { title: "Speaker Request", url: "/speaker-request", description: "Invite a Sangam researcher", icon: Mic, keywords: ["invite", "talk"] },
  { title: "Research Collaboration", url: "/collaborate", description: "Propose joint research", icon: Users, keywords: ["partner", "joint"] },
  { title: "FAQ", url: "/faq", description: "Common questions", icon: HelpCircle, keywords: ["help", "questions"] },
  { title: "Press Kit", url: "/press-kit", description: "Media resources", icon: FileText, keywords: ["press", "logos"] },
  { title: "Bookmarks", url: "/bookmarks", description: "Your saved items", icon: Bookmark },
  { title: "Sitemap", url: "/sitemap", description: "All pages on this site", icon: Map },
  { title: "Privacy Policy", url: "/privacy", description: "How we protect your data", icon: Shield, keywords: ["data", "gdpr"] },
  { title: "Terms of Use", url: "/terms", description: "Site usage terms", icon: FileText },
  { title: "Cookie Policy", url: "/cookies", description: "What cookies we use", icon: FileText },
  { title: "Code of Conduct", url: "/code-of-conduct", description: "Our community standards", icon: Shield },
  { title: "Accessibility", url: "/accessibility", description: "Accessibility statement", icon: Shield },
  { title: "Diversity & Inclusion", url: "/diversity", description: "Our diversity commitment", icon: Users },
  { title: "Open Data", url: "/open-data", description: "Open data policy", icon: FileText, keywords: ["data", "dataset"] },
];

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "Escape") {
        setOpen(false);
      } else if (e.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
    else { setQuery(""); setSelected(0); }
  }, [open]);

  const results = query.trim()
    ? INDEX.filter((e) => {
        const q = query.toLowerCase();
        return (
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.keywords?.some((k) => k.toLowerCase().includes(q))
        );
      }).slice(0, 8)
    : INDEX.slice(0, 8);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[selected]) {
        navigate(results[selected].url);
        setOpen(false);
      }
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-start justify-center pt-20 px-4 print-hidden animate-fade-in" onClick={() => setOpen(false)}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-xl bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden animate-slide-bottom">
        <div className="flex items-center border-b border-gray-200 dark:border-gray-700 px-4">
          <Search size={18} className="text-gray-400 mr-3" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelected(0); }}
            onKeyDown={onKeyDown}
            placeholder="Search pages, publications, events…"
            className="flex-1 py-4 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none"
          />
          <button onClick={() => setOpen(false)} aria-label="Close search" className="text-gray-400 hover:text-gray-700 dark:hover:text-white p-1">
            <X size={18} />
          </button>
        </div>
        <div className="max-h-96 overflow-y-auto">
          {results.length === 0 ? (
            <div className="py-12 text-center text-gray-400 text-sm">No results for "{query}"</div>
          ) : (
            results.map((r, i) => {
              const Icon = r.icon;
              return (
                <Link
                  key={r.url}
                  to={r.url}
                  onClick={() => setOpen(false)}
                  onMouseEnter={() => setSelected(i)}
                  className={`flex items-center gap-3 px-4 py-3 border-l-2 ${i === selected ? "bg-teal-50 dark:bg-teal-950 border-teal-500" : "border-transparent"}`}
                >
                  <Icon size={16} className="text-teal-600 dark:text-teal-300 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{r.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{r.description}</div>
                  </div>
                  <code className="hidden md:inline text-[10px] text-gray-400 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">{r.url}</code>
                </Link>
              );
            })
          )}
        </div>
        <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span><kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded">↑↓</kbd> navigate · <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded">↵</kbd> select</span>
          <span><kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded">esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}
