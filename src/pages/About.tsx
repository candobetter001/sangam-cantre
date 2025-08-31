import React, { useState } from "react";
import {
  Atom,
  Gavel,
  Landmark,
  MessagesSquare,
  SearchCheck,
  RefreshCcw,
} from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";

const About = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };
  const team = [
    {
      name: "Shri Subrat Tripathy",
      position: "Advisor",
      expertise: "Public Policy and Research Division",
      image: "/Subrat Tripathy.jpg",
      description:
        "Subrat Tripathy is a purpose-driven entrepreneur, policy advocate, and socio-cultural leader with over 20 years of diverse experience spanning corporate leadership, technology entrepreneurship, youth mobilization, and culture-led public policy. As Managing Director of SRS Perfection India (OPC) Pvt. Ltd., he pioneered AI-enabled logistics and vehicle tracking systems across Eastern India. Formerly with Tata Motors and Castrol India, he led service marketing and retail operations across major mining and transport belts. Subrat has done Advanced Management in Public Policy from world’s one of the leading college Indian School of Business. He has been instrumental in shaping grassroots leadership and mentoring startups in health tech and water innovation. He heads the public policy division, focusing on traditional knowledge systems, temple economy, and rural development. Deeply rooted in Bharatiya cultural values, he blends technology, public policy, and youth leadership for nation-building, disaster response, and civic engagement.",
    },
    {
      name: "Dr. Nisha Pandey",
      position: "Advisor",
      expertise: "Public Policy",
      image: "/Nisha.jpg",
      description:
        "Presently, Dr. Pandey is associated as Professor and Advisor in the Department of Development Studies at Vivekanand Global University, Jaipur. Advisor, Research department,  in RMP, Keshav Shresti, Mumbai.Prior to this, Dr. Nisha Pandey was working as Director at Gujarat Institute of Development Research in Ahmadabad from July 23 to July 25 at  The Gujarat Institute of Development Research (GIDR) is a premier Institute. Dr. Pandey spearheaded institutional growth through active policy advocacy, the introduction of policy briefs, and the signing of more than ten Memoranda of Understanding (MoUs) with leading academic and research institutions, thereby expanding GIDR’s collaborative footprint.Dr. Pandey has been associated with the Principles of Responsible Management Education (PRME) network and has served as a Visiting Professor at Maharishi International University (USA) and INTI International University (Malaysia). She has also participated in international workshops, conferences, and lecture series in Taiwan, Bangladesh, Sri Lanka, and the USA, strengthening cross-cultural academic collaboration and knowledge exchange. Dr. Nisha Pandey is an international speaker on social entrepreneurship, sustainable development, and responsible management. She has delivered talks at the Academy of Management (USA), Dharma in Digital Age, Atlanta,  including PRME workshops.  In India, she has addressed international conferences at IIM Ranchi, EDII Ahmedabad, and served as a resource person with NIEPA, TISS, and Gujarat University, while leading workshops on women’s empowerment, entrepreneurship, and social innovation.",
    },
    {
      name: "Divya Rathore",
      position: "Consultant",
      expertise: "",
      image: "/divya.JPG",
      description:
        "Divya Singh Rathore is working as Senior Policy Specialist with Government of India. A public policy professional, published author, classical dancer and a columnist, she comes with a cross-cutting experience of Government, media, consulting and think tanks. She has worked with the Office of Minister of Culture, Tourism and North-East, Minister of Education on policy advisory, research, communications and stakeholder management. She did her Graduation in history from Lady Sri Ram College and Post Graduation from The Hindu College, University of Delhi. She did her schooling from Maharani Gayatri Devi School, Jaipur. Her passion lies in exploring treasures of history and cultural heritage. She believes that culture is a great enabler of unlocking human and social potential. She is also a published columnist with articles in The Hindu, India Today, Firstpost, News18, Daily Pioneer etc. She is also a TEDx speaker and loves interacting with young students. She has also been a state-level tennis player and a trained Bharatnatyam dancer. She nurses the dream of establishing a school for under privileged girls of Rajasthan.",
    },
    {
      name: "SuryaPrakash Kar",
      position: "Research Fellow",
      image: "/SuryaPrakash.png",
      description:
        "Suryaprakash Kar is a Manager – Academic Operations at Rishihood University, driving academic policy formation, curriculum development, and student affairs within the Registrar's Office. He holds a B.Tech in Agricultural Engineering, during which he founded a startup supporting Indian cultural artists—an initiative that earned him the Young Entrepreneurs Award (2020) in Delhi. He further advanced his education with an MBA in Urban Management & Governance from XIM University, Bhubaneswar (XIMB), where he led the Media and Public Relations Cell, organizing high-profile events like LinkedIn workshops, a media conclave, and TED talks. During his MBA, his capstone project analyzed FSI changes in Bhubaneswar’s residential real estate, crafting investment strategies for middle-income households. Suryaprakash’s professional journey spans both the public and private sectors. He interned at Colliers International and IBI Group India, contributed to the Aarogya Setu technical team during the COVID‑19 pandemic, and served as Monitoring Officer for the Mo School Abhiyan under the Department of School and Mass Education, Government of Odisha. At Rishihood University, he has been instrumental in drafting over a dozen academic guidelines, 50+ annexures, and automating multiple institutional processes—efforts that earned him the Rishihood Rachna Award (Chikirsha) in June.",
    },
    {
      name: "Saiyami Bhardwaj",
      position: "Research Scholar and guest faculty ,",
      expertise: "(University of Delhi)",
      image: "/Saiyami.png",
      description:
        "Saiyami Bhardwaj is an environmental researcher and educator whose work lies at the intersection of air pollution and public health, particularly examining the impact of airborne contaminants on human health outcomes in urban environments. She is currently pursuing a Ph.D. at the Department of Environmental Studies, University of Delhi. She collaborates with leading public health institutions, including AIIMS, to advance interdisciplinary research on environmental exposure and health impacts. In addition, she serves as a Guest Faculty member at Ramjas College, University of Delhi, where she teaches and mentors undergraduate students in Environmental Studies. With a strong commitment to evidence-based policy engagement, she has presented her work at multiple national and international conferences and actively contributes to dialogues linking environmental science with sustainable urban health strategies.",
    },
    {
      name: "Prof Rana Prithviraj Singh",
      position: "Visiting faculty - XIM University",
      image: "/Prithviraj.png",
      description:
        "Mr. Rana Prithviraj Singh is a distinguished professional in project management and capacity development, with extensive experience across diverse sectors. He has excelled in consulting and business development roles, serving both government organizations and the private sector. With a demonstrated history of conducting management and social science research, as well as policy studies for educational institutions and nonprofit organizations, Mr. Singh brings a unique blend of academic rigor and practical expertise. He holds an engineering degree and a postgraduate degree in business administration, with a strong focus on practice-research-based learning in macro- organizations. Additionally, he has submitted his Ph.D. in Municipal Governance & Policies. As a certified Chartered Manager specializing in applied strategy and leadership, he combines theoretical knowledge with hands-on strategic insight. His current research interests lie in analyzing governments’ organizational and institutional structures, exploring their evolution and development to enhance participatory planning and governance. Beyond his professional and academic pursuits, Mr. Singh is deeply engaged with a dynamic and multidisciplinary scientific community, fostering collaborations that enrich his research and consultancy work. Guided by the profound wisdom of the Bhagavad Gita, he embodies the philosophy of  योग : कर्मसु कौशलर््  – excellence in action through skillful execution.",
    },
    {
      name: "Ankita Gangdeb ",
      position: "Advocate, High Court of Odisha and Supreme court of India",
      image: "/Ankita.png",
      description:
        "Ankita Gangadeb is a dynamic and passionate advocate for environmental sustainability and animal welfare, inspiring a new generation of leaders with her tireless efforts. As a youth icon, she has participated in the prestigious Y20 India initiative, engaging in meaningful discussions on global citizenship and sustainable development. Her thought-provoking talks on environmental conservation at international conferences and seminars have garnered attention, showcasing her expertise and dedication. Ankita's work on the EcoSide project demonstrates her commitment to reducing humanity's ecological footprint. As a UNFCCC Ocean Activist, she champions the protection of marine ecosystems, advocating for sustainable practices that preserve the world's oceans for future generations. Through her multifaceted advocacy and leadership roles in the Bharatiya Janata Yuva Morcha (BJYM), Ankita Gangadeb continues to make a lasting impact, empowering others to join her in building a more sustainable and environmentally conscious world.",
    },
    {
      name: "Abhishek Bharti",
      position: "Research Scholar and guest faculty,",
      expertise: "(University of Delhi)",
      image: "/Abhishek.jpeg",
      description:
        "Abhishek Bharti is an environmental science professional with a focus on pollution dynamics and ecosystem health, particularly in aquatic environments. His doctoral research at the University of Delhi examines the environmental behavior and risks of plastic contaminants, developed in collaboration with Khalifa University for advanced methodological support. He teaches undergraduate Environmental Studies as a Guest Faculty member at Bharati College, University of Delhi. Abhishek’s professional journey includes research and field roles at institutions like the Centre for Science and Environment (CSE), Wildlife Institute of India (WII), and Centre for Youth (C4Y), where he contributed to ecological assessments, community-based sustainability programs, and urban sanitation planning. His work bridges scientific research and practical implementation, aiming to foster environmentally informed decision-making through education, outreach, and interdisciplinary collaboration.",
    },
  ];

  return (
    <div className="bg-white">
      <OptimizedImage
        src="/About.jpg"
        alt="Decorative banner"
        className="w-full max-w-8xl h-[400px] object-cover"
        loading="eager"
      />
      {/* Hero Section */}
      {/* <section className="bg-white text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="newspaper-body text-xl md:text-2xl  max-w-3xl mx-auto leading-relaxed">
              Philosophy of Sangam Centre for Culture and Public Policy
            </p>
          </div>
        </div>
      </section> */}

      {/* Mission & Vision */}
      <section className="py-16  newspaper-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold newpaper-body mb-6">
                The Sangam Philosophy: Confluence as Core Principle
              </h2>
              <p className="text-lg  mb-6 leading-relaxed">
                The philosophy of the Sangam Centre for Culture and Public
                Policy should be anchored in the profound meaning of "Sangam" -
                confluence - which represents the sacred meeting point where
                diverse streams unite to create something greater than their
                individual parts. Drawing from the rich tradition of the ancient
                Tamil Sangams, which were assemblies of learned people dedicated
                to the flourishing of literature, culture, and wisdom, the
                centre's philosophy should embrace the concept of intellectual
                and cultural confluence as its foundational principle.
              </p>
              <p className="text-lg   leading-relaxed">
                Our interdisciplinary approach combines rigorous analytical
                frameworks with ground-level insights, fostering innovative
                solutions that are both theoretically sound and practically
                viable.
              </p>
            </div>
            <div className=" p-8 rounded-lg bg-teal-50 ">
              <h3 className="text-2xl font-bold newpaper-body mb-4">
                Our Vision
              </h3>
              <p className="text-lg   leading-relaxed ">
                To be India's leading policy think tank, recognized for our
                contribution to informed public discourse and evidence-based
                policymaking. We envision a future where policy decisions are
                guided by rigorous research, inclusive dialogue, and a deep
                understanding of India's diverse socio-economic landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold newpaper-body mb-4">
              Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Atom,
                title: "Integrative Wisdom",
                description:
                  "The centre's philosophy is grounded in the principle of integrative wisdom, which recognizes that sustainable cultural policy requires the harmonious blending of diverse knowledge systems.",
              },
              {
                icon: Gavel,
                title: "Governance",
                description:
                  "Drawing inspiration from India's civilizational heritage, the philosophy should incorporate the concept of dharmic governance - an approach that balances rights and responsibilities, individual aspirations and collective welfare. ",
              },
              {
                icon: Landmark,
                title: "Civilizational Continuity",
                description:
                  "The centre's philosophy should embrace the principle of civilizational continuity, which recognizes culture as both a bridge between past and future and a living force that shapes contemporary identity. ",
              },
              {
                icon: MessagesSquare,
                title: "Dialogical Engagement",
                description:
                  "The philosophy should embrace dialogical engagement as a core methodological principle, creating spaces for meaningful conversation between diverse stakeholders. ",
              },
              {
                icon: SearchCheck,
                title: "Evidence-Based Cultural Understanding",
                description:
                  "The centre's philosophy should integrate evidence-based approaches with deep cultural understanding, recognizing that effective policy requires both rigorous analysis and cultural sensitivity.",
              },
              {
                icon: RefreshCcw,
                title: "Adaptive Learning",
                description:
                  "The philosophy should embrace adaptive learning as a core principle, recognizing that cultural policy operates in dynamic environments that require continuous adjustment and refinement. ",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-teal-50 hover:bg-teal-100 transition-colors duration-300 p-6 rounded-lg shadow-md hover:shadow-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 newpaper-body rounded-lg mb-4">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold newpaper-body mb-3">
                  {value.title}
                </h3>
                <p className="newpaper-body leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold newpaper-body mb-4">
              Institutional Values
            </h2>
            <p className="text-xl newpaper-body max-w-4xl mx-auto">
              The Sangam Centre is guided by core institutional values that
              ensure intellectual rigor, inclusivity, and a balance between
              tradition and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Independence and Integrity",
                description: `The centre's philosophy prioritizes intellectual independence and analytical integrity, ensuring that research and policy recommendations are based on evidence rather than political or commercial considerations. This principle recognizes that effective think tanks maintain credibility through rigorous methodology, transparent processes, and commitment to objective analysis.

Independence and integrity require clear governance structures, diversified funding sources, and institutional cultures that support rigorous research and open intellectual inquiry.`,
              },
              {
                title: "Cultural Sensitivity and Inclusion",
                description: `The philosophy embraces cultural sensitivity and inclusive engagement, recognizing India's extraordinary diversity and ensuring that policy development processes are accessible to and representative of different communities. Effective cultural policy must be responsive to the needs and perspectives of marginalized communities while celebrating India's rich cultural heritage.

Cultural sensitivity requires understanding local contexts, appreciation for diverse cultural expressions, and commitment to equitable participation in policy processes.`,
              },
              {
                title: "Innovation and Tradition",
                description: `The centre's philosophy balances innovation and tradition, recognizing that effective cultural policy requires both preservation of valuable heritage and adaptation to contemporary needs. Cultural heritage provides a foundation for innovation, while contemporary challenges demand creative approaches that honour traditional wisdom.

This balance requires understanding traditional knowledge systems and contemporary policy challenges to develop solutions that are both culturally appropriate and practically effective.`,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-teal-50 hover:bg-teal-100 transition-colors duration-300 p-6 rounded-lg shadow-xl hover:shadow-xl"
              >
                <h3 className="text-xl font-bold newpaper-body mb-3">
                  {item.title}
                </h3>
                <p className="newpaper-body whitespace-pre-line leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Impact and relevence */}
      {/* <section className="py-16 bg-teal-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impact and Relevance
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The Sangam Centre's philosophy embodies the ancient wisdom of
              confluence—bringing together diverse streams of knowledge,
              experience, and perspective to create innovative solutions that
              honour India's cultural heritage while addressing contemporary
              policy challenges.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Social Transformation",
                description: `The philosophy embraces cultural policy as a tool for positive social transformation, recognizing culture's potential to address broader societal challenges, including social cohesion, economic development, and environmental sustainability. Cultural policy can contribute to building more inclusive, resilient, and sustainable societies.

Social transformation requires understanding how cultural interventions support broader development goals while maintaining respect for cultural diversity and community autonomy.`,
              },
              {
                title: "Global Engagement",
                description: `The centre's philosophy embraces global engagement while maintaining rootedness in Indian cultural traditions. Effective cultural policy requires both local relevance and an international perspective. Cultural challenges increasingly demand collaborative approaches that transcend national boundaries while respecting cultural sovereignty.

Global engagement requires capacity for comparative analysis, international collaboration, and knowledge exchange while maintaining commitment to local contexts and priorities.`,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-teal-100 hover:bg-teal-50 transition-colors duration-300 p-6 rounded-lg shadow-md hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Approach */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We employ a comprehensive methodology that combines theoretical
              frameworks with practical insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Research & Analysis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We conduct rigorous empirical research using both quantitative
                and qualitative methodologies to understand complex policy
                challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Stakeholder Engagement
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We engage with policymakers, civil society, industry experts,
                and communities to ensure our research reflects diverse
                perspectives and ground realities.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Policy Recommendations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We translate our research findings into actionable policy
                recommendations that are feasible, evidence-based, and aligned
                with India's development priorities.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold newpaper-body mb-4">
              Our Team
            </h2>
            <p className="text-xl newpaper-body max-w-3xl mx-auto">
              Meet our diverse team of researchers, policy experts, and analysts
              who drive our mission forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="[perspective:1000px] cursor-pointer"
                onClick={() => handleFlip(index)}
              >
                <div
                  className={`relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] ${
                    flippedIndex === index ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* Front Side */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] bg-white rounded-lg shadow-md overflow-hidden">
                    <OptimizedImage
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 object-contain"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold newpaper-body mb-1">
                        {member.name}
                      </h3>
                      <p className="newpaper-body font-semibold mb-1 text-sm">
                        {member.position}
                      </p>
                      <p className="newpaper-body text-sm">
                        {member.expertise}
                      </p>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-lg shadow-md p-4 overflow-y-auto">
                    <h3 className="text-lg font-bold newpaper-body mb-2">
                      {member.name}
                    </h3>
                    <p className="newpaper-body text-sm leading-relaxed">
                      {member.description || "More about this team member."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Journey
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Established in 2018, Delhi Chapter | Sangam Centre emerged from
                the recognition that India's complex policy challenges require
                nuanced, evidence-based solutions. Founded by a group of
                distinguished academics and policy practitioners, our
                organization has grown to become a respected voice in India's
                policy discourse.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Over the years, we have contributed to policy debates across
                multiple domains, from economic reforms and social development
                to digital governance and environmental sustainability. Our
                research has informed parliamentary discussions, influenced
                government policies, and contributed to academic literature.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we continue to expand our research capabilities and
                partnerships, always staying true to our founding commitment: to
                produce high-quality, independent research that serves the
                public interest and advances India's development goals.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
