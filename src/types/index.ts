export type ProductType = 'video_game' | 'tabletop' | 'toy' | 'interactive';

export type ProductReadiness = 
  | 'IDEA'
  | 'DEVELOPMENT'
  | 'PRE_RELEASE'
  | 'LAUNCHED'
  | 'ARCHIVED';

export type ProductAvailability = 
  | 'NOT_AVAILABLE'
  | 'PREORDER'
  | 'AVAILABLE'
  | 'SOLD_OUT';

export interface ProductTheme {
  primaryColor: string; // e.g. '#10b981'
  accentColor: string;
  bgGradient: string;
  cardBg: string;
  borderColor: string;
  fontFamilyClass: string;
  moodTag: string;
  accentGlow: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface ProductVerb {
  verb: string;
  subtitle: string;
  detail: string;
}

export interface MediaItem {
  id: string;
  type: 'image' | 'video' | 'concept' | 'render';
  title: string;
  caption: string;
  url: string;
  thumbnailUrl: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string; // canonical sub-domain prefix, e.g. 'remoro'
  product_type: ProductType;
  tagline: string;
  short_description: string;
  description: string;
  status: string; // display status description
  readiness: ProductReadiness;
  availability: ProductAvailability;
  launch_date: string;
  featured: boolean;
  canonical_domain: string; // e.g. 'remoro.osumgames.com'
  redirect_domains: string[]; // e.g. ['moro.osumgames.com']
  logo_text: string;
  hero_image: string;
  hero_tag: string;
  theme: ProductTheme;
  primary_cta: {
    label: string;
    actionType: 'preorder' | 'buy' | 'playtest' | 'notify' | 'custom_builder' | 'download';
    url?: string;
  };
  secondary_cta?: {
    label: string;
    actionType: 'demo' | 'rulebook' | 'trailer' | 'discord' | 'specs' | 'preorder' | 'playtest' | 'buy' | 'custom_builder' | 'notify' | 'download';
    url?: string;
  };
  purchase_url?: string;
  community_url?: string;
  verbs_title?: string;
  verbs: ProductVerb[];
  features: ProductFeature[];
  media_gallery: MediaItem[];
  world_section_title: string; // "The System", "The Lore", "The Rules", "The World"
  world_section_description: string;
  world_highlights: { title: string; body: string }[];
  specs: ProductSpec[];
  interactive_type?: 'remoro_builder' | 'ancient_tuner' | 'vanquished_forge' | 'kings_decree';
  quotes?: { quote: string; author: string; publication: string }[];
  safety_specs?: string[];
  age_recommendation: string;
  players_or_audience: string;
}

export interface NewsPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string[];
  category: 'Announcement' | 'Development' | 'Playtest' | 'Launch' | 'Behind the Scenes' | 'Events';
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  relatedProductSlug?: string;
  featured?: boolean;
}

export interface CommunitySubmission {
  id: string;
  author: string;
  authorHandle: string;
  authorAvatar: string;
  title: string;
  type: 'fan_art' | 'toy_build' | 'strategy_guide' | 'mod' | 'playtest_feedback';
  productSlug: string;
  productName: string;
  likes: number;
  commentsCount: number;
  image: string;
  description: string;
  badge?: string;
  date: string;
  isStaffPick?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  discipline: 'Robotics & Toy Engineering' | 'Game Design' | 'Narrative & Worldbuilding' | 'Art & Physical Prototyping' | 'Audio & Synthesis' | 'Community & Playtesting';
  bio: string;
  favoriteToyOrGame: string;
  avatarSeed: string;
  secretProject: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Orders & Shipping' | 'Toy Safety & Tech' | 'Board Game Replacement Parts' | 'Playtesting & Beta' | 'General';
}
