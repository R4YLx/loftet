import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'subcategories',
  title: 'Subcategories',
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
    })
  ]
})
