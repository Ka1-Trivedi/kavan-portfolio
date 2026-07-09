"use client";
import { useEffect, useRef, useState } from "react";

interface SkillItem {
  name: string;
  icon: string | React.ReactNode;
  color: string;
}

interface SkillsOrbitProps {
  category: string;
  items: SkillItem[];
  rx?: number;
  ry?: number;
  duration?: number;
}

export function SkillsOrbit({ category, items, rx = 120, ry = 40, duration = 15 }: SkillsOrbitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);
  // Using ref for angle to update continuously in rAF without React state batching issues
  const angleRef = useRef(0);

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    let animId: number;
    let lastTime: number | null = null;
    const speed = (2 * Math.PI) / (duration * 1000); // radians per ms

    const step = (time: number) => {
      if (lastTime !== null) {
        const delta = time - lastTime;
        if (!isHoveredRef.current) {
          angleRef.current = (angleRef.current + speed * delta) % (2 * Math.PI);
        }
      }
      lastTime = time;

      // Update positions manually for performance
      if (containerRef.current) {
        const nodes = containerRef.current.querySelectorAll(".orbit-node");
        nodes.forEach((node, i) => {
          const itemAngle = angleRef.current + (i * 2 * Math.PI) / items.length;
          const x = Math.cos(itemAngle) * rx;
          const y = Math.sin(itemAngle) * ry;
          const zIndex = Math.round(y + 100); // Front has higher y (positive)
          
          // Calculate scale and opacity based on position (y)
          // y goes from -ry (back) to +ry (front)
          const normalizedY = (y + ry) / (2 * ry); // 0 (back) to 1 (front)
          const scale = 0.6 + (normalizedY * 0.6); // 0.6 to 1.2
          const opacity = 0.4 + (normalizedY * 0.6); // 0.4 to 1.0

          const htmlNode = node as HTMLElement;
          htmlNode.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
          htmlNode.style.zIndex = zIndex.toString();
          htmlNode.style.opacity = opacity.toString();
        });
      }

      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [items.length, rx, ry, duration]);

  return (
    <div 
      className="relative flex items-center justify-center h-[250px] w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Center Category Label */}
      <div className="absolute z-10 p-4 rounded-full bg-slate-900/50 dark:bg-black/50 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.1)]">
        <h3 className="text-sm font-bold tracking-widest uppercase text-slate-800 dark:text-slate-200 text-center">
          {category}
        </h3>
      </div>

      <div ref={containerRef} className="absolute inset-0 flex items-center justify-center">
        {items.map((item, i) => (
          <div
            key={i}
            className="orbit-node absolute flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors"
            style={{ transformOrigin: "center center" }}
          >
            <div 
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100/80 dark:bg-[#1a1a1a]/80 border border-slate-200/50 dark:border-white/10 backdrop-blur-md shadow-lg group hover:!scale-110 transition-transform duration-300 min-w-max"
              style={{ boxShadow: `0 8px 32px ${item.color}15` }}
            >
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
