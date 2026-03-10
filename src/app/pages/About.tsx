export function About() {
  return (
    <div className="relative">
      {/* About Section */}
      <section className="bg-[#0e0e12] py-[120px] px-[52px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-5 mb-14 text-[0.62rem] tracking-[0.3em] uppercase" style={{ color: 'var(--brass)' }}>
            <div className="w-10 h-px" style={{ background: 'var(--brass-dim)' }} />
            About The Harbourers
          </div>

          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <div>
              <h2 
                className="mb-[52px]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                  fontWeight: 300,
                  lineHeight: 1.05,
                  color: 'var(--text)'
                }}
              >
                A space <em style={{ fontStyle: 'italic', color: 'var(--brass-light)' }}>between</em> sea and land
              </h2>

              <div 
                className="space-y-7"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.4rem',
                  lineHeight: 1.75,
                  color: 'var(--text)',
                  fontWeight: 300
                }}
              >
                <p>
                  The Harbourers began in the body — in the stories a scar holds, in the particular way your fingers rest at your side, in the inherited values and unspoken storylines carried through families across generations.
                </p>
                <p>
                  We are an immersive productions company creating experimental, theatrical and narrative-driven experiences in site-specific locations. We do not make spectacle. We make the conditions for something true to occur.
                </p>
                <p>
                  A harbour is neither sea nor land. It is the space of transition — of arrival, of departure, of what is carried between them. That is where we work.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-0">
              {[
                {
                  title: "What we make",
                  text: "Experimental, theatrical and narrative-driven experiences in site-specific locations. Formats that facilitate community, connection, and perceptive expansion."
                },
                {
                  title: "How we make it",
                  text: "Through spatially designed choreography, immersive technology and their design principles. We consistently generate new formats through a devised research methodology."
                },
                {
                  title: "Why",
                  text: "To help people construct their reality and develop a firm grip on their perception of self. To represent real people's stories with precision and care."
                },
                {
                  title: "Where we are going",
                  text: "A body of work encompassing different styles — touring and commissioning in established venues globally."
                }
              ].map((pillar) => (
                <div key={pillar.title} className="py-7 border-b border-[var(--border)] first:border-t">
                  <div className="text-[0.65rem] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--brass)' }}>
                    {pillar.title}
                  </div>
                  <div className="text-[0.88rem] leading-[1.7]" style={{ color: 'var(--text-dim)' }}>
                    {pillar.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-l-2 pl-10 my-[60px]" style={{ borderColor: 'var(--brass)' }}>
            <blockquote 
              className="mb-5"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontSize: '1.6rem',
                lineHeight: 1.5,
                color: 'var(--text)',
                fontWeight: 300
              }}
            >
              "What is the body harbouring? What story can a scar hold — and why do your fingers rest in a certain position?"
            </blockquote>
            <cite 
              className="text-[0.7rem] tracking-[0.15em] uppercase not-italic"
              style={{ color: 'var(--brass-dim)' }}
            >
              Marianna Whistlecroft — Founding Practice
            </cite>
          </div>
        </div>
      </section>
    </div>
  );
}
