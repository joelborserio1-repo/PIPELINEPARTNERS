import { useEffect, useRef } from "react";

// Lightweight canvas: glowing leads flowing left to right along gentle pipes.
// A tasteful nod to "pipeline / flow". Pauses for reduced motion and when hidden.
export default function HeroBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0, running = true;

    const LANES = 7;
    const lanes = [];
    const dots = [];

    function build() {
      lanes.length = 0;
      dots.length = 0;
      for (let i = 0; i < LANES; i++) {
        const y = (h / (LANES + 1)) * (i + 1);
        const amp = 14 + (i % 3) * 10;
        const len = 0.0016 + (i % 4) * 0.0004;
        const phase = i * 1.3;
        lanes.push({ y, amp, len, phase });
        const count = 2 + (i % 2);
        for (let d = 0; d < count; d++) {
          dots.push({ lane: i, x: Math.random() * w, speed: 26 + Math.random() * 34, r: 1.6 + Math.random() * 2.2 });
        }
      }
    }

    function laneY(lane, x) {
      return lane.y + Math.sin(x * lane.len + lane.phase) * lane.amp;
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }

    function drawLanes() {
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(10,11,14,0.06)";
      for (const lane of lanes) {
        ctx.beginPath();
        for (let x = -20; x <= w + 20; x += 14) {
          const y = laneY(lane, x);
          x === -20 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }

    function drawDots() {
      for (const dot of dots) {
        const lane = lanes[dot.lane];
        const y = laneY(lane, dot.x);
        const g = ctx.createRadialGradient(dot.x, y, 0, dot.x, y, dot.r * 7);
        g.addColorStop(0, "rgba(255,140,77,0.9)");
        g.addColorStop(0.4, "rgba(255,106,26,0.35)");
        g.addColorStop(1, "rgba(255,106,26,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(dot.x, y, dot.r * 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(255,170,110,0.95)";
        ctx.beginPath();
        ctx.arc(dot.x, y, dot.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let last = performance.now();
    function frame(now) {
      if (!running) return;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      ctx.clearRect(0, 0, w, h);
      drawLanes();
      for (const dot of dots) {
        dot.x += dot.speed * dt;
        if (dot.x > w + 30) dot.x = -30;
      }
      drawDots();
      raf = requestAnimationFrame(frame);
    }

    resize();
    if (reduce) {
      // Static frame: lanes plus dots, no animation.
      ctx.clearRect(0, 0, w, h);
      drawLanes();
      drawDots();
    } else {
      raf = requestAnimationFrame(frame);
    }

    const onResize = () => resize();
    window.addEventListener("resize", onResize, { passive: true });
    const onVis = () => {
      running = !document.hidden && !reduce;
      if (running) { last = performance.now(); raf = requestAnimationFrame(frame); }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
