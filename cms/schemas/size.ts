import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'size',
  title: 'Size',
  type: 'document',
  fields: [
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string'
    })
  ]
})
