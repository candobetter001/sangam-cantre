import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  FileText,
  Users,
  Globe,
  BookOpen,
  Lightbulb,
  Target,
  Heart,
} from "lucide-react";
import AnimatedRiverBanner from "../components/AnimatedRiverBanner";
import ScrollReveal from "../components/ScrollReveal";
import StatsSection from "../components/StatsSection";

const Home = () => {
  const focusAreas = [
    {
      icon: Globe,
      title: "Traditional Arts and Cultural Heritage Preservation",
      desc: "Examining policies for safeguarding tangible and intangible cultural heritage while enabling contemporary adaptation.",
    },
    {
      icon: FileText,
      title: "Digital Heritage and Technology Integration",
      desc: "Evaluating digital preservation initiatives and developing policy frameworks for emerging technologies in cultural heritage.",
    },
    {
      icon: Users,
      title: "Cultural Diplomacy and Soft Power",
      desc: "Analyzing how nations leverage cultural assets to build international relationships and project influence.",
    },
    {
      icon: Target,
      title: "Creative Industries and Economic Development",
      desc: "Investigating the economic dimensions of cultural policy and creative industries as drivers of economic growth.",
    },
    {
      icon: BookOpen,
      title: "Cultural Impact Assessment and Policy Evaluation",
      desc: "Developing frameworks for measuring social, economic, and cultural impacts of policy interventions.",
    },
    {
      icon: Heart,
      title: "Community Cultural Development and Participation",
      desc: "Examining participatory cultural development models and community engagement strategies.",
    },
  ];

  const upcomingEvents = [
    {
      title: "Round Table on Culture and Policy",
      date: "March 21, 2026",
      time: "10:00 AM - 4:00 PM",
      venue: "India Habitat Centre, New Delhi",
    },
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-gray-950">
      {/* Animated River Hero */}
      <AnimatedRiverBanner />

      {/* Hero Text Section */}
      <section className="bg-white dark:bg-gray-900 border-b-2 border-teal-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollReveal>
              <h1 className="newspaper-heading text-4xl md:text-6xl text-navy-900 dark:text-teal-100 mb-6 tracking-tight">
                SANGAM CENTRE FOR
                <br />
                <span className="text-teal-600 dark:text-teal-400">
                  CULTURE AND PUBLIC POLICY
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex items-center justify-center space-x-4 my-8">
                <div className="h-px bg-teal-400 flex-1 max-w-32"></div>
                <span className="newspaper-accent text-sm text-teal-600 dark:text-teal-300 px-4">
                  WHERE HERITAGE INSPIRES PROGRESS
                </span>
                <div className="h-px bg-teal-400 flex-1 max-w-32"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="max-w-5xl mx-auto mb-12">
                <p className="newspaper-body text-lg text-navy-800 dark:text-gray-300 leading-relaxed mb-6">
                  In the rapidly evolving landscape of India's cultural and
                  policy-making environment, the need for specialized think tank
                  that bridges the gap between cultural heritage and contemporary
                  governance has never been more critical.
                </p>
                <p className="newspaper-body text-lg text-navy-800 dark:text-gray-300 leading-relaxed mb-6">
                  The Sangam Centre for Culture and Public Policy—a space where
                  the richness of Indian traditions meets the dynamism of
                  contemporary policies. At Sangam, we believe that cultural
                  vitality and thoughtful policy are the twin pillars of a
                  flourishing society.
                </p>
                <p className="newspaper-body text-lg text-navy-800 dark:text-gray-300 leading-relaxed">
                  The think tank sector in India has experienced significant
                  growth, with the country now hosting 509 think tanks as of 2018,
                  making it the second-largest concentration globally. Within
                  this context, cultural policy research remains an underexplored
                  yet crucial domain that requires dedicated institutional focus.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats counters */}
      <StatsSection />

      {/* Vision and Mission */}
      <section className="py-16 bg-teal-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-teal-200 dark:border-teal-900 card-tilt h-full">
                <h2 className="newspaper-heading text-3xl text-navy-900 dark:text-teal-100 mb-6 uppercase tracking-wide">
                  Vision Statement
                </h2>
                <p className="newspaper-body text-navy-700 dark:text-gray-300 leading-relaxed">
                  To foster a vibrant India where cultural heritage and
                  contemporary policy-making converge to create inclusive,
                  sustainable, and innovative solutions that honor our diverse
                  traditions while addressing the challenges of the 21st century.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-teal-200 dark:border-teal-900 card-tilt h-full">
                <h2 className="newspaper-heading text-3xl text-navy-900 dark:text-teal-100 mb-6 uppercase tracking-wide">
                  Our Mission
                </h2>
                <p className="newspaper-body text-navy-700 dark:text-gray-300 leading-relaxed">
                  Our mission is to conduct rigorous, interdisciplinary research
                  at the intersection of culture and public policy, providing
                  evidence-based insights that inform decision-makers, strengthen
                  cultural institutions, and promote inclusive development
                  approaches that celebrate India's unity in diversity.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="newspaper-heading text-4xl text-navy-900 dark:text-teal-100 mb-4 uppercase tracking-wide heading-underline revealed">
                Focus Areas
              </h2>
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="h-px bg-teal-400 flex-1 max-w-24"></div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <div className="bg-white dark:bg-gray-800 p-6 border border-teal-200 dark:border-teal-900 rounded-lg hover:border-teal-400 hover:shadow-md transition-all duration-200 group card-tilt h-full">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-200 rounded-full mb-4 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <area.icon size={28} />
                    </div>
                    <h3 className="newspaper-heading text-lg text-navy-900 dark:text-teal-100 mb-3 leading-tight">
                      {area.title}
                    </h3>
                    <p className="newspaper-body text-navy-700 dark:text-gray-300 text-sm leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="text-center mt-12">
              <Link
                to="/focus-areas"
                className="border-2 border-teal-600 text-teal-700 dark:text-teal-300 px-8 py-3 rounded font-medium hover:bg-teal-600 hover:text-white transition-all duration-200 uppercase tracking-wide text-sm inline-flex items-center group"
              >
                Explore All Focus Areas
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-50/30 dark:bg-gray-900">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto">
            <h2 className="newspaper-heading text-2xl sm:text-3xl text-navy-800 dark:text-teal-100 tracking-wider uppercase mb-4 text-center">
              Our Approach
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-teal-400 flex-1 max-w-xs"></div>
            </div>
            <p className="newspaper-body text-navy-800 dark:text-gray-300 text-base leading-relaxed text-center">
              At Sangam, we see culture as a living force—one that reflects,
              challenges, and enriches society. The principles of collaboration,
              respect for diversity, and a relentless pursuit of excellence guide
              our work. We draw inspiration from India's best practices in
              existing within the society and further adapting them to current
              policy discourse to create a lasting impact.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="newspaper-heading text-4xl text-navy-900 dark:text-teal-100 mb-4 uppercase tracking-wide heading-underline revealed">
                What We Offer
              </h2>
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="h-px bg-teal-400 flex-1 max-w-24"></div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Calendar, title: "Curated Events & Dialogues", desc: "Experience thought-provoking forums, exhibitions, and performances that celebrate diversity and stimulate meaningful conversation." },
              { icon: Lightbulb, title: "Research & Policy Innovation", desc: "We advance scholarship and policy solutions that recognise the power of cultural assets to drive social and economic change." },
              { icon: Users, title: "Community Collaboration", desc: "Through partnerships and grassroots initiatives, we amplify voices, nurture creative expression, and build bridges across communities." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-teal-50 dark:bg-gray-800 p-8 rounded-lg border border-teal-200 dark:border-teal-900 hover:shadow-md transition-all duration-200 card-tilt h-full">
                  <div className="text-center">
                    <item.icon className="w-12 h-12 text-teal-600 dark:text-teal-300 mx-auto mb-4" />
                    <h3 className="newspaper-heading text-xl text-navy-900 dark:text-teal-100 mb-4">
                      {item.title}
                    </h3>
                    <p className="newspaper-body text-navy-700 dark:text-gray-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 border-t border-teal-200 dark:border-teal-900 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="newspaper-heading text-4xl text-navy-900 dark:text-teal-100 mb-4 uppercase tracking-wide heading-underline revealed">
                Upcoming Events
              </h2>
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="h-px bg-teal-400 flex-1 max-w-24"></div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <ScrollReveal key={index} direction="scale">
                <div className="bg-teal-100 dark:bg-teal-900 p-6 rounded-lg border-l-4 border-teal-600 hover:shadow-md transition-all duration-200 card-tilt">
                  <h3 className="newspaper-heading text-xl text-navy-900 dark:text-teal-100 mb-3 leading-tight">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-navy-700 dark:text-teal-200 newspaper-body text-sm">
                    <p className="flex items-center">
                      <Calendar className="mr-3 flex-shrink-0 text-teal-500" size={16} />
                      <strong>{event.date}</strong>
                      <span className="mx-2">•</span> {event.time}
                    </p>
                    <p className="flex items-center">
                      <Globe className="mr-3 flex-shrink-0 text-teal-500" size={16} />
                      {event.venue}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="text-center mt-12">
              <Link
                to="/events"
                className="border-2 border-teal-600 text-teal-700 dark:text-teal-300 px-8 py-3 rounded font-medium hover:bg-teal-600 hover:text-white transition-all duration-200 uppercase tracking-wide text-sm inline-flex items-center group"
              >
                View All Events
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Join the Conversation */}
      <section className="py-16 border-t border-teal-200 dark:border-teal-900 bg-gradient-to-br from-teal-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="newspaper-heading text-4xl text-navy-900 dark:text-teal-100 mb-6 uppercase tracking-wide">
              Join the Conversation
            </h2>
            <p className="newspaper-body text-lg text-navy-700 dark:text-gray-300 leading-relaxed mb-8">
              We invite thinkers, artists, policymakers, and youth to engage with
              us through events, research, and creative projects. Together, we can
              shape a society where culture and policy are not just parallel
              pursuits, but partners in progress.
            </p>
            <Link
              to="/work-with-us"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded font-medium transition-all duration-200 uppercase tracking-wide text-sm inline-flex items-center group animate-glow-pulse"
            >
              Work With Us
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
