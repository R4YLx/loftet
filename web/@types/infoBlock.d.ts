interface IInfoBlock {
  _createdAt: string
  _id: string
  _rev: string
  _type: 'heroBlock'
  _updatedAt: string
  buttonText: string
  content: Block[]
  title: string
}

interface Block {
  _key: string
  _type: 'block'
  children: Span[]
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
}

interface Span {
  _key: string
  _type: 'span'
  marks: string[]
  text: string
}
