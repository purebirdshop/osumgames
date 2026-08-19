import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-remoro',
    name: 'ReMoro',
    slug: 'remoro',
    product_type: 'toy',
    tagline: 'The Modular Creative Creature System.',
    short_description: 'Snap-together magnetic modules, kinetic joints, tactile sensor nodes, and an open-source visual creature brain. Build real robotic companions that explore your living room.',
    description: 'ReMoro is our flagship physical-digital toy line designed to revive pure hands-on creative experimentation. Combining high-torque magnetic ball joints, responsive tactile sensory modules, and an intuitive block-code brain, ReMoro allows creators of all ages to snap together kinetic companions, teach them autonomous behaviors, and watch them navigate the physical world.',
    status: 'Wave 1 Pre-Orders Open · Shipping Q4 2026',
    readiness: 'PRE_RELEASE',
    availability: 'PREORDER',
    launch_date: 'November 2026',
    featured: true,
    canonical_domain: 'remoro.osumgames.com',
    redirect_domains: ['moro.osumgames.com', 'toy.osumgames.com'],
    logo_text: 'REMORO // MODULAR CREATURES',
    hero_image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1400&q=80',
    hero_tag: 'Physical Toy System · Bluetooth 5.4 · Open-Architecture',
    theme: {
      primaryColor: '#10b981', // emerald / cyber-teal
      accentColor: '#fbbf24', // amber neon
      bgGradient: 'from-emerald-950 via-[#071318] to-[#04080c]',
      cardBg: 'bg-[#0a1820]/80',
      borderColor: 'border-emerald-500/30',
      fontFamilyClass: 'font-mono-code',
      moodTag: 'Modular Robotics & Tactile Play',
      accentGlow: 'rgba(16, 185, 129, 0.25)',
    },
    primary_cta: {
      label: 'Build Your ReMoro',
      actionType: 'custom_builder',
    },
    secondary_cta: {
      label: 'Reserve Wave 1 Kit',
      actionType: 'preorder',
    },
    purchase_url: '#preorder',
    community_url: '#creations',
    verbs_title: 'The ReMoro Loop',
    verbs: [
      {
        verb: 'Build',
        subtitle: 'Magnetic snap mechanics',
        detail: 'Instant magnetic locking joints with 40-pin continuous power and bus data throughput.',
      },
      {
        verb: 'Customize',
        subtitle: 'Bespoke chassis & chassis skins',
        detail: 'Swap silicone tactile shells, crawler tracks, bipedal legs, or articulated tails in seconds.',
      },
      {
        verb: 'Code',
        subtitle: 'Visual node or Python scripting',
        detail: 'No-code visual behavior graphs for beginners; full Python & WebAssembly SDK for tinkerers.',
      },
      {
        verb: 'Control',
        subtitle: 'Low-latency Bluetooth companion',
        detail: 'Direct remote piloting or allow ReMoro to roam autonomously using onboard ultrasonic & LiDAR pods.',
      },
      {
        verb: 'Explore',
        subtitle: 'Shared community creature genome',
        detail: 'Download personality routines and obstacle-course behaviors engineered by builders worldwide.',
      },
    ],
    features: [
      {
        title: 'Tactile Neodymium Quick-Locks',
        description: 'Patented high-shear rotational snap joints allow heavy duty load bearing without complex screws or tools.',
        iconName: 'Cpu',
      },
      {
        title: 'Dual-Core Cortex Creature Brain',
        description: 'On-board neural micro-controller runs local sensor-fusion navigation routines with zero cloud dependency.',
        iconName: 'Zap',
      },
      {
        title: 'Non-Toxic Child-Safe Materials',
        description: 'Certified food-grade silicone shells and ultra-durable ABS-Polycarbonate impact casings (ASTM F963 compliant).',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Interactive 32-Zone Expressive Visor',
        description: 'RGB organic micro-LED matrix renders charming emotions, blinking animations, and scanning patterns.',
        iconName: 'Eye',
      },
    ],
    media_gallery: [
      {
        id: 'remoro-1',
        type: 'render',
        title: 'Scout Quad-Pod Configuration',
        caption: 'ReMoro equipped with dual LiDAR masts and four articulating terrain tracks.',
        url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'remoro-2',
        type: 'concept',
        title: 'Magnetic Joint Bus Architecture',
        caption: 'Exploded engineering view of the gold-plated magnetic 40-pin concentric connector ring.',
        url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'remoro-3',
        type: 'image',
        title: 'Workbench Playtesting',
        caption: 'Prototyping soft-touch silicone creature heads in our physical maker lab.',
        url: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=400&q=80',
      },
    ],
    world_section_title: 'The System',
    world_section_description: 'ReMoro was conceived with a simple philosophy: toys shouldn’t lock you into a single rigid toy shape, and electronics shouldn’t be hidden behind fragile black boxes.',
    world_highlights: [
      {
        title: 'Infinite Morphologies',
        body: 'From a skittering six-legged arachnid scout to a curious desktop companion that reacts when you speak, every module speaks the same universal protocol.',
      },
      {
        title: 'Physical Meets Digital',
        body: 'When your physical ReMoro finishes navigating an obstacle course, the data can be synced to your digital garage to unlock new behavioral simulations.',
      },
      {
        title: '3D Printable Expansion Files',
        body: 'We open-source all shell brackets, armor plating, and wheel hub STL files so you can 3D print your own custom armor at home.',
      },
    ],
    specs: [
      { label: 'Core Brain', value: 'Dual Cortex-M33 with 16MB Flash' },
      { label: 'Battery Life', value: 'Up to 4.5 hours continuous kinetic play' },
      { label: 'Connectivity', value: 'Bluetooth 5.4 LE & USB-C Fast Charge' },
      { label: 'Certifications', value: 'ASTM F963, CE, EN71, FCC, CPSIA' },
      { label: 'Box Contents', value: '1 Core Brain, 4 Kinetic Limbs, 2 Sensor Hubs, 1 Expressive Eye Pod, 32 Snap-Gears' },
    ],
    interactive_type: 'remoro_builder',
    quotes: [
      {
        quote: 'ReMoro reminds us why we fell in love with robotics in the first place: pure tactile curiosity.',
        author: 'Makers & Tinkerers Quarterly',
        publication: 'Featured Innovation 2026',
      },
    ],
    safety_specs: [
      'Encapsulated rare-earth magnets (impossible to dislodge under 500N stress tests)',
      'Lithium Iron Phosphate (LiFePO4) non-flammable battery cells',
      'Child-safe rounded corner radiuses (R ≥ 3.2mm on all contact edges)',
    ],
    age_recommendation: 'Ages 8 to 108',
    players_or_audience: '1+ Builders (Solo or Collaborative)',
  },
  {
    id: 'prod-ancient-resound',
    name: 'An Ancient Resound',
    slug: 'anancientresound',
    product_type: 'video_game',
    tagline: 'Tune the Forgotten Echoes of a Hollow World.',
    short_description: 'An atmospheric acoustic exploration video game where sound is tangible architecture. Decode resonance frequencies of ancient monoliths to traverse forgotten celestial caverns.',
    description: 'An Ancient Resound is an immersive atmospheric puzzle adventure where sound waves reshape reality. As a solitary Harmonist wandering the crystalline ruins of the Vault of Caelum, you manipulate frequency, phase resonance, and acoustic timber to awaken petrified leviathans, shatter temporal barriers, and uncover the catastrophe that muted an entire civilization.',
    status: 'In Active Alpha · Closed Acoustic Playtesting Underway',
    readiness: 'DEVELOPMENT',
    availability: 'NOT_AVAILABLE',
    launch_date: 'Early 2027',
    featured: true,
    canonical_domain: 'anancientresound.osumgames.com',
    redirect_domains: ['ancient.osumgames.com', 'resound.osumgames.com'],
    logo_text: 'AN ANCIENT RESOUND',
    hero_image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80',
    hero_tag: 'Spatial Audio Exploration · PC & Consoles · Custom Acoustic Engine',
    theme: {
      primaryColor: '#38bdf8', // radiant sky/harmonic cyan
      accentColor: '#a855f7', // celestial purple
      bgGradient: 'from-[#0b1329] via-[#091e3a] to-[#040813]',
      cardBg: 'bg-[#0c1a30]/80',
      borderColor: 'border-sky-500/30',
      fontFamilyClass: 'font-cinzel',
      moodTag: 'Ethereal Acoustic Exploration & Lore',
      accentGlow: 'rgba(56, 189, 248, 0.25)',
    },
    primary_cta: {
      label: 'Follow the Development',
      actionType: 'notify',
    },
    secondary_cta: {
      label: 'Join Audio Playtest',
      actionType: 'playtest',
    },
    purchase_url: '#wishlist',
    community_url: '#soundscape',
    verbs_title: 'Harmonic Mechanics',
    verbs: [
      {
        verb: 'Listen',
        subtitle: 'Dynamic 3D spatial acoustic hints',
        detail: 'Detect binaural reverberations bouncing off unseen subterranean structures.',
      },
      {
        verb: 'Resonate',
        subtitle: 'Harmonic tuning staff',
        detail: 'Tune your diapason to match the natural harmonic frequencies of ancient crystal gates.',
      },
      {
        verb: 'Traverse',
        subtitle: 'Sound-bridge manifestation',
        detail: 'Solidify acoustic standing waves into glowing pathways across bottomless abysses.',
      },
      {
        verb: 'Decipher',
        subtitle: 'Musical glyph archaeology',
        detail: 'Translate forgotten tonal alphabets left behind by the Harmonic Scribes.',
      },
      {
        verb: 'Restore',
        subtitle: 'Awaken the Grand Resonance',
        detail: 'Re-harmonize seven planetary acoustic spires to breathe life back into the silent ruins.',
      },
    ],
    features: [
      {
        title: 'Reactive Dynamic Harmonic Score',
        description: 'Every puzzle solved harmonizes seamlessly with the live orchestral score composed with real acoustic rare instruments.',
        iconName: 'Music',
      },
      {
        title: 'Tactile Sound Physicality',
        description: 'Sub-bass frequencies physically alter gravity wells and shift crystalline formations in real time.',
        iconName: 'Activity',
      },
      {
        title: 'Zero Combat, Pure Wonder',
        description: 'A deeply meditative journey focused on curiosity, spatial deduction, and sonic revelation.',
        iconName: 'Compass',
      },
      {
        title: 'Full Spatial Audio & Haptic Feedback',
        description: 'Engineered for high-fidelity headphones with controller haptic pulses tuned to specific sonic octaves.',
        iconName: 'Headphones',
      },
    ],
    media_gallery: [
      {
        id: 'ancient-1',
        type: 'image',
        title: 'The Great Resonating Spire',
        caption: 'The central harmonic spire at dusk, vibrating at 432 Hz.',
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'ancient-2',
        type: 'concept',
        title: 'Harmonist Diapason Concept Art',
        caption: 'Intricate brass and crystal tuning apparatus carried by the player.',
        url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'ancient-3',
        type: 'render',
        title: 'Subterranean Crystal Organ',
        caption: 'A 200-meter tall natural organ formation deep within the Whispering Fault.',
        url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80',
      },
    ],
    world_section_title: 'The Lore',
    world_section_description: 'Centuries ago, the Scribes of Caelum did not speak with words—they forged reality with pure harmonic intervals. When the Great Discord shattered their core pitch, the world fell into stone silence.',
    world_highlights: [
      {
        title: 'The Seven Chords of Creation',
        body: 'Each continent was tuned to a master pitch. Reconnecting these chords reveals the memories of the vanished civilization.',
      },
      {
        title: 'Nonlinear Acoustic Exploration',
        body: 'Hear a distant chime through a hollow mountain? If you can replicate its tone, a hidden passage opens.',
      },
    ],
    specs: [
      { label: 'Platforms', value: 'PC (Steam, Epic), PlayStation 5, Xbox Series X|S, Mac' },
      { label: 'Audio Engine', value: 'Proprietary FMOD Binaural Resonance Matrix' },
      { label: 'Accessibility', value: 'Full visual waveform display mode for deaf and hard-of-hearing players' },
      { label: 'Engine', value: 'Unreal Engine 5.4 Lumen & Nanite' },
    ],
    interactive_type: 'ancient_tuner',
    quotes: [
      {
        quote: 'An Ancient Resound makes sound feel as tangible and magical as holding light in your hands.',
        author: 'Indie Game Visionary Awards',
        publication: 'Most Anticipated Audio Design',
      },
    ],
    age_recommendation: 'All Ages (ESRB Everyone)',
    players_or_audience: '1 Player Single Player Narrative Adventure',
  },
  {
    id: 'prod-vanquished',
    name: 'Vanquished',
    slug: 'vanquished',
    product_type: 'video_game',
    tagline: 'Rise from Defeat. Master the Ash.',
    short_description: 'A dark tactical action roguelike where every death transforms the landscape into molten obsidian, forging rare relics from your previous warrior’s fallen armor.',
    description: 'Vanquished drops you into a shattered dark fantasy continent consumed by the Black Smite. In this unforgiving yet deeply rewarding tactical action roguelike, defeat is not a restart—it is a furnace. Each time your champion falls, their ashes seed the next run with legendary soul-forged relics, altered boss attack patterns, and scorched terrain advantages.',
    status: 'Launched · Season of the Ashborne Major Update Live',
    readiness: 'LAUNCHED',
    availability: 'AVAILABLE',
    launch_date: 'October 2025',
    featured: true,
    canonical_domain: 'vanquished.osumgames.com',
    redirect_domains: ['vanquish.osumgames.com'],
    logo_text: 'VANQUISHED',
    hero_image: 'https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=1400&q=80',
    hero_tag: 'Action Roguelike · Deck-Building Relics · 4K 120FPS',
    theme: {
      primaryColor: '#ef4444', // crimson blood / ember
      accentColor: '#f97316', // searing blaze
      bgGradient: 'from-[#1c0808] via-[#120507] to-[#080203]',
      cardBg: 'bg-[#18080a]/80',
      borderColor: 'border-red-500/30',
      fontFamilyClass: 'font-display',
      moodTag: 'Dark Tactical Action & Ash Crafting',
      accentGlow: 'rgba(239, 68, 68, 0.25)',
    },
    primary_cta: {
      label: 'Get the Game',
      actionType: 'buy',
      url: 'https://store.steampowered.com',
    },
    secondary_cta: {
      label: 'Download Ashborne Update',
      actionType: 'demo',
    },
    purchase_url: 'https://store.steampowered.com',
    community_url: '#builds',
    verbs_title: 'Combat & Furnace Cycle',
    verbs: [
      {
        verb: 'Fight',
        subtitle: 'Precision animation-priority combat',
        detail: 'Master parries, posture breaks, and heavy greatsword stance shifts with micro-second responsiveness.',
      },
      {
        verb: 'Adapt',
        subtitle: 'Dynamic procedural catacombs',
        detail: 'Battle through crumbling gothic citadels and molten iron crypts that shift after every catastrophic defeat.',
      },
      {
        verb: 'Craft',
        subtitle: 'Ashforge Relic Combos',
        detail: 'Melt down fallen champion gear into 120+ unique passive synergies and elemental blade enchantments.',
      },
      {
        verb: 'Endure',
        subtitle: 'The Smite Gauge',
        detail: 'Risk high corruption for monstrous damage multipliers, or purge your bloodline for holy stability.',
      },
      {
        verb: 'Overcome',
        subtitle: 'The Five Ashborne Sovereigns',
        detail: 'Slay legendary multi-phase demigods whose battle techniques evolve based on how you defeated their lieutenants.',
      },
    ],
    features: [
      {
        title: 'Persistent Ancestral Crucible',
        description: 'Your fallen heroes leave ghost apparitions with customized combat styles to assist or duel your next run.',
        iconName: 'Flame',
      },
      {
        title: 'Deep Synergistic Relic Grid',
        description: 'Stack burning bleed procs, obsidian armor spikes, and necrotic scythe sweeps across hundreds of viable builds.',
        iconName: 'Shield',
      },
      {
        title: 'Full Steam Deck & Controller Verified',
        description: 'Flawless 60FPS on handheld devices with native support for ultra-wide monitors and low latency input.',
        iconName: 'Gamepad2',
      },
      {
        title: 'Co-op Ash Covenant Trials',
        description: 'Summon fellow Ashen Knights into challenging wave-defense crucible challenges with shared loot pools.',
        iconName: 'Users',
      },
    ],
    media_gallery: [
      {
        id: 'vanquished-1',
        type: 'image',
        title: 'The Obsidian Cathedral',
        caption: 'Facing the Grand Inquisitor amidst rain of burning sulfur.',
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'vanquished-2',
        type: 'render',
        title: 'Relic: The Smoldering Ribcage',
        caption: 'Grants +45% Pyro damage upon taking fatal posture damage.',
        url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80',
      },
    ],
    world_section_title: 'The World of Ash',
    world_section_description: 'The kingdom of Oakhaven did not burn in a day. It smoldered for three hundred years under the rule of the Ashborne Sovereigns. Only those who willingly step into the pyre can forge the weapons needed to sever their reign.',
    world_highlights: [
      {
        title: 'The Law of the Smite',
        body: 'Ash is memory. Iron is will. Blood is the catalyst.',
      },
      {
        title: 'Over 850,000 Warriors Fallen',
        body: 'Real-time global community death counter dynamically empowers world boss phases during seasonal events.',
      },
    ],
    specs: [
      { label: 'Price', value: '$24.99 USD' },
      { label: 'Platforms', value: 'Steam (PC/Linux/Steam Deck), PS5, Xbox Series X' },
      { label: 'Rating', value: 'ESRB Teen (Blood and Gore, Violence)' },
      { label: 'Playtime', value: '40–120+ Hours (Infinite Replayability)' },
    ],
    interactive_type: 'vanquished_forge',
    quotes: [
      {
        quote: 'Vanquished turns the frustration of roguelike death into an exhilarating relic-forging playground.',
        author: 'IGN Roguelike Roundup',
        publication: '9.2 / 10 Amazing',
      },
      {
        quote: 'Fluid, brutal, and impossibly addictive.',
        author: 'PC Gamer',
        publication: 'Editors Choice',
      },
    ],
    age_recommendation: 'Ages 13+',
    players_or_audience: '1–2 Players (Solo Action & Optional Co-op Covenant)',
  },
  {
    id: 'prod-kings-order',
    name: "The King's Order",
    slug: 'thekingsorder',
    product_type: 'tabletop',
    tagline: 'Heavy is the Crown. Shrewd is the Court.',
    short_description: 'An asymmetric tabletop strategy board game of clandestine diplomacy, hidden royal decrees, military expansion, and backroom treason for 3 to 6 players.',
    description: "The King's Order is our acclaimed physical tabletop strategy board game. Players assume the roles of powerful council factions vying to influence an aging, erratic monarch. Place hidden wax-sealed decree envelopes, whisper treacherous alliances during timed diplomatic recesses, and marshal wooden carved armies across a sprawling linen-finish realm map.",
    status: 'Second Printing in Stock · Companion App Updated',
    readiness: 'LAUNCHED',
    availability: 'AVAILABLE',
    launch_date: 'March 2025',
    featured: true,
    canonical_domain: 'thekingsorder.osumgames.com',
    redirect_domains: ['kingsorder.osumgames.com', 'king.osumgames.com'],
    logo_text: "THE KING'S ORDER",
    hero_image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1400&q=80',
    hero_tag: 'Physical Board Game · 3–6 Players · 90–150 Min · Custom Carved Wood',
    theme: {
      primaryColor: '#eab308', // royal gold / amber
      accentColor: '#881337', // royal crimson velvet
      bgGradient: 'from-[#1c1407] via-[#140e05] to-[#0a0702]',
      cardBg: 'bg-[#1e1509]/85',
      borderColor: 'border-amber-500/30',
      fontFamilyClass: 'font-cinzel',
      moodTag: 'Tabletop Strategy, Diplomacy & Court Intrigue',
      accentGlow: 'rgba(234, 179, 8, 0.25)',
    },
    primary_cta: {
      label: 'Get Yours',
      actionType: 'buy',
      url: '#order-box',
    },
    secondary_cta: {
      label: 'Rulebook & Companion App',
      actionType: 'rulebook',
    },
    purchase_url: '#order-box',
    community_url: '#strategies',
    verbs_title: 'The Art of Rule',
    verbs: [
      {
        verb: 'Gather',
        subtitle: 'The Royal Council convenes',
        detail: 'Deal secret faction agenda cards, assemble personal coin vaults, and inspect realm borders.',
      },
      {
        verb: 'Strategize',
        subtitle: 'Simultaneous decree drafting',
        detail: 'Secretly draft one public royal decree and one clandestine treason order into wax-sealed folders.',
      },
      {
        verb: 'Negotiate',
        subtitle: '5-Minute Diplomatic Recesses',
        detail: 'Step into side rooms, trade promissory debt tokens, and form non-binding non-aggression pacts.',
      },
      {
        verb: 'Command',
        subtitle: 'Tactile Wooden Regiments',
        detail: 'March carved siege engines, cavalry battalions, and royal guard garrisons across textured province maps.',
      },
      {
        verb: 'Conquer',
        subtitle: 'Claim the Sovereign Throne',
        detail: 'Win by military territorial dominance, economic bankruptcy of rivals, or assassinating the puppet king.',
      },
    ],
    features: [
      {
        title: 'Luxury Tactile Component Quality',
        description: 'Includes 120 custom screen-printed beechwood meeples, 48 heavy zinc-alloy crown coins, and a quadruple-thick linen board.',
        iconName: 'Crown',
      },
      {
        title: 'Zero Dice Luck, Pure Mastermind',
        description: 'Deterministic combat resolution driven by supply lines, troop ratios, and cunning blind bid tactics.',
        iconName: 'Swords',
      },
      {
        title: 'Asymmetric Faction Powers',
        description: 'Play as the Wealthy Merchant Guild, the Zealous High Clerisy, the Shadow Spymasters, or the Iron Banner Legions.',
        iconName: 'Scroll',
      },
      {
        title: 'Free Digital Timer & Lore Companion App',
        description: 'Optional companion app provides period-accurate atmospheric tavern music and diplomatic round timers.',
        iconName: 'Smartphone',
      },
    ],
    media_gallery: [
      {
        id: 'king-1',
        type: 'image',
        title: 'Unboxing the Deluxe Realm Edition',
        caption: 'The complete set featuring wooden carved miniatures and metal minted coinage.',
        url: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'king-2',
        type: 'concept',
        title: 'Illustrated Realm Map',
        caption: 'Hand-drawn cartography of the Seven Duchies of Vaelgard.',
        url: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80',
      },
    ],
    world_section_title: 'The Rules & Realm',
    world_section_description: 'King Alden IV is sick, and the royal treasury is empty. The six Great Houses have arrived at the high capital of Sunspire under the banner of peace, but every lord carries daggers beneath their velvet cloaks.',
    world_highlights: [
      {
        title: 'The Decree Phase',
        body: 'Every round, players submit orders to the King’s Chamberlain. Decrees are resolved in secret alphabetical priority, leading to breathtaking bluffs and double-crosses.',
      },
      {
        title: 'The Broken Oath Penalty',
        body: 'You may break any verbal promise, but doing so awards your betrayed opponent a permanent Royal Vengeance token.',
      },
    ],
    specs: [
      { label: 'Player Count', value: '3 to 6 Players' },
      { label: 'Play Time', value: '90 – 150 Minutes' },
      { label: 'Complexity Weight', value: '3.4 / 5 (Medium-Heavy Strategy)' },
      { label: 'Box Dimensions', value: '295 x 295 x 85 mm (Weight: 2.8 kg)' },
      { label: 'Language', value: 'English, French, German, Spanish (Rulebooks Included)' },
    ],
    interactive_type: 'kings_decree',
    quotes: [
      {
        quote: "The King's Order delivers the absolute gold standard of high-stakes table talk, bluffs, and tactical elegance.",
        author: 'BoardGameGeek Guild',
        publication: '2025 Tabletop Game of the Year Nominee',
      },
      {
        quote: 'You will talk about the betrayals in this game for weeks.',
        author: 'Dice Tower Review',
        publication: 'Seal of Absolute Excellence',
      },
    ],
    age_recommendation: 'Ages 14+',
    players_or_audience: '3–6 Players · Board Game Enthusiasts',
  },
  {
    id: 'prod-chrono-marbles',
    name: 'Chrono-Marbles: Kinetic Labyrinth',
    slug: 'chronomarbles',
    product_type: 'interactive',
    tagline: 'Physical Gravity Meets Digital Precision.',
    short_description: 'A physical gravity-defying kinetic modular track system with embedded optical gates that synchronize with high-speed digital time trials and multiplayer leaderboards.',
    description: 'Chrono-Marbles bridges the physical and digital world. Snap together precision-engineered acrylic acceleration loops, pendulum switch-tracks, and gravity spirals on your wall or desk, then drop micro-bearing marbles past high-speed laser optical gates to log millimeter-accurate split times on your mobile app.',
    status: 'Final Tooling & Mold Validation',
    readiness: 'PRE_RELEASE',
    availability: 'PREORDER',
    launch_date: 'Early 2027',
    featured: false,
    canonical_domain: 'chronomarbles.osumgames.com',
    redirect_domains: ['marbles.osumgames.com'],
    logo_text: 'CHRONO-MARBLES',
    hero_image: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1400&q=80',
    hero_tag: 'Physical Kinetic Maze · High-Speed Laser Gate · Companion App',
    theme: {
      primaryColor: '#06b6d4', // cyan
      accentColor: '#f43f5e', // rose
      bgGradient: 'from-[#041a20] via-[#031117] to-[#02080a]',
      cardBg: 'bg-[#061e27]/80',
      borderColor: 'border-cyan-500/30',
      fontFamilyClass: 'font-unbounded',
      moodTag: 'Kinetic Engineering & Speed Trials',
      accentGlow: 'rgba(6, 182, 212, 0.25)',
    },
    primary_cta: {
      label: 'Pre-order Now',
      actionType: 'preorder',
    },
    secondary_cta: {
      label: 'Download Track Editor',
      actionType: 'demo',
    },
    verbs_title: 'Kinetic Physics',
    verbs: [
      { verb: 'Construct', subtitle: 'Modular magnetic rails', detail: 'Build vertical spirals, loops, and branching split-paths.' },
      { verb: 'Race', subtitle: 'Laser split tracking', detail: 'High-speed 1000Hz optical gates capture thousandth-of-a-second split times.' },
      { verb: 'Compete', subtitle: 'Global track leaderboards', detail: 'Share track layouts via QR codes and race ghost times globally.' },
    ],
    features: [
      { title: 'Optical Laser Gate Sensors', description: 'Sub-millisecond optical beam precision with instant Bluetooth sync.', iconName: 'Cpu' },
      { title: 'Modular Magnetic Wall Mounts', description: 'Damage-free nano-suction backing locks onto walls, whiteboards, or tables.', iconName: 'Layers' },
    ],
    media_gallery: [
      {
        id: 'cm-1',
        type: 'image',
        title: 'Chrono-Marbles Wall Rig',
        caption: 'Multi-level wall track with gravity loops.',
        url: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=400&q=80',
      },
    ],
    world_section_title: 'The Science of Marble Speed',
    world_section_description: 'We spent two years testing aerodynamic bearing weights and friction-coefficient polymers so you can experience pure physical kinetic bliss.',
    world_highlights: [
      { title: 'Micro-Ball Precision', body: 'Tungsten-carbide micro bearings engineered for frictionless kinetic energy retention.' },
    ],
    specs: [
      { label: 'Track Pieces', value: '64 Modular Magnetic Sections' },
      { label: 'Sensor Units', value: '4 Optical Laser Split Gates' },
      { label: 'Battery Life', value: '30+ Hours per sensor on single charge' },
    ],
    age_recommendation: 'Ages 6 to 99',
    players_or_audience: '1–4 Racers',
  },
  {
    id: 'prod-sproutling',
    name: "Sproutling's Big Dig",
    slug: 'sproutling',
    product_type: 'video_game',
    tagline: 'Burrow deep, cultivate friendships, unearth wonders.',
    short_description: 'A heartwarming underground sandbox adventure game where a tiny energetic opossum pup unearths ancient seeds, burrows cozy tunnels, and wakes slumbering forest spirits.',
    description: "Sproutling's Big Dig is a cozy exploratory adventure video game starring a young opossum pup who discovers an enchanted garden beneath the forest floor. Dig soft, deformable loam, cultivate bioluminescent mushrooms, and build warm underground burrows for whimsical critter neighbors.",
    status: 'Early Concept & Mechanical Prototyping',
    readiness: 'IDEA',
    availability: 'NOT_AVAILABLE',
    launch_date: 'Late 2027',
    featured: false,
    canonical_domain: 'sproutling.osumgames.com',
    redirect_domains: ['sprout.osumgames.com'],
    logo_text: "SPROUTLING'S BIG DIG",
    hero_image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80',
    hero_tag: 'Cozy Sandbox Adventure · Physical-Deformable Soil · All Ages',
    theme: {
      primaryColor: '#84cc16', // lime / sprout
      accentColor: '#f59e0b', // warm honey
      bgGradient: 'from-[#141d08] via-[#0d1505] to-[#060b02]',
      cardBg: 'bg-[#18230b]/80',
      borderColor: 'border-lime-500/30',
      fontFamilyClass: 'font-display',
      moodTag: 'Cozy Gardening, Burrowing & Discovery',
      accentGlow: 'rgba(132, 204, 22, 0.25)',
    },
    primary_cta: {
      label: 'Keep Me in the Loop',
      actionType: 'notify',
    },
    secondary_cta: {
      label: 'View Concept Art',
      actionType: 'trailer',
    },
    verbs_title: 'Critter Activities',
    verbs: [
      { verb: 'Dig', subtitle: 'Satisfying deformable soil physics', detail: 'Carve smooth burrows, secret slides, and water channels.' },
      { verb: 'Plant', subtitle: 'Magical flora cross-breeding', detail: 'Grow glowing moss lanterns and bounce-pad mushrooms.' },
      { verb: 'Befriend', subtitle: 'Forest critters & garden spirits', detail: 'Trade shiny acorns for cozy furniture and warm tea recipes.' },
    ],
    features: [
      { title: 'Zero Stress, Pure Curiosity', description: 'No game-overs, no timers—just relaxing tactile underground excavation.', iconName: 'Heart' },
      { title: 'Dynamic Ecosystem Simulation', description: 'Water flows, roots spread, and mushrooms bloom in real-time.', iconName: 'Sparkles' },
    ],
    media_gallery: [
      {
        id: 'sprout-1',
        type: 'concept',
        title: 'Sproutling Burrow Concept',
        caption: 'Underground home featuring acorn lantern and soft moss bed.',
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
        thumbnailUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80',
      },
    ],
    world_section_title: 'The Underground Forest',
    world_section_description: 'Beneath the roots of the Elder Oak lies an entire forgotten world of subterranean streams, mineral caves, and sleepy burrowers waiting to welcome you.',
    world_highlights: [
      { title: 'The Great Taproot', body: 'The central anchor of the garden that connects all burrows together.' },
    ],
    specs: [
      { label: 'Target Platforms', value: 'Nintendo Switch, PC, iPad, Mac' },
      { label: 'Style', value: 'Charming Hand-Painted Claymation Aesthetic' },
    ],
    age_recommendation: 'Ages 4 to 104',
    players_or_audience: '1–2 Players (Co-op Burrowing)',
  },
];

export const getProductByDomain = (domain: string): Product | undefined => {
  return PRODUCTS.find(
    (p) =>
      p.canonical_domain.toLowerCase() === domain.toLowerCase() ||
      p.slug.toLowerCase() === domain.replace('.osumgames.com', '').toLowerCase()
  );
};

export const getProductByRedirect = (domain: string): Product | undefined => {
  return PRODUCTS.find((p) =>
    p.redirect_domains.some((rd) => rd.toLowerCase() === domain.toLowerCase())
  );
};

export const CATEGORIES = [
  {
    id: 'video_game',
    label: 'Video Games',
    description: 'Digital worlds, acoustic mysteries, and adrenaline-charged tactical adventures.',
    iconName: 'Gamepad2',
    accentColor: '#38bdf8',
  },
  {
    id: 'tabletop',
    label: 'Tabletop Games',
    description: 'Deep strategic board games, screen-free tactile negotiation, and court intrigue.',
    iconName: 'Crown',
    accentColor: '#eab308',
  },
  {
    id: 'toy',
    label: 'Toys & Robotics',
    description: 'Programmable snap-together creature systems, kinetic limbs, and real-world tinkering.',
    iconName: 'Cpu',
    accentColor: '#10b981',
  },
  {
    id: 'interactive',
    label: 'Interactive Hybrids',
    description: 'Products that seamlessly bridge the physical and digital boundaries of play.',
    iconName: 'Sparkles',
    accentColor: '#06b6d4',
  },
];
