import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Product, NewsPost, TeamMember, CommunitySubmission, FAQItem } from '../types';
import { PRODUCTS } from '../data/products';
import { NEWS_POSTS } from '../data/news';
import { TEAM_MEMBERS } from '../data/team';
import { COMMUNITY_SUBMISSIONS } from '../data/community';
import { FAQ_ITEMS } from '../data/support';

export const SANITY_PROJECT_ID = (import.meta as any).env?.VITE_SANITY_PROJECT_ID || '';
export const SANITY_DATASET = (import.meta as any).env?.VITE_SANITY_DATASET || 'production';
export const SANITY_API_VERSION = (import.meta as any).env?.VITE_SANITY_API_VERSION || '2024-03-01';
export const SANITY_USE_CDN = (import.meta as any).env?.VITE_SANITY_USE_CDN !== 'false';

export const isSanityConfigured = () => {
  return Boolean(
    SANITY_PROJECT_ID &&
    SANITY_PROJECT_ID !== 'your_project_id' &&
    SANITY_PROJECT_ID.trim().length > 3
  );
};

// Initialize the Sanity client
export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID || 'dummy-project-id',
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: SANITY_USE_CDN,
});

// Image URL builder for Sanity asset references
const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: any) {
  if (!source) return '';
  if (typeof source === 'string') return source;
  try {
    return builder.image(source).auto('format').fit('max').url();
  } catch (e) {
    return typeof source === 'string' ? source : '';
  }
}

// GROQ Queries
export const GROQ_QUERIES = {
  ALL_PRODUCTS: `*[_type == "product"]{
    _id,
    "id": _id,
    name,
    "slug": slug.current,
    product_type,
    tagline,
    short_description,
    description,
    status,
    readiness,
    availability,
    launch_date,
    featured,
    canonical_domain,
    redirect_domains,
    logo_text,
    "hero_image": hero_image.asset->url,
    hero_tag,
    theme,
    primary_cta,
    secondary_cta,
    purchase_url,
    community_url,
    verbs_title,
    verbs,
    features,
    media_gallery,
    world_section_title,
    world_section_description,
    world_highlights,
    specs,
    interactive_type,
    quotes,
    safety_specs,
    age_recommendation,
    players_or_audience
  }`,

  PRODUCT_BY_DOMAIN: `*[_type == "product" && (canonical_domain == $domain || $domain in redirect_domains)][0]{
    _id,
    "id": _id,
    name,
    "slug": slug.current,
    product_type,
    tagline,
    short_description,
    description,
    status,
    readiness,
    availability,
    launch_date,
    featured,
    canonical_domain,
    redirect_domains,
    logo_text,
    "hero_image": hero_image.asset->url,
    hero_tag,
    theme,
    primary_cta,
    secondary_cta,
    purchase_url,
    community_url,
    verbs_title,
    verbs,
    features,
    media_gallery,
    world_section_title,
    world_section_description,
    world_highlights,
    specs,
    interactive_type,
    quotes,
    safety_specs,
    age_recommendation,
    players_or_audience
  }`,

  ALL_NEWS: `*[_type == "newsPost"] | order(date desc){
    _id,
    "id": _id,
    title,
    "slug": slug.current,
    summary,
    content,
    category,
    date,
    readTime,
    "image": image.asset->url,
    tags,
    relatedProductSlug,
    featured
  }`,

  ALL_TEAM: `*[_type == "teamMember"]{
    _id,
    "id": _id,
    name,
    role,
    discipline,
    bio,
    favoriteToyOrGame,
    avatarSeed,
    secretProject,
    "avatar": avatar.asset->url
  }`,

  ALL_COMMUNITY: `*[_type == "communitySubmission"] | order(likes desc){
    _id,
    "id": _id,
    title,
    author,
    authorHandle,
    "authorAvatar": authorAvatar.asset->url,
    type,
    productSlug,
    productName,
    likes,
    commentsCount,
    "image": image.asset->url,
    description,
    badge,
    date,
    isStaffPick
  }`,

  ALL_FAQS: `*[_type == "faqItem"]{
    _id,
    "id": _id,
    question,
    answer,
    category
  }`
};

// Safe Fetchers with Fallbacks
export async function fetchSanityProducts(): Promise<Product[]> {
  if (!isSanityConfigured()) {
    return PRODUCTS;
  }
  try {
    const data = await sanityClient.fetch<Product[]>(GROQ_QUERIES.ALL_PRODUCTS);
    if (data && data.length > 0) {
      return data;
    }
    return PRODUCTS;
  } catch (err) {
    console.warn('Sanity fetch error (falling back to initial dataset):', err);
    return PRODUCTS;
  }
}

export async function fetchSanityNews(): Promise<NewsPost[]> {
  if (!isSanityConfigured()) {
    return NEWS_POSTS;
  }
  try {
    const data = await sanityClient.fetch<NewsPost[]>(GROQ_QUERIES.ALL_NEWS);
    if (data && data.length > 0) {
      return data;
    }
    return NEWS_POSTS;
  } catch (err) {
    console.warn('Sanity news fetch error:', err);
    return NEWS_POSTS;
  }
}

export async function fetchSanityTeam(): Promise<TeamMember[]> {
  if (!isSanityConfigured()) {
    return TEAM_MEMBERS;
  }
  try {
    const data = await sanityClient.fetch<TeamMember[]>(GROQ_QUERIES.ALL_TEAM);
    if (data && data.length > 0) {
      return data;
    }
    return TEAM_MEMBERS;
  } catch (err) {
    console.warn('Sanity team fetch error:', err);
    return TEAM_MEMBERS;
  }
}

export async function fetchSanityCommunity(): Promise<CommunitySubmission[]> {
  if (!isSanityConfigured()) {
    return COMMUNITY_SUBMISSIONS;
  }
  try {
    const data = await sanityClient.fetch<CommunitySubmission[]>(GROQ_QUERIES.ALL_COMMUNITY);
    if (data && data.length > 0) {
      return data;
    }
    return COMMUNITY_SUBMISSIONS;
  } catch (err) {
    console.warn('Sanity community fetch error:', err);
    return COMMUNITY_SUBMISSIONS;
  }
}

export async function fetchSanityFaqs(): Promise<FAQItem[]> {
  if (!isSanityConfigured()) {
    return FAQ_ITEMS;
  }
  try {
    const data = await sanityClient.fetch<FAQItem[]>(GROQ_QUERIES.ALL_FAQS);
    if (data && data.length > 0) {
      return data;
    }
    return FAQ_ITEMS;
  } catch (err) {
    console.warn('Sanity FAQs fetch error:', err);
    return FAQ_ITEMS;
  }
}
