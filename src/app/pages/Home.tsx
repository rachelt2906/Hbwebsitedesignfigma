import { useEffect, useRef } from "react";
import { Link } from "react-router";

export function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    document.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep gradient
      const grad = ctx.createRadialGradient(
        mouseX, mouseY, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      grad.addColorStop(0, 'rgba(40,28,12,0.6)');
      grad.addColorStop(0.4, 'rgba(15,12,8,0.8)');
      grad.addColorStop(1, 'rgba(7,7,10,1)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184,149,106,${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(184,149,106,${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative">
      {/* Landing Section - Full Screen Only */}
      <section className="relative h-screen flex flex-col justify-end px-[52px] pb-[72px] overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0"
        />

        <div className="relative z-10 max-w-[900px]">
          <div 
            className="text-[0.68rem] tracking-[0.25em] uppercase mb-7"
            style={{ color: 'var(--brass)' }}
          >
            Immersive Productions
          </div>

          <h1 
            className="mb-10"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(4rem, 10vw, 9.5rem)',
              fontWeight: 300,
              lineHeight: 0.9,
              color: 'var(--text)'
            }}
          >
            The<br />
            <em style={{ fontStyle: 'italic', color: 'var(--brass-light)', display: 'block' }}>
              Harbourers
            </em>
          </h1>

          <div className="flex justify-between items-end border-t border-[var(--border)] pt-7">
            <div className="flex-1" />

            <Link
              to="/about"
              className="relative group overflow-hidden"
            >
              <button 
                className="px-12 py-[18px] bg-transparent border text-[0.72rem] tracking-[0.25em] uppercase transition-all duration-300 relative z-10"
                style={{ borderColor: 'var(--brass-dim)', color: 'var(--brass)' }}
              >
                <span className="relative z-10 group-hover:text-[#07070a] transition-colors duration-300">
                  Enter
                </span>
                <div 
                  className="absolute inset-0 bg-[var(--brass)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out"
                  style={{ zIndex: 0 }}
                />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }
      `}</style>
    </div>
  );
}