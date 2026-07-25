"use client";

import { memo, useEffect, useId, useRef } from "react";
import "./DotField.css";

type DotFieldProps = {
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  cursorForce?: number;
  bulgeOnly?: boolean;
  bulgeStrength?: number;
  glowRadius?: number;
  sparkle?: boolean;
  waveAmplitude?: number;
  gradientFrom?: string;
  gradientTo?: string;
  glowColor?: string;
  className?: string;
};

type Dot = {
  ax: number;
  ay: number;
  sx: number;
  sy: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
};

const TWO_PI = Math.PI * 2;

export const DotField = memo(function DotField({
  dotRadius = 1.5,
  dotSpacing = 14,
  cursorRadius = 500,
  cursorForce = 0.1,
  bulgeOnly = true,
  bulgeStrength = 67,
  glowRadius = 160,
  sparkle = false,
  waveAmplitude = 0,
  gradientFrom = "rgba(181, 124, 255, 0.68)",
  gradientTo = "rgba(203, 181, 255, 0.42)",
  glowColor = "#8b6cff",
  className = "",
}: DotFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<SVGCircleElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({
    x: -9999,
    y: -9999,
    prevX: -9999,
    prevY: -9999,
    speed: 0,
  });
  const rafRef = useRef<number | null>(null);
  const sizeRef = useRef({ w: 0, h: 0, offsetX: 0, offsetY: 0 });
  const glowOpacity = useRef(0);
  const engagement = useRef(0);
  const glowId = `dot-field-glow-${useId().replaceAll(":", "")}`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const glowEl = glowRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let resizeTimer: ReturnType<typeof setTimeout>;
    let frameCount = 0;

    function buildDots(w: number, h: number) {
      const step = dotRadius + dotSpacing;
      const cols = Math.floor(w / step);
      const rows = Math.floor(h / step);
      const padX = (w % step) / 2;
      const padY = (h % step) / 2;
      const dots: Dot[] = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const ax = padX + col * step + step / 2;
          const ay = padY + row * step + step / 2;
          dots.push({ ax, ay, sx: ax, sy: ay, vx: 0, vy: 0, x: ax, y: ay });
        }
      }
      dotsRef.current = dots;
    }

    function doResize() {
      if (!canvas || !ctx) return;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = {
        w: rect.width,
        h: rect.height,
        offsetX: rect.left + window.scrollX,
        offsetY: rect.top + window.scrollY,
      };
      buildDots(rect.width, rect.height);
    }

    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(doResize, 100);
    }

    function onPointerMove(event: PointerEvent) {
      const size = sizeRef.current;
      mouseRef.current.x = event.pageX - size.offsetX;
      mouseRef.current.y = event.pageY - size.offsetY;
    }

    const speedInterval = window.setInterval(() => {
      const mouse = mouseRef.current;
      const distance = Math.hypot(mouse.prevX - mouse.x, mouse.prevY - mouse.y);
      mouse.speed += (distance - mouse.speed) * 0.5;
      if (mouse.speed < 0.001) mouse.speed = 0;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
    }, 20);

    function tick() {
      if (!ctx) return;
      frameCount += 1;
      const dots = dotsRef.current;
      const mouse = mouseRef.current;
      const { w, h } = sizeRef.current;
      const targetEngagement = reduceMotion ? 0 : Math.min(mouse.speed / 5, 1);
      engagement.current += (targetEngagement - engagement.current) * 0.06;
      glowOpacity.current += (engagement.current - glowOpacity.current) * 0.08;

      if (glowEl) {
        glowEl.setAttribute("cx", String(mouse.x));
        glowEl.setAttribute("cy", String(mouse.y));
        glowEl.style.opacity = String(glowOpacity.current);
      }

      ctx.clearRect(0, 0, w, h);
      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, gradientFrom);
      gradient.addColorStop(1, gradientTo);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      const cursorRadiusSq = cursorRadius * cursorRadius;
      const radius = dotRadius / 2;
      const time = frameCount * 0.02;

      for (let index = 0; index < dots.length; index++) {
        const dot = dots[index];
        const dx = mouse.x - dot.ax;
        const dy = mouse.y - dot.ay;
        const distanceSq = dx * dx + dy * dy;

        if (distanceSq < cursorRadiusSq && engagement.current > 0.01) {
          const distance = Math.max(Math.sqrt(distanceSq), 1);
          const angle = Math.atan2(dy, dx);
          if (bulgeOnly) {
            const influence = 1 - distance / cursorRadius;
            const push = influence * influence * bulgeStrength * engagement.current;
            dot.sx += (dot.ax - Math.cos(angle) * push - dot.sx) * 0.15;
            dot.sy += (dot.ay - Math.sin(angle) * push - dot.sy) * 0.15;
          } else {
            const move = (500 / distance) * (mouse.speed * cursorForce);
            dot.vx += Math.cos(angle) * -move;
            dot.vy += Math.sin(angle) * -move;
          }
        } else if (bulgeOnly) {
          dot.sx += (dot.ax - dot.sx) * 0.1;
          dot.sy += (dot.ay - dot.sy) * 0.1;
        }

        if (!bulgeOnly) {
          dot.vx *= 0.9;
          dot.vy *= 0.9;
          dot.x = dot.ax + dot.vx;
          dot.y = dot.ay + dot.vy;
          dot.sx += (dot.x - dot.sx) * 0.1;
          dot.sy += (dot.y - dot.sy) * 0.1;
        }

        let drawX = dot.sx;
        let drawY = dot.sy;
        if (waveAmplitude > 0 && !reduceMotion) {
          drawY += Math.sin(dot.ax * 0.03 + time) * waveAmplitude;
          drawX += Math.cos(dot.ay * 0.03 + time * 0.7) * waveAmplitude * 0.5;
        }
        const sparkleScale =
          sparkle && (((index * 2654435761) ^ (frameCount >> 3)) >>> 0) % 100 < 3
            ? 1.8
            : 1;
        ctx.moveTo(drawX + radius * sparkleScale, drawY);
        ctx.arc(drawX, drawY, radius * sparkleScale, 0, TWO_PI);
      }
      ctx.fill();
      rafRef.current = window.requestAnimationFrame(tick);
    }

    doResize();
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.clearInterval(speedInterval);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [
    bulgeOnly,
    bulgeStrength,
    cursorForce,
    cursorRadius,
    dotRadius,
    dotSpacing,
    gradientFrom,
    gradientTo,
    sparkle,
    waveAmplitude,
  ]);

  return (
    <div className={`dot-field-container ${className}`.trim()}>
      <canvas ref={canvasRef} />
      <svg aria-hidden="true">
        <defs>
          <radialGradient id={glowId}>
            <stop offset="0%" stopColor={glowColor} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle
          ref={glowRef}
          cx="-9999"
          cy="-9999"
          r={glowRadius}
          fill={`url(#${glowId})`}
        />
      </svg>
    </div>
  );
});
