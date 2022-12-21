export interface IHeadline extends React.HTMLAttributes<HTMLHeadingElement> {
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: 'sm' | 'md' | 'lg' | 'xl'
}
