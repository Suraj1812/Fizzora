import { motion } from 'framer-motion';

interface ReviewCardProps {
  quote: string;
  name: string;
  title: string;
  index: number;
}

export function ReviewCard({ quote, name, title, index }: ReviewCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.32 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-card backdrop-blur-xl"
    >
      <div className="text-sm tracking-[0.2em] text-volt">★★★★★</div>
      <p className="mt-5 text-lg leading-8 text-white/90">“{quote}”</p>
      <div className="mt-8">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-white/[0.58]">{title}</p>
      </div>
    </motion.article>
  );
}
