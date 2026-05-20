import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  initialIndex?: number;
  open: boolean;
  onClose: () => void;
}

export default function ImageLightbox({ images, initialIndex = 0, open, onClose }: Props) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => { setIndex(initialIndex); }, [initialIndex]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
      else if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, images.length, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[95] bg-black/95 flex items-center justify-center animate-fade-in print-hidden" onClick={onClose}>
      <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 text-white/70 hover:text-white p-2">
        <X size={28} />
      </button>
      {images.length > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); setIndex((i) => (i - 1 + images.length) % images.length); }} aria-label="Previous" className="absolute left-4 text-white/70 hover:text-white p-2">
            <ChevronLeft size={36} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % images.length); }} aria-label="Next" className="absolute right-4 text-white/70 hover:text-white p-2">
            <ChevronRight size={36} />
          </button>
        </>
      )}
      <img src={images[index]} alt={`Image ${index + 1}`} onClick={(e) => e.stopPropagation()} className="max-h-[90vh] max-w-[90vw] object-contain" />
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
