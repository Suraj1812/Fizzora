import type { FormEvent } from 'react';
import { MotionConfig, motion, useScroll, useTransform } from 'framer-motion';
import { BrandMark } from './components/BrandMark';
import { CanMock } from './components/CanMock';
import {
  brand,
  features,
  flavors,
  lifestyleShots,
  navLinks,
  servingModes,
  socialLinks,
  testimonials,
  type Feature,
  type Flavor,
  type LifestyleShot,
  type ServingMode,
  type Testimonial,
} from './data/content';

const heroPhotos = [
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
];

const storyPhotos = [
  'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
];

const heroChips = [
  'Late dinner approved',
  'Roof deck ready',
  'Mixes hard',
  'Looks expensive',
];

const orbitNotes = [
  { label: 'Yuzu peel', className: 'left-[7%] top-[18%]', delay: 0.2 },
  { label: 'Hibiscus', className: 'right-[5%] top-[20%]', delay: 0.7 },
  { label: 'Cracked pepper', className: 'left-[10%] bottom-[24%]', delay: 1.1 },
  { label: 'Espresso fizz', className: 'right-[10%] bottom-[18%]', delay: 1.5 },
];

const flavorLayouts = [
  'lg:col-span-7 lg:row-span-2 min-h-[34rem]',
  'lg:col-span-5 min-h-[25rem]',
  'lg:col-span-5 min-h-[25rem]',
  'lg:col-span-7 min-h-[28rem]',
];

const serveAccents = ['#ff7a1a', '#ff3bb8', '#30c9ff'] as const;

export function App() {
  const { scrollY } = useScroll();
  const orbOneY = useTransform(scrollY, [0, 2600], [0, -200]);
  const orbTwoY = useTransform(scrollY, [0, 2600], [0, 220]);
  const heroStackY = useTransform(scrollY, [0, 900], [0, 120]);
  const heroTextY = useTransform(scrollY, [0, 900], [0, -50]);
  const ribbonItems = [...brand.ticker, 'No alcohol. No soft launch energy.', 'Built to be seen.'];

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative overflow-x-hidden bg-night text-white">
        <motion.div
          style={{ y: orbOneY }}
          className="pointer-events-none fixed left-[-8rem] top-[5rem] z-0 h-[24rem] w-[24rem] rounded-full bg-[#ff3bb8]/25 blur-[140px]"
        />
        <motion.div
          style={{ y: orbTwoY }}
          className="pointer-events-none fixed right-[-8rem] top-[18rem] z-0 h-[28rem] w-[28rem] rounded-full bg-[#30c9ff]/20 blur-[170px]"
        />
        <div className="grain-overlay pointer-events-none fixed inset-0 z-0 opacity-40" />

        <div className="relative z-10">
          <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-7">
            <div className="mx-auto flex max-w-[1380px] items-center justify-between rounded-full border border-white/10 bg-black/45 px-5 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <a href="#home" className="flex items-center gap-3">
                <BrandMark className="h-11 w-11 shrink-0 shadow-[0_0_40px_rgba(255,59,184,0.35)]" />
                <div>
                  <p className="font-display text-xl font-extrabold uppercase leading-none tracking-[-0.04em]">
                    {brand.name}
                  </p>
                  <p className="text-[0.62rem] uppercase tracking-[0.38em] text-white/55">
                    {brand.tagline}
                  </p>
                </div>
              </a>

              <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs font-bold uppercase tracking-[0.28em] text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <a
                href="#shop"
                className="rounded-full bg-white px-5 py-3 text-[0.68rem] font-black uppercase tracking-[0.28em] text-night transition-transform duration-300 hover:-translate-y-0.5"
              >
                Buy the Pack
              </a>
            </div>
          </header>

          <main>
            <section id="home" className="relative overflow-hidden px-5 pb-12 pt-28 md:px-8 lg:px-10">
              <div className="mx-auto max-w-[1380px]">
                <div className="grid gap-10 xl:grid-cols-[0.88fr_1.12fr] xl:items-center">
                  <motion.div
                    style={{ y: heroTextY }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="relative pt-6"
                  >
                    <div className="flex flex-wrap gap-3">
                      <Pill>Premium zero-proof</Pill>
                      <Pill>Nightlife energy</Pill>
                      <Pill>4 loud signatures</Pill>
                    </div>

                    <div className="relative mt-8">
                      <span className="hero-outline pointer-events-none absolute -left-1 top-[-3.5rem] hidden font-display text-[7rem] font-extrabold uppercase leading-none md:block xl:text-[10rem]">
                        Loud
                      </span>
                      <h1 className="max-w-4xl font-display text-[3.4rem] font-extrabold uppercase leading-[0.86] tracking-[-0.06em] text-white sm:text-[4.6rem] md:text-[6rem] xl:text-[8rem]">
                        Bright cans
                        <span className="block text-[#d4ff39]">for dark nights.</span>
                      </h1>
                    </div>

                    <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
                      Fizzora is the zero-proof party drink for tables that order loudly, dress well,
                      and stay out longer than planned. Bold fruit, bright fizz, and actual social
                      energy without the alcohol dragging the night.
                    </p>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                      <a
                        href="#flavors"
                        className="rounded-full bg-[linear-gradient(135deg,#ff7a1a_0%,#ff3bb8_50%,#30c9ff_100%)] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.24em] text-white shadow-[0_18px_60px_rgba(255,59,184,0.3)] transition-transform duration-300 hover:-translate-y-1"
                      >
                        Explore Flavors
                      </a>
                      <a
                        href="#story"
                        className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-white/10"
                      >
                        Meet the Brand
                      </a>
                    </div>

                    <div className="mt-10 grid gap-4 md:grid-cols-3">
                      {brand.heroStats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 22 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.75,
                            delay: 0.18 + index * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 backdrop-blur-xl"
                        >
                          <p className="text-[0.7rem] font-black uppercase tracking-[0.32em] text-white/48">
                            {stat.label}
                          </p>
                          <p className="mt-3 text-sm leading-6 text-white/82">{stat.value}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-10 flex flex-wrap gap-3">
                      {heroChips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.25em] text-white/72"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    style={{ y: heroStackY }}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative min-h-[760px]"
                  >
                    <div className="absolute inset-0 rounded-[3.2rem] bg-[linear-gradient(135deg,rgba(255,122,26,0.22),rgba(255,59,184,0.18)_36%,rgba(6,7,11,0.92)_70%)] ring-1 ring-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.48)]" />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
                      className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 border-dashed opacity-35"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
                      className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 opacity-25"
                    />
                    <motion.div
                      animate={{ scale: [0.94, 1.04, 0.94], opacity: [0.24, 0.44, 0.24] }}
                      transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,255,57,0.28),transparent_60%)] blur-[30px]"
                    />
                    <div className="absolute left-6 top-6 h-44 w-56 -rotate-[11deg] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_24px_50px_rgba(0,0,0,0.35)] md:h-52 md:w-64">
                      <img
                        src={heroPhotos[0]}
                        alt="Friends holding drinks on a rooftop at sunset"
                        className="h-full w-full object-cover"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                      />
                    </div>
                    <div className="absolute right-6 top-12 h-52 w-44 rotate-[10deg] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_24px_50px_rgba(0,0,0,0.35)] md:h-64 md:w-56">
                      <img
                        src={heroPhotos[1]}
                        alt="A dressed-up dinner setting with cocktails and cans"
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="absolute bottom-10 left-12 h-44 w-56 -rotate-[7deg] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_24px_50px_rgba(0,0,0,0.35)] md:h-56 md:w-72">
                      <img
                        src={heroPhotos[2]}
                        alt="Friends laughing together during a social night out"
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div className="pointer-events-none absolute bottom-16 left-12 hidden font-display text-[7rem] font-extrabold uppercase leading-none tracking-[-0.08em] text-white/[0.08] lg:block">
                      Fizzora
                    </div>

                    {orbitNotes.map((note) => (
                      <OrbitTag
                        key={note.label}
                        label={note.label}
                        className={note.className}
                        delay={note.delay}
                      />
                    ))}

                    <div className="absolute left-1/2 top-[16%] z-10 -translate-x-1/2 md:top-[12%]">
                      <CanMock
                        name={flavors[0].name}
                        flavorLine={flavors[0].flavorLine}
                        gradient={flavors[0].gradient}
                        rotate={-12}
                        delay={0.1}
                        className="scale-[0.96] md:scale-100"
                      />
                    </div>
                    <div className="absolute left-[8%] top-[26%] z-20 md:top-[30%]">
                      <CanMock
                        name={flavors[1].name}
                        flavorLine={flavors[1].flavorLine}
                        gradient={flavors[1].gradient}
                        rotate={-22}
                        delay={0.35}
                        compact
                      />
                    </div>
                    <div className="absolute right-[6%] top-[34%] z-20 md:top-[28%]">
                      <CanMock
                        name={flavors[2].name}
                        flavorLine={flavors[2].flavorLine}
                        gradient={flavors[2].gradient}
                        rotate={16}
                        delay={0.55}
                        compact
                      />
                    </div>

                    <motion.div
                      animate={{ rotate: [8, 0, 8] }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute right-8 top-[56%] z-30 flex h-32 w-32 items-center justify-center rounded-full bg-[#d4ff39] text-center text-night shadow-[0_24px_60px_rgba(212,255,57,0.24)] md:h-40 md:w-40"
                    >
                      <div>
                        <p className="font-display text-3xl font-extrabold uppercase leading-none md:text-4xl">
                          4
                        </p>
                        <p className="mt-2 text-[0.62rem] font-black uppercase tracking-[0.28em]">
                          Flavors that
                          <br />
                          show up loud
                        </p>
                      </div>
                    </motion.div>

                    <div className="absolute bottom-8 right-8 z-20 max-w-xs rounded-[2rem] border border-white/10 bg-black/55 p-5 backdrop-blur-xl">
                      <p className="text-[0.7rem] font-black uppercase tracking-[0.34em] text-[#d4ff39]">
                        Party pack drop
                      </p>
                      <p className="mt-3 font-display text-3xl font-extrabold uppercase leading-none tracking-[-0.05em]">
                        12 cans.
                        <span className="block text-white/65">Zero boring ones.</span>
                      </p>
                      <p className="mt-4 text-sm leading-6 text-white/72">
                        Four bright flavors designed for dinners, rooftops, afters, and the one
                        friend who always brings the better thing.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            <section className="overflow-hidden border-y border-white/10 bg-black/35 backdrop-blur-xl">
              <div className="flex w-[220%] animate-marquee items-center gap-10 whitespace-nowrap py-5">
                {[...ribbonItems, ...ribbonItems].map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="flex items-center gap-10 text-[0.68rem] font-black uppercase tracking-[0.34em] text-white/60"
                  >
                    <span>{item}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d4ff39]" />
                  </div>
                ))}
              </div>
            </section>

            <section id="benefits" className="section-shell">
              <div className="grid gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:items-start">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.36em] text-[#d4ff39]">
                    Why It Lands
                  </p>
                  <h2 className="mt-5 max-w-xl font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-6xl">
                    Zero-proof should never feel like the backup plan.
                  </h2>
                  <p className="mt-6 max-w-lg text-lg leading-8 text-white/74">
                    The problem with most non-alcoholic drinks is not the lack of alcohol. It is
                    the lack of attitude. Fizzora fixes that with louder flavor, sharper branding,
                    and enough personality to actually hold table space.
                  </p>

                  <div className="mt-8 rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
                    <p className="text-[0.72rem] font-black uppercase tracking-[0.34em] text-white/48">
                      The manifesto
                    </p>
                    <p className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-[-0.05em] text-white">
                      We got tired of wellness-coded cans whispering at the edge of the party.
                    </p>
                    <p className="mt-5 text-sm leading-7 text-white/68">
                      So we built something brighter, messier, more social, and actually worth
                      bringing to the table. This is a flavor-first brand with nightlife instincts,
                      not a compromise drink with better PR.
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {features.map((feature, index) => (
                    <BenefitPanel key={feature.title} feature={feature} index={index} />
                  ))}
                </div>
              </div>
            </section>

            <section id="flavors" className="section-shell pt-6">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm font-black uppercase tracking-[0.36em] text-[#d4ff39]">
                    Signature Drop
                  </p>
                  <h2 className="mt-5 font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-6xl">
                    Four flavors. Four moods. One very loud fridge.
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-white/74">
                    Each can is designed like a headliner: high color, clear personality, and a
                    taste profile strong enough to stand solo or carry a fast mix.
                  </p>
                </div>

                <a
                  href="#shop"
                  className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-black uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-white/10"
                >
                  Shop All Four
                </a>
              </div>

              <div className="mt-12 grid auto-rows-fr gap-5 lg:grid-cols-12">
                {flavors.map((flavor, index) => (
                  <FlavorPoster
                    key={flavor.name}
                    flavor={flavor}
                    index={index}
                    className={flavorLayouts[index]}
                  />
                ))}
              </div>
            </section>

            <section id="story" className="section-shell">
              <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-stretch">
                <div className="rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,122,26,0.12),rgba(255,59,184,0.08)_38%,rgba(255,255,255,0.03)_100%)] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.34)] md:p-10">
                  <p className="text-sm font-black uppercase tracking-[0.36em] text-[#d4ff39]">
                    Brand Story
                  </p>
                  <h2 className="mt-5 max-w-2xl font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-6xl">
                    We did not build this to be polite.
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                    Fizzora started with one simple frustration: too many “grown-up” drinks looked
                    great in a press release and tasted invisible in real life. We wanted something
                    with nightlife color, expensive energy, and a flavor profile that actually
                    deserved the moment.
                  </p>

                  <div className="mt-10 grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[2.2rem] border border-white/10 bg-black/35 p-6 backdrop-blur-xl">
                      <p className="text-[0.72rem] font-black uppercase tracking-[0.34em] text-white/45">
                        Our point of view
                      </p>
                      <p className="mt-5 font-display text-3xl font-extrabold uppercase leading-tight tracking-[-0.05em] text-white">
                        If the can cannot hold its own in the center of a table, it is not done.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <StoryStat value="12" label="cans in the party pack" />
                      <StoryStat value="4" label="hero flavors with distinct moods" />
                      <StoryStat value="0.0%" label="alcohol, still all in" />
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-[2.6rem] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:col-span-2">
                    <img
                      src={storyPhotos[0]}
                      alt="A lively club scene with people dancing and holding drinks"
                      className="h-[20rem] w-full object-cover md:h-[26rem]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="rounded-[2.4rem] border border-white/10 bg-[#121218] p-6">
                    <p className="text-[0.72rem] font-black uppercase tracking-[0.34em] text-[#30c9ff]">
                      Not preachy
                    </p>
                    <p className="mt-4 text-base leading-7 text-white/74">
                      We are not here to explain why you should feel virtuous. We are here to make
                      the better-looking, better-tasting thing in the cooler.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-[2.4rem] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                    <img
                      src={storyPhotos[1]}
                      alt="Canned drinks on a table during a dinner party"
                      className="h-full min-h-[15rem] w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="section-shell overflow-hidden">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.36em] text-[#d4ff39]">
                  Lifestyle
                </p>
                <h2 className="mt-5 font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-6xl">
                  No rules. Just good times.
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/74">
                  Fizzora belongs at rooftops, dinner parties, golden hour hangs, and all the
                  accidental afters that happen when nobody wants to call it yet.
                </p>
              </div>

              <div className="hide-scrollbar mt-12 flex gap-5 overflow-x-auto pb-2">
                {lifestyleShots.map((shot, index) => (
                  <MomentCard key={shot.title} shot={shot} index={index} />
                ))}
              </div>
            </section>

            <section id="reviews" className="section-shell pt-6">
              <div className="grid gap-8 xl:grid-cols-[0.85fr_1.15fr] xl:items-start">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.36em] text-[#d4ff39]">
                    Group Chat Reviews
                  </p>
                  <h2 className="mt-5 max-w-xl font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-6xl">
                    Not wellness-speak. Real friend-speak.
                  </h2>
                  <p className="mt-6 max-w-lg text-lg leading-8 text-white/74">
                    The feedback loop is simple: if it tastes flat, nobody reorders it. If it looks
                    cheap, it never makes the table. Fizzora keeps getting brought back because it
                    clears both.
                  </p>

                  <div className="mt-8 rounded-[2.4rem] border border-white/10 bg-[#111217] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
                    <p className="text-[0.72rem] font-black uppercase tracking-[0.34em] text-white/45">
                      Crowd average
                    </p>
                    <div className="mt-4 flex items-end gap-4">
                      <p className="font-display text-6xl font-extrabold uppercase leading-none tracking-[-0.08em] text-white">
                        4.9
                      </p>
                      <p className="pb-2 text-sm font-bold uppercase tracking-[0.24em] text-white/58">
                        imaginary stars
                      </p>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-white/72">
                      Fictional reviews, real intent: this should feel like the can people talk about
                      before they ask where you got it.
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {testimonials.map((testimonial, index) => (
                    <ReviewBubble key={testimonial.name} testimonial={testimonial} index={index} />
                  ))}
                </div>
              </div>
            </section>

            <section className="section-shell">
              <div className="rounded-[3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.32)] md:p-10">
                <div className="max-w-3xl">
                  <p className="text-sm font-black uppercase tracking-[0.36em] text-[#d4ff39]">
                    How To Drink It
                  </p>
                  <h2 className="mt-5 font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-6xl">
                    Keep it easy. Keep it loud.
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-white/74">
                    Fizzora works straight from the can, over ice, or mixed into something faster.
                    The whole point is that none of those choices feel like settling.
                  </p>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                  {servingModes.map((mode, index) => (
                    <ServePanel key={mode.title} mode={mode} index={index} />
                  ))}
                </div>
              </div>
            </section>

            <section id="shop" className="section-shell pt-2">
              <div className="relative overflow-hidden rounded-[3.2rem] border border-white/10 bg-[linear-gradient(120deg,#ff7a1a_0%,#ff3bb8_46%,#0b111f_100%)] px-7 py-8 shadow-[0_40px_120px_rgba(0,0,0,0.4)] md:px-10 md:py-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_28%),radial-gradient(circle_at_12%_28%,rgba(212,255,57,0.2),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.18))]" />
                <div className="relative grid gap-8 xl:grid-cols-[1fr_26rem] xl:items-end">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.36em] text-white/78">
                      Final Pour
                    </p>
                    <h2 className="mt-5 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-7xl">
                      Ready to bring something better to the night?
                    </h2>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84">
                      Start with the party pack, pick a favorite, then act surprised when your
                      “one case” disappears before midnight.
                    </p>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                      <a
                        href="#home"
                        className="rounded-full bg-white px-8 py-4 text-center text-sm font-black uppercase tracking-[0.24em] text-night transition-transform duration-300 hover:-translate-y-0.5"
                      >
                        Shop Now
                      </a>
                      <a
                        href="#reviews"
                        className="rounded-full border border-white/20 bg-black/20 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-black/30"
                      >
                        Read the Hype
                      </a>
                    </div>
                  </div>

                  <div className="rounded-[2.4rem] border border-white/15 bg-black/35 p-6 backdrop-blur-xl">
                    <p className="text-[0.72rem] font-black uppercase tracking-[0.34em] text-[#d4ff39]">
                      Best first order
                    </p>
                    <p className="mt-4 font-display text-4xl font-extrabold uppercase leading-none tracking-[-0.06em] text-white">
                      Fizzora Party Pack
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/76">
                      12 cans across all four signatures. Built for hosts, over-packers, and people
                      who do not want to arrive empty-handed.
                    </p>

                    <div className="mt-6 space-y-3">
                      {[
                        '3 cans each of Citrus Riot, Berry Afterdark, Ginger Frequency, and Midnight Disco Cola',
                        'Good in the cooler, stronger in a rocks glass, fully comfortable on a dinner table',
                        'Free shipping over two cases and a loud sticker in every first order',
                      ].map((line) => (
                        <div
                          key={line}
                          className="rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-3 text-sm leading-6 text-white/82"
                        >
                          {line}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[0.65rem] font-black uppercase tracking-[0.28em] text-white/46">
                          Starting at
                        </p>
                        <p className="mt-2 font-display text-5xl font-extrabold uppercase leading-none tracking-[-0.08em] text-white">
                          $34
                        </p>
                      </div>
                      <BrandMark className="h-14 w-14 shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer className="px-5 pb-10 pt-2 md:px-8 lg:px-10">
            <div className="mx-auto grid max-w-[1380px] gap-8 rounded-[2.6rem] border border-white/10 bg-black/35 p-7 backdrop-blur-2xl md:p-8 xl:grid-cols-[0.9fr_0.8fr_0.9fr]">
              <div>
                <div className="flex items-center gap-3">
                  <BrandMark className="h-12 w-12 shrink-0" />
                  <div>
                    <p className="font-display text-2xl font-extrabold uppercase tracking-[-0.05em]">
                      {brand.name}
                    </p>
                    <p className="text-[0.62rem] uppercase tracking-[0.38em] text-white/52">
                      {brand.tagline}
                    </p>
                  </div>
                </div>
                <p className="mt-5 max-w-sm text-sm leading-7 text-white/68">
                  A fictional campaign brand built for brighter cans, darker nights, and social
                  energy that does not disappear after one sip.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link}
                      href="#home"
                      className="rounded-full border border-white/10 px-4 py-2 text-[0.7rem] font-black uppercase tracking-[0.24em] text-white/72 transition-colors duration-300 hover:bg-white/10"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 text-sm">
                <FooterColumn
                  title="Navigate"
                  links={navLinks.map((link) => ({ label: link.label, href: link.href }))}
                />
                <FooterColumn
                  title="Contact"
                  links={[
                    { label: 'hello@fizzora.party', href: 'mailto:hello@fizzora.party' },
                    { label: 'Shipping & FAQs', href: '#shop' },
                    { label: 'About the Brand', href: '#story' },
                  ]}
                />
              </div>

              <div>
                <p className="text-[0.7rem] font-black uppercase tracking-[0.34em] text-white/46">
                  Newsletter
                </p>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/68">
                  New drops, party pack news, playlist energy, and the occasional very good excuse
                  to stock the fridge.
                </p>
                <form
                  className="mt-6 flex flex-col gap-3 sm:flex-row"
                  onSubmit={handleNewsletterSubmit}
                  aria-label="Newsletter signup"
                >
                  <label className="sr-only" htmlFor="newsletter-email">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Your email"
                    className="min-w-0 flex-1 rounded-full border border-white/10 bg-black/35 px-5 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/30"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.24em] text-night transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Join In
                  </button>
                </form>
                <p className="mt-6 text-xs leading-6 text-white/36">
                  © 2026 Fizzora. Fictional landing-page concept. Crafted to feel loud, social,
                  premium, and actually worth clicking.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </MotionConfig>
  );
}

function Pill({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-white/12 bg-black/30 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.24em] text-white/72">
      {children}
    </span>
  );
}

function FeatureGlyph({ type }: { type: Feature['icon'] }) {
  const common = 'h-6 w-6 stroke-[1.8]';

  switch (type) {
    case 'ingredients':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20Z" stroke="currentColor" />
          <path d="M9 13C9.5 10 11.1 8.2 14 8" stroke="currentColor" strokeLinecap="round" />
          <path d="M11 16C11.5 13.5 12.6 12.2 15 11.5" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case 'sweetener':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M5 19L19 5" stroke="currentColor" strokeLinecap="round" />
          <path d="M8 8L16 16" stroke="currentColor" strokeLinecap="round" />
          <path d="M12 21C16.971 21 21 16.971 21 12C21 7.029 16.971 3 12 3C7.029 3 3 7.029 3 12C3 16.971 7.029 21 12 21Z" stroke="currentColor" />
        </svg>
      );
    case 'flavor':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M12 3L15 9L21 10L16.5 14.2L17.5 21L12 18L6.5 21L7.5 14.2L3 10L9 9L12 3Z" stroke="currentColor" strokeLinejoin="round" />
        </svg>
      );
    case 'mix':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M7 4H17L14.5 20H9.5L7 4Z" stroke="currentColor" strokeLinejoin="round" />
          <path d="M9 9H15" stroke="currentColor" strokeLinecap="round" />
          <path d="M7.5 4L5 2" stroke="currentColor" strokeLinecap="round" />
          <path d="M16.5 4L19 2" stroke="currentColor" strokeLinecap="round" />
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

function BenefitPanel({ feature, index }: { feature: Feature; index: number }) {
  const accents = [
    'from-[#ff7a1a]/22 to-white/[0.03]',
    'from-[#ff3bb8]/20 to-white/[0.03]',
    'from-[#30c9ff]/18 to-white/[0.03]',
    'from-[#d4ff39]/16 to-white/[0.03]',
    'from-[#7b5cff]/18 to-white/[0.03]',
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, rotate: index % 2 === 0 ? -1 : 1 }}
      className={`rounded-[2.2rem] border border-white/10 bg-gradient-to-br ${accents[index]} p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)]`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-[1.4rem] border border-white/10 bg-black/30 text-white">
          <FeatureGlyph type={feature.icon} />
        </div>
        <span className="font-display text-4xl font-extrabold uppercase tracking-[-0.08em] text-white/14">
          0{index + 1}
        </span>
      </div>
      <h3 className="mt-6 max-w-xs font-display text-3xl font-extrabold uppercase leading-none tracking-[-0.05em] text-white">
        {feature.title}
      </h3>
      <p className="mt-4 max-w-sm text-sm leading-7 text-white/74">{feature.description}</p>
    </motion.article>
  );
}

function FlavorPoster({
  flavor,
  index,
  className,
}: {
  flavor: Flavor;
  index: number;
  className: string;
}) {
  const notes = flavor.flavorLine.split(',').map((note) => note.trim());
  const canClasses = [
    'absolute bottom-6 right-2 origin-bottom-right scale-[0.95] md:right-6 md:scale-[1.08]',
    'absolute bottom-[-0.5rem] right-2 origin-bottom-right scale-[0.82]',
    'absolute bottom-[-0.5rem] right-2 origin-bottom-right scale-[0.82]',
    'absolute bottom-2 right-2 origin-bottom-right scale-[0.88] md:right-6 md:scale-[0.98]',
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.01 }}
      className={`group relative isolate overflow-hidden rounded-[2.8rem] border border-white/10 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.32)] md:p-8 ${className}`}
      style={{ backgroundImage: flavor.gradient }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_30%,rgba(0,0,0,0.18)_100%)]" />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ backgroundImage: `radial-gradient(circle_at_top_right, ${flavor.accent}4a, transparent 30%)` }} />
      <div className="relative flex h-full flex-col justify-between">
        <div className="max-w-[60%]">
          <div className="flex items-start justify-between gap-4">
            <div className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.28em] text-white/78">
              0{index + 1}
            </div>
            <span className="hidden rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.24em] text-white/76 sm:inline-flex">
              {flavor.price}
            </span>
          </div>
          <p className="mt-8 text-[0.68rem] font-black uppercase tracking-[0.32em] text-white/70">
            {flavor.flavorLine}
          </p>
          <h3 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.88] tracking-[-0.06em] text-white md:text-5xl">
            {flavor.name}
          </h3>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/84">{flavor.description}</p>
        </div>

        <div className="relative z-10 mt-10 max-w-[70%]">
          <div className="flex flex-wrap gap-2">
            {notes.map((note) => (
              <span
                key={note}
                className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/78"
              >
                {note}
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-sm text-sm font-bold leading-7 text-white/88">{flavor.detail}</p>
          <a
            href="#shop"
            className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-night transition-transform duration-300 hover:-translate-y-0.5"
          >
            Shop Flavor
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute left-6 top-4 font-display text-[7rem] font-extrabold uppercase leading-none tracking-[-0.08em] text-white/[0.08] md:text-[9rem]">
        0{index + 1}
      </div>

      <CanMock
        name={flavor.name}
        flavorLine={flavor.flavorLine}
        gradient={flavor.gradient}
        rotate={index % 2 === 0 ? -8 : 10}
        delay={index * 0.2}
        compact={index !== 0}
        className={canClasses[index]}
      />
    </motion.article>
  );
}

function StoryStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5">
      <p className="font-display text-4xl font-extrabold uppercase leading-none tracking-[-0.07em] text-white">
        {value}
      </p>
      <p className="mt-3 text-[0.68rem] font-black uppercase tracking-[0.28em] text-white/46">
        {label}
      </p>
    </div>
  );
}

function MomentCard({ shot, index }: { shot: LifestyleShot; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-[2.6rem] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.35)] ${
        index === 0
          ? 'min-w-[82vw] md:min-w-[42rem] xl:min-w-[48rem]'
          : 'min-w-[20rem] md:min-w-[25rem] xl:min-w-[28rem]'
      }`}
    >
      <img
        src={shot.image}
        alt={shot.title}
        className="h-[25rem] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[30rem]"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_10%,rgba(0,0,0,0.12)_40%,rgba(0,0,0,0.88)_100%)]" />
      <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.24em] text-white/78">
        0{index + 1}
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <p className="text-[0.7rem] font-black uppercase tracking-[0.34em] text-[#d4ff39]">
          {index === 0 ? 'No Rules. Just Good Times.' : shot.title}
        </p>
        <p className="mt-4 max-w-md font-display text-3xl font-extrabold uppercase leading-none tracking-[-0.05em] text-white md:text-4xl">
          {shot.caption}
        </p>
      </div>
    </motion.article>
  );
}

function ReviewBubble({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const tones = [
    'bg-[linear-gradient(180deg,rgba(255,122,26,0.18),rgba(255,255,255,0.04))]',
    'bg-[linear-gradient(180deg,rgba(255,59,184,0.18),rgba(255,255,255,0.04))]',
    'bg-[linear-gradient(180deg,rgba(48,201,255,0.18),rgba(255,255,255,0.04))]',
    'bg-[linear-gradient(180deg,rgba(212,255,57,0.14),rgba(255,255,255,0.04))]',
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, rotate: index % 2 === 0 ? -1 : 1 }}
      className={`rounded-[2.2rem] border border-white/10 ${tones[index % tones.length]} p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)]`}
    >
      <p className="text-[0.72rem] font-black uppercase tracking-[0.34em] text-[#d4ff39]">
        ★★★★★
      </p>
      <p className="mt-5 text-lg leading-8 text-white/90">“{testimonial.quote}”</p>
      <div className="mt-8">
        <p className="font-bold uppercase tracking-[0.08em] text-white">{testimonial.name}</p>
        <p className="mt-1 text-sm text-white/58">{testimonial.title}</p>
      </div>
    </motion.article>
  );
}

function ServePanel({ mode, index }: { mode: ServingMode; index: number }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="rounded-[2.2rem] border border-white/10 bg-black/30 p-6 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full text-night"
          style={{ backgroundColor: serveAccents[index] }}
        >
          <span className="font-display text-2xl font-extrabold uppercase">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      <h3 className="mt-7 font-display text-3xl font-extrabold uppercase leading-none tracking-[-0.05em] text-white">
        {mode.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-white/74">{mode.description}</p>
    </motion.article>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <p className="text-[0.7rem] font-black uppercase tracking-[0.34em] text-white/46">{title}</p>
      <div className="mt-4 space-y-3 text-white/76">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="block transition-colors hover:text-white">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function OrbitTag({
  label,
  className,
  delay,
}: {
  label: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        x: [0, 6, 0],
        rotate: [-4, 4, -4],
      }}
      transition={{
        duration: 7 + delay,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`absolute z-30 rounded-full border border-white/12 bg-black/45 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.24em] text-white/76 backdrop-blur-xl ${className}`}
    >
      {label}
    </motion.div>
  );
}
