import React from "react";

interface SkillItem {
  name: string;
  icon: string | React.ReactNode;
  color: string;
}

interface SkillsRowProps {
  category: string;
  items: SkillItem[];
}

export function SkillsRow({ category, items }: SkillsRowProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h3 className="text-sm font-bold tracking-widest uppercase text-slate-800 dark:text-slate-200 pl-4 border-l-4 border-violet-500">
        {category}
      </h3>
      {/* Hide scrollbar with custom CSS classes usually added, but standard flex scroll works well */}
      <div className="flex items-center gap-4 overflow-x-auto pb-4 px-1" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-violet-500/50 dark:hover:border-violet-500/50 transition-colors shrink-0 shadow-sm"
            style={{ boxShadow: `0 4px 20px ${item.color}15` }}
          >
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
