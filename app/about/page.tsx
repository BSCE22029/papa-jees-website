import type { Metadata } from "next";
import MotionSection from "@/components/MotionSection";
import { siteConfig } from "@/lib/site-config";
import { Award, Users, Utensils } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn the story behind ${siteConfig.name}, Gulberg's favorite fast food destination since day one.`,
};

export default function AboutPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <MotionSection>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Our Story</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ink-900 sm:text-5xl">
          Built on Flavor, Loved by Lahore
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-800/70">
          {siteConfig.name} started as a single counter in Gulberg with one goal: serve the best burger in the
          neighborhood, every single time. Word spread fast, and over a decade later, we&apos;ve grown into one of
          Gulberg&apos;s most-loved fast food spots — with a Facebook community of over 86,000 people who keep coming
          back for the same reason they always have: real flavor, made fresh, served fast.
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-800/70">
          Founded and still run by {siteConfig.owner}, our kitchen holds onto the same recipes and standards that
          built our name — no shortcuts, no compromises.
        </p>
      </MotionSection>

      <MotionSection delay={0.1} className="mt-16 grid gap-6 sm:grid-cols-3">
        {[
          { icon: Award, title: "10+ Years", desc: "Serving Gulberg and greater Lahore since our very first counter." },
          { icon: Users, title: "86,000+ Fans", desc: "A community built one satisfied customer at a time." },
          { icon: Utensils, title: "Fresh Daily", desc: "Every order made to order — nothing sits and waits." },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-black/5 bg-brand-50 p-6">
            <item.icon className="h-8 w-8 text-brand-600" />
            <p className="mt-4 font-display text-xl font-bold text-ink-900">{item.title}</p>
            <p className="mt-2 text-sm text-ink-800/60">{item.desc}</p>
          </div>
        ))}
      </MotionSection>
    </div>
  );
}
