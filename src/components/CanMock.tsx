import { motion } from 'framer-motion';

interface CanMockProps {
  name: string;
  flavorLine: string;
  gradient: string;
  rotate?: number;
  delay?: number;
  compact?: boolean;
  className?: string;
}

export function CanMock({
  name,
  flavorLine,
  gradient,
  rotate = 0,
  delay = 0,
  compact = false,
  className = '',
}: CanMockProps) {
  const sizeClasses = compact
    ? 'h-[230px] w-[122px] rounded-[2.2rem]'
    : 'h-[360px] w-[190px] rounded-[3rem]';

  return (
    <motion.div
      className={`relative overflow-hidden border border-white/[0.15] bg-black/20 shadow-card ${sizeClasses} ${className}`}
      initial={{ y: 0, rotate }}
      animate={{ y: [0, -14, 0], rotate: [rotate, rotate + 2, rotate] }}
      transition={{
        duration: 7,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ backgroundImage: gradient }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.42),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_34%,rgba(0,0,0,0.22)_100%)]" />
      <div className="absolute left-1/2 top-4 h-3 w-24 -translate-x-1/2 rounded-full bg-white/30 blur-sm" />
      <div className="absolute inset-x-5 top-10 flex items-center justify-between text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-white/75">
        <span>Fizzora</span>
        <span>0.0%</span>
      </div>
      <div className="absolute bottom-8 left-5 right-5">
        <p className="font-display text-2xl font-black uppercase leading-none text-white">
          {name}
        </p>
        <p className="mt-3 text-xs leading-5 text-white/80">{flavorLine}</p>
      </div>
    </motion.div>
  );
}
