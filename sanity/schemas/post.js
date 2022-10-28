export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title *',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error(
          'A title is required for each post - please add a title'
        ),
    },
    {
      name: 'slug',
      title: 'Slug *',
      type: 'slug',
      validation: (Rule) =>
        Rule.required().error(
          'A slug is required for each post - please create your own, or click "generate" to add a slug'
        ),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author *',
      type: 'reference',
      validation: (Rule) =>
        Rule.required().error(
          'An author is required for each post - please add an author'
        ),
      to: { type: 'author' },
    },
    {
      name: 'mainImage',
      title: 'Main image *',
      type: 'image',
      validation: (Rule) =>
        Rule.required().error(
          'A main image is required for each post - please add an image'
        ),
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text *',
          type: 'text',
          validation: (Rule) =>
            Rule.required().error(
              'Alternative text is required for images - please add alternative text'
            ),
          description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what's on your page.`,
          options: { isHighlighted: true },
        },
      ],
      options: { hotspot: true },
    },
    {
      name: 'categories',
      title: 'Categories (optional)',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category',
          },
        },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published at *',
      type: 'date',
      validation: (Rule) =>
        Rule.required().error(
          'A date is required for each post - please add a date'
        ),
      options: {
        dateFormat: 'MM-DD-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'body',
      title: 'Body *',
      type: 'blockContent',
      validation: (Rule) =>
        Rule.required().error(
          'Body text is required to post a Lab - please add some text'
        ),
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
