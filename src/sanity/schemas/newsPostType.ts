export const newsPostSchema = {
  name: 'newsPost',
  title: 'News & Devlogs',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Article / Devlog Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Short Summary Excerpt',
      type: 'text',
      rows: 3,
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Announcement',
          'Development',
          'Playtest',
          'Launch',
          'Behind the Scenes',
          'Events',
        ],
      },
    },
    {
      name: 'date',
      title: 'Publication Date',
      type: 'string',
    },
    {
      name: 'readTime',
      title: 'Estimated Read Time',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'relatedProductSlug',
      title: 'Related Product Slug',
      type: 'string',
    },
    {
      name: 'featured',
      title: 'Feature on Feed Top',
      type: 'boolean',
      initialValue: false,
    },
  ],
};
