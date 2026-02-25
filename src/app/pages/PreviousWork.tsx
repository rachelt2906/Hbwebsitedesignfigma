import { motion } from "motion/react";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import { useState } from "react";

export function PreviousWork() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Harbour Memories",
      year: "2025",
      location: "Birmingham Canals, UK",
      type: "Site-Specific Installation",
      audience: "250+ participants",
      description: "An immersive journey through the waterways of Birmingham, exploring inherited memories and migration stories. Participants navigated locks and tunnels while experiencing spatially designed choreography and interactive soundscapes.",
      highlights: [
        "Multi-sensory canal-side experience",
        "Real migration stories from Birmingham families",
        "Interactive lock mechanisms",
        "Projection mapping on water"
      ],
      image: "https://images.unsplash.com/photo-1757870049839-63b9961457fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NrJTIwY2FuYWwlMjB3YXRlcndheXxlbnwxfHx8fDE3NzE0NTc5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Site-Specific", "Migration", "Water", "Community"]
    },
    {
      title: "The Body Harbours",
      year: "2024",
      location: "Welsh Coast, Wales",
      type: "Theatrical Performance",
      audience: "180 per show",
      description: "A theatrical exploration of what our bodies carry—scars, gestures, inherited movements. Performed in a decommissioned lighthouse, audiences moved through different levels, each revealing layers of personal and collective memory.",
      highlights: [
        "Vertical journey through lighthouse",
        "Choreographed movement sequences",
        "Personal story integration",
        "Intimate audience interaction"
      ],
      image: "https://images.unsplash.com/photo-1715322608224-a9efaeeffaf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdHJpY2FsJTIwcGVyZm9ybWFuY2UlMjBzdGFnZSUyMGxpZ2h0c3xlbnwxfHx8fDE3NzE0NTc5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Theatre", "Body", "Memory", "Lighthouse"]
    },
    {
      title: "Liminal Spaces",
      year: "2024",
      location: "Underground Tunnels, London",
      type: "Immersive Experience",
      audience: "50 per session",
      description: "An experimental piece exploring the transition between states. Participants journeyed through repurposed underground tunnels, experiencing the sensation of moving from one reality to another through technology, light, and sound.",
      highlights: [
        "Immersive tunnel environments",
        "Cutting-edge audio technology",
        "State transformation narrative",
        "Limited intimate groups"
      ],
      image: "https://images.unsplash.com/photo-1763373569776-1d5cb36dcdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHR1bm5lbCUyMGxpZ2h0fGVufDF8fHx8MTc3MTQ1Nzk5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Experimental", "Technology", "Tunnel", "Transformation"]
    },
    {
      title: "Connected Worlds",
      year: "2023",
      location: "Multiple Sites, UK",
      type: "Touring Production",
      audience: "500+ across tour",
      description: "A touring piece about connection in the digital age. Using innovative projection and interactive technology, this production explored how we maintain identity and relationships across physical and virtual spaces.",
      highlights: [
        "Multi-city tour",
        "Interactive digital elements",
        "Real participant stories",
        "Adaptive site design"
      ],
      image: "https://images.unsplash.com/photo-1768026058295-caf3636c61ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMHRlY2hub2xvZ3klMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcxNDU3OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Touring", "Digital", "Interactive", "Connection"]
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
            Journeys we've created, worlds we've built
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
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl mb-12 text-center italic">Impact & Reach</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: "1000+", label: "Participants" },
                { value: "12+", label: "Unique Locations" },
                { value: "4", label: "Countries" },
                { value: "100%", label: "Site-Specific" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 bg-black/50 border border-white/10"
                >
                  <div className="text-5xl mb-3">{stat.value}</div>
                  <div className="text-sm tracking-wider text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
