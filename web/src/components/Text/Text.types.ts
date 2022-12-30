export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string
  element: 'p' | 'span'
  size: 'sm' | 'md' | 'lg' | 'xl'
}
