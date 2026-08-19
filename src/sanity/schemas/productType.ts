export const productSchema = {
  name: 'product',
  title: 'Product (Game / Tabletop / Toy)',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (Subdomain Identifier)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
      description: 'Used for internal routing and default subdomain prefix (e.g. "remoro" -> remoro.osumgames.com)',
    },
    {
      name: 'product_type',
      title: 'Product Category',
      type: 'string',
      options: {
        list: [
          { title: 'Video Game', value: 'video_game' },
          { title: 'Tabletop / Board Game', value: 'tabletop' },
          { title: 'Toy & Robotics', value: 'toy' },
          { title: 'Interactive Hybrid', value: 'interactive' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'canonical_domain',
      title: 'Canonical Domain',
      type: 'string',
      description: 'The primary live domain/subdomain for this product (e.g. remoro.osumgames.com). When DNS points to this server, traffic to this host immediately renders this product’s world without code deploys.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'redirect_domains',
      title: 'Redirect Domain Aliases',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Alternative subdomains or domains that automatically redirect to the canonical domain (e.g. ["moro.osumgames.com", "toy.osumgames.com"]).',
    },
    {
      name: 'tagline',
      title: 'Short Punchy Tagline',
      type: 'string',
    },
    {
      name: 'short_description',
      title: 'Short Summary',
      type: 'text',
      rows: 3,
    },
    {
      name: 'description',
      title: 'Full Product Story & Overview',
      type: 'text',
      rows: 6,
    },
    {
      name: 'status',
      title: 'Current Status Label',
      type: 'string',
      description: 'e.g. "Wave 1 Pre-Orders Open · Shipping Q4 2026"',
    },
    {
      name: 'readiness',
      title: 'Readiness Stage',
      type: 'string',
      options: {
        list: [
          { title: 'Idea / Concept', value: 'IDEA' },
          { title: 'In Active Development', value: 'DEVELOPMENT' },
          { title: 'Pre-Release / Beta Playtest', value: 'PRE_RELEASE' },
          { title: 'Launched & Available', value: 'LAUNCHED' },
          { title: 'Archived', value: 'ARCHIVED' },
        ],
      },
    },
    {
      name: 'availability',
      title: 'Commercial Availability',
      type: 'string',
      options: {
        list: [
          { title: 'Not Available Yet', value: 'NOT_AVAILABLE' },
          { title: 'Pre-Order / Reserve Open', value: 'PREORDER' },
          { title: 'In Stock & Available', value: 'AVAILABLE' },
          { title: 'Sold Out / Batch Filled', value: 'SOLD_OUT' },
        ],
      },
    },
    {
      name: 'launch_date',
      title: 'Target Launch Date / Window',
      type: 'string',
    },
    {
      name: 'featured',
      title: 'Feature on Homepage Spotlight',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'hero_image',
      title: 'Hero Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'hero_tag',
      title: 'Hero Pill / Spec Badge',
      type: 'string',
      description: 'e.g. "Physical Toy System · Bluetooth 5.4 · Open-Architecture"',
    },
    {
      name: 'theme',
      title: 'Visual Theme Customization',
      type: 'object',
      fields: [
        { name: 'primaryColor', title: 'Primary Brand Color Hex', type: 'string' },
        { name: 'accentColor', title: 'Accent Color Hex', type: 'string' },
        { name: 'fontFamilyClass', title: 'Typography Style Class', type: 'string' },
        { name: 'moodTag', title: 'Mood Tagline', type: 'string' },
      ],
    },
    {
      name: 'verbs',
      title: 'Interactive Gameplay / Play Verbs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'verb', title: 'Action Verb (e.g. Build, Strike, Rule)', type: 'string' },
            { name: 'subtitle', title: 'Subtitle', type: 'string' },
            { name: 'detail', title: 'Detail Description', type: 'text', rows: 2 },
          ],
        },
      ],
    },
    {
      name: 'features',
      title: 'Key Features & Mechanics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Feature Title', type: 'string' },
            { name: 'description', title: 'Feature Description', type: 'text', rows: 2 },
            { name: 'iconName', title: 'Icon Identifier', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'specs',
      title: 'Box Specifications / Technical Details',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Spec Label (e.g. Player Count, Battery, Material)', type: 'string' },
            { name: 'value', title: 'Spec Value', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'interactive_type',
      title: 'Interactive Simulator Workshop Embed',
      type: 'string',
      options: {
        list: [
          { title: 'ReMoro Modular Robot Configurator', value: 'remoro_builder' },
          { title: 'Ancient Resound Harmonic Tuner', value: 'ancient_tuner' },
          { title: 'Vanquished Ashforge Crucible', value: 'vanquished_forge' },
          { title: "The King's Order War Table", value: 'kings_decree' },
        ],
      },
    },
  ],
};
