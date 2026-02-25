import { motion } from "motion/react";
import { Compass, Lightbulb, Users, Wrench, Globe, Sparkles } from "lucide-react";

export function Offerings() {
  const services = [
    {
      icon: Compass,
      title: "Commissioned Experiences",
      description: "Bespoke immersive experiences created for venues, festivals, and organizations. We work closely with you to create site-specific productions that align with your vision and venue.",
      features: [
        "Site-specific design and production",
        "Custom narrative development",
        "Full technical integration",
        "Audience journey mapping"
      ],
      suitable: "Venues, festivals, cultural organizations"
    },
    {
      icon: Users,
      title: "Community Projects",
      description: "Co-creative experiences developed with communities, telling real people's stories. We facilitate participatory processes that empower individuals through art and accurate narrative representation.",
      features: [
        "Community engagement workshops",
        "Story gathering and development",
        "Collaborative creation process",
        "Empowerment through art"
      ],
      suitable: "Communities, local organizations, social enterprises"
    },
    {
      icon: Lightbulb,
      title: "Creative Consultancy",
      description: "Strategic guidance for organizations looking to integrate immersive and experimental elements into their work. We share our methodology for creating meaningful, intentional experiences.",
      features: [
        "Immersive format development",
        "Experience design workshops",
        "Technology integration strategy",
        "Worldbuilding consultation"
      ],
      suitable: "Creative organizations, brands, institutions"
    },
    {
      icon: Sparkles,
      title: "Brand Experiences",
      description: "Immersive brand activations that go beyond spectacle. We create experiences that authentically represent your brand values through narrative-driven, theatrical design.",
      features: [
        "Brand narrative translation",
        "Authentic storytelling",
        "Experiential activations",
        "Purpose-driven design"
      ],
      suitable: "Brands, agencies, marketing teams"
    },
    {
      icon: Wrench,
      title: "Technical Design",
      description: "Spatial choreography, lighting, sound, and projection design for immersive experiences. We bring technical expertise to ensure seamless, transformative audience journeys.",
      features: [
        "Spatial audio design",
        "Projection mapping",
        "Interactive technology",
        "Choreographic consultation"
      ],
      suitable: "Producers, directors, creative teams"
    },
    {
      icon: Globe,
      title: "Touring Productions",
      description: "Our body of work is available for touring to established venues globally. Each production is adaptable to different spaces while maintaining its core narrative and experiential integrity.",
      features: [
        "Existing repertoire",
        "Site adaptation services",
        "Technical support",
        "Audience development"
      ],
      suitable: "Theatres, museums, arts centers"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We begin by understanding your needs, space, audience, and vision through in-depth conversations and site visits."
    },
    {
      step: "02",
      title: "Development",
      description: "Co-creating the concept, we develop the narrative, spatial design, and technical requirements for your unique experience."
    },
    {
      step: "03",
      title: "Design",
      description: "Detailed design of all elements—choreography, technology, scenography—ensuring every moment is intentional and purposeful."
    },
    {
      step: "04",
      title: "Production",
      description: "Full production management, technical installation, and rehearsal process to bring the experience to life."
    },
    {
      step: "05",
      title: "Delivery",
      description: "Seamless execution of the experience with ongoing support, ensuring transformative audience journeys from start to finish."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1768026058295-caf3636c61ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMHRlY2hub2xvZ3klMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcxNDU3OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Interactive installation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl mb-6">Our Offerings</h1>
          <p className="text-xl text-gray-300">
            Creating transformative experiences through intentional design, authentic storytelling, and innovative formats
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-white/30 transition-colors group"
              >
                <service.icon className="mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm tracking-wider mb-3 text-gray-500">INCLUDES</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="mt-1.5 w-1 h-1 bg-white rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-500">Suitable for: {service.suitable}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6 italic">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From initial concept to final delivery, we ensure a seamless journey for our collaborators
            </p>
          </motion.div>

          <div className="space-y-8">
            {process.map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-white text-black flex items-center justify-center text-2xl">
                  {phase.step}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl mb-3">{phase.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl mb-8 text-center italic">Our Commitment</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                We don't create things that are purely spectacle, or tech for tech's sake. We don't rely on the 
                immersive nature of an experience to carry it—our work should be rich, not cheap, in terms of purpose. 
                Everything is intentional.
              </p>
              <p>
                We tell real people's stories and work personally with them—including clients and brands. We believe 
                in empowering individuals through art and allowing their narratives to be accurately represented.
              </p>
              <p>
                Our mission is to help people construct their reality and get a grip on their perception of self. 
                Through our devised formats, we create believable worlds and seamless audience journeys, end to end.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl mb-8">Ready to Create Together?</h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how we can bring your vision to life through immersive, intentional experiences
            </p>
            <a
              href="/contact"
              className="inline-block px-12 py-4 bg-white text-black text-lg tracking-wider hover:bg-gray-200 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
