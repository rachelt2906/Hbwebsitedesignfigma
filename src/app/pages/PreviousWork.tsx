import { motion } from "motion/react";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import { useState } from "react";

export function PreviousWork() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "THE CRASH!",
      year: "2026",
      location: "London, UK",
      type: "Theatrical Performance",
      audience: "N/A",
      description: "WORK IN PROGRESS",
      highlights: [
        "Album launch of Steven Bamidele's The Crash!",
        "Projection mapping accompanied by dancer",
        "Interactive lock mechanisms"
      ],
      image: "/gallery/crash-poster.JPG",
      tags: ["Site-Specific", "Projection", "Music", "Dance"]
    },
    {
      title: "Tunnel Groove",
      year: "2026",
      location: "London, UK",
      type: "Multi-sensory Experience",
      audience: "50",
      description: "A funky house tunnel takeover. The second event in an evolving series exploring how sound, space, and visual illusion can reshape cultural events and reframe traditional nightlife as immersive world-led experiences. We transformed a tunnel in the heart of London into a funky house experience inspired by crazy houses and fairground distortion. With a curated all woman lineup of specialist DJs, this was part rave, part theatre, part hallucination.",
      highlights: [
        "Trippy projection-mapped art",
        "All female DJ lineup",
        "Mirror effects",
        "Theatrical set design"
      ],
      image: "/gallery/tunnelgroove-poster.jpg",
      tags: ["Art", "DJs", "Set Design", "Projection"]
    },
    {
      title: "Tethered",
      year: "2025",
      location: "Touring (London to Edinburgh)",
      type: "Immersive Theatre",
      audience: "20-50 per session",
      description: "ONGOING WORK. Set in a future dystopia where genetic predispositions to chronic illness have been triggered by a worldwide technological phenomenon, this immersive installation fuses emerging technologies and dance theatre to question the importance of personal care and connection in a world of increasing isolation. Rose and Taylor narrate their sensations and memories in an attempt to come to terms with their relationship to one another, their past and the world at large. We invite you to experience this new world as they do, embody and play with the boundaries of separation in performance.",
      highlights: [
        "Ongoing R&D involving Haptic Technology",
        "Interactive performance",
        "Physical theatre",
        "Limited intimate groups"
      ],
      image: "/gallery/tethered-poster.jpg",
      tags: ["Experimental", "Technology", "Dance", "Interactive"]
    },
    {
      title: "Techno Tunnel",
      year: "2025",
      location: "London, UK",
      type: "Multi-sensory Experience",
      audience: "40",
      description: "An immersive rave, meets art installation- with projection mapping that responds to sound and movement. Live sets from genre-defying musicians pushing the boundaries of electronic and experimental sound, from fusions of techno with live saxophone to an acoustic guitar set. Descend into a liminal space where theatre, rave, and installation art collide.",
      highlights: [
        "Vibrant Projection-mapping",
        "Immersive tunnel experience",
        "Live music combined with DJ sets"
      ],
      image: "/gallery/technotunnel-poster.JPG",
      tags: ["Touring", "Projection", "Saxophone", "Connection"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1768692507063-ae43e2c4ecfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1lcnNpdmUlMjBhcnQlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcxNDU3OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Immersive installation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl mb-6">Previous Work</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Worlds we've created
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div 
                      className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                      onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                          project.title === 'Tethered' ? 'scale-110' : ''
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-white/10 backdrop-blur-sm text-xs tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <h2 className="text-3xl md:text-4xl mb-4">{project.title}</h2>
                    
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {project.year}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        {project.audience}
                      </div>
                    </div>

                    <p className="text-lg mb-2 text-gray-300">{project.type}</p>
                    <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>

                    <motion.div
                      initial={false}
                      animate={{ height: selectedProject === index ? 'auto' : 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-white/10">
                        <h3 className="text-xl mb-4">Key Highlights</h3>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2 text-gray-400">
                              <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    <button
                      onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                      className="mt-6 flex items-center gap-2 text-sm tracking-wider hover:text-gray-300 transition-colors"
                    >
                      {selectedProject === index ? 'Show Less' : 'Show More'}
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
