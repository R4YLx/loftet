import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'size',
  title: 'Size',
  type: 'object',
  fields: [
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string'
    })
  ]
})
