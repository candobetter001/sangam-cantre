import { useEffect, useState } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";

interface Props {
  id: string;
  title: string;
  url: string;
  type: "publication" | "event" | "page";
}

export default function BookmarkButton({ id, title, url, type }: Props) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("sangam_bookmarks");
      const list = raw ? JSON.parse(raw) : [];
      setSaved(list.some((b: { id: string }) => b.id === id));
    } catch {}
  }, [id]);

  const toggle = () => {
    try {
      const raw = localStorage.getItem("sangam_bookmarks");
      const list = raw ? JSON.parse(raw) : [];
      if (saved) {
        const next = list.filter((b: { id: string }) => b.id !== id);
        localStorage.setItem("sangam_bookmarks", JSON.stringify(next));
      } else {
        list.push({ id, title, url, type, added: new Date().toISOString() });
        localStorage.setItem("sangam_bookmarks", JSON.stringify(list));
      }
      setSaved(!saved);
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={saved ? "Remove bookmark" : "Add bookmark"}
      className="p-1.5 text-gray-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
      title={saved ? "Remove from bookmarks" : "Save to bookmarks"}
    >
      {saved ? <BookmarkCheck size={16} className="text-teal-600 dark:text-teal-300" /> : <Bookmark size={16} />}
    </button>
  );
}
