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

          <div className="max-w-[800px] mx-auto">
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
                The Harbourers
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
                  The Harbourers is an immersive production company making experimental, narrative-driven experiences in site-specific locations.
                </p>
                <p>
                  We work at the intersection of live performance and immersive technology — fusing spatial design, movement and multi-sensory environments to create experiences that go beyond watching. From raves and installations to full-length theatre productions, we build worlds that ask something of the people inside them.
                </p>
                <p>
                  Our work is for audiences willing to surrender a little. All of it asks you to be present, to let the room do its work, and to arrive somewhere you didn't expect.
                </p>
                <p>
                  We believe that how you experience something changes everything. Our productions are designed to stretch that capacity- and we hope what you find here stays with you long after you leave.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
