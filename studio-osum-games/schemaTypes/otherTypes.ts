import { defineType, defineField } from 'sanity';

export const newsPostType = defineType({
  name: 'newsPost',
  title: 'News & Devlogs',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Post Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Devlog', 'Announcement', 'Behind The Scenes', 'Community & Events', 'Tech Teardown'],
      },
    }),
    defineField({ name: 'date', title: 'Publish Date', type: 'date' }),
    defineField({ name: 'summary', title: 'Short Summary', type: 'text', rows: 2 }),
    defineField({ name: 'content', title: 'Full Article Content', type: 'text', rows: 8 }),
    defineField({ name: 'cover_image', title: 'Cover Image', type: 'image' }),
    defineField({ name: 'read_time_minutes', title: 'Read Time (Minutes)', type: 'number' }),
  ],
});

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'role', title: 'Studio Role', type: 'string' }),
    defineField({ name: 'discipline', title: 'Discipline', type: 'string' }),
    defineField({ name: 'bio', title: 'Short Bio', type: 'text', rows: 3 }),
    defineField({ name: 'favoriteToyOrGame', title: 'Favorite Classic Game/Toy', type: 'string' }),
    defineField({ name: 'secretProject', title: 'Current Secret Workshop Project', type: 'string' }),
  ],
});

export const faqItemType = defineType({
  name: 'faqItem',
  title: 'FAQs & Support',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 4 }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Toy Safety & Tech', 'Board Game Replacement Parts', 'Orders & Shipping', 'Playtesting & Beta', 'General'],
      },
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
});