import { TeamMember, FAQItem } from '../types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Maya Vance',
    role: 'Co-Founder & Creative Director',
    discipline: 'Game Design',
    bio: 'Former lead systems designer turned toy inventor. Maya believes the best games make people laugh, lean forward in their chairs, and argue passionately over dinner about whether a treaty was broken.',
    favoriteToyOrGame: 'Vintage 1980s Meccano Sets & Cosmic Encounter',
    avatarSeed: 'maya',
    secretProject: 'Designing a magnetic levitation marble puzzle that runs on solar heat.',
  },
  {
    id: 'team-2',
    name: 'Julian O’Connor',
    role: 'Co-Founder & Head of Physical Engineering',
    discipline: 'Robotics & Toy Engineering',
    bio: 'Mechanical roboticist obsessed with snap-tolerances, magnetic shear forces, and tactile feedback. Julian spent 8 years designing miniature exploration rovers before founding OSUM.',
    favoriteToyOrGame: 'Bionicle First Generation & Dune (1979)',
    avatarSeed: 'julian',
    secretProject: 'A modular toy engine that generates acoustic music as it rolls down stairs.',
  },
  {
    id: 'team-3',
    name: 'Seraphina Lin',
    role: 'Lead Worldbuilder & Narrative Architect',
    discipline: 'Narrative & Worldbuilding',
    bio: 'Folklorist and sci-fi author responsible for the acoustic mythology of An Ancient Resound and the grim historical chronicles of Vanquished.',
    favoriteToyOrGame: 'Myst, Hollow Knight & Hand-carved Wooden Chess Sets',
    avatarSeed: 'seraphina',
    secretProject: 'Writing a 200-page fully illustrated companion encyclopedia in a fictional musical script.',
  },
  {
    id: 'team-4',
    name: 'Darius Thorne',
    role: 'Principal Tabletop Architect',
    discipline: 'Game Design',
    bio: 'Board game mathematician and woodworker. Darius prototypes every board game component on his home lathe before committing it to mass production tooling.',
    favoriteToyOrGame: 'Brass: Birmingham, Diplomacy & Carrom',
    avatarSeed: 'darius',
    secretProject: 'A 10-player cooperative wooden board game played inside a rotating sphere.',
  },
  {
    id: 'team-5',
    name: 'Chloe Monet',
    role: 'Acoustic Soundscapes & Audio Director',
    discipline: 'Audio & Synthesis',
    bio: 'Synthesist and acoustic field recordist who spent three weeks inside subterranean salt mines capturing natural reverb impulse responses for our games.',
    favoriteToyOrGame: 'Theremin, Moog Sub 37 & Outer Wilds',
    avatarSeed: 'chloe',
    secretProject: 'A physical toy music box that generates procedural lullabies based on ambient room humidity.',
  },
  {
    id: 'team-6',
    name: 'Tariq Al-Mansoor',
    role: 'Head of Community & Playtest Lab',
    discipline: 'Community & Playtesting',
    bio: 'Tariq coordinates our global playtest network of 12,000+ players across 45 countries. If a rule is confusing or a toy joint snaps, Tariq finds out first.',
    favoriteToyOrGame: 'Catan (5-6 player variant only) & Super Smash Bros. Melee',
    avatarSeed: 'tariq',
    secretProject: 'Building a giant portable arcade cabinet that runs on hand-cranks for conventions.',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How do you pronounce "OSUM"?',
    answer: 'It is pronounced exactly like the word "Awesome"! Our playful mascot, the Osum Opossum, loves to remind people that curiosity and play are truly awesome things. Don’t play dead—play Osum!',
    category: 'General',
  },
  {
    question: 'Are ReMoro toys safe for young children?',
    answer: 'Yes! ReMoro modules undergo rigorous testing and meet or exceed ASTM F963 (USA), EN71 (EU), and CPSIA safety standards. All neodymium magnets are double-encapsulated inside high-impact polycarbonate shells tested to 500N of direct pressure. Recommended for ages 8+, though younger builders love building with older siblings.',
    category: 'Toy Safety & Tech',
  },
  {
    question: 'What happens if a piece of The King’s Order goes missing?',
    answer: 'We offer free replacement parts for life on all our physical tabletop board games! Simply visit our Support page, tell us which meeple, coin, or card was lost to the pet void, and our warehouse team will mail a replacement in a wax-sealed envelope.',
    category: 'Board Game Replacement Parts',
  },
  {
    question: 'How do I participate in closed beta playtests for An Ancient Resound?',
    answer: 'You can sign up directly on the An Ancient Resound world page (anancientresound.osumgames.com) or in our Community tab. We invite batches of 200–500 playtesters every month and provide Steam keys along with feedback surveys.',
    category: 'Playtesting & Beta',
  },
  {
    question: 'Do you ship physical games and toys internationally?',
    answer: 'Yes! We have fulfillment hubs in North America, the United Kingdom, the European Union, and Australia to ensure duty-free and low-cost shipping for our tabletop games and ReMoro toy kits.',
    category: 'Orders & Shipping',
  },
  {
    question: 'Can I 3D print my own accessories for ReMoro?',
    answer: 'Absolutely! We believe in open play. We provide free STEP and STL files for all ReMoro magnetic brackets, chassis plates, and wheel hubs under an open creative commons license on our GitHub repo.',
    category: 'Toy Safety & Tech',
  },
];

export const SAFETY_CERTIFICATIONS = [
  {
    code: 'ASTM F963-23',
    title: 'Standard Consumer Safety Specification for Toy Safety (US)',
    description: 'Passed mechanical, physical, flammability, heavy metals, and clean extraction tests.',
  },
  {
    code: 'EN 71 Parts 1, 2, 3',
    title: 'European Toy Safety Directive (CE Mark)',
    description: 'Complies with European mechanical, acoustic safety, and chemical migration thresholds.',
  },
  {
    code: 'Lithium Battery UN 38.3',
    title: 'Safe Battery Transport & Recharge Security',
    description: 'Integrated over-charge, over-discharge, short-circuit, and thermal runaway prevention microchips.',
  },
  {
    code: 'Non-Toxic Materials Pledge',
    title: 'BPA-Free, Phthalate-Free, Lead-Free Polymers',
    description: 'All tactile shells use food-contact grade platinum-cured silicone and virgin ABS plastics.',
  },
];
