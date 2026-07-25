import { Pizza, Beef, CupSoda, Flame, Sandwich, IceCreamCone } from "lucide-react";

const icons = [Pizza, Beef, CupSoda, Flame, Sandwich, IceCreamCone];

// Deterministic scatter (no Math.random) so server/client render match.
const positions = [
  { top: "6%", left: "8%", rot: -18, size: 40 },
  { top: "14%", left: "82%", rot: 22, size: 56 },
  { top: "38%", left: "4%", rot: 12, size: 48 },
  { top: "62%", left: "88%", rot: -12, size: 44 },
  { top: "78%", left: "14%", rot: 26, size: 36 },
  { top: "84%", left: "60%", rot: -20, size: 52 },
  { top: "22%", left: "46%", rot: 8, size: 32 },
  { top: "52%", left: "68%", rot: -30, size: 40 },
];

export default function FoodPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {positions.map((p, i) => {
        const Icon = icons[i % icons.length];
        return (
          <Icon
            key={i}
            className="absolute opacity-[0.08]"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size, transform: `rotate(${p.rot}deg)` }}
          />
        );
      })}
    </div>
  );
}
