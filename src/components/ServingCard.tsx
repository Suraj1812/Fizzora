import { motion } from 'framer-motion';
import type { ServingIcon } from '../data/content';

interface ServingCardProps {
  icon: ServingIcon;
  title: string;
  description: string;
}

function Icon({ icon }: { icon: ServingIcon }) {
  const common = 'h-6 w-6 stroke-[1.8]';

  switch (icon) {
    case 'straight':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M8 3H16L14 20H10L8 3Z" stroke="currentColor" strokeLinejoin="round" />
          <path d="M10 8H14" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case 'mix':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M6 6L18 18" stroke="currentColor" strokeLinecap="round" />
          <path d="M18 6L6 18" stroke="currentColor" strokeLinecap="round" />
          <path d="M12 4V20" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case 'anywhere':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M12 4L19 8V16L12 20L5 16V8L12 4Z" stroke="currentColor" strokeLinejoin="round" />
          <path d="M12 12L19 8" stroke="currentColor" strokeLinejoin="round" />
          <path d="M12 12V20" stroke="currentColor" strokeLinejoin="round" />
          <path d="M12 12L5 8" stroke="currentColor" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function ServingCard({ icon, title, description }: ServingCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-card backdrop-blur-xl"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cobalt">
        <Icon icon={icon} />
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{description}</p>
    </motion.article>
  );
}
