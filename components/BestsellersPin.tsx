"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, UtensilsCrossed } from "lucide-react";
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
    <section ref={sectionRef} className="relative overflow-hidden border-y-4 border-brand-500 bg-white py-20">
      <div className="container-page mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-widest text-brand-600">Fan Favorites</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-ink-900 sm:text-5xl">Bestselling Burgers</h2>
        </div>
        <Link href="/menu" className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-600">
          Full Menu <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="pl-5 sm:pl-8">
        <div ref={trackRef} className="flex w-max gap-6 will-change-transform">
          {items.map((item) => (
            <TiltCard
              key={item.name}
              wrapperClassName="w-[78vw] shrink-0 sm:w-[46vw] lg:w-[30vw]"
              className="rounded-2xl border-[3px] border-brand-300 bg-white p-6 shadow-md"
            >
              <div className="mb-5 flex h-44 items-center justify-center rounded-xl border-2 border-dashed border-brand-200 bg-brand-50 text-brand-400">
                <UtensilsCrossed className="h-10 w-10" />
              </div>
              <p className="font-display text-lg font-extrabold uppercase text-ink-900">{item.name}</p>
              <p className="mt-2 text-sm text-ink-800/60">{item.description}</p>
              <p className="mt-4 font-display text-xl font-extrabold text-brand-600">{item.price}</p>
            </TiltCard>
          ))}
          <div className="flex w-[78vw] shrink-0 flex-col items-start justify-center gap-4 sm:w-[46vw] lg:w-[30vw]">
            <p className="font-display text-2xl font-extrabold uppercase text-ink-900">Hungry for more?</p>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white hover:bg-brand-600"
            >
              See Full Menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
