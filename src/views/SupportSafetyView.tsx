import React, { useState } from 'react';
import { useSanityData } from '../context/SanityDataContext';
import { SAFETY_CERTIFICATIONS } from '../data/support';
import { ShieldCheck, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';

export const SupportSafetyView: React.FC = () => {
  const { faqs: FAQ_ITEMS } = useSanityData();
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  // Replacement Part Form State
  const [partGame, setPartGame] = useState("The King's Order");
  const [partDesc, setPartDesc] = useState('');
  const [partEmail, setPartEmail] = useState('');
  const [partSubmitted, setPartSubmitted] = useState(false);

  const categories = ['all', 'Toy Safety & Tech', 'Board Game Replacement Parts', 'Orders & Shipping', 'Playtesting & Beta', 'General'];

  const filteredFAQs = selectedCat === 'all'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter(f => f.category === selectedCat);

  const handleSubmitPart = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partEmail || !partDesc) return;
    setPartSubmitted(true);
    try {
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
    } catch (e) {}
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-12">
      {/* 1. Header */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6 sm:p-10 text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase bg-[#00A896] text-black px-2.5 py-1 border-2 border-black shadow-[2px_2px_0_0_#000]">
          <ShieldCheck className="w-4 h-4" />
          <span>Safety, Quality & Player Support</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-black text-black uppercase tracking-tight">
          Care & Compliance
        </h1>
        <p className="text-sm sm:text-base font-medium text-black leading-relaxed">
          From non-toxic toy polymers and laser safety to lifetime free replacement parts for board games, we build everything to last for generations of play.
        </p>
      </div>

      {/* 2. Toy Safety Standards as First-Class Content */}
      <div className="bg-[#00A896] border-4 border-black shadow-[8px_8px_0_0_#000] p-6 sm:p-10 space-y-6 text-black">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-black text-[#00A896] border-2 border-black shadow-[3px_3px_0_0_#000] flex items-center justify-center">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-black uppercase">
              Official Toy Safety Certifications
            </h2>
            <p className="text-xs font-mono font-black uppercase text-black/80">
              Tested by independent certified labs (SGS / TÜV SÜD)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {SAFETY_CERTIFICATIONS.map((cert) => (
            <div
              key={cert.code}
              className="bg-white border-3 border-black shadow-[4px_4px_0_0_#000] p-5 space-y-1.5"
            >
              <span className="text-xs font-mono font-black bg-[#FFDA00] text-black px-2 py-0.5 border border-black inline-block shadow-[1px_1px_0_0_#000]">
                {cert.code}
              </span>
              <h3 className="font-display font-black text-sm text-black uppercase">
                {cert.title}
              </h3>
              <p className="text-xs text-black font-medium leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Free Board Game Replacement Parts Portal */}
      <div className="bg-[#FFDA00] border-4 border-black shadow-[8px_8px_0_0_#000] p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-black uppercase tracking-widest bg-black text-[#FFDA00] px-2 py-0.5 border border-black inline-block mb-1">
              Tabletop Lifelong Guarantee
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">
              Free Replacement Parts for Life
            </h2>
            <p className="text-xs sm:text-sm font-bold text-black mt-1 max-w-xl">
              Did a dog chew your wooden sovereign crown meeple? Did a dice roll into a heat vent? We replace missing board game pieces worldwide for free.
            </p>
          </div>
        </div>

        {partSubmitted ? (
          <div className="bg-white border-3 border-black shadow-[4px_4px_0_0_#000] p-6 text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 text-[#10b981] mx-auto" />
            <h4 className="font-display font-black text-lg text-black uppercase">Replacement Request Dispatched!</h4>
            <p className="text-xs font-medium text-black max-w-md mx-auto">
              Our warehouse team will assemble the replacement pieces for <strong>{partGame}</strong> and mail them in a wax-sealed envelope to <strong>{partEmail}</strong> within 3 business days.
            </p>
            <button
              onClick={() => setPartSubmitted(false)}
              className="mt-3 px-4 py-2 bg-black text-[#FFDA00] font-black uppercase text-xs border border-black shadow-[2px_2px_0_0_#000]"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitPart} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="text-xs font-mono font-black uppercase text-black block mb-1">1. Select Game / Toy</label>
              <select
                value={partGame}
                onChange={(e) => setPartGame(e.target.value)}
                className="w-full bg-white border-2 border-black p-2.5 text-xs text-black font-mono font-bold outline-none focus:bg-white shadow-[2px_2px_0_0_#000]"
              >
                <option value="The King's Order">The King's Order (Tabletop Game)</option>
                <option value="ReMoro Wave 1">ReMoro Robotic Toy (Magnetic Brackets)</option>
                <option value="Chrono-Marbles">Chrono-Marbles (Track Clips & Bearings)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-mono font-black uppercase text-black block mb-1">2. Your Shipping Email</label>
              <input
                type="email"
                required
                value={partEmail}
                onChange={(e) => setPartEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full bg-white border-2 border-black p-2.5 text-xs text-black font-bold outline-none shadow-[2px_2px_0_0_#000]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-mono font-black uppercase text-black block mb-1">3. Missing Component Description</label>
              <textarea
                required
                rows={2}
                value={partDesc}
                onChange={(e) => setPartDesc(e.target.value)}
                placeholder="e.g. 2x Yellow Crown Loyals meeples and 1x Province Wax Seal folder..."
                className="w-full bg-white border-2 border-black p-3 text-xs text-black font-bold outline-none resize-none shadow-[2px_2px_0_0_#000]"
              />
            </div>

            <div className="sm:col-span-2 flex justify-end">
              <button
                type="submit"
                className="px-6 py-3.5 bg-black hover:bg-white hover:text-black text-[#FFDA00] font-black uppercase text-xs border-3 border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Request Free Replacement</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* 4. Frequently Asked Questions */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="font-display text-2xl sm:text-4xl font-black text-black uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs font-bold text-slate-800 mt-1">
            Everything you need to know about OSUM Games, pronunciation, and orders.
          </p>
        </div>

        {/* FAQ Filter Chips */}
        <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1.5 text-xs font-black uppercase whitespace-nowrap transition-all border-2 border-black ${
                selectedCat === cat
                  ? 'bg-black text-[#FFDA00] shadow-[2px_2px_0_0_#000]'
                  : 'bg-white text-black hover:bg-[#FFDA00]'
              }`}
            >
              {cat === 'all' ? 'All Questions' : cat}
            </button>
          ))}
        </div>

        <div className="space-y-3 pt-2">
          {filteredFAQs.map((faq, idx) => {
            const isOpen = openFAQIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border-3 border-black shadow-[4px_4px_0_0_#000] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFAQIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-black text-sm uppercase text-black hover:text-[#4834D4] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-black transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm font-medium text-black leading-relaxed border-t-2 border-black pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
