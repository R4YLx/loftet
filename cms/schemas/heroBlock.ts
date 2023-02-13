import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroBlock',
  title: 'Hero Block',
  type: 'document',
  fields: [
    defineField({
      name: 'buttonText',
      title: 'Button text',
      type: 'string'
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string'
    }),
    defineField({
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ]
})
