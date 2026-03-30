import { motion } from 'framer-motion';
import { CanMock } from './CanMock';
import type { Flavor } from '../data/content';

interface FlavorCardProps {
  flavor: Flavor;
  index: number;
}

export function FlavorCard({ flavor, index }: FlavorCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.04] p-7 shadow-card backdrop-blur-xl"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ backgroundImage: `radial-gradient(circle at top right, ${flavor.accent}35, transparent 34%)` }} />
      <div className="relative grid gap-6 md:grid-cols-[1fr_150px] md:items-end">
        <div>
          <div className="inline-flex rounded-full border border-white/[0.15] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/[0.65]">
            0.0% ABV
          </div>
          <h3 className="mt-6 font-display text-3xl font-black uppercase leading-none text-white md:text-[2.4rem]">
            {flavor.name}
          </h3>
          <p className="mt-3 text-base font-semibold text-white/[0.82]">{flavor.flavorLine}</p>
          <p className="mt-4 max-w-lg text-sm leading-6 text-white/[0.72]">{flavor.description}</p>
          <p className="mt-4 text-sm font-semibold text-white/90">{flavor.detail}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="rounded-full border border-white/[0.15] px-4 py-2 text-sm font-semibold text-white/[0.88]">
              {flavor.price}
            </span>
            <a
              href="#shop"
              className="rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-night transition-transform duration-300 hover:-translate-y-0.5"
            >
              Shop Flavor
            </a>
          </div>
        </div>
        <div className="flex justify-start md:justify-end">
          <CanMock
            name={flavor.name}
            flavorLine={flavor.flavorLine}
            gradient={flavor.gradient}
            compact
            rotate={-10 + index * 3}
            delay={index * 0.3}
          />
        </div>
      </div>
    </motion.article>
  );
}
