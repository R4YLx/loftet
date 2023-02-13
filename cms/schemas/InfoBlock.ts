import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'infoBlock',
  title: 'Info Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent'
    }),
    defineField({
      name: 'buttonText',
      title: 'Button text',
      type: 'string'
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string'
    })
  ]
})
