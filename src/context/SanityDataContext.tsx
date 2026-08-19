import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, NewsPost, TeamMember, CommunitySubmission, FAQItem } from '../types';
import {
  fetchSanityProducts,
  fetchSanityNews,
  fetchSanityTeam,
  fetchSanityCommunity,
  fetchSanityFaqs,
  isSanityConfigured,
  SANITY_PROJECT_ID,
  SANITY_DATASET,
} from '../lib/sanity';
import { PRODUCTS } from '../data/products';
import { NEWS_POSTS } from '../data/news';
import { TEAM_MEMBERS } from '../data/team';
import { COMMUNITY_SUBMISSIONS } from '../data/community';
import { FAQ_ITEMS } from '../data/support';

interface SanityDataContextType {
  products: Product[];
  news: NewsPost[];
  team: TeamMember[];
  community: CommunitySubmission[];
  faqs: FAQItem[];
  isLoading: boolean;
  isSanityConnected: boolean;
  sanityProjectId: string;
  sanityDataset: string;
  refreshData: () => Promise<void>;
  getProductByDomain: (domain: string) => Product | undefined;
  getProductByRedirect: (domain: string) => Product | undefined;
  getProductBySlug: (slug: string) => Product | undefined;
  addNewProductMock: (newProd: Product) => void;
}

const SanityDataContext = createContext<SanityDataContextType | undefined>(undefined);

export const SanityDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [news, setNews] = useState<NewsPost[]>(NEWS_POSTS);
  const [team, setTeam] = useState<TeamMember[]>(TEAM_MEMBERS);
  const [community, setCommunity] = useState<CommunitySubmission[]>(COMMUNITY_SUBMISSIONS);
  const [faqs, setFaqs] = useState<FAQItem[]>(FAQ_ITEMS);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadAllData = async () => {
    setIsLoading(true);
    try {
      const [fetchedProducts, fetchedNews, fetchedTeam, fetchedCommunity, fetchedFaqs] =
        await Promise.all([
          fetchSanityProducts(),
          fetchSanityNews(),
          fetchSanityTeam(),
          fetchSanityCommunity(),
          fetchSanityFaqs(),
        ]);

      setProducts(fetchedProducts);
      setNews(fetchedNews);
      setTeam(fetchedTeam);
      setCommunity(fetchedCommunity);
      setFaqs(fetchedFaqs);
    } catch (e) {
      console.error('Failed to load Sanity content:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  const getProductByDomain = (domain: string): Product | undefined => {
    const cleanDomain = domain.trim().toLowerCase();
    return products.find(
      (p) =>
        p.canonical_domain.toLowerCase() === cleanDomain ||
        p.slug.toLowerCase() === cleanDomain.replace('.osumgames.com', '').toLowerCase() ||
        p.canonical_domain.toLowerCase().replace('https://', '').replace('http://', '').replace(/\/$/, '') === cleanDomain
    );
  };

  const getProductByRedirect = (domain: string): Product | undefined => {
    const cleanDomain = domain.trim().toLowerCase();
    return products.find((p) =>
      p.redirect_domains?.some(
        (rd) =>
          rd.toLowerCase() === cleanDomain ||
          rd.toLowerCase().replace('https://', '').replace('http://', '').replace(/\/$/, '') === cleanDomain
      )
    );
  };

  const getProductBySlug = (slug: string): Product | undefined => {
    return products.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
  };

  const addNewProductMock = (newProd: Product) => {
    setProducts((prev) => [newProd, ...prev.filter((p) => p.id !== newProd.id)]);
  };

  return (
    <SanityDataContext.Provider
      value={{
        products,
        news,
        team,
        community,
        faqs,
        isLoading,
        isSanityConnected: isSanityConfigured(),
        sanityProjectId: SANITY_PROJECT_ID,
        sanityDataset: SANITY_DATASET,
        refreshData: loadAllData,
        getProductByDomain,
        getProductByRedirect,
        getProductBySlug,
        addNewProductMock,
      }}
    >
      {children}
    </SanityDataContext.Provider>
  );
};

export const useSanityData = () => {
  const context = useContext(SanityDataContext);
  if (!context) {
    throw new Error('useSanityData must be used within a SanityDataProvider');
  }
  return context;
};
