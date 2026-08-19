export const teamMemberSchema = {
  name: 'teamMember',
  title: 'Team & Makers',
  type: 'document',
  fields: [
    { name: 'name', title: 'Full Name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'role', title: 'Studio Role / Title', type: 'string' },
    {
      name: 'discipline',
      title: 'Discipline',
      type: 'string',
      options: {
        list: [
          'Robotics & Toy Engineering',
          'Game Design',
          'Narrative & Worldbuilding',
          'Art & Physical Prototyping',
          'Audio & Synthesis',
          'Community & Playtesting',
        ],
      },
    },
    { name: 'bio', title: 'Maker Bio', type: 'text', rows: 4 },
    { name: 'favoriteToyOrGame', title: 'Favorite Game / Toy', type: 'string' },
    { name: 'secretProject', title: 'Secret Lab Project', type: 'string' },
    { name: 'avatar', title: 'Avatar Photo', type: 'image', options: { hotspot: true } },
  ],
};

export const communitySubmissionSchema = {
  name: 'communitySubmission',
  title: 'Community Creations & Mods',
  type: 'document',
  fields: [
    { name: 'title', title: 'Creation Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'author', title: 'Author Name', type: 'string' },
    { name: 'authorHandle', title: 'Author Handle', type: 'string' },
    {
      name: 'type',
      title: 'Submission Type',
      type: 'string',
      options: {
        list: [
          { title: 'Fan Art & Lore', value: 'fan_art' },
          { title: 'Toy Build & Mod', value: 'toy_build' },
          { title: 'Strategy Guide', value: 'strategy_guide' },
          { title: 'Custom Mod', value: 'mod' },
          { title: 'Playtest Feedback', value: 'playtest_feedback' },
        ],
      },
    },
    { name: 'productSlug', title: 'Associated Product Slug', type: 'string' },
    { name: 'productName', title: 'Associated Product Name', type: 'string' },
    { name: 'description', title: 'Creation Notes', type: 'text', rows: 3 },
    { name: 'likes', title: 'Community Likes Count', type: 'number', initialValue: 0 },
    { name: 'commentsCount', title: 'Comments Count', type: 'number', initialValue: 0 },
    { name: 'date', title: 'Date Submitted', type: 'string' },
    { name: 'image', title: 'Showcase Image', type: 'image', options: { hotspot: true } },
    { name: 'isStaffPick', title: 'Awarded Staff Pick Badge', type: 'boolean', initialValue: false },
  ],
};

export const faqItemSchema = {
  name: 'faqItem',
  title: 'FAQ & Support Items',
  type: 'document',
  fields: [
    { name: 'question', title: 'Question', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'answer', title: 'Answer Markdown/Text', type: 'text', rows: 4 },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Orders & Shipping',
          'Toy Safety & Tech',
          'Board Game Replacement Parts',
          'Playtesting & Beta',
          'General',
        ],
      },
    },
  ],
};
