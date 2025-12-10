import { useEffect, useRef } from 'react';

// Lightweight cursor particle effect — spawns small star elements on mousemove
export const CursorEffect = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particleTimeouts = useRef<number[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      spawnParticle(container, x, y);
    };

    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) spawnParticle(container, t.clientX, t.clientY);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onTouch, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onTouch);
      // clear any pending timeouts
      particleTimeouts.current.forEach((id) => clearTimeout(id));
      particleTimeouts.current = [];
    };
  }, []);

  return <div ref={containerRef} className="cursor-effect-container" aria-hidden />;
};

function spawnParticle(container: HTMLDivElement, x: number, y: number) {
  const el = document.createElement('div');
  el.className = 'cursor-star';

  // Randomize size/color/velocity for variety
  const size = 6 + Math.random() * 8; // 6 - 14px
  el.style.width = `${size}px`;
  el.style.height = `${size}px`;

  const hue = 180 + Math.round(Math.random() * 60); // bluish-cyan
  el.style.background = `hsl(${hue}deg 90% 70%)`;
  el.style.left = `${x - size / 2}px`;
  el.style.top = `${y - size / 2}px`;

  // random direction and duration
  const dx = (Math.random() - 0.5) * 120; // -60 .. 60
  const dy = -30 - Math.random() * 80; // -30 .. -110 (float up)
  const duration = 900 + Math.random() * 800; // ms

  el.style.transform = `translate(${dx}px, ${dy}px) scale(1)`;
  el.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms cubic-bezier(.2,.8,.2,1)`;

  container.appendChild(el);

  // Trigger a reflow then start animation
  requestAnimationFrame(() => {
    el.style.opacity = '0';
    el.style.transform = `translate(${dx}px, ${dy}px) scale(0.4)`;
  });

  // Remove after animation
  window.setTimeout(() => {
    try {
      container.removeChild(el);
    } catch (e) {
      // ignore
    }
  }, duration + 50);
}
