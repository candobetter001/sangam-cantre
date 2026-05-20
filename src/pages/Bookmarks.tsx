import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bookmark, Trash2 } from "lucide-react";

interface Bookmark {
  id: string;
  title: string;
  url: string;
  type: "publication" | "event" | "page";
  added: string;
}

export default function Bookmarks() {
  const [items, setItems] = useState<Bookmark[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("sangam_bookmarks");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  const remove = (id: string) => {
    const updated = items.filter((b) => b.id !== id);
    setItems(updated);
    try {
      localStorage.setItem("sangam_bookmarks", JSON.stringify(updated));
    } catch {}
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <Bookmark className="mx-auto text-teal-600 dark:text-teal-300 mb-3" size={36} />
          <h1 className="text-4xl font-serif font-bold text-[#1e3a8a] dark:text-teal-100 mb-2">
            Your Bookmarks
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Publications and pages you've saved for later. Stored locally — only you can see this list.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-10 text-center border border-gray-200 dark:border-gray-700">
            <Bookmark size={40} className="mx-auto text-gray-300 dark:text-gray-600 mb-3" />
            <p className="text-gray-600 dark:text-gray-400 mb-4">No bookmarks yet.</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Click the bookmark icon on any publication or event to save it here.
            </p>
            <Link to="/publications" className="inline-block mt-4 text-teal-600 dark:text-teal-300 hover:underline">
              Browse Publications →
            </Link>
          </div>
        ) : (
          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex items-center justify-between gap-4"
              >
                <div className="flex-1 min-w-0">
                  <Link to={item.url} className="text-gray-900 dark:text-white font-medium hover:text-teal-600 dark:hover:text-teal-300">
                    {item.title}
                  </Link>
                  <div className="flex gap-3 text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span className="capitalize">{item.type}</span>
                    <span>·</span>
                    <span>Saved {new Date(item.added).toLocaleDateString()}</span>
                  </div>
                </div>
                <button
                  onClick={() => remove(item.id)}
                  aria-label="Remove bookmark"
                  className="shrink-0 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900 rounded transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
