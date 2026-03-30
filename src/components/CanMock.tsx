import type { PointerEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

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
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, { stiffness: 140, damping: 18, mass: 0.7 });
  const smoothY = useSpring(pointerY, { stiffness: 140, damping: 18, mass: 0.7 });

  const tiltX = useTransform(smoothY, [-0.5, 0.5], [14, -14]);
  const tiltY = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const edgeShift = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const labelLift = useTransform(smoothY, [-0.5, 0.5], [12, -8]);
  const glowShiftX = useTransform(smoothX, [-0.5, 0.5], [-24, 20]);
  const glowShiftY = useTransform(smoothY, [-0.5, 0.5], [10, -16]);
  const shadowScale = useTransform(smoothY, [-0.5, 0.5], [0.92, 1.08]);
  const shadowX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  const wrapperSize = compact ? 'h-[330px] w-[190px]' : 'h-[500px] w-[300px]';
  const shellInset = compact ? '12% 16% 10% 16%' : '10% 18% 9% 18%';
  const bodyRadius = compact ? '2.8rem' : '3.3rem';
  const faceRadius = compact ? '1.9rem' : '2.2rem';
  const titleSize = compact ? '1.8rem' : '2.1rem';
  const subtitleSize = compact ? '0.68rem' : '0.72rem';
  const shadowInset = compact ? 'inset-x-9 bottom-1 h-10' : 'inset-x-12 bottom-2 h-12';

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(x);
    pointerY.set(y);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      className={`relative select-none ${wrapperSize} ${className}`}
      style={{ perspective: 1800 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        className={`pointer-events-none absolute ${shadowInset} rounded-full bg-black/60 blur-2xl`}
        style={{ scaleX: shadowScale, x: shadowX }}
      />

      <motion.div
        className="absolute inset-0"
        initial={{ y: 0, rotateZ: rotate }}
        animate={{ y: [0, -16, 0], rotateZ: [rotate, rotate + 2.6, rotate] }}
        transition={{
          duration: compact ? 7.4 : 8.4,
          delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.div
          className="absolute inset-[8%] rounded-full blur-[65px]"
          style={{
            x: glowShiftX,
            y: glowShiftY,
            backgroundImage: gradient,
            opacity: compact ? 0.24 : 0.3,
            transform: 'translateZ(-40px)',
          }}
        />

        <div
          className="absolute rounded-full border border-white/10 bg-white/8"
          style={{
            inset: shellInset,
            transform: 'translateZ(-16px)',
            filter: 'blur(0.5px)',
          }}
        />

        <div
          className="absolute top-[8%] left-[26%] right-[26%] h-[7%] rounded-full border border-white/25 bg-white/10"
          style={{ transform: 'translateZ(32px)' }}
        />
        <motion.div
          className="absolute left-1/2 top-[10.6%] h-[2.8%] w-[40%] -translate-x-1/2 rounded-full bg-white/40 blur-md"
          style={{ x: edgeShift, transform: 'translateZ(46px)' }}
        />

        <div
          className="absolute left-[15%] top-[14%] bottom-[12%] w-[10%] rounded-full bg-black/28"
          style={{ transform: 'rotateY(74deg) translateZ(14px)' }}
        />
        <div
          className="absolute right-[15%] top-[14%] bottom-[12%] w-[10%] rounded-full bg-white/10"
          style={{ transform: 'rotateY(-74deg) translateZ(14px)' }}
        />

        <div
          className="absolute overflow-hidden border border-white/15"
          style={{
            inset: shellInset,
            borderRadius: bodyRadius,
            backgroundImage: gradient,
            transform: 'translateZ(28px)',
            boxShadow: '0 35px 100px rgba(0,0,0,0.38)',
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.02)_26%,transparent_40%,rgba(0,0,0,0.18)_100%)]" />
          <div className="absolute inset-y-0 left-[14%] w-[8%] bg-white/12 blur-xl" />
          <motion.div
            className="absolute inset-y-[-6%] left-[-8%] w-[24%] bg-white/20 blur-2xl"
            style={{ x: glowShiftX }}
          />
          <div className="absolute inset-x-0 top-[18%] h-px bg-white/15" />
          <div className="absolute inset-x-0 bottom-[18%] h-px bg-white/10" />

          <motion.div
            className="absolute left-3 top-[20%] rounded-full border border-white/15 bg-black/22 px-2.5 py-1 text-[0.5rem] font-black uppercase tracking-[0.28em] text-white/78"
            style={{ y: labelLift, transform: 'translateZ(52px)' }}
          >
            Loud pour
          </motion.div>

          <div className="absolute inset-x-5 top-[18%] flex items-center justify-between text-[0.56rem] font-black uppercase tracking-[0.34em] text-white/76">
            <span>Fizzora</span>
            <span>0.0%</span>
          </div>

          <div className="absolute inset-y-0 right-3 flex items-center">
            <span className="-rotate-90 text-[0.53rem] font-black uppercase tracking-[0.34em] text-white/56">
              Premium zero-proof
            </span>
          </div>

          <motion.div
            className="absolute bottom-5 left-4 right-4 border border-white/12 bg-black/18 backdrop-blur-sm"
            style={{
              y: labelLift,
              transform: 'translateZ(60px)',
              borderRadius: faceRadius,
            }}
          >
            <div className="p-3.5">
              <p
                className="font-display font-extrabold uppercase leading-none tracking-[-0.05em] text-white"
                style={{ fontSize: titleSize }}
              >
                {name}
              </p>
              <p
                className="mt-3 font-semibold uppercase leading-5 tracking-[0.14em] text-white/82"
                style={{ fontSize: subtitleSize }}
              >
                {flavorLine}
              </p>
            </div>
          </motion.div>
        </div>

        <div
          className="absolute left-[28%] right-[28%] bottom-[9.4%] h-[4.6%] rounded-full bg-black/30 blur-md"
          style={{ transform: 'translateZ(20px)' }}
        />

        <motion.div
          className="absolute left-[16%] top-[28%] h-3 w-3 rounded-full bg-white/60 blur-[1px]"
          animate={{ y: [0, -14, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4.6, delay: delay + 0.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'translateZ(72px)' }}
        />
        <motion.div
          className="absolute right-[20%] top-[36%] h-2.5 w-2.5 rounded-full bg-white/40 blur-[1px]"
          animate={{ y: [0, -10, 0], x: [0, 5, 0], opacity: [0.35, 0.8, 0.35] }}
          transition={{ duration: 5.2, delay: delay + 0.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'translateZ(70px)' }}
        />
      </motion.div>
    </div>
  );
}
