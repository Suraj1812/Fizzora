import type { FormEvent } from 'react';
import { Suspense, lazy, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig, motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Blend,
  Cherry,
  CircleOff,
  Citrus,
  Disc3,
  FlameKindling,
  GlassWater,
  MapPinned,
  Martini,
  Menu,
  MoonStar,
  Music4,
  Play,
  Send,
  Sparkles,
  Star,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
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
  type ServingMode,
  type Testimonial,
} from './data/content';

const flavorIcons: LucideIcon[] = [Citrus, Cherry, FlameKindling, MoonStar];
const HeroScene = lazy(async () => {
  const module = await import('./components/HeroScene');
  return { default: module.HeroScene };
});
const storyPoints = [
  'Built for loud dinners, rooftop link-ups, and afters that were never meant to be one drink long.',
  'The brand is social-first and style-aware, not wellness-first and scared of its own flavor.',
  'Everything on the page now has a job: sell the can, show the mood, and keep the layout clean.',
];
const socialIconMap: Record<string, LucideIcon> = {
  Instagram: Sparkles,
  TikTok: Play,
  Spotify: Disc3,
};

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFlavor, setActiveFlavor] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const { scrollY } = useScroll();
  const glowLeftY = useTransform(scrollY, [0, 2200], [0, -160]);
  const glowRightY = useTransform(scrollY, [0, 2200], [0, 180]);
  const heroCopyY = useTransform(scrollY, [0, 700], [0, -28]);
  const heroStageY = useTransform(scrollY, [0, 900], [0, 54]);

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const goToFlavor = (index: number) => {
    setActiveFlavor(index);
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative overflow-x-hidden bg-night text-white">
        <motion.div
          style={{ y: glowLeftY }}
          className="pointer-events-none fixed left-[-10rem] top-[5rem] z-0 h-[28rem] w-[28rem] rounded-full bg-[#ff7a1a]/20 blur-[160px]"
        />
        <motion.div
          style={{ y: glowRightY }}
          className="pointer-events-none fixed right-[-11rem] top-[16rem] z-0 h-[30rem] w-[30rem] rounded-full bg-[#ff3bb8]/18 blur-[180px]"
        />
        <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(48,201,255,0.12),transparent_46%)]" />

        <div className="relative z-10">
          <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((open) => !open)} />
          <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

          <main>
            <section id="home" className="px-4 pb-10 pt-28 md:px-8 lg:px-10">
              <div className="mx-auto grid max-w-[1380px] gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
                <motion.div
                  style={{ y: heroCopyY }}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-[40rem]"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.28em] text-white/82">
                    <Sparkles className="h-3.5 w-3.5 text-[#d4ff39]" />
                    Premium zero-proof social can
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {brand.ticker.slice(0, 3).map((item, index) => (
                      <HeroChip key={item} label={item} index={index} />
                    ))}
                  </div>

                  <h1 className="mt-7 font-display text-[clamp(3.6rem,8.5vw,8rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.08em] text-white">
                    <span className="block">Open</span>
                    <span className="block text-white/88">something</span>
                    <span className="block bg-[linear-gradient(120deg,#ff7a1a_0%,#ff3bb8_45%,#30c9ff_100%)] bg-clip-text text-transparent">
                      louder.
                    </span>
                  </h1>

                  <p className="mt-7 max-w-[35rem] text-lg leading-8 text-white/72 md:text-xl">
                    {brand.heroCopy} Designed to look expensive on the table, feel social in the
                    hand, and keep the night sharp.
                  </p>

                  <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="#flavors"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#ff7a1a_0%,#ff3bb8_55%,#30c9ff_100%)] px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-white shadow-[0_24px_70px_rgba(255,59,184,0.28)] transition-transform duration-300 hover:-translate-y-1"
                    >
                      Explore flavors
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="#story"
                      className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-white/10"
                    >
                      Meet the brand
                    </a>
                  </div>

                  <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {brand.heroStats.map((stat) => (
                      <HeroStat key={stat.label} label={stat.label} value={stat.value} />
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  style={{ y: heroStageY }}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                  className="relative min-h-[700px] overflow-hidden rounded-[2.8rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,122,26,0.16),rgba(255,59,184,0.08)_40%,rgba(8,9,18,0.95)_100%)] shadow-[0_40px_140px_rgba(0,0,0,0.42)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(255,255,255,0.12),transparent_26%),radial-gradient(circle_at_50%_70%,rgba(212,255,57,0.18),transparent_28%)]" />
                  <div className="absolute inset-[1rem] rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] backdrop-blur-sm" />
                  <Suspense fallback={<HeroSceneFallback />}>
                    <HeroScene flavors={flavors.slice(0, 3)} />
                  </Suspense>

                  <div className="absolute left-5 top-5 flex max-w-[15rem] items-start gap-3 rounded-[1.5rem] border border-white/10 bg-black/35 px-4 py-4 backdrop-blur-xl">
                    <div className="rounded-full bg-[#d4ff39] p-2 text-night">
                      <Music4 className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[0.62rem] font-black uppercase tracking-[0.28em] text-[#d4ff39]">
                        After dark
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/74">
                        Big visual energy, real 3D cans, and way less clutter fighting the product.
                      </p>
                    </div>
                  </div>

                  <div className="absolute right-5 top-5 rounded-full border border-white/12 bg-black/35 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.26em] text-white/76 backdrop-blur-xl">
                    0.0% alcohol
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-[1.8rem] border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
                      <p className="text-[0.62rem] font-black uppercase tracking-[0.28em] text-white/46">
                        Signature pack
                      </p>
                      <p className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.92] tracking-[-0.06em]">
                        Four flavors with serious table presence.
                      </p>
                      <p className="mt-4 max-w-lg text-sm leading-6 text-white/72">
                        Bright citrus, dressed-up berry, tropical heat, and a dark cola finish that
                        keeps the page from feeling one-note.
                      </p>
                    </div>
                    <div className="rounded-[1.8rem] border border-white/10 bg-[#d4ff39] p-5 text-night">
                      <p className="text-[0.62rem] font-black uppercase tracking-[0.28em]">
                        Starting at
                      </p>
                      <p className="mt-3 font-display text-5xl font-extrabold uppercase leading-none tracking-[-0.08em]">
                        $34
                      </p>
                      <p className="mt-3 text-sm font-semibold leading-6">
                        One pack, four moods, and zero generic “wellness” energy.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            <section className="overflow-hidden border-y border-white/10 bg-black/25 backdrop-blur-xl">
              <div className="flex w-[200%] animate-marquee items-center gap-10 whitespace-nowrap py-5">
                {[...brand.ticker, ...brand.ticker].map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="flex items-center gap-10 text-[0.68rem] font-black uppercase tracking-[0.3em] text-white/62"
                  >
                    <span>{item}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d4ff39]" />
                  </div>
                ))}
              </div>
            </section>

            <section id="benefits" className="section-shell">
              <div className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
                <div className="rounded-[2.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-7 md:p-8">
                  <SectionIntro
                    eyebrow="Why it hits"
                    title="A premium page direction without the mess."
                    body="The new rhythm is intentional: strong hero, cleaner hierarchy, tighter cards, and just enough motion to make the brand feel alive."
                  />

                  <div className="mt-8 space-y-4">
                    {storyPoints.map((point, index) => (
                      <div
                        key={point}
                        className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-black/25 px-4 py-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/8 text-sm font-black uppercase text-[#d4ff39]">
                          0{index + 1}
                        </div>
                        <p className="text-sm leading-7 text-white/72">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {features.map((feature, index) => (
                    <BenefitCard key={feature.title} feature={feature} index={index} />
                  ))}
                </div>
              </div>
            </section>

            <section id="flavors" className="section-shell pt-6">
              <div className="grid gap-8 xl:grid-cols-[0.42fr_0.58fr] xl:items-center">
                <div>
                  <SectionIntro
                    eyebrow="Flavors"
                    title="Swipe through the pack."
                    body="This section now behaves like a product showcase instead of a wall of cards. The active flavor leads the story, the can gets room, and the rest stays readable."
                  />

                  <div className="mt-8 space-y-3">
                    {flavors.map((flavor, index) => {
                      const Icon = flavorIcons[index] ?? Sparkles;
                      const isActive = index === activeFlavor;

                      return (
                        <button
                          key={flavor.name}
                          type="button"
                          onClick={() => goToFlavor(index)}
                          className={`flex w-full items-center gap-4 rounded-[1.8rem] border px-4 py-4 text-left transition-all duration-300 ${
                            isActive
                              ? 'border-white/16 bg-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.18)]'
                              : 'border-white/8 bg-black/25 hover:border-white/12 hover:bg-white/6'
                          }`}
                        >
                          <div
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-night"
                            style={{ backgroundColor: flavor.accent }}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-display text-2xl font-extrabold uppercase leading-none tracking-[-0.05em] text-white">
                              {flavor.name}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-white/64">
                              {flavor.flavorLine}
                            </p>
                          </div>
                          <ArrowRight
                            className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                              isActive ? 'translate-x-0 text-white' : 'text-white/34'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="relative">
                  <Swiper
                    modules={[Autoplay, EffectCreative, Pagination]}
                    loop
                    speed={850}
                    centeredSlides
                    grabCursor
                    effect="creative"
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4300, disableOnInteraction: false }}
                    onBeforeInit={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => setActiveFlavor(swiper.realIndex)}
                    creativeEffect={{
                      prev: {
                        translate: ['-14%', 0, -100],
                        rotate: [0, 0, -4],
                        scale: 0.92,
                      },
                      next: {
                        translate: ['14%', 0, -100],
                        rotate: [0, 0, 4],
                        scale: 0.92,
                      },
                    }}
                    breakpoints={{
                      0: { slidesPerView: 1.04, spaceBetween: 16 },
                      900: { slidesPerView: 1.08, spaceBetween: 22 },
                    }}
                    className="flavor-swiper !overflow-visible"
                  >
                    {flavors.map((flavor, index) => (
                      <SwiperSlide key={flavor.name} className="pb-12">
                        <FlavorShowcase flavor={flavor} index={index} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </section>

            <section id="story" className="section-shell">
              <div className="grid gap-5 xl:grid-cols-[0.85fr_1.15fr]">
                <div className="rounded-[2.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-7 md:p-8">
                  <SectionIntro
                    eyebrow="Brand story"
                    title="We made the can you actually want in the middle of the table."
                    body="Fizzora came from the gap between boring non-alcoholic drinks and the kind of drink identity people actually want to be seen ordering. We wanted flavor, social energy, and something that still feels premium after dark."
                  />

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    <StoryMetric value="4" label="signature flavors" />
                    <StoryMetric value="12" label="cans per pack" />
                    <StoryMetric value="0.0%" label="alcohol" />
                  </div>

                  <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-black/25 p-5">
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#d4ff39]">
                      Brand line
                    </p>
                    <p className="mt-4 font-display text-3xl font-extrabold uppercase leading-none tracking-[-0.06em] text-white">
                      {brand.tagline}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/68">
                      Loud enough for the group chat, polished enough for the menu, and never
                      preachy about why it exists.
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {lifestyleShots.map((shot, index) => (
                    <LifestyleTile key={shot.title} shot={shot} index={index} />
                  ))}
                </div>
              </div>
            </section>

            <section id="reviews" className="section-shell pt-4">
              <div className="grid gap-5 xl:grid-cols-[0.72fr_1.28fr] xl:items-start">
                <div className="rounded-[2.8rem] border border-white/10 bg-black/25 p-7 md:p-8">
                  <p className="text-[0.72rem] font-black uppercase tracking-[0.32em] text-[#d4ff39]">
                    Reviews
                  </p>
                  <p className="mt-6 font-display text-[5rem] font-extrabold uppercase leading-[0.85] tracking-[-0.08em] text-white">
                    4.9
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-[#d4ff39]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-6 max-w-sm text-base leading-8 text-white/72">
                    The tone here sounds like real people talking about a drink they would actually
                    bring out, not fake placeholder praise.
                  </p>

                  <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-white/6 p-5">
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-white/48">
                      Most quoted line
                    </p>
                    <p className="mt-4 text-lg leading-8 text-white/86">
                      “This doesn’t taste like a non-alcoholic drink. It tastes like the cool table
                      ordered it first.”
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {testimonials.map((testimonial, index) => (
                    <ReviewCard key={testimonial.name} testimonial={testimonial} index={index} />
                  ))}
                </div>
              </div>
            </section>

            <section className="section-shell">
              <div className="overflow-hidden rounded-[3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-7 md:p-10">
                <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
                  <SectionIntro
                    eyebrow="How to drink"
                    title="Straight, mixed, or packed for the ride."
                    body="The serving section stays playful, but the layout is much more controlled now. Simple choices, clear icons, and enough visual weight to feel premium."
                  />

                  <div className="grid gap-5 md:grid-cols-3">
                    {servingModes.map((mode, index) => (
                      <ServingCard key={mode.title} mode={mode} index={index} />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="shop" className="section-shell pt-4">
              <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,#ff7a1a_0%,#ff3bb8_54%,#0d1324_100%)] p-8 shadow-[0_35px_110px_rgba(0,0,0,0.34)] md:p-12">
                <div className="pointer-events-none absolute -right-10 top-8 h-56 w-56 rounded-full bg-white/10 blur-[120px]" />
                <div className="pointer-events-none absolute -left-8 bottom-0 h-56 w-56 rounded-full bg-[#d4ff39]/18 blur-[130px]" />

                <div className="relative grid gap-8 xl:grid-cols-[1fr_25rem] xl:items-end">
                  <div>
                    <p className="text-[0.72rem] font-black uppercase tracking-[0.32em] text-white/82">
                      Final call
                    </p>
                    <h2 className="mt-5 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-[-0.08em] text-white md:text-7xl">
                      Ready to bring a louder can to the night?
                    </h2>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84">
                      The new version leads with the product, keeps the motion where it matters, and
                      feels closer to a real premium beverage campaign instead of a random UI stack.
                    </p>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                      <a
                        href="#flavors"
                        className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-night transition-transform duration-300 hover:-translate-y-0.5"
                      >
                        Shop now
                        <ArrowRight className="h-4 w-4" />
                      </a>
                      <a
                        href="#reviews"
                        className="inline-flex items-center justify-center rounded-full border border-white/18 bg-black/20 px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-black/28"
                      >
                        Read reviews
                      </a>
                    </div>
                  </div>

                  <div className="rounded-[2.2rem] border border-white/12 bg-black/28 p-6 backdrop-blur-xl">
                    <p className="text-[0.7rem] font-black uppercase tracking-[0.28em] text-[#d4ff39]">
                      Party pack
                    </p>
                    <p className="mt-4 font-display text-4xl font-extrabold uppercase leading-none tracking-[-0.06em]">
                      12 cans
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/78">
                      Citrus Riot, Berry Afterdark, Ginger Frequency, and Midnight Disco Cola in one
                      bold starter pack.
                    </p>

                    <div className="mt-6 flex items-end justify-between">
                      <div>
                        <p className="text-[0.65rem] font-black uppercase tracking-[0.28em] text-white/48">
                          Starting at
                        </p>
                        <p className="mt-2 font-display text-5xl font-extrabold uppercase leading-none tracking-[-0.08em]">
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

          <footer className="px-4 pb-10 pt-2 md:px-8 lg:px-10">
            <div className="mx-auto grid max-w-[1380px] gap-8 rounded-[2.8rem] border border-white/10 bg-black/35 p-7 backdrop-blur-2xl md:p-8 xl:grid-cols-[0.95fr_0.8fr_0.9fr]">
              <div>
                <div className="flex items-center gap-3">
                  <BrandMark className="h-12 w-12 shrink-0" />
                  <div>
                    <p className="font-display text-2xl font-extrabold uppercase tracking-[-0.05em]">
                      {brand.name}
                    </p>
                    <p className="text-[0.62rem] uppercase tracking-[0.34em] text-white/52">
                      {brand.tagline}
                    </p>
                  </div>
                </div>
                <p className="mt-5 max-w-sm text-sm leading-7 text-white/68">
                  Premium zero-proof drinks for social nights, better-looking tables, and people
                  who still want the ritual without the alcohol.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map((link) => {
                    const Icon = socialIconMap[link] ?? Sparkles;

                    return (
                      <a
                        key={link}
                        href="#home"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.24em] text-white/72 transition-colors duration-300 hover:bg-white/10"
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {link}
                      </a>
                    );
                  })}
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
                    { label: 'About the brand', href: '#story' },
                  ]}
                />
              </div>

              <div>
                <p className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-white/48">
                  Newsletter
                </p>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/68">
                  New drops, fresh visuals, and first call on limited packs.
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
                    className="min-w-0 flex-1 rounded-full border border-white/10 bg-black/35 px-5 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/28"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.24em] text-night transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Join in
                    <Send className="h-4 w-4" />
                  </button>
                </form>
                <p className="mt-6 text-xs leading-6 text-white/36">
                  © 2026 Fizzora. Fictional campaign brand concept.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </MotionConfig>
  );
}

function Header({
  menuOpen,
  onToggleMenu,
}: {
  menuOpen: boolean;
  onToggleMenu: () => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[1380px] items-center justify-between rounded-full border border-white/10 bg-black/50 px-5 py-4 backdrop-blur-2xl">
        <a href="#home" className="flex items-center gap-3">
          <BrandMark className="h-11 w-11 shrink-0" />
          <div>
            <p className="font-display text-xl font-extrabold uppercase tracking-[-0.04em]">
              {brand.name}
            </p>
            <p className="text-[0.62rem] uppercase tracking-[0.34em] text-white/54">
              {brand.tagline}
            </p>
          </div>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.68rem] font-black uppercase tracking-[0.26em] text-white/62 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#shop"
            className="hidden rounded-full bg-white px-5 py-3 text-[0.68rem] font-black uppercase tracking-[0.26em] text-night transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Buy the pack
          </a>
          <button
            type="button"
            onClick={onToggleMenu}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/72 px-4 pt-24 backdrop-blur-xl lg:hidden"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-[1380px] rounded-[2rem] border border-white/10 bg-[#0a0c14] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.45)]"
          >
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-[1.4rem] border border-white/8 bg-white/5 px-4 py-4 font-display text-2xl font-extrabold uppercase tracking-[-0.05em]"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href="#shop"
              onClick={onClose}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff7a1a_0%,#ff3bb8_55%,#30c9ff_100%)] px-5 py-4 text-sm font-black uppercase tracking-[0.24em] text-white"
            >
              Buy the pack
            </a>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function HeroChip({ label, index }: { label: string; index: number }) {
  const accents = ['#ff7a1a', '#ff3bb8', '#30c9ff'] as const;

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/22 px-3 py-2 text-[0.64rem] font-black uppercase tracking-[0.24em] text-white/70">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accents[index] }} />
      {label}
    </div>
  );
}

function HeroSceneFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),rgba(255,59,184,0.08),transparent_70%)] blur-2xl" />
      <div className="absolute bottom-[22%] h-16 w-[18rem] rounded-full bg-black/40 blur-2xl" />
    </div>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5">
      <p className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-white/48">{label}</p>
      <p className="mt-4 text-sm leading-7 text-white/76">{value}</p>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-[0.72rem] font-black uppercase tracking-[0.32em] text-[#d4ff39]">
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-[-0.08em] text-white md:text-6xl">
        {title}
      </h2>
      <p className="mt-6 text-lg leading-8 text-white/74">{body}</p>
    </div>
  );
}

function BenefitCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = getFeatureIcon(feature.icon);
  const accent =
    [
      'linear-gradient(135deg, rgba(255,122,26,0.22), rgba(255,59,184,0.1))',
      'linear-gradient(135deg, rgba(255,59,184,0.2), rgba(17,24,39,0.1))',
      'linear-gradient(135deg, rgba(48,201,255,0.18), rgba(17,24,39,0.1))',
      'linear-gradient(135deg, rgba(212,255,57,0.18), rgba(17,24,39,0.1))',
      'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(17,24,39,0.1))',
    ][index] ?? 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(17,24,39,0.1))';

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`rounded-[2rem] border border-white/10 p-6 ${
        index === 0 ? 'md:col-span-2 xl:col-span-2' : ''
      }`}
      style={{ backgroundImage: accent }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/10 bg-black/28 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 font-display text-2xl font-extrabold uppercase leading-none tracking-[-0.05em] text-white">
        {feature.title}
      </h3>
      <p className="mt-4 max-w-md text-sm leading-7 text-white/72">{feature.description}</p>
    </motion.article>
  );
}

function FlavorShowcase({ flavor, index }: { flavor: Flavor; index: number }) {
  const Icon = flavorIcons[index] ?? Sparkles;

  return (
    <article className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-[#090b12] p-6 shadow-[0_26px_90px_rgba(0,0,0,0.34)] md:p-8">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `${flavor.gradient}, radial-gradient(circle at top right, rgba(255,255,255,0.12), transparent 22%)`,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_24%,rgba(0,0,0,0.32)_100%)]" />

      <div className="relative grid gap-8 lg:grid-cols-[0.95fr_0.85fr] lg:items-end">
        <div className="max-w-[28rem]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/18 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.26em] text-white/82">
            <Icon className="h-4 w-4" />
            {flavor.price}
          </div>

          <h3 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.88] tracking-[-0.07em] text-white md:text-6xl">
            {flavor.name}
          </h3>
          <p className="mt-5 text-base leading-8 text-white/86">{flavor.description}</p>
          <p className="mt-4 text-sm font-bold leading-7 text-white/92">{flavor.detail}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/12 bg-black/20 px-4 py-2 text-[0.66rem] font-black uppercase tracking-[0.22em] text-white/74">
              {flavor.flavorLine}
            </span>
            <span className="rounded-full border border-white/12 bg-black/20 px-4 py-2 text-[0.66rem] font-black uppercase tracking-[0.22em] text-white/74">
              Mix or drink solo
            </span>
          </div>

          <a
            href="#shop"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.22em] text-night transition-transform duration-300 hover:-translate-y-0.5"
          >
            Add to pack
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <CanMock
            name={flavor.name}
            flavorLine={flavor.flavorLine}
            gradient={flavor.gradient}
            rotate={index % 2 === 0 ? -8 : 8}
            delay={index * 0.15}
            className="scale-[0.74] sm:scale-[0.82] md:scale-[0.92]"
          />
        </div>
      </div>
    </article>
  );
}

function StoryMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5">
      <p className="font-display text-4xl font-extrabold uppercase leading-none tracking-[-0.08em] text-white">
        {value}
      </p>
      <p className="mt-3 text-[0.68rem] font-black uppercase tracking-[0.28em] text-white/48">
        {label}
      </p>
    </div>
  );
}

function LifestyleTile({
  shot,
  index,
}: {
  shot: (typeof lifestyleShots)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className={`group relative overflow-hidden rounded-[2.4rem] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.3)] ${
        index === 0 ? 'sm:col-span-2' : ''
      }`}
    >
      <img
        src={shot.image}
        alt={shot.title}
        className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
          index === 0 ? 'h-[24rem]' : 'h-[18rem]'
        }`}
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_12%,rgba(0,0,0,0.18)_44%,rgba(0,0,0,0.9)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#d4ff39]">
          {index === 0 ? 'No rules. Just good times.' : shot.title}
        </p>
        <p className="mt-4 max-w-md font-display text-3xl font-extrabold uppercase leading-none tracking-[-0.05em] text-white">
          {shot.caption}
        </p>
      </div>
    </motion.article>
  );
}

function ReviewCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6"
    >
      <div className="flex items-center gap-1 text-[#d4ff39]">
        {Array.from({ length: 5 }).map((_, starIndex) => (
          <Star key={starIndex} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-5 text-lg leading-8 text-white/88">“{testimonial.quote}”</p>
      <div className="mt-8">
        <p className="font-bold uppercase tracking-[0.08em] text-white">{testimonial.name}</p>
        <p className="mt-1 text-sm text-white/56">{testimonial.title}</p>
      </div>
    </motion.article>
  );
}

function ServingCard({ mode, index }: { mode: ServingMode; index: number }) {
  const Icon = getServingIcon(mode.icon);
  const accents = ['#ff7a1a', '#ff3bb8', '#30c9ff'] as const;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.24 }}
      className="rounded-[2rem] border border-white/10 bg-black/28 p-6 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full text-night"
          style={{ backgroundColor: accents[index] }}
        >
          <Icon className="h-6 w-6" />
        </div>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      <h3 className="mt-7 font-display text-3xl font-extrabold uppercase leading-none tracking-[-0.05em] text-white">
        {mode.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-white/72">{mode.description}</p>
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
      <p className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-white/48">{title}</p>
      <div className="mt-4 space-y-3 text-white/74">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="block transition-colors hover:text-white">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function getFeatureIcon(type: Feature['icon']) {
  switch (type) {
    case 'ingredients':
      return Sparkles;
    case 'sweetener':
      return CircleOff;
    case 'flavor':
      return Zap;
    case 'mix':
      return Martini;
    case 'zero':
      return BadgeCheck;
  }
}

function getServingIcon(type: ServingMode['icon']) {
  switch (type) {
    case 'straight':
      return GlassWater;
    case 'mix':
      return Blend;
    case 'anywhere':
      return MapPinned;
  }
}
