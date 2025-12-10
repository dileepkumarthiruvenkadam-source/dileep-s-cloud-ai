import React, { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  hue: number;
};

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

export const CursorEffectAdvanced: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const pointerRef = useRef({ x: -9999, y: -9999, down: false });

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const DPR = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = Math.round(window.innerWidth * DPR);
      canvas.height = Math.round(window.innerHeight * DPR);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(DPR, DPR);
    };

    resize();
    window.addEventListener('resize', resize);

    // Meteor-like particles: mostly warm hues (yellow/orange) with occasional cyan
    // Tuned: lower speed and fewer particles to avoid clutter
    const spawnParticles = (x: number, y: number, count = 3) => {
      const arr = particlesRef.current;
      for (let i = 0; i < count; i++) {
        const angle = rand(-0.2, Math.PI * 2 + 0.2);
        // speed reduced roughly by half compared to previous values
        const speed = rand(30, 130);
        // prefer warm hues (20-60) for meteors, sometimes cyan (190-220)
        const hue = Math.random() < 0.85 ? rand(24, 54) : rand(190, 220);
        arr.push({
          x,
          y,
          vx: Math.cos(angle) * speed * 0.02,
          vy: Math.sin(angle) * speed * 0.02 - rand(0.2, 1.2),
          life: rand(0.6, 1.6),
          size: rand(2, 5),
          hue,
        });
      }
    };

    const onMove = (e: MouseEvent) => {
      pointerRef.current.x = e.clientX;
      pointerRef.current.y = e.clientY;
      // spawn fewer particles per move (halved)
      spawnParticles(e.clientX, e.clientY, 1);
    };

    const onDown = (e: MouseEvent) => {
      pointerRef.current.down = true;
      // reduce burst size for clicks (half of previous 18 -> 9)
      spawnParticles(e.clientX, e.clientY, 9);
    };
    const onUp = () => (pointerRef.current.down = false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      // clear canvas each frame
      ctx.clearRect(0, 0, canvas.width / DPR, canvas.height / DPR);

      const arr = particlesRef.current;
      for (let i = arr.length - 1; i >= 0; i--) {
        const p = arr[i];
        p.vx += (Math.random() - 0.5) * 0.02;
        p.vy += -0.02 * dt * 40; // slight upward drift
        p.x += p.vx * dt * 60;
        p.y += p.vy * dt * 60;
        p.life -= dt * 0.9;

        const alpha = Math.max(0, p.life / 1.6) * 0.95;
        // draw a short streak rotated along velocity for meteor look
        const angle = Math.atan2(p.vy, p.vx);
        const length = Math.max(6, p.size * 8);
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(angle);
        const grad = ctx.createLinearGradient(-length * 0.4, 0, length * 0.6, 0);
        grad.addColorStop(0, `hsla(${p.hue},95%,85%,${alpha})`);
        grad.addColorStop(0.5, `hsla(${p.hue},85%,60%,${alpha * 0.6})`);
        grad.addColorStop(1, `hsla(${p.hue},70%,40%,0)`);
        ctx.fillStyle = grad as any;
        ctx.fillRect(-length * 0.4, -p.size / 2, length, p.size);
        ctx.restore();

        if (p.life <= 0) arr.splice(i, 1);
      }

      // subtle cursor halo (very low alpha so text remains readable)
      const { x, y } = pointerRef.current;
      if (x >= 0 && y >= 0) {
        ctx.beginPath();
        const halo = ctx.createRadialGradient(x, y, 0, x, y, 40);
        halo.addColorStop(0, 'rgba(255,240,200,0.06)');
        halo.addColorStop(1, 'rgba(255,240,200,0)');
        ctx.fillStyle = halo as any;
        ctx.fillRect(x - 40, y - 40, 80, 80);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="cursor-effect-canvas"
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}
    />
  );
};

export default CursorEffectAdvanced;
