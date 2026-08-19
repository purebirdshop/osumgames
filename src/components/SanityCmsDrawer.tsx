import React, { useState } from 'react';
import { useSanityData } from '../context/SanityDataContext';
import { Database, Globe, CheckCircle2, Copy, Sparkles, Plus, RefreshCw, Server, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';
import { Product } from '../types';
import confetti from 'canvas-confetti';

interface SanityCmsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateDomain: (domain: string) => void;
}

export const SanityCmsDrawer: React.FC<SanityCmsDrawerProps> = ({
  isOpen,
  onClose,
  onNavigateDomain,
}) => {
  const {
    products,
    isSanityConnected,
    sanityProjectId,
    sanityDataset,
    refreshData,
    addNewProductMock,
    isLoading,
  } = useSanityData();

  const [activeTab, setActiveTab] = useState<'dns_guide' | 'subdomains' | 'create_test' | 'schema_export'>('dns_guide');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Quick prototype creator state
  const [newTitle, setNewTitle] = useState('Chrono-Forge Odyssey');
  const [newSlug, setNewSlug] = useState('chronoforge');
  const [newDomain, setNewDomain] = useState('chronoforge.osumgames.com');
  const [newRedirect, setNewRedirect] = useState('chrono.osumgames.com');
  const [newType, setNewType] = useState<'video_game' | 'tabletop' | 'toy'>('toy');
  const [newTagline, setNewTagline] = useState('Tactile magnetic clockwork automata.');

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const handleCreateTestProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const testProduct: Product = {
      id: `prod-${newSlug}-${Date.now()}`,
      name: newTitle,
      slug: newSlug,
      product_type: newType,
      tagline: newTagline,
      short_description: `A brand-new creation managed dynamically via Sanity Studio CMS on ${newDomain}.`,
      description: `This product was published in Sanity CMS. Because of our dynamic subdomain architecture, setting the canonical domain in the CMS immediately routes all incoming traffic without any frontend redeployment.`,
      status: 'Live on CMS · Dynamic Route Active',
      readiness: 'PRE_RELEASE',
      availability: 'PREORDER',
      launch_date: 'Late 2026',
      featured: true,
      canonical_domain: newDomain,
      redirect_domains: newRedirect ? [newRedirect] : [],
      logo_text: `${newTitle.toUpperCase()} // OSUM LABS`,
      hero_image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      hero_tag: 'Dynamic Sanity CMS Document · Zero-Code Subdomain',
      theme: {
        primaryColor: '#FFDA00',
        accentColor: '#FF6B35',
        bgGradient: 'from-amber-950 to-black',
        cardBg: 'bg-black',
        borderColor: 'border-black',
        fontFamilyClass: 'font-mono',
        moodTag: 'CMS Dynamic Subdomain',
        accentGlow: 'rgba(255, 218, 0, 0.3)',
      },
      primary_cta: {
        label: 'Explore Dynamic World',
        actionType: 'custom_builder',
      },
      verbs: [
        { verb: 'Publish', subtitle: 'In Sanity Studio', detail: 'Edit fields, tags, and media without engineering tickets.' },
        { verb: 'Route', subtitle: 'Instant Subdomain', detail: 'Matches canonical_domain or redirect_domains in real-time.' },
      ],
      features: [
        { title: 'Zero Deployment Routing', description: 'DNS wildcard routes to the app; the app routes from CMS state.', iconName: 'Globe' },
        { title: 'Sanity Studio Backed', description: 'Fully structured GROQ queries and asset optimization.', iconName: 'Database' },
      ],
      media_gallery: [],
      world_section_title: 'Dynamic CMS Routing',
      world_section_description: 'Manage rich game lore, specs, rules, and community hubs straight from Sanity.',
      world_highlights: [
        { title: 'Wildcard DNS Power', body: '*.osumgames.com routes directly to this SPA.' },
        { title: 'CMS Authoritative', body: 'The CMS canonical_domain field controls the view.' },
      ],
      specs: [
        { label: 'CMS Status', value: 'Sanity Schema Synchronized' },
        { label: 'Subdomain', value: newDomain },
        { label: 'Redirect Alias', value: newRedirect || 'None' },
      ],
      age_recommendation: 'Ages 10+',
      players_or_audience: '1-6 Players',
    };

    addNewProductMock(testProduct);
    try {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
    } catch (e) {}

    onNavigateDomain(newDomain);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white border-4 border-black shadow-[12px_12px_0_0_#000] w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-[#FFDA00] border-b-3 border-black">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-black text-[#FFDA00] border-2 border-black shadow-[2px_2px_0_0_#000]">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-black text-xl text-black uppercase tracking-tight">
                  Sanity Studio CMS & Subdomain Architecture
                </h3>
                <span className={`text-[10px] font-mono font-black uppercase px-2 py-0.5 border border-black ${
                  isSanityConnected ? 'bg-[#10b981] text-black' : 'bg-black text-[#FFDA00]'
                }`}>
                  {isSanityConnected ? 'Live Sanity Connected' : 'Local Fallback / Ready to Connect'}
                </span>
              </div>
              <p className="text-xs font-bold text-black mt-0.5">
                Manage product universes & custom subdomains dynamically from Sanity CMS with 0 code changes.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center bg-black hover:bg-[#EF476F] text-white font-black text-lg border-2 border-black shadow-[2px_2px_0_0_#000] transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b-3 border-black bg-slate-100 overflow-x-auto text-xs font-mono font-black uppercase">
          <button
            onClick={() => setActiveTab('dns_guide')}
            className={`px-4 py-3 border-r-2 border-black flex items-center gap-2 transition-colors shrink-0 ${
              activeTab === 'dns_guide' ? 'bg-white text-black underline decoration-2' : 'hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Globe className="w-4 h-4 text-black" />
            <span>1. Zero-Code Subdomain Guide</span>
          </button>

          <button
            onClick={() => setActiveTab('subdomains')}
            className={`px-4 py-3 border-r-2 border-black flex items-center gap-2 transition-colors shrink-0 ${
              activeTab === 'subdomains' ? 'bg-white text-black underline decoration-2' : 'hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Server className="w-4 h-4 text-black" />
            <span>2. Live CMS Subdomain Registry ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('create_test')}
            className={`px-4 py-3 border-r-2 border-black flex items-center gap-2 transition-colors shrink-0 ${
              activeTab === 'create_test' ? 'bg-white text-black underline decoration-2' : 'hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Plus className="w-4 h-4 text-black" />
            <span>3. Test Dynamic Subdomain Creation</span>
          </button>

          <button
            onClick={() => setActiveTab('schema_export')}
            className={`px-4 py-3 flex items-center gap-2 transition-colors shrink-0 ${
              activeTab === 'schema_export' ? 'bg-white text-black underline decoration-2' : 'hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Terminal className="w-4 h-4 text-black" />
            <span>4. Sanity Schema & Config</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: DNS & Zero-Code Architecture Guide */}
          {activeTab === 'dns_guide' && (
            <div className="space-y-6">
              <div className="bg-[#FFDA00]/20 border-3 border-black p-5 shadow-[4px_4px_0_0_#000]">
                <h4 className="font-display font-black text-lg text-black uppercase mb-1 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-black" />
                  How Sanity Dynamic Subdomains Work
                </h4>
                <p className="text-xs font-bold text-black leading-relaxed">
                  You requested an architecture where adding or modifying product subdomains (e.g. <code className="bg-[#FFDA00] px-1 border border-black">remoro.osumgames.com</code> or <code className="bg-[#FFDA00] px-1 border border-black">ancient.osumgames.com</code>) only requires updating content inside Sanity Studio CMS and pointing your DNS.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                {/* Step 1 */}
                <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-black text-[#FFDA00] flex items-center justify-center font-black">1</span>
                    <span className="font-black uppercase">One-Time DNS Setup</span>
                  </div>
                  <p className="text-[11px] font-medium text-slate-700">
                    Add a single Wildcard CNAME in your DNS provider (Cloudflare, Namecheap, Route53):
                  </p>
                  <div className="p-2 bg-slate-100 border border-black text-[10px] font-mono break-all font-bold">
                    CNAME *.osumgames.com ➔ your-app-host.com
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-black text-[#FFDA00] flex items-center justify-center font-black">2</span>
                    <span className="font-black uppercase">Publish in Sanity</span>
                  </div>
                  <p className="text-[11px] font-medium text-slate-700">
                    In Sanity Studio, create a product and set its canonical domain & redirect aliases:
                  </p>
                  <div className="p-2 bg-slate-100 border border-black text-[10px] font-mono break-all font-bold">
                    canonical_domain: "remoro.osumgames.com"
                    redirects: ["moro.osumgames.com"]
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000] space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#10b981] text-black flex items-center justify-center font-black">3</span>
                    <span className="font-black uppercase">Instant Live Routing</span>
                  </div>
                  <p className="text-[11px] font-medium text-slate-700">
                    The app inspects the incoming hostname, matches it against Sanity's GROQ cache, and immediately renders the dedicated world!
                  </p>
                  <div className="p-2 bg-[#10b981]/20 border border-black text-[10px] font-black text-black">
                    ✓ ZERO CODE CHANGES & ZERO DEPLOYMENTS
                  </div>
                </div>
              </div>

              {/* Environment Variables Box */}
              <div className="bg-slate-900 text-white border-3 border-black p-4 shadow-[4px_4px_0_0_#000]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-black uppercase text-[#FFDA00]">
                    Sanity Environment Variables (.env)
                  </span>
                  <button
                    onClick={() => handleCopy(`VITE_SANITY_PROJECT_ID="your_project_id"\nVITE_SANITY_DATASET="production"\nVITE_SANITY_API_VERSION="2024-03-01"\nVITE_SANITY_USE_CDN="true"`, 'env')}
                    className="text-[10px] font-mono px-2 py-1 bg-black text-[#FFDA00] border border-[#FFDA00] hover:bg-[#FFDA00] hover:text-black flex items-center gap-1 font-bold"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedText === 'env' ? 'Copied!' : 'Copy .env snippet'}</span>
                  </button>
                </div>
                <pre className="text-xs font-mono text-emerald-400 overflow-x-auto p-2 bg-black border border-slate-700">
{`VITE_SANITY_PROJECT_ID="${sanityProjectId || 'your_project_id'}"
VITE_SANITY_DATASET="${sanityDataset || 'production'}"
VITE_SANITY_API_VERSION="2024-03-01"
VITE_SANITY_USE_CDN="true"`}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 2: Subdomain Registry */}
          {activeTab === 'subdomains' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-display font-black text-base text-black uppercase">
                  Currently Active CMS Subdomains
                </h4>
                <button
                  onClick={() => refreshData()}
                  disabled={isLoading}
                  className="px-3 py-1.5 bg-black text-[#FFDA00] text-xs font-mono font-black uppercase border-2 border-black flex items-center gap-1.5 shadow-[2px_2px_0_0_#000] hover:bg-[#FFDA00] hover:text-black active:translate-x-0.5 active:translate-y-0.5"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                  <span>Refresh GROQ Data</span>
                </button>
              </div>

              <div className="space-y-3">
                {products.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white border-2 border-black p-4 shadow-[4px_4px_0_0_#000] flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-black text-base text-black uppercase">{p.name}</span>
                        <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 bg-black text-white">
                          {p.product_type}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 mt-2 text-xs font-mono">
                        <span className="text-slate-600 font-bold">Canonical:</span>
                        <code className="bg-[#FFDA00] text-black font-black px-2 py-0.5 border border-black">
                          {p.canonical_domain}
                        </code>

                        {p.redirect_domains && p.redirect_domains.length > 0 && (
                          <>
                            <span className="text-slate-600 font-bold ml-2">Redirects:</span>
                            {p.redirect_domains.map((rd) => (
                              <code key={rd} className="bg-slate-200 text-black font-bold px-1.5 py-0.5 border border-black">
                                {rd}
                              </code>
                            ))}
                          </>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        onNavigateDomain(p.canonical_domain);
                        onClose();
                      }}
                      className="px-4 py-2 bg-black hover:bg-[#FFDA00] text-[#FFDA00] hover:text-black font-mono font-black text-xs uppercase border-2 border-black shadow-[2px_2px_0_0_#000] flex items-center gap-1.5 shrink-0 self-start md:self-auto"
                    >
                      <span>Jump to Subdomain</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Create Test Dynamic Product & Subdomain */}
          {activeTab === 'create_test' && (
            <form onSubmit={handleCreateTestProduct} className="space-y-4 max-w-xl">
              <div className="bg-[#FFDA00]/20 border-2 border-black p-3 text-xs font-bold text-black">
                💡 Test how Sanity Studio updates work. Submitting this form creates a simulated CMS document that immediately registers a new subdomain and redirects on the frontend!
              </div>

              <div>
                <label className="text-xs font-mono font-black uppercase text-black block mb-1">
                  1. Product Name
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => {
                    setNewTitle(e.target.value);
                    const s = e.target.value.toLowerCase().replace(/[^a-z0-9]/g, '');
                    setNewSlug(s);
                    setNewDomain(`${s}.osumgames.com`);
                  }}
                  className="w-full bg-white border-2 border-black p-2.5 text-xs text-black font-bold outline-none shadow-[2px_2px_0_0_#000]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono font-black uppercase text-black block mb-1">
                    2. Canonical Subdomain
                  </label>
                  <input
                    type="text"
                    required
                    value={newDomain}
                    onChange={(e) => setNewDomain(e.target.value)}
                    className="w-full bg-white border-2 border-black p-2.5 text-xs text-black font-mono font-bold outline-none shadow-[2px_2px_0_0_#000]"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-black uppercase text-black block mb-1">
                    3. Redirect Alias (Optional)
                  </label>
                  <input
                    type="text"
                    value={newRedirect}
                    onChange={(e) => setNewRedirect(e.target.value)}
                    placeholder="alias.osumgames.com"
                    className="w-full bg-white border-2 border-black p-2.5 text-xs text-black font-mono font-bold outline-none shadow-[2px_2px_0_0_#000]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono font-black uppercase text-black block mb-1">
                    4. Product Category
                  </label>
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value as any)}
                    className="w-full bg-white border-2 border-black p-2.5 text-xs text-black font-mono font-bold outline-none shadow-[2px_2px_0_0_#000]"
                  >
                    <option value="toy">Toy & Robotics</option>
                    <option value="video_game">Video Game</option>
                    <option value="tabletop">Tabletop / Strategy Game</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono font-black uppercase text-black block mb-1">
                    5. Tagline
                  </label>
                  <input
                    type="text"
                    value={newTagline}
                    onChange={(e) => setNewTagline(e.target.value)}
                    className="w-full bg-white border-2 border-black p-2.5 text-xs text-black font-bold outline-none shadow-[2px_2px_0_0_#000]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black hover:bg-[#FFDA00] text-[#FFDA00] hover:text-black font-display font-black text-xs uppercase border-3 border-black shadow-[4px_4px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Publish to CMS & Launch Subdomain</span>
              </button>
            </form>
          )}

          {/* TAB 4: Schema & Config Code Export */}
          {activeTab === 'schema_export' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black uppercase text-black">
                  Sanity Studio Schema Definition (src/sanity/schemas/productType.ts)
                </span>
                <button
                  onClick={() => handleCopy(`export const productSchema = {
  name: 'product',
  title: 'Product (Game / Tabletop / Toy)',
  type: 'document',
  fields: [
    { name: 'name', title: 'Product Name', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'canonical_domain', title: 'Canonical Domain', type: 'string', description: 'e.g. remoro.osumgames.com' },
    { name: 'redirect_domains', title: 'Redirect Domains', type: 'array', of: [{ type: 'string' }] },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'product_type', title: 'Category', type: 'string' },
    { name: 'readiness', title: 'Readiness Stage', type: 'string' },
    { name: 'availability', title: 'Availability', type: 'string' },
    { name: 'hero_image', title: 'Cover Image', type: 'image', options: { hotspot: true } },
    { name: 'theme', title: 'Theme Colors', type: 'object' },
    { name: 'features', title: 'Features', type: 'array' },
    { name: 'verbs', title: 'Gameplay Verbs', type: 'array' },
    { name: 'specs', title: 'Specs', type: 'array' },
  ],
};`, 'schema')}
                  className="text-[10px] font-mono px-2 py-1 bg-black text-[#FFDA00] border border-black flex items-center gap-1 font-bold shadow-[2px_2px_0_0_#000]"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copiedText === 'schema' ? 'Copied!' : 'Copy Schema Code'}</span>
                </button>
              </div>

              <pre className="p-4 bg-slate-900 text-white border-3 border-black text-xs font-mono overflow-x-auto shadow-[4px_4px_0_0_#000]">
{`// Sanity Product Document Schema
export const productSchema = {
  name: 'product',
  title: 'Product (Game / Tabletop / Toy)',
  type: 'document',
  fields: [
    { name: 'name', title: 'Product Name', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { 
      name: 'canonical_domain', 
      title: 'Canonical Domain', 
      type: 'string', 
      description: 'e.g. remoro.osumgames.com. Directs traffic to this product world without code changes.' 
    },
    { 
      name: 'redirect_domains', 
      title: 'Redirect Domains', 
      type: 'array', 
      of: [{ type: 'string' }],
      description: 'e.g. ["moro.osumgames.com", "toy.osumgames.com"]' 
    },
    { name: 'product_type', title: 'Category', type: 'string' },
    { name: 'status', title: 'Status Label', type: 'string' },
    { name: 'readiness', title: 'Readiness Stage', type: 'string' },
    { name: 'availability', title: 'Commercial Availability', type: 'string' },
    { name: 'hero_image', title: 'Cover Image', type: 'image', options: { hotspot: true } },
    { name: 'theme', title: 'Theme Colors', type: 'object' },
    { name: 'features', title: 'Features', type: 'array' },
    { name: 'verbs', title: 'Gameplay Verbs', type: 'array' },
    { name: 'specs', title: 'Specs', type: 'array' },
  ],
};`}
              </pre>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t-3 border-black flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Zero-code routing engine initialized & synced.</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-black text-[#FFDA00] font-mono font-black uppercase text-xs border-2 border-black shadow-[2px_2px_0_0_#000]"
          >
            Close Hub
          </button>
        </div>
      </div>
    </div>
  );
};
