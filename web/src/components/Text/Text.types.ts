export interface IText extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string
  element: 'p' | 'span'
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}
