import { defineType, defineField } from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Game & Toy Products',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Connected Toys & Hardware', value: 'Connected Toys' },
          { title: 'Tabletop & Board Games', value: 'Tabletop' },
          { title: 'Video Games & Digital', value: 'Video Games' },
          { title: 'Hardware Labs', value: 'Hardware' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Release Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available Now', value: 'Available' },
          { title: 'Pre-Order Active', value: 'Pre-Order' },
          { title: 'In Active Development', value: 'In Development' },
          { title: 'Closed Prototype / Lab', value: 'Prototype' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'canonical_domain',
      title: 'Canonical Subdomain',
      type: 'string',
      description: 'The dedicated subdomain for this product (e.g. remoro.osumgames.com)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'redirect_domains',
      title: 'Redirect Subdomain Aliases',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Alternative subdomains that will auto-redirect here (e.g. moro.osumgames.com)',
    }),
    defineField({
      name: 'primary_color',
      title: 'Primary Brand Color (Hex)',
      type: 'string',
      initialValue: '#00F0FF',
    }),
    defineField({
      name: 'accent_color',
      title: 'Accent Color (Hex)',
      type: 'string',
      initialValue: '#FF003C',
    }),
    defineField({
      name: 'short_description',
      title: 'Short Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'full_description',
      title: 'Full Product Narrative',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'hero_image',
      title: 'Hero Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'gallery_images',
      title: 'Photo Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'specs',
      title: 'Product Specifications (Key-Value)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Spec Label (e.g., Players, Battery)' },
            { name: 'value', type: 'string', title: 'Spec Value (e.g., 2-4 Players, 14hr USB-C)' },
          ],
        },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Highlight Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Feature Title' },
            { name: 'description', type: 'text', title: 'Feature Description' },
          ],
        },
      ],
    }),
    defineField({
      name: 'interactive_simulator',
      title: 'Interactive Simulator Type',
      type: 'string',
      options: {
        list: [
          { title: 'ReMoro Rover Remote Control', value: 'remoro' },
          { title: 'King’s Order Interactive Card Dealer', value: 'kingsorder' },
          { title: 'An Ancient Resound Audio Wave Synthesizer', value: 'resound' },
          { title: 'Vanquished Boss Crucible Arena', value: 'vanquished' },
          { title: 'Standard Interactive 3D Viewer', value: 'none' },
        ],
      },
    }),
    defineField({
      name: 'price_usd',
      title: 'Retail Price ($ USD)',
      type: 'number',
    }),
    defineField({
      name: 'launch_date',
      title: 'Launch Date / Quarter',
      type: 'string',
    }),
  ],
});