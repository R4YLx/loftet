import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
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
        source: '_id',
        maxLength: 96
      }
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'reference',
      to: [{ type: 'size' }]
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'subcategory',
      title: 'Subcategory',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'subcategory' }]
        }
      ]
    }),
    defineField({
      name: 'item',
      title: 'Item',
      type: 'string'
    }),
    defineField({
      name: 'material',
      title: 'Material',
      type: 'string'
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string'
    }),
    defineField({
      name: 'condition',
      title: 'Condition',
      type: 'string'
    }),
    defineField({
      name: 'measurements',
      title: 'Measurements',
      type: 'text'
    })
  ]
})
