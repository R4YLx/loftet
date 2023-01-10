# Loftet - Ecommerce for men's apparel

[Next.js web app](/web/) that fetches products from [Sanity.io](/cms/).

Loftet is a template for a simple ecommerce with a quick and easy CMS for anyone to work with. The CMS sets up products and categories for the project and the web app renders it on the front end. Payment is integrated through Stripe and user can pay with card and Klarna.

## Getting Started

First, create a `.env.local` file in 'web'-folder with following variables:

| Env variables                      |                                                                       |
| ---------------------------------- | --------------------------------------------------------------------- |
| NEXT_PUBLIC_BASE_URL               | http://localhost:3000                                                 |
| NEXT_PUBLIC_SANITY_DATASET         | production                                                            |
| NEXT_PUBLIC_SANITY_PROJECT_ID      | Your Sanity project ID                                                |
| NEXT_PUBLIC_SANITY_API_TOKEN       | API token from Sanity                                                 |
| NEXT_PUBLIC_SANITY_API_URL         | https://`PROJECT_ID`.api.sanity.io/v2021-10-21/data/query/production? |
| NEXT_PUBLIC_SANITY_PATCH_URL       | https://`PROJECT_ID`.api.sanity.io/v2021-10-21/data/mutate/production |
| NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY | Your publishable key from Stripe                                      |
| STRIPE_SECRET_KEY                  | Your secret key from Stripe                                           |

Second, cd to web and install all dependencies, same applies to cms folder, and run the development server:

```
$ npm install
$ npm run dev
```

## Built with

-   Next.js
-   Typescript
-   Sanity.io
-   Stripe
-   Zustand
-   TanStack Query
-   Fuse.js
-   SCSS
-   clsx

## Printscreen

#### Start page

<img src="/web/public/images/print-screens/start-page.png" width=100%>

#### Collection Page

<img src="/web/public/images/print-screens/collection-page.png" width=100%>

#### Cart Page

<img src="/web/public/images/print-screens/cart-page.png" width=100%>

#### Search Page

<img src="/web/public/images/print-screens/search-page.png" width=100%>
