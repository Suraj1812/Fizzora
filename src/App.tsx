import type { FormEvent } from 'react';
import { MotionConfig, motion, useScroll, useTransform } from 'framer-motion';
import { BrandMark } from './components/BrandMark';
import { CanMock } from './components/CanMock';
import { FeatureCard } from './components/FeatureCard';
import { FlavorCard } from './components/FlavorCard';
import { ReviewCard } from './components/ReviewCard';
import { SectionHeading } from './components/SectionHeading';
import { ServingCard } from './components/ServingCard';
import {
  brand,
  features,
  flavors,
  lifestyleShots,
  navLinks,
  servingModes,
  socialLinks,
  testimonials,
} from './data/content';

const heroBackground =
  'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=1600&q=80';
const storyImage =
  'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80';

export function App() {
  const { scrollY } = useScroll();
  const orbOneY = useTransform(scrollY, [0, 2500], [0, -180]);
  const orbTwoY = useTransform(scrollY, [0, 2500], [0, 220]);
  const orbThreeY = useTransform(scrollY, [0, 2500], [0, -120]);
  const heroVisualY = useTransform(scrollY, [0, 900], [0, 120]);
  const tickerItems = [...brand.ticker, ...brand.ticker];

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative overflow-x-hidden bg-night text-white">
        <motion.div
          style={{ y: orbOneY }}
          className="pointer-events-none fixed left-[-8rem] top-[10rem] z-0 h-[24rem] w-[24rem] rounded-full bg-neon/30 blur-[140px]"
        />
        <motion.div
          style={{ y: orbTwoY }}
          className="pointer-events-none fixed right-[-10rem] top-[24rem] z-0 h-[28rem] w-[28rem] rounded-full bg-cobalt/20 blur-[160px]"
        />
        <motion.div
          style={{ y: orbThreeY }}
          className="pointer-events-none fixed bottom-[-10rem] left-[35%] z-0 h-[20rem] w-[20rem] rounded-full bg-volt/10 blur-[120px]"
        />

        <div className="relative z-10">
        <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-6">
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/[0.35] px-5 py-4 shadow-card backdrop-blur-xl">
            <a href="#home" className="flex items-center gap-3">
              <BrandMark className="h-11 w-11 shrink-0 shadow-glow" />
              <div>
                <p className="font-display text-xl font-black uppercase leading-none">
                  {brand.name}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/[0.48]">
                  {brand.tagline}
                </p>
              </div>
            </a>

            <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#shop"
              className="rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.24em] text-night transition-transform duration-300 hover:-translate-y-0.5"
            >
              Shop Now
            </a>
          </div>
        </header>

        <main>
          <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-32 md:px-8 lg:px-10"
          >
            <div className="absolute inset-0">
              <img
                src={heroBackground}
                alt="Friends dancing and holding drinks at a nightlife event"
                className="h-full w-full object-cover opacity-30"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,26,0.35),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(255,59,184,0.24),transparent_25%),linear-gradient(180deg,rgba(5,5,8,0.2),rgba(5,5,8,0.84)_60%,rgba(5,5,8,1)_100%)]" />
            </div>

            <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="inline-flex rounded-full border border-white/[0.15] bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-volt">
                  0.0% alcohol | 100% main-character energy
                </div>
                <h1 className="mt-8 max-w-4xl font-display text-6xl font-black uppercase leading-[0.88] text-white md:text-7xl xl:text-[7.5rem]">
                  {brand.heroTitle}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/[0.76] md:text-xl">
                  {brand.heroCopy}
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#flavors"
                    className="rounded-full bg-gradient-to-r from-ember via-neon to-cobalt px-8 py-4 text-center text-sm font-black uppercase tracking-[0.25em] text-white shadow-glow transition-transform duration-300 hover:-translate-y-1"
                  >
                    {brand.primaryCta}
                  </a>
                  <a
                    href="#shop"
                    className="rounded-full border border-white/[0.15] bg-white/[0.08] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-white/[0.14]"
                  >
                    {brand.secondaryCta}
                  </a>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {brand.heroStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.15 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/[0.52]">
                        {stat.label}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/[0.82]">{stat.value}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                style={{ y: heroVisualY }}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex min-h-[520px] items-center justify-center"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon/25 via-ember/[0.15] to-cobalt/20 blur-[120px]" />
                <CanMock
                  name={flavors[0].name}
                  flavorLine={flavors[0].flavorLine}
                  gradient={flavors[0].gradient}
                  rotate={-12}
                  delay={0.1}
                  className="absolute left-0 top-24"
                />
                <CanMock
                  name={flavors[1].name}
                  flavorLine={flavors[1].flavorLine}
                  gradient={flavors[1].gradient}
                  rotate={10}
                  delay={0.35}
                  className="absolute right-6 top-0"
                />
                <CanMock
                  name={flavors[2].name}
                  flavorLine={flavors[2].flavorLine}
                  gradient={flavors[2].gradient}
                  rotate={-3}
                  delay={0.6}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2"
                />

                <div className="absolute bottom-10 right-0 max-w-xs rounded-[2rem] border border-white/10 bg-black/50 p-5 backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-volt">
                    Built for the maybe-one-more crowd
                  </p>
                  <p className="mt-4 text-sm leading-6 text-white/[0.72]">
                    Bring the flavor of a dressed-up cocktail without changing the vibe of the night.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/10 bg-black/[0.35] backdrop-blur-xl">
              <div className="flex w-[200%] animate-marquee items-center gap-10 whitespace-nowrap py-5">
                {tickerItems.map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="flex items-center gap-10 text-xs font-black uppercase tracking-[0.32em] text-white/[0.58]"
                  >
                    <span>{item}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-volt" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="benefits" className="section-shell">
            <SectionHeading
              eyebrow="Why It Hits Different"
              title="Built like a party drink. Tastes like one too."
              description="Fizzora was made for people who want the energy of going out without the flat flavors or wellness-brand whisper. This is bright, social, and unapologetically fun."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </section>

          <section id="flavors" className="section-shell">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="The Drop"
                title="Four signature cans with actual personality."
                description="Each flavor is loud on purpose: layered, social, and built to stand alone or level up a fast mix. Nothing polite. Nothing forgettable."
              />
              <a
                href="#shop"
                className="inline-flex w-fit rounded-full border border-white/[0.15] bg-white/[0.05] px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white/[0.85] transition-colors duration-300 hover:bg-white/[0.1]"
              >
                Shop the Full Drop
              </a>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {flavors.map((flavor, index) => (
                <FlavorCard key={flavor.name} flavor={flavor} index={index} />
              ))}
            </div>
          </section>

          <section id="story" className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-neon/25 via-transparent to-cobalt/20 blur-2xl" />
                <img
                  src={storyImage}
                  alt="Premium canned drinks on a table in a nightlife setting"
                  className="relative h-[500px] w-full rounded-[2.5rem] border border-white/10 object-cover shadow-card"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] border border-white/10 bg-black/[0.48] p-5 backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-volt">
                    Worth opening
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/[0.78]">
                    Made to be the can people ask about before they ask where the playlist came from.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <SectionHeading
                  eyebrow="The Story"
                  title="We got tired of boring drinks that taste like nothing."
                  description="So we made something loud, bold, and worth opening. Fizzora is for the people who still want the ritual, the flex, and the flavor, just without the alcohol running the night."
                />
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/[0.72] md:text-lg">
                  No preachy wellness script. No beige branding. Just bright cans, real ingredients,
                  and the kind of flavor that belongs at dinner parties, pre-games, rooftop hangs,
                  and every accidental afterparty after that.
                </p>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {[
                    ['4', 'signature flavors'],
                    ['0.0%', 'alcohol, still all-in'],
                    ['1', 'loud can for every mood'],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-5 shadow-card backdrop-blur-xl"
                    >
                      <p className="font-display text-4xl font-black uppercase text-white">
                        {value}
                      </p>
                      <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/[0.52]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="section-shell">
            <SectionHeading
              eyebrow="Lifestyle"
              title="No Rules. Just Good Times."
              description="Fizzora lives where the light is low, the playlist is right, and nobody wants a boring drink in the frame."
            />

            <div className="hide-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
              {lifestyleShots.map((shot, index) => (
                <motion.article
                  key={shot.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative snap-start overflow-hidden rounded-[2.2rem] border border-white/10 shadow-card ${
                    index === 0
                      ? 'min-w-[320px] md:min-w-[440px] lg:min-w-[560px]'
                      : 'min-w-[280px] md:min-w-[360px]'
                  }`}
                >
                  <img
                    src={shot.image}
                    alt={shot.title}
                    className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    {index === 0 ? (
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-volt">
                        Lifestyle proof
                      </p>
                    ) : null}
                    <h3 className="mt-3 font-display text-3xl font-black uppercase leading-none text-white md:text-4xl">
                      {index === 0 ? 'No Rules. Just Good Times.' : shot.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-6 text-white/[0.78]">{shot.caption}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="reviews" className="section-shell">
            <div className="grid gap-10 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
              <div>
                <SectionHeading
                  eyebrow="Reviews"
                  title="People do not whisper about these cans."
                  description="Fizzora wins on taste first, but it keeps showing up because it looks good, feels social, and makes zero-proof feel like the move instead of the compromise."
                />
                <div className="mt-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 shadow-card backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cobalt">
                    Crowd favorite
                  </p>
                  <p className="mt-4 font-display text-4xl font-black uppercase leading-none text-white">
                    “Actually tastes like a flex.”
                  </p>
                  <p className="mt-4 text-sm leading-6 text-white/[0.72]">
                    The recurring theme: nobody feels like they are drinking the backup option.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {testimonials.map((testimonial, index) => (
                  <ReviewCard
                    key={testimonial.name}
                    quote={testimonial.quote}
                    name={testimonial.name}
                    title={testimonial.title}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="section-shell">
            <div className="rounded-[2.6rem] border border-white/10 bg-white/[0.04] p-6 shadow-card backdrop-blur-xl md:p-10">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <div>
                  <SectionHeading
                    eyebrow="How To Drink"
                    title="Keep it easy. Keep it loud."
                    description="Fizzora plays well straight from the can, over ice, or mixed into whatever the night turns into."
                  />
                  <div className="mt-8 rounded-[2rem] border border-white/10 bg-black/[0.35] p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-volt">
                      Party Pack Play
                    </p>
                    <p className="mt-4 text-2xl font-display font-black uppercase leading-tight text-white">
                      Four flavors. One cooler. Zero wrong choices.
                    </p>
                    <p className="mt-4 text-sm leading-6 text-white/[0.72]">
                      Start with Citrus Riot, swing into Berry Afterdark, and keep one Midnight Disco Cola on deck for the second wind.
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {servingModes.map((mode) => (
                    <ServingCard
                      key={mode.title}
                      icon={mode.icon}
                      title={mode.title}
                      description={mode.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="shop" className="section-shell pt-4">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[2.8rem] border border-white/10 p-8 shadow-card md:p-12"
            >
              <div className="absolute inset-0 bg-[linear-gradient(120deg,#ff7a1a_0%,#ff3bb8_38%,#30c9ff_72%,#d4ff39_100%)] bg-[length:200%_200%] opacity-90 animate-gradient-shift" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.22))]" />
              <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/[0.78]">
                    Ready for the next round?
                  </p>
                  <h2 className="mt-4 max-w-2xl font-display text-4xl font-black uppercase leading-[0.92] text-white md:text-6xl">
                    Ready to taste something different?
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-7 text-white/[0.86] md:text-lg">
                    Grab the party pack, pick your loudest flavor, and bring something better than a fallback drink to the night.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="#home"
                      className="rounded-full bg-white px-8 py-4 text-center text-sm font-black uppercase tracking-[0.24em] text-night transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      Shop Now
                    </a>
                    <a
                      href="#reviews"
                      className="rounded-full border border-white/25 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-white/10"
                    >
                      Read the Hype
                    </a>
                  </div>
                </div>

                <div className="rounded-[2.2rem] border border-white/20 bg-black/30 p-6 backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-volt">
                    Best Seller
                  </p>
                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="font-display text-3xl font-black uppercase text-white">
                        Fizzora Party Pack
                      </p>
                      <p className="mt-2 text-sm text-white/[0.74]">
                        12 cans. 4 flavors. Cooler-ready and crowd-approved.
                      </p>
                    </div>
                    <p className="font-display text-4xl font-black uppercase text-white">$34</p>
                  </div>
                  <div className="mt-6 grid gap-3 text-sm text-white/[0.82]">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3">
                      3 cans each of Citrus Riot, Berry Afterdark, Ginger Frequency, and Midnight Disco Cola
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3">
                      Free shipping over 2 cases and a loud little sticker in every first order
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </main>

        <footer className="px-6 pb-10 pt-4 md:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-card backdrop-blur-xl md:p-8 lg:grid-cols-[0.85fr_0.75fr_0.9fr]">
            <div>
              <div className="flex items-center gap-3">
                <BrandMark className="h-11 w-11 shrink-0" />
                <div>
                  <p className="font-display text-2xl font-black uppercase text-white">
                    {brand.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.32em] text-white/[0.52]">
                    {brand.tagline}
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-6 text-white/[0.68]">
                Loud flavor for nights that deserve better than a polite little sip.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link}
                    href="#home"
                    className="rounded-full border border-white/[0.12] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/[0.72] transition-colors duration-300 hover:bg-white/10"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-semibold uppercase tracking-[0.28em] text-white/[0.46]">Navigate</p>
                <div className="mt-4 space-y-3 text-white/[0.78]">
                  {navLinks.map((link) => (
                    <a key={link.label} href={link.href} className="block transition-colors hover:text-white">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold uppercase tracking-[0.28em] text-white/[0.46]">Contact</p>
                <div className="mt-4 space-y-3 text-white/[0.78]">
                  <a href="mailto:hello@fizzora.party" className="block transition-colors hover:text-white">
                    hello@fizzora.party
                  </a>
                  <a href="#shop" className="block transition-colors hover:text-white">
                    Shipping & FAQs
                  </a>
                  <a href="#story" className="block transition-colors hover:text-white">
                    About the Brand
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="font-semibold uppercase tracking-[0.28em] text-white/[0.46]">Newsletter</p>
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/[0.68]">
                New drops, playlist energy, and first call on limited packs.
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
                  className="min-w-0 flex-1 rounded-full border border-white/[0.12] bg-black/30 px-5 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/[0.35] focus:border-white/30"
                />
                <button
                  type="submit"
                  className="rounded-full bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.24em] text-night transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Join In
                </button>
              </form>
              <p className="mt-6 text-xs leading-5 text-white/[0.38]">
                © 2026 Fizzora. Fictional landing page concept crafted for loud nights and better-looking cans.
              </p>
            </div>
          </div>
        </footer>
        </div>
      </div>
    </MotionConfig>
  );
}
