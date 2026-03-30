import { motion } from 'framer-motion';
import type { FeatureIcon } from '../data/content';

interface FeatureCardProps {
  icon: FeatureIcon;
  title: string;
  description: string;
}

function Icon({ icon }: { icon: FeatureIcon }) {
  const common = 'h-6 w-6 stroke-[1.8]';

  switch (icon) {
    case 'ingredients':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20Z" stroke="currentColor" />
          <path d="M12 8V12L14.8 14.4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'sweetener':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M7 7L17 17" stroke="currentColor" strokeLinecap="round" />
          <path d="M17 7L7 17" stroke="currentColor" strokeLinecap="round" />
          <path d="M12 4C16.418 4 20 7.582 20 12C20 16.418 16.418 20 12 20C7.582 20 4 16.418 4 12C4 7.582 7.582 4 12 4Z" stroke="currentColor" />
        </svg>
      );
    case 'flavor':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M12 3L14.8 8.4L21 9.3L16.5 13.5L17.6 19.5L12 16.5L6.4 19.5L7.5 13.5L3 9.3L9.2 8.4L12 3Z" stroke="currentColor" strokeLinejoin="round" />
        </svg>
      );
    case 'mix':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M7 4H17L14 20H10L7 4Z" stroke="currentColor" strokeLinejoin="round" />
          <path d="M9 9H15" stroke="currentColor" strokeLinecap="round" />
          <path d="M8 4L6 2" stroke="currentColor" strokeLinecap="round" />
          <path d="M16 4L18 2" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case 'zero':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M7 12C7 8.686 9.686 6 13 6C16.314 6 19 8.686 19 12C19 15.314 16.314 18 13 18C9.686 18 7 15.314 7 12Z" stroke="currentColor" />
          <path d="M5 19L19 5" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
  }
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-card backdrop-blur-xl"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-volt">
        <Icon icon={icon} />
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{description}</p>
    </motion.article>
  );
}
