import { motion } from "motion/react";

export function OurPhilosophy() {
  const principles = [
    {
      title: "Embodied Experience",
      description: "We believe that true transformation occurs through the body. Our work begins with the physical reality of human experience — the way memories are stored in muscles, the stories scars tell, the inherited patterns carried through generations.",
      quote: "What is the body harbouring? What story can a scar hold — and why do your fingers rest in a certain position?"
    },
    {
      title: "Site-Specific Design",
      description: "Every space has its own narrative. We don't impose our vision on locations; instead, we listen to what the space wants to tell. Our productions emerge from the dialogue between place, people, and purpose.",
      quote: "A harbour is neither sea nor land. It is the space of transition — of arrival, of departure, of what is carried between them."
    },
    {
      title: "Narrative Precision",
      description: "We represent real people's stories with absolute care and accuracy. Our work is not about spectacle or entertainment; it's about creating the conditions for truth to emerge and be witnessed.",
      quote: "To help people construct their reality and develop a firm grip on their perception of self."
    },
    {
      title: "Devised Methodology",
      description: "We generate new formats through rigorous research and experimentation. Every project is an opportunity to invent something that has never existed before — not through novelty, but through structural invention.",
      quote: "Rich work, not cheap work. Intentional at every level."
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="bg-[#0e0e12] py-[120px] px-[52px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-5 mb-14 text-[0.62rem] tracking-[0.3em] uppercase" style={{ color: 'var(--brass)' }}>
            <div className="w-10 h-px" style={{ background: 'var(--brass-dim)' }} />
            Our Philosophy
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
            The space <em style={{ fontStyle: 'italic', color: 'var(--brass-light)' }}>between</em> what is and what could be
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
            <p className="mb-7">
              Our philosophy emerges from the liminal spaces — the thresholds where transformation occurs. We work at the intersection of embodied experience, migration narratives, and sensory design, creating immersive productions that facilitate community, connection, and perceptive expansion.
            </p>
            <p>
              We do not make spectacle. We make the conditions for something true to occur. Every project is an act of care, precision, and intentionality.
            </p>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="bg-[#07070a] py-[120px] px-[52px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-6"
              >
                <h3
                  className="text-[1.8rem] leading-tight"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    color: 'var(--text)'
                  }}
                >
                  {principle.title}
                </h3>

                <p
                  className="text-[0.95rem] leading-[1.7]"
                  style={{ color: 'var(--text-dim)' }}
                >
                  {principle.description}
                </p>

                <blockquote
                  className="pt-6 border-t border-[var(--border)]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: 'italic',
                    fontSize: '1.1rem',
                    lineHeight: 1.5,
                    color: 'var(--brass-light)'
                  }}
                >
                  "{principle.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}