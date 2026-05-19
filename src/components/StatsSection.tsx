import { BookOpen, Users, Calendar, Award } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { icon: BookOpen, end: 6, suffix: "+", label: "Publications" },
  { icon: Calendar, end: 12, suffix: "+", label: "Events Hosted" },
  { icon: Users, end: 7, suffix: "", label: "Researchers" },
  { icon: Award, end: 5, suffix: "+", label: "Recognitions" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-teal-700 via-teal-600 to-indigo-800 text-white relative overflow-hidden">
      {/* decorative pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 60% 70%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px, 40px 40px",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 uppercase tracking-wide">
          Our Journey In Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map(({ icon: Icon, end, suffix, label }, i) => (
            <div
              key={label}
              className="text-center group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm mb-3 group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
                <Icon size={28} className="text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-1">
                <AnimatedCounter end={end} suffix={suffix} duration={2000} />
              </div>
              <p className="text-teal-100 uppercase tracking-wider text-xs md:text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
