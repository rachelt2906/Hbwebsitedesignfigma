import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.mx = e.clientX;
      posRef.current.my = e.clientY;
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animateRing = () => {
      posRef.current.rx += (posRef.current.mx - posRef.current.rx) * 0.12;
      posRef.current.ry += (posRef.current.my - posRef.current.ry) * 0.12;
      
      if (ringRef.current) {
        ringRef.current.style.left = `${posRef.current.rx}px`;
        ringRef.current.style.top = `${posRef.current.ry}px`;
      }
      
      requestAnimationFrame(animateRing);
    };

    const handleMouseEnter = () => {
      ringRef.current?.classList.add('expand');
    };

    const handleMouseLeave = () => {
      ringRef.current?.classList.remove('expand');
    };

    document.addEventListener('mousemove', handleMouseMove);
    const animationFrame = requestAnimationFrame(animateRing);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
