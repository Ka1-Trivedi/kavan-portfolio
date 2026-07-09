"use client";
import { useEffect, useRef } from "react";

interface OrbitItem {
  label: string;
  icon: string; // emoji or text abbreviation
  color: string;
}

interface OrbitRingProps {
  items: OrbitItem[];
  radius: number;
  duration: number;
  reverse?: boolean;
  className?: string;
  label?: string;
}

export function OrbitRing({ items, radius, duration, reverse = false, label }: OrbitRingProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let start: number | null = null;
    let animId: number;

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = (elapsed / (duration * 1000)) % 1;
      const angle = (reverse ? -1 : 1) * progress * 360;
      if (container) {
        container.style.transform = `rotate(${angle}deg)`;
      }
      // Counter-rotate children so icons stay upright
      const children = container?.querySelectorAll<HTMLElement>(".orbit-item-inner");
      children?.forEach((child) => {
        child.style.transform = `rotate(${-angle}deg)`;
      });
      animId = requestAnimationFrame(step);
    }

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [duration, reverse]);

  return (
    <div
      className="absolute rounded-full border border-white/10 dark:border-white/10 light:border-black/10"
      style={{ width: radius * 2, height: radius * 2, top: "50%", left: "50%", marginLeft: -radius, marginTop: -radius }}
    >
      {label && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-xs text-slate-500 dark:text-slate-500 font-mono uppercase tracking-widest opacity-0">{label}</span>
        </div>
      )}
      <div ref={containerRef} className="absolute inset-0" style={{ transformOrigin: "center center" }}>
        {items.map((item, i) => {
          const angleDeg = (360 / items.length) * i;
          const angleRad = (angleDeg * Math.PI) / 180;
          const x = radius + Math.cos(angleRad) * radius - 24;
          const y = radius + Math.sin(angleRad) * radius - 24;
          return (
            <div
              key={i}
              className="absolute w-12 h-12 flex items-center justify-center"
              style={{ left: x, top: y }}
            >
              <div className="orbit-item-inner flex flex-col items-center gap-1 group cursor-default">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold shadow-lg transition-transform group-hover:scale-125 duration-300 backdrop-blur-sm border border-white/20"
                  style={{ background: item.color + "22", boxShadow: `0 0 15px ${item.color}44` }}
                >
                  <span style={{ filter: "drop-shadow(0 0 4px " + item.color + "99)" }}>{item.icon}</span>
                </div>
                <span className="text-[9px] font-mono text-slate-400 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{item.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
