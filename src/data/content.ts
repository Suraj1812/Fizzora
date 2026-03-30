export type FeatureIcon = 'ingredients' | 'sweetener' | 'flavor' | 'mix' | 'zero';
export type ServingIcon = 'straight' | 'mix' | 'anywhere';

export interface Feature {
  icon: FeatureIcon;
  title: string;
  description: string;
}

export interface Flavor {
  name: string;
  flavorLine: string;
  description: string;
  detail: string;
  price: string;
  gradient: string;
  accent: string;
}

export interface LifestyleShot {
  title: string;
  caption: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface ServingMode {
  icon: ServingIcon;
  title: string;
  description: string;
}

export const brand = {
  name: 'Fizzora',
  tagline: 'Drink Loud. Live Free.',
  heroTitle: 'Big Flavor. Zero Rules.',
  heroCopy:
    'Fizzora is the zero-proof party can for rooftop hangs, packed dance floors, and one-more-round energy. Loud fruit, clean finish, all-night attitude.',
  primaryCta: 'Explore Flavors',
  secondaryCta: 'Build Your Party Pack',
  heroStats: [
    {
      label: '0.0% alcohol',
      value: 'All lift, no crash-out energy.',
    },
    {
      label: 'Real ingredients',
      value: 'Bright fruit, botanicals, and a finish with bite.',
    },
    {
      label: 'Made to move',
      value: 'From pregame to afters without losing the room.',
    },
  ],
  ticker: [
    'Zero-proof, never low-energy',
    'Built for parties and afters',
    'Loud cans with real flavor',
    'Mix-ready and fridge-cold',
    'Bright fruit. Dark nights.',
  ],
};

export const navLinks = [
  { label: 'Benefits', href: '#benefits' },
  { label: 'Flavors', href: '#flavors' },
  { label: 'Story', href: '#story' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Shop', href: '#shop' },
];

export const features: Feature[] = [
  {
    icon: 'ingredients',
    title: 'Real Ingredients',
    description: 'Juicy citrus, berries, spice, and botanicals with actual presence.',
  },
  {
    icon: 'sweetener',
    title: 'No Artificial Sweeteners',
    description: 'Clean sweetness without the flat, fake aftertaste.',
  },
  {
    icon: 'flavor',
    title: 'Crafted for Bold Taste',
    description: 'The kind of sip that still hits when the music gets louder.',
  },
  {
    icon: 'mix',
    title: 'Mix or Drink Solo',
    description: 'Strong enough for the can, flexible enough for the shaker.',
  },
  {
    icon: 'zero',
    title: 'Zero Alcohol',
    description: 'All the social energy, none of the next-morning regret.',
  },
];

export const flavors: Flavor[] = [
  {
    name: 'Citrus Riot',
    flavorLine: 'Blood orange, yuzu, lime peel',
    description:
      'Sun-bright citrus with a sharp finish and a little bite on the back end.',
    detail: 'The one that disappears first from every cooler.',
    price: '$32 / 12-pack',
    gradient: 'linear-gradient(160deg, #ffb347 0%, #ff7a1a 35%, #ff3bb8 100%)',
    accent: '#ffd166',
  },
  {
    name: 'Berry Afterdark',
    flavorLine: 'Blackberry, sour cherry, hibiscus',
    description:
      'Deep berry sparkle with a velvet finish that feels dressed up without trying.',
    detail: 'House-party favorite with a midnight color hit.',
    price: '$34 / 12-pack',
    gradient: 'linear-gradient(160deg, #ff3bb8 0%, #b026ff 55%, #5516ff 100%)',
    accent: '#ff94dd',
  },
  {
    name: 'Ginger Frequency',
    flavorLine: 'Ginger, pineapple, cracked pepper',
    description:
      'Spicy, tropical, and slightly wild. Built for louder pours and longer nights.',
    detail: 'The mixer magnet that still tastes huge on its own.',
    price: '$33 / 12-pack',
    gradient: 'linear-gradient(160deg, #d4ff39 0%, #61ff77 40%, #12d3cf 100%)',
    accent: '#d4ff39',
  },
  {
    name: 'Midnight Disco Cola',
    flavorLine: 'Kola nut, espresso, vanilla smoke',
    description:
      'Dark, fizzy, and a little mysterious, with a coffee-pop finish that keeps things moving.',
    detail: 'Your post-sunset can with serious main-character energy.',
    price: '$35 / 12-pack',
    gradient: 'linear-gradient(160deg, #30c9ff 0%, #1f6bff 45%, #0b1225 100%)',
    accent: '#8ce4ff',
  },
];

export const lifestyleShots: LifestyleShot[] = [
  {
    title: 'Rooftop kickoff',
    caption: 'Cold cans, warm air, zero reason to go home early.',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Golden hour link-up',
    caption: 'The first crack of the can usually means someone is cueing the playlist.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Dance-floor reset',
    caption: 'Fizzora keeps the vibe high without changing the plan.',
    image:
      'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Bring-the-pack energy',
    caption: 'Looks good in the hand, better in a stack on the table.',
    image:
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'This does not taste like a “non-alcoholic drink.” It tastes like the cool table ordered it first.',
    name: 'Maya R.',
    title: 'DJ and frequent plus-one',
  },
  {
    quote: 'Berry Afterdark absolutely slaps. I brought one case and left with none.',
    name: 'Jordan T.',
    title: 'Hosts everything',
  },
  {
    quote: 'The cans look expensive, the flavors go hard, and nobody feels like they are missing out.',
    name: 'Ava N.',
    title: 'Party photographer',
  },
  {
    quote: 'Citrus Riot in a rocks glass with ice and chili salt? Game over.',
    name: 'Chris L.',
    title: 'Home mixologist',
  },
];

export const servingModes: ServingMode[] = [
  {
    icon: 'straight',
    title: 'Drink It Straight',
    description: 'Crack it ice-cold when you want big flavor with zero prep and zero explanation.',
  },
  {
    icon: 'mix',
    title: 'Mix It Up',
    description: 'Use it as a bold base for easy zero-proof cocktails that still feel like a move.',
  },
  {
    icon: 'anywhere',
    title: 'Take It Anywhere',
    description: 'Cooler-friendly, camera-friendly, and ready for rooftops, beaches, and house parties.',
  },
];

export const socialLinks = ['Instagram', 'TikTok', 'Spotify'];
