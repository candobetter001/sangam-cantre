import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const PARTICLE_COUNT = 35;

export default function AnimatedRiverBanner() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight * 0.7, behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-teal-900"
    >
      {/* RIVER IMAGE WITH PARALLAX + ZOOM */}
      <div
        className="absolute inset-0 transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.1)` }}
      >
        <img
          src="/header-banner.jpeg"
          alt="Sangam — Confluence of rivers"
          className="w-full h-full object-cover"
        />
      </div>

      {/* DARK GRADIENT OVERLAY for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-teal-900/60 pointer-events-none" />

      {/* HORIZONTAL SHIMMER (light passing over water) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 6s linear infinite",
        }}
      />

      {/* FLOATING BUBBLES / PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted &&
          Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
            const size = 2 + Math.random() * 5;
            const duration = 12 + Math.random() * 18;
            const delay = Math.random() * 20;
            return (
              <span
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  animationDuration: `${duration}s`,
                  animationDelay: `-${delay}s`,
                }}
              />
            );
          })}
      </div>

      {/* ANIMATED WAVES at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-[200%] h-24 md:h-32 wave-layer-1"
        >
          <path
            fill="rgba(13, 148, 136, 0.35)"
            d="M0,160 C240,260,480,80,720,160 C960,240,1200,80,1440,160 L1440,320 L0,320 Z"
          />
        </svg>
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-[200%] h-20 md:h-28 wave-layer-2 -mt-20 md:-mt-24"
        >
          <path
            fill="rgba(13, 148, 136, 0.5)"
            d="M0,180 C320,120,640,260,960,180 C1200,120,1320,260,1440,180 L1440,320 L0,320 Z"
          />
        </svg>
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-[200%] h-16 md:h-24 wave-layer-3 -mt-16 md:-mt-20"
        >
          <path
            fill="rgba(30, 58, 138, 0.55)"
            d="M0,200 C360,160,720,280,1080,200 C1260,160,1380,260,1440,200 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      {/* RIPPLE CIRCLES on the water */}
      <div className="absolute bottom-20 left-1/4 pointer-events-none">
        <div className="w-4 h-4 border-2 border-white/40 rounded-full ripple" />
      </div>
      <div className="absolute bottom-32 right-1/3 pointer-events-none">
        <div
          className="w-3 h-3 border-2 border-white/30 rounded-full ripple"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
      <div className="absolute bottom-24 left-2/3 pointer-events-none">
        <div
          className="w-5 h-5 border-2 border-teal-200/40 rounded-full ripple"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* HERO TEXT OVERLAY */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 z-10">
        <div className="text-center max-w-4xl animate-fade-down">
          <p className="text-teal-100 text-xs md:text-sm uppercase tracking-[0.4em] mb-3 md:mb-4 drop-shadow-md">
            Confluence · सङ्गम
          </p>
          <h1 className="font-serif font-bold text-white text-4xl md:text-7xl leading-tight drop-shadow-2xl">
            Where Heritage
            <br />
            <span className="gradient-text-light italic">Meets Progress</span>
          </h1>
          <div className="flex items-center justify-center my-6 md:my-8">
            <div className="h-px bg-teal-200/60 w-16 md:w-24" />
            <span className="mx-3 text-teal-100 text-2xl">◆</span>
            <div className="h-px bg-teal-200/60 w-16 md:w-24" />
          </div>
          <p className="text-teal-50 text-base md:text-lg max-w-2xl mx-auto drop-shadow-lg">
            A research and policy initiative at the confluence of
            India's living heritage and contemporary governance.
          </p>
        </div>
      </div>

      {/* SCROLL-DOWN BUTTON */}
      <button
        onClick={handleScrollDown}
        aria-label="Scroll to content"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/90 hover:text-white transition-colors group"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase tracking-widest opacity-70 group-hover:opacity-100">
            Scroll
          </span>
          <ChevronDown size={28} className="animate-bounce-arrow" />
        </div>
      </button>
    </div>
  );
}
