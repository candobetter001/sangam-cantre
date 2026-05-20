import { useState } from "react";
import { Link as LinkIcon, Mail, Check } from "lucide-react";
import { FaTwitter, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa";

interface Props {
  title?: string;
  url?: string;
  text?: string;
  compact?: boolean;
}

export default function ShareButtons({ title, url, text, compact }: Props) {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const shareTitle = title || (typeof document !== "undefined" ? document.title : "Sangam Centre");
  const shareText = text || shareTitle;

  const links = [
    { name: "Twitter", icon: FaTwitter, color: "text-sky-500", href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}` },
    { name: "LinkedIn", icon: FaLinkedin, color: "text-blue-600", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
    { name: "WhatsApp", icon: FaWhatsapp, color: "text-green-500", href: `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}` },
    { name: "Facebook", icon: FaFacebook, color: "text-blue-700", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { name: "Email", icon: Mail, color: "text-gray-500", href: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareText + "\n\n" + shareUrl)}` },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className={`flex items-center gap-2 ${compact ? "" : "p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"}`}>
      {!compact && <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mr-1">Share:</span>}
      {links.map(({ name, icon: Icon, color, href }) => (
        <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${name}`} className={`p-1.5 rounded hover:bg-white dark:hover:bg-gray-700 transition-colors ${color}`}>
          <Icon size={16} />
        </a>
      ))}
      <button onClick={copyLink} aria-label="Copy link" className="p-1.5 rounded hover:bg-white dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors">
        {copied ? <Check size={16} className="text-green-500" /> : <LinkIcon size={16} />}
      </button>
    </div>
  );
}
