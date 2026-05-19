import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Video,
  ArrowRight,
  Send,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const FORMSPREE_ID = "YOUR_FORM_ID";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [regStatus, setRegStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [regForm, setRegForm] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  const handleRegChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRegForm({ ...regForm, [e.target.name]: e.target.value });

  const handleRegSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...regForm, _subject: "Event Registration Interest" }),
      });
      if (res.ok) { setRegStatus("success"); setRegForm({ name: "", email: "", phone: "" }); }
      else setRegStatus("error");
    } catch { setRegStatus("error"); }
  };

  const upcomingEvents: any[] = [];

  const EventImages = [
    { id: 1, image: "/events/event1.png" },
    { id: 2, image: "/events/event2.jpeg" },
    { id: 3, image: "/events/event3.jpeg" },
    { id: 4, image: "/events/event4.jpeg" },
    { id: 5, image: "/events/event5.jpeg" },
    { id: 6, image: "/events/event6.jpeg" },
    { id: 7, image: "/events/event7.jpg" },
    { id: 8, image: "/events/event8.jpg" },
    { id: 9, image: "/events/event9.png" },
    { id: 10, image: "/events/event10.png" },
    { id: 11, image: "/events/event11.png" },
    { id: 13, image: "/events/event13.png" },
    { id: 15, image: "/events/event15.jpeg" },
    { id: 16, image: "/events/event16.jpeg" },
    { id: 17, image: "/events/event17.jpeg" },
    { id: 19, image: "/events/event19.jpeg" },
  ];

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Carousel */}
      <div className="relative">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })]}
          setApi={setApi}
          className="w-full h-auto"
        >
          <CarouselContent>
            {EventImages.map((event, index) => (
              <CarouselItem key={index}>
                <div className="relative">
                  <img src={event.image} alt={`Sangam Centre Event ${index + 1}`} className="w-full h-[550px] object-cover rounded-lg" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-0 shadow-lg" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-0 shadow-lg" />
        </Carousel>
      </div>

      {/* Events Section */}
      {activeTab === "upcoming" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold newspaper-heading mb-4">Events</h2>
              <p className="text-xl newspaper-body max-w-3xl mx-auto">Policy dialogues, research presentations, and cultural discussions.</p>
            </div>

            {/* Featured Event */}
            <div className="bg-teal-50 dark:bg-gray-800 border-gray-200 rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full mr-3 bg-blue-100 text-blue-800">Latest Event</span>
                    </div>
                    <h3 className="text-2xl font-bold newspaper-heading mb-4">Reimagining Indian Governance Through Cultural and Technological Lenses</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center newspaper-body"><Calendar className="mr-2 flex-shrink-0" size={16} /><span>June 6-7, 2024</span></div>
                      <div className="flex items-center newspaper-body"><MapPin className="mr-2 flex-shrink-0" size={16} /><span>SJMSoM, IIT Bombay</span></div>
                    </div>
                    <a href="/events/SF Conference Updated3.pdf" download
                      className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors">
                      <ArrowRight className="mr-2" size={16} /> Download Brochure
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic upcoming events */}
            {upcomingEvents.length > 0 && (
              <div className="space-y-8">
                {upcomingEvents.map((event: any) => (
                  <div key={event.id} className="bg-teal-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-8">
                    <h3 className="text-2xl font-bold newspaper-heading mb-4">{event.title}</h3>
                  </div>
                ))}
              </div>
            )}

            {/* Register Interest */}
            <div className="mt-16 bg-teal-700 rounded-xl p-8 text-white">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Register Your Interest</h3>
                <p className="text-teal-100 mb-8">Stay informed about upcoming events. Leave your details and we'll notify you when new events are announced.</p>

                {regStatus === "success" ? (
                  <div className="bg-white/10 rounded-lg p-6">
                    <p className="text-white font-semibold text-lg">Thank you! We'll be in touch.</p>
                    <button onClick={() => setRegStatus("idle")} className="mt-3 text-teal-200 hover:text-white text-sm underline">Register another person</button>
                  </div>
                ) : (
                  <form onSubmit={handleRegSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                    <input name="name" type="text" required placeholder="Your Name" value={regForm.name} onChange={handleRegChange}
                      className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-300 outline-none" />
                    <input name="email" type="email" required placeholder="Email Address" value={regForm.email} onChange={handleRegChange}
                      className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-300 outline-none" />
                    <button type="submit" disabled={regStatus === "sending"}
                      className="bg-white text-teal-700 px-6 py-3 rounded-lg font-bold hover:bg-teal-50 transition-colors inline-flex items-center gap-2 disabled:opacity-60">
                      <Send size={16} /> {regStatus === "sending" ? "..." : "Notify Me"}
                    </button>
                  </form>
                )}
                {regStatus === "error" && <p className="text-red-300 text-sm mt-2">Error — email suryaprakash@sangamcentre.org directly.</p>}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Events;
