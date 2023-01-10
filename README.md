# Loftet - ecommerce

## Getting Started

First, create a `.env.local` file in 'web'-folder with following variables:

| env variables                 |                                                                       |
| ----------------------------- | --------------------------------------------------------------------- |
| NEXT_PUBLIC_BASE_URL          | http://localhost:3000                                                 |
| NEXT_PUBLIC_SANITY_DATASET    | production                                                            |
| NEXT_PUBLIC_SANITY_PROJECT_ID | Your Sanity project ID                                                |
| NEXT_PUBLIC_SANITY_API_TOKEN  | API token from Sanity                                                 |
| NEXT_PUBLIC_SANITY_API_URL    | https://`PROJECT_ID`.api.sanity.io/v2021-10-21/data/query/production? |

Second, cd to web and install all dependencies, same applies to cms folder, and run the development server:

```
$ npm install
$ npm run dev
```

## Built with

-   Next.js
-   Typescript
-   Sanity.io
