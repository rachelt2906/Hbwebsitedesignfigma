import { motion } from "motion/react";

export function Glossary() {
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
            Coming Soon
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
              Our glossary of terms is under development. Check back soon for definitions and explanations of the concepts, processes, and philosophies that guide our immersive practice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}