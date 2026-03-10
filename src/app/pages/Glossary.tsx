import { motion } from "motion/react";

export function Glossary() {
  const terms = [
    {
      term: "Embodied Experience",
      definition: "Experiences that engage the whole body and sensory system, not just the intellect. Our work begins with physical reality — how memories are stored in muscles, how emotions manifest physically, and how spatial relationships affect perception.",
      category: "Core Concepts"
    },
    {
      term: "Site-Specific",
      definition: "Productions designed specifically for a particular location, taking into account the architecture, history, and atmosphere of the space. The venue becomes an active participant in the storytelling rather than a neutral container.",
      category: "Production"
    },
    {
      term: "Immersive Technology",
      definition: "Digital tools and platforms that create believable, interactive environments. We treat technology as a material for worldbuilding rather than an end in itself — VR, AR, projection mapping, and interactive installations.",
      category: "Technology"
    },
    {
      term: "Devised Methodology",
      definition: "A collaborative creation process where the work emerges through research, experimentation, and iteration rather than following a pre-written script. We generate new formats through rigorous investigation and structural invention.",
      category: "Process"
    },
    {
      term: "Spatial Choreography",
      definition: "The deliberate design of movement through physical space. How audiences navigate environments, how performers occupy rooms, and how the architecture itself becomes part of the performance language.",
      category: "Design"
    },
    {
      term: "Worldbuilding",
      definition: "The process of creating coherent, believable environments with their own internal logic, rules, and atmosphere. Every detail serves the narrative and enhances the audience's suspension of disbelief.",
      category: "Narrative"
    },
    {
      term: "Perceptive Expansion",
      definition: "The goal of our work: to help audiences see beyond their habitual perceptions. Through carefully designed experiences, we create opportunities for new ways of understanding self, others, and the world.",
      category: "Impact"
    },
    {
      term: "Migration Narratives",
      definition: "Stories of movement, displacement, and transition. Our work often explores themes of belonging, identity, and the spaces between cultures, drawing from personal and collective experiences of migration.",
      category: "Themes"
    },
    {
      term: "Sensory Design",
      definition: "The intentional use of all senses in creating experiences. Beyond visual and auditory elements, we consider touch, smell, temperature, and spatial awareness as tools for storytelling and emotional engagement.",
      category: "Design"
    },
    {
      term: "Audience Journey",
      definition: "The complete arc of an audience member's experience, from initial engagement through the core experience to reflection and departure. Every moment is designed to be intentional and transformative.",
      category: "Experience"
    }
  ];

  const categories = [...new Set(terms.map(term => term.category))];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="bg-[#0e0e12] py-[120px] px-[52px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-5 mb-14 text-[0.62rem] tracking-[0.3em] uppercase" style={{ color: 'var(--brass)' }}>
            <div className="w-10 h-px" style={{ background: 'var(--brass-dim)' }} />
            Glossary
          </div>

          <h1
            className="mb-[52px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              fontWeight: 300,
              lineHeight: 1.05,
              color: 'var(--text)'
            }}
          >
            Terms of <em style={{ fontStyle: 'italic', color: 'var(--brass-light)' }}>engagement</em>
          </h1>

          <div
            className="max-w-4xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.4rem',
              lineHeight: 1.75,
              color: 'var(--text)',
              fontWeight: 300
            }}
          >
            <p>
              Our work exists at the intersection of theatre, technology, and human experience. These terms help articulate the concepts, processes, and philosophies that guide our practice.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="bg-[#07070a] py-[120px] px-[52px]">
        <div className="max-w-[1200px] mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2
                className="mb-8 text-[1.2rem] tracking-[0.2em] uppercase"
                style={{ color: 'var(--brass)' }}
              >
                {category}
              </h2>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {terms
                  .filter(term => term.category === category)
                  .map((term, index) => (
                    <motion.div
                      key={term.term}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="space-y-3"
                    >
                      <h3
                        className="text-[1.1rem] font-medium"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          color: 'var(--text)'
                        }}
                      >
                        {term.term}
                      </h3>

                      <p
                        className="text-[0.9rem] leading-[1.6]"
                        style={{ color: 'var(--text-dim)' }}
                      >
                        {term.definition}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}