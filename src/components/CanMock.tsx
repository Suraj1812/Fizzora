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
    ? 'h-[250px] w-[128px] rounded-[2.4rem]'
    : 'h-[390px] w-[202px] rounded-[3.2rem]';

  return (
    <motion.div
      className={`relative overflow-hidden border border-white/[0.15] bg-black/20 shadow-[0_30px_80px_rgba(0,0,0,0.38)] ${sizeClasses} ${className}`}
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.44),transparent_24%),linear-gradient(90deg,rgba(255,255,255,0.14),transparent_22%,transparent_76%,rgba(255,255,255,0.12)_100%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_34%,rgba(0,0,0,0.26)_100%)]" />
      <div className="absolute inset-x-2 top-2 h-6 rounded-full border border-white/20 bg-white/10" />
      <div className="absolute left-1/2 top-5 h-2.5 w-[64%] -translate-x-1/2 rounded-full bg-white/35 blur-sm" />
      <div className="absolute left-3 top-[4.5rem] rounded-full border border-white/15 bg-black/20 px-2 py-1 text-[0.52rem] font-black uppercase tracking-[0.28em] text-white/76">
        Loud pour
      </div>
      <div className="absolute inset-x-5 top-12 flex items-center justify-between text-[0.58rem] font-black uppercase tracking-[0.34em] text-white/76">
        <span>Fizzora</span>
        <span>0.0%</span>
      </div>
      <div className="absolute inset-y-0 right-3 flex items-center">
        <span className="-rotate-90 text-[0.54rem] font-black uppercase tracking-[0.34em] text-white/54">
          Premium zero-proof
        </span>
      </div>
      <div className="absolute bottom-7 left-5 right-5 rounded-[1.6rem] border border-white/12 bg-black/18 p-3 backdrop-blur-sm">
        <p className="font-display text-[1.7rem] font-extrabold uppercase leading-none tracking-[-0.05em] text-white">
          {name}
        </p>
        <p className="mt-3 text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.14em] text-white/82">
          {flavorLine}
        </p>
      </div>
    </motion.div>
  );
}
