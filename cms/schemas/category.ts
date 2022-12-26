import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
    defineField({
      name: 'subcategories',
      title: 'subcategories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'subcategories' }]
        }
      ]
    })
  ]
})
