import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor with a lagging outer ring. Desktop + fine-pointer only.
 * Uses direct DOM writes via rAF for smoothness (no re-renders per frame).
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;
    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor='hover'], input, textarea");
      ringRef.current?.classList.toggle("cursor-ring--active", Boolean(interactive));
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden lg:block" aria-hidden>
      <div
        ref={dotRef}
        className="fixed left-0 top-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-primary"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="cursor-ring fixed left-0 top-0 -ml-4 -mt-4 h-8 w-8 rounded-full border border-primary/50 transition-[width,height,margin,background-color] duration-200"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
