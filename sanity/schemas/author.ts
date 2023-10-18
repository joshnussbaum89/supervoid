import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name *',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error('A name is required to publish an author - please add a name'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug *',
      type: 'slug',
      validation: (Rule) =>
        Rule.required().error(
          'A slug is required to publish an author - please create your own, or click "generate" to add a slug'
        ),
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image (optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio (optional)',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
