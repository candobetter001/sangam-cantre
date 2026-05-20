import { useState } from "react";
import { Quote, X, Copy, Check } from "lucide-react";

interface Publication {
  title: string;
  authors: string;
  year: string | number;
  type?: string;
  url?: string;
}

export default function CitationModal({ pub }: { pub: Publication }) {
  const [open, setOpen] = useState(false);
  const [format, setFormat] = useState<"apa" | "mla" | "chicago" | "bibtex">("apa");
  const [copied, setCopied] = useState(false);

  const authors = pub.authors;
  const year = pub.year;
  const title = pub.title;
  const url = pub.url || (typeof window !== "undefined" ? window.location.href : "");

  const formats = {
    apa: `${authors} (${year}). ${title}. Sangam Centre for Culture and Public Policy. ${url}`,
    mla: `${authors} "${title}." Sangam Centre for Culture and Public Policy, ${year}, ${url}.`,
    chicago: `${authors} "${title}." Sangam Centre for Culture and Public Policy. ${year}. ${url}.`,
    bibtex: `@article{sangam${year},
  author = {${authors}},
  title = {${title}},
  year = {${year}},
  publisher = {Sangam Centre for Culture and Public Policy},
  url = {${url}}
}`,
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(formats[format]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1 px-3 py-1 text-xs border border-teal-300 text-teal-700 dark:text-teal-200 hover:bg-teal-50 dark:hover:bg-teal-900 rounded transition-colors"
        aria-label="Cite this publication"
      >
        <Quote size={12} /> Cite
      </button>

      {open && (
        <div className="fixed inset-0 z-[85] flex items-center justify-center px-4 animate-fade-in" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div onClick={(e) => e.stopPropagation()} className="relative bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-lg w-full overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">Cite this publication</h3>
              <button onClick={() => setOpen(false)} aria-label="Close" className="text-gray-400 hover:text-gray-700">
                <X size={18} />
              </button>
            </div>
            <div className="p-4">
              <div className="flex gap-1 mb-3 border-b border-gray-200 dark:border-gray-700">
                {(["apa", "mla", "chicago", "bibtex"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFormat(f)}
                    className={`px-3 py-2 text-xs uppercase tracking-wide transition-colors ${format === f ? "border-b-2 border-teal-600 text-teal-700 dark:text-teal-200" : "text-gray-500 hover:text-gray-900 dark:hover:text-white"}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <pre className="bg-gray-50 dark:bg-gray-900 p-3 rounded text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-words max-h-48 overflow-y-auto">
                {formats[format]}
              </pre>
              <button
                onClick={copy}
                className="mt-3 w-full px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm rounded flex items-center justify-center gap-2"
              >
                {copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy citation</>}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
