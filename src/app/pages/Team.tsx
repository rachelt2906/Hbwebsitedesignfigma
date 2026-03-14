import { motion } from "motion/react";
import { Compass, Lightbulb, Users, Sparkles, ArrowRight } from "lucide-react";

export function Team() {
  const teamMembers = [
    {
      name: "Marianna Whistlecroft",
      role: "Co-Founder & Artistic Director",
      icon: Compass,
      mission: "To help people construct their reality & get a grip on their perception of self",
      bio: "Marianna is an immersive performance practitioner who works with ethnographic research to tackle the lived marginalisation of illness associated with women’s health. She is now developing her practice with new dimensions of technical enhancement for performance. The term harbouring is a methodology Marianna uses to create narrative. This theatrical technique engages knowledge acquired from her studies in medical anthropology, the philosophy of arts and of sciences.<br><br>• MA Expanded Dance Practice, London Contemporary Dance School<br>• MSc Anthropology, UCL<br>• BA English and Philosophy, University of Nottingham",
      focus: [
        "Spatial choreography",
        "Body memory and personality",
        "Mental health and perception",
        "Audience autonomy and articulation"
      ],
      image: "/gallery/marianna.JPG"
    },
    {
      name: "Rachel Thuo",
      role: "Co-Founder & Experience Designer",
      icon: Lightbulb,
      mission: "To devise new and innovative immersive formats through worldbuilding and theatrics",
      bio: "Rachel designs and produces immersive experiences that use emerging technology as material—enhancing storytelling, shaping audience journeys and encounters. She works in innovation and creative R&D, delivering interactive experiences in early-stage, uncertain spaces where new formats are defined. Her domain expertise lies in Extended Reality, Haptic Technology and 360-Degree Film. Cross-sector experience inside of and outside the creative industries.<br><br>• BSc Computer Science and Mathematics, Lancaster University.",
      focus: [
        "Immersive format innovation",
        "Worldbuilding and theatrics",
        "Audience journey design",
        "Seamless end-to-end experiences"
      ],
      image: "/gallery/rachel1.jpg"
    },
    {
      name: "Xiwen Wang",
      role: "Strategy & Commercial Lead",
      icon: Users,
      mission: "To expand the cultural and commercial potential of bold artistic work through strategic and long-term business thinking.",
      bio: "With a background spanning film acquisition, distribution, and creative agency work, Xiwen brings a strategic and commercially grounded perspective to cultural production. Her work focuses on developing insight-led strategy, shaping innovative business models, and building strong structures and relationships behind ambitious immersive projects.<br><br>• BA Media Studies, Scripps College<br>• MBA Business Administration, University of Oxford.",
      focus: [
        "Business strategy",
        "Funding and financial planning",
        "Operations and process design",
        "Ecosystem and partnerships and development"
      ],
      image: "/gallery/xiwen.JPG"
    },
    {
      name: "Alex Dunn",
      role: "Co-Director",
      icon: Sparkles,
      mission: "Pending",
      bio: "Alex brings technical expertise to immersive experiences, specializing in interactive technologies and real-time systems. His work focuses on creating seamless integrations between physical spaces and digital elements, ensuring that technical innovation serves the narrative rather than dominating it.",
      focus: [
        "Interactive technology",
        "Real-time systems",
        "Technical integration",
        "Digital-physical hybrid experiences"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxMzU1MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl mb-6">The Team</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Four visionaries united by a shared mission to transform perception through immersive storytelling
          </p>
        </motion.div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-full mx-auto relative">
          {/* horizontal scroll container */}
          <div className="flex space-x-8 overflow-x-auto pb-4" style={{ scrollSnapType: 'x mandatory' }}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex-shrink-0 w-[70vw] md:w-[30vw] lg:w-[25vw] scroll-snap-align-start space-y-6"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <member.icon size={32} className="mb-2" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-3xl md:text-4xl mb-1">{member.name}</h2>
                  <p className="text-lg text-gray-400 mb-4">{member.role}</p>

                  <div className="mb-6 p-4 bg-gray-900/50 border-l-4 border-white">
                    <p className="text-xs tracking-wider mb-1 text-gray-500">MISSION</p>
                    <p className="text-base italic text-gray-300 leading-relaxed">{member.mission}</p>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-6 text-sm" dangerouslySetInnerHTML={{ __html: member.bio }} />

                  <div>
                    <h3 className="text-lg mb-2 tracking-wider">FOCUS AREAS</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {member.focus.map((item) => (
                        <div
                          key={item}
                          className="p-2 bg-black/50 border border-white/10 text-xs text-gray-400"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* scroll prompt arrow */}
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none">
            <ArrowRight size={32} className="text-gray-500 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-8 italic">Together, We Create</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Our diverse team combines artistic vision, technical expertise, and production excellence to create 
              immersive experiences that transform perception. From spatial choreography to technical innovation, 
              each member brings unique skills that contribute to our shared mission of meaningful, intentional storytelling.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-black/50 border border-white/10">
                <h3 className="text-2xl mb-4">Shared Values</h3>
                <ul className="text-left space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                    Intentionality over spectacle
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                    Authentic storytelling
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                    Community and connection
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                    Empowerment through art
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-black/50 border border-white/10">
                <h3 className="text-2xl mb-4">Our Approach</h3>
                <ul className="text-left space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                    Collaborative creation process
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                    Technical innovation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                    Site-specific design
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                    Audience-centered experiences
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
