## Component folder structure

- index.ts
- Component.tsx
- Component.module.scss
- Component.types.ts
- Component.utils.ts
- SubComponent folder
  - index.ts
  - SubComponent.tsx
  - SubComponent.module.scss
  - SubComponent.types.ts
  - SubComponent.utils.ts

```tsx
// index.ts
export { default as Root } from './Component'
export type { ComponentProps } from './Component.types'

export { default as SubComponent } from './SubComponent'
export type { SubComponentProps } from './SubComponent/SubComponent.types'
```

### Component

```tsx
// Component.tsx
import clsx from 'clsx'
import css from 'Component.module.scss'
import { ComponentProps } from './'
import SubComponent, { SubComponentProps } from './SubComponent'

function Component({ prop }: ComponentProps) {
  return (
    <div className={css.Root}>
      <SubComponent
        className={clsx(
          css.Root__childElement,
          toggleState && css.Root__childElement_toggle
        )}
      />
      <div className={css.Root__anotherChildElement} />
    </div>
  )
}
```

# Imports

Aliases have been created for shorter and easier imports.
Use @ to import from specific folder, e.g. `@components/Headline`.
Aliases can be configured in `tsconfig.json`.

### Styling

`Root` is the first component element className.
`Root__childElement` is a child className. Child classnames don't need to communicate how deep the element is nested. We just want to communicate that it's not the first component element.
`Root__childElement_visible` is a child className with a modifer value.
`Root__childElement_color_red` is a child className with a modifer name and value.

```scss
.Root {
  display: none;

  &_visible {
    display: block;
  }

  &__childElement {
    ...
  }

  &__anotherChildElement {
    ...
  }
}
```

### Types

```ts
// Component.types.ts
interface ComponentProps {
  prop: string
}
```
