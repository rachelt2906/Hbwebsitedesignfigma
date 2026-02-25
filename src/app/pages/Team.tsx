import { motion } from "motion/react";
import { Compass, Lightbulb } from "lucide-react";

export function Team() {
  const teamMembers = [
    {
      name: "Marianna",
      role: "Co-Founder & Artistic Director",
      icon: Compass,
      mission: "To help people construct their reality & get a grip on their perception of self",
      bio: "Marianna's practice explores the remnants of memory and personality held in the body. Her work asks: What is the body 'harbouring'? What story can a scar hold or why do your fingers rest in a certain position? Through spatially designed choreography, she brings to the forefront the situatedness of human existence.",
      focus: [
        "Spatial choreography",
        "Body memory and personality",
        "Mental health and perception",
        "Audience autonomy and articulation"
      ],
      image: "https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MTM1NDQ5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Rachel",
      role: "Co-Founder & Creative Director",
      icon: Lightbulb,
      mission: "To devise new and innovative immersive formats through worldbuilding and theatrics",
      bio: "Rachel specializes in creating believable worlds through worldbuilding and theatrical design. Her expertise lies in crafting seamless audience journeys from start to finish, ensuring every moment is intentional and transformative. She brings technical innovation to narrative-driven experiences.",
      focus: [
        "Immersive format innovation",
        "Worldbuilding and theatrics",
        "Audience journey design",
        "Seamless end-to-end experiences"
      ],
      image: "https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MTM1NDQ5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
            Two visionaries united by a shared mission to transform perception
          </p>
        </motion.div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto space-y-32">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <member.icon size={40} className="mb-4" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h2 className="text-4xl md:text-5xl mb-2">{member.name}</h2>
                <p className="text-xl text-gray-400 mb-8">{member.role}</p>

                <div className="mb-8 p-6 bg-gray-900/50 border-l-4 border-white">
                  <p className="text-sm tracking-wider mb-2 text-gray-500">MISSION</p>
                  <p className="text-lg italic text-gray-300 leading-relaxed">{member.mission}</p>
                </div>

                <p className="text-gray-400 leading-relaxed mb-8">{member.bio}</p>

                <div>
                  <h3 className="text-xl mb-4 tracking-wider">FOCUS AREAS</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {member.focus.map((item) => (
                      <div
                        key={item}
                        className="p-3 bg-black/50 border border-white/10 text-sm text-gray-400"
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
              Marianna and Rachel combine their unique perspectives to create immersive experiences that are both 
              technically innovative and deeply human. Their complementary skills in spatial choreography and 
              worldbuilding result in transformative journeys that challenge perception and empower audiences.
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
                    Site-specific creation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                    Technology + humanity
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                    Experiential journeys
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                    Perceptive expansion
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
