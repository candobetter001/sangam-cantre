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

  const advisors = [
    {
      name: "Dr. C Umamaheswara Rao",
      title: "Former Secretary to Chief Minister of AP, IAS retd.",
      subtitle: "Chairman-Samskruti Foundation",
    },
    {
      name: "Prof. H. Hemnath Rao",
      title: "Former Director, Development Management Institute, Patna",
      subtitle: "Dean ASCI-HYD",
    },
    {
      name: "Dr. U.M Chaudhari",
      title: "Former Addl. G.M, BHEL R&D Principal (AEC)",
      subtitle: "Dean Aurora Group Institutions",
    },
    {
      name: "Dr. W.G. Prasanna Kumar",
      title: "Convenor, Sanskruti Foundation",
      subtitle: "",
    },
    {
      name: "Sri T. Rambabu",
      title: "MD of UR Ground Engineering Pvt. Ltd.",
      subtitle: "Co-convenor, Samskruti Foundation",
    },
    {
      name: " Shri Subrat Tripathy",
      title: "Public Policy Head",
      subtitle: "",
    },
    {
      name: "Sri K.S. Rama Murthy",
      title: "Social Activist",
      subtitle: "",
    },
  ];

  const teamMembers = [
    { name: "Divya Rathore", role: "Consultant, Delhi Head" },
    { name: "Surya", role: "" },
    { name: "Ankita", role: "" },
    { name: "Saiyami", role: "" },
    { name: "Abhishek", role: "" },
    { name: "Rana", role: "" },
  ];

  const publications = [
    {
      title: "Policy Briefs",
      description:
        "Two-page analyses of current policy topics, designed for policymakers and practitioners who need quick access to research findings and recommendations.",
    },
    {
      title: "Research Reports",
      description:
        "Comprehensive studies of specific cultural policy topics, providing detailed analysis, methodology, findings, and recommendations.",
    },
    {
      title: "Working Papers",
      description:
        "Preliminary research findings and draft analyses that contribute to ongoing policy debates and academic discourse.",
    },
    {
      title: "Policy Guides",
      description:
        "Practical guides for implementing cultural policies and programs, providing step-by-step guidance for practitioners and administrators.",
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
    <div className="min-h-screen bg-background">
      <img
        src="/header-banner.jpeg"
        alt="Decorative banner"
        className="w-full max-w-8xl h-[400px] object-cover"
      />
      {/* Hero Section */}
      <section className="bg-white border-b-2 border-teal-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-between items-center text-xs text-teal-600 mb-8 border-b border-teal-200 pb-3">
              {/* <span className="newspaper-body">NEW DELHI, INDIA</span>
              <span className="newspaper-body">AN INITIATIVE OF SAMSKRUTI FOUNDATION</span> */}
              {/* <span className="newspaper-body">{new Date().toLocaleDateString('en-U
              S', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span> */}
            </div>

            <h1 className="newspaper-heading text-4xl md:text-6xl text-navy-900 mb-6 tracking-tight">
              SANGAM CENTRE FOR
              <br />
              <span className="text-teal-600">CULTURE AND PUBLIC POLICY</span>
            </h1>

            <div className="flex items-center justify-center space-x-4 my-8">
              <div className="h-px bg-teal-400 flex-1 max-w-32"></div>
              <span className="newspaper-accent text-sm text-teal-600 px-4">
                WHERE HERITAGE INSPIRES PROGRESS
              </span>
              <div className="h-px bg-teal-400 flex-1 max-w-32"></div>
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="newspaper-body text-lg text-navy-800 leading-relaxed mb-6">
                In the rapidly evolving landscape of India's cultural and
                policy-making environment, the need for specialized think tank
                that bridges the gap between cultural heritage and contemporary
                governance has never been more critical.
              </p>
              <p className="newspaper-body text-lg text-navy-800 leading-relaxed mb-6">
                The Sangam Centre for Culture and Public Policy—a space where
                the richness of Indian traditions meets the dynamism of
                contemporary policies. At Sangam, we believe that cultural
                vitality and thoughtful policy are the twin pillars of a
                flourishing society.
              </p>
              <p className="newspaper-body text-lg text-navy-800 leading-relaxed">
                The think tank sector in India has experienced significant
                growth, with the country now hosting 509 think tanks as of 2018,
                making it the second-largest concentration globally after the
                United States. This proliferation reflects India's growing
                intellectual capacity and the increasing complexity of policy
                challenges facing the nation. Within this context, cultural
                policy research remains an underexplored yet crucial domain that
                requires dedicated institutional focus. The intersection of
                culture and public policy in India presents unique opportunities
                and challenges. On one hand, India's diverse cultural heritage
                provides immense soft power potential, with initiatives and
                various schemes promoting traditional arts, digital preservation
                programs, and cultural diplomacy efforts. On the other hand,
                policy frameworks often struggle to adequately address the
                nuanced needs of cultural preservation, promotion, and
                integration with contemporary development goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Vision and Mission */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-teal-200">
              <h2 className="newspaper-heading text-3xl text-navy-900 mb-6 uppercase tracking-wide">
                Vision Statement
              </h2>
              <p className="newspaper-body text-navy-700 leading-relaxed">
                To foster a vibrant India where cultural heritage and
                contemporary policy-making converge to create inclusive,
                sustainable, and innovative solutions that honor our diverse
                traditions while addressing the challenges of the 21st century.
                {/* This vision draws inspiration from successful think tank models
                globally while addressing India's specific cultural and policy
                landscape. The emphasis on convergence reflects the need to move
                beyond traditional silos that separate cultural preservation
                from policy development, creating integrated approaches that
                recognize culture as both a driver and beneficiary of effective
                governance. */}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-teal-200">
              <h2 className="newspaper-heading text-3xl text-navy-900 mb-6 uppercase tracking-wide">
                Our Mission
              </h2>
              <p className="newspaper-body text-navy-700 leading-relaxed">
                Our mission is to conduct rigorous, interdisciplinary research
                at the intersection of culture and public policy, providing
                evidence-based insights that inform decision-makers, strengthen
                cultural institutions, and promote inclusive development
                approaches that celebrate India's unity in diversity.
                {/* The
                mission statement emphasizes several key principles that align
                with successful think tank operations: rigorous research
                methodologies, interdisciplinary approaches, evidence-based
                policy recommendations, and stakeholder engagement. These
                principles are particularly relevant in the Indian context,
                where policy analysis has historically been dominated by
                economic and administrative perspectives, often overlooking
                cultural dimensions. To explore the intersection of rich Indian
                culture and public policies, fostering dialogue, research, and
                action that elevate both heritage and innovation. We champion
                inclusive engagement, cultural equity, and transformative ideas
                that shape a more just and vibrant future. */}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Focus Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="newspaper-heading text-4xl text-navy-900 mb-4 uppercase tracking-wide">
              Focus Areas
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-8">
              {/* <div className="h-px bg-teal-400 flex-1 max-w-24"></div>
              <span className="newspaper-accent text-sm text-teal-600">
                AREAS OF EXPERTISE
              </span> */}
              <div className="h-px bg-teal-400 flex-1 max-w-24"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-6 border border-teal-200 rounded-lg hover:border-teal-400 hover:shadow-md transition-all duration-200 group"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-full mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <area.icon size={28} />
                  </div>
                  <h3 className="newspaper-heading text-lg text-navy-900 mb-3 leading-tight">
                    {area.title}
                  </h3>
                  <p className="newspaper-body text-navy-700 text-sm leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/focus-areas"
              className="border-2 border-teal-600 text-teal-700 px-8 py-3 rounded font-medium hover:bg-teal-600 hover:text-white transition-all duration-200 uppercase tracking-wide text-sm inline-flex items-center"
            >
              Explore All Focus Areas
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>
      {/* Our Approach  */}
      <section className="   py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="newspaper-heading text-2xl sm:text-3xl text-navy-800 tracking-wider uppercase mb-4 text-center">
            Our Approach
          </h2>

          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-teal-400 flex-1 max-w-xs"></div>
          </div>

          <p className="newspaper-body text-navy-800 text-base leading-relaxed text-center">
            At Sangam, we see culture as a living force—one that reflects,
            challenges, and enriches society. The principles of collaboration,
            respect for diversity, and a relentless pursuit of excellence guide
            our work. We draw inspiration from India’s best practices in
            existing within the society and further adapting them to current
            policy discourse to create a lasting impact.
          </p>
        </div>
      </section>
      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="newspaper-heading text-4xl text-navy-900 mb-4 uppercase tracking-wide">
              What We Offer
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px bg-teal-400 flex-1 max-w-24"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-teal-50 p-8 rounded-lg border border-teal-200 hover:shadow-md transition-all duration-200">
              <div className="text-center">
                <Calendar className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="newspaper-heading text-xl text-navy-900 mb-4">
                  Curated Events & Dialogues
                </h3>
                <p className="newspaper-body text-navy-700 text-sm leading-relaxed">
                  Experience thought-provoking forums, exhibitions, and
                  performances that celebrate diversity and stimulate meaningful
                  conversation.
                </p>
              </div>
            </div>

            <div className="bg-teal-50 p-8 rounded-lg border border-teal-200 hover:shadow-md transition-all duration-200">
              <div className="text-center">
                <Lightbulb className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="newspaper-heading text-xl text-navy-900 mb-4">
                  Research & Policy Innovation
                </h3>
                <p className="newspaper-body text-navy-700 text-sm leading-relaxed">
                  We advance scholarship and policy solutions that recognise the
                  power of cultural assets to drive social and economic change.
                </p>
              </div>
            </div>

            <div className="bg-teal-50 p-8 rounded-lg border border-teal-200 hover:shadow-md transition-all duration-200">
              <div className="text-center">
                <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="newspaper-heading text-xl text-navy-900 mb-4">
                  Community Collaboration
                </h3>
                <p className="newspaper-body text-navy-700 text-sm leading-relaxed">
                  Through partnerships and grassroots initiatives, we amplify
                  voices, nurture creative expression, and build bridges across
                  communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Advisors */}
      {/* <section className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="newspaper-heading text-4xl text-navy-900 mb-4 uppercase tracking-wide">
              Advisors
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px bg-teal-400 flex-1 max-w-24"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-teal-200 hover:shadow-md transition-all duration-200"
              >
                <h3 className="newspaper-heading text-xl text-navy-900 mb-2">
                  {advisor.name}
                </h3>
                <p className="newspaper-body text-teal-600 text-sm mb-1">
                  {advisor.title}
                </p>
                {advisor.subtitle && (
                  <p className="newspaper-body text-navy-600 text-sm">
                    {advisor.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Upcoming Events */}
      <section className="py-16 border-t border-teal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="newspaper-heading text-4xl text-navy-900 mb-4 uppercase tracking-wide">
              Upcoming Events
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px bg-teal-400 flex-1 max-w-24"></div>
              {/* <span className="newspaper-accent text-sm text-teal-600">
                CALENDAR
              </span>
              <div className="h-px bg-teal-400 flex-1 max-w-24"></div> */}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-teal-100 p-6 rounded-lg border-l-4 border-teal-600 hover:shadow-md transition-all duration-200"
              >
                <h3 className="newspaper-heading text-xl text-navy-900 mb-3 leading-tight">
                  {event.title}
                </h3>
                <div className="space-y-2 text-navy-700 newspaper-body text-sm">
                  <p className="flex items-center">
                    <Calendar
                      className="mr-3 flex-shrink-0 text-teal-500"
                      size={16}
                    />
                    <strong>{event.date}</strong>{" "}
                    <span className="mx-2">•</span> {event.time}
                  </p>
                  <p className="flex items-center">
                    <Globe
                      className="mr-3 flex-shrink-0 text-teal-500"
                      size={16}
                    />
                    {event.venue}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/events"
              className="border-2 border-teal-600 text-teal-700 px-8 py-3 rounded font-medium hover:bg-teal-600 hover:text-white transition-all duration-200 uppercase tracking-wide text-sm inline-flex items-center"
            >
              View All Events
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>
      {/* Join the Conversation*/}
      <section className="py-16  border-t border-teal-200 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="newspaper-heading text-4xl text-navy-900 mb-6 uppercase tracking-wide">
            Join the Conversation
          </h2>
          <p className="newspaper-body text-lg text-navy-700 leading-relaxed mb-8">
            We invite thinkers, artists, policymakers, and youth to engage with
            us through events, research, and creative projects. Together, we can
            shape a society where culture and policy are not just parallel
            pursuits, but partners in progress.
          </p>
          <Link
            to="/work-with-us"
            className="border-2 border-teal-600 text-teal-700 px-8 py-3 rounded font-medium hover:bg-teal-600 hover:text-white transition-all duration-200 uppercase tracking-wide text-sm inline-flex items-center"
          >
            Work With Us
            <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </section>
      {/* Publications */}
      {/* <section className="py-16 bg-white border-b-2 border-teal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="newspaper-heading text-4xl text-navy-900 mb-4 uppercase tracking-wide">
              Research Publications
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px bg-teal-400 flex-1 max-w-44"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.map((publication, index) => (
              <div
                key={index}
                className="bg-teal-50 p-6 border-l-4 border-teal-600 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <h3 className="newspaper-heading text-xl text-navy-900 mb-3">
                  {publication.title}
                </h3>
                <p className="newspaper-body text-navy-700 text-sm leading-relaxed">
                  {publication.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/publications"
              className="bg-teal-600 text-white px-8 py-3 rounded font-medium hover:bg-teal-700 transition-all duration-200 uppercase tracking-wide text-sm hover:shadow-lg inline-flex items-center"
            >
              View All Publications
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section> */}

      {/* Team */}
      {/* <section className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="newspaper-heading text-4xl text-navy-900 mb-4 uppercase tracking-wide">
              Our Team
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px bg-teal-400 flex-1 max-w-24"></div>
              <span className="newspaper-accent text-sm text-teal-600">
                RESEARCH TEAM
              </span>
              <div className="h-px bg-teal-400 flex-1 max-w-24"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-teal-200 text-center hover:shadow-md transition-all duration-200"
              >
                <h3 className="newspaper-heading text-lg text-navy-900 mb-2">
                  {member.name}
                </h3>
                {member.role && (
                  <p className="newspaper-body text-teal-600 text-sm">
                    {member.role}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
