"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TiltCard from "./TiltCard";
import type { MenuItem } from "@/lib/site-config";

gsap.registerPlugin(ScrollTrigger);

export default function BestsellersPin({ items }: { items: MenuItem[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (prefersReduced || isMobile) return;

    const ctx = gsap.context(() => {
      const scrollAmount = track.scrollWidth - window.innerWidth + 96;
      const tween = gsap.to(track, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollAmount}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
      return () => tween.scrollTrigger?.kill();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink-900 py-20 text-white">
      <div className="container-page mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">Fan Favorites</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-5xl">Bestselling Burgers</h2>
        </div>
        <Link href="/menu" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300">
          Full Menu <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="pl-5 sm:pl-8">
        <div ref={trackRef} className="flex w-max gap-6 will-change-transform">
          {items.map((item) => (
            <TiltCard
              key={item.name}
              wrapperClassName="w-[78vw] shrink-0 sm:w-[46vw] lg:w-[30vw]"
              className="rounded-2xl bg-white/5 p-8"
            >
              <div className="mb-5 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/30 to-brand-700/30 text-xs text-white/50">
                Food photo placeholder
              </div>
              <p className="font-display text-xl font-semibold">{item.name}</p>
              <p className="mt-2 text-sm text-white/60">{item.description}</p>
              <p className="mt-4 font-display text-lg text-brand-400">{item.price}</p>
            </TiltCard>
          ))}
          <div className="flex w-[78vw] shrink-0 flex-col items-start justify-center gap-4 sm:w-[46vw] lg:w-[30vw]">
            <p className="font-display text-2xl font-bold">Hungry for more?</p>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600"
            >
              See Full Menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
