# LOFTET - Ecommerce for men's apparel

[Next.js web app](/web/) that fetches products from [Sanity.io](/cms/).

LOFTET is a template for a simple ecommerce with a quick and easy CMS for anyone to work with. The CMS sets up products and categories for the project and the web app renders it on the front end. Payment is integrated through [Stripe](https://stripe.com/en-se) and user can pay with card and [Klarna](https://www.klarna.com/se/). The payment options are customized for Swedish consumers.

Deployed version of [LOFTET](https://loftet.vercel.app/)

## Table of contents

-   [Overview](#overview)
-   [Features](#features)
-   [Getting Started](#getting-started)
-   [Testing](#testing)
-   [Conclusion](#conclusion)
-   [Built with](#built-with)
-   [Printscreens](#printscreens)

## Overview

This project is an ecommerce platform built using Next.js, Sanity.io, and Stripe. Next.js is a framework for building server-rendered React applications, Sanity.io is a headless CMS, and Stripe is a payment processor. Together, these technologies allow for a fast, secure, and customizable shopping experience.

## Features

-   Server-rendered React for fast performance and SEO
-   Sanity.io for easy content management
-   Stripe for secure and customizable payment processing
-   Product catalog, shopping cart, and checkout process
-   Product sorting and search functionality
-   Admin panel for managing orders through Stripe
-   Unit and integration testing with Jest and React Testing Library
-   End to end testing with Cypress

## Getting Started

To get started, you'll need to set up a Sanity.io account and create a new project. From there, you can create a schema for your product catalog, and add products to the catalog using the Sanity Studio.

Next, you'll need to create a Stripe account, and set up your payment processing settings. You can find the necessary credentials and webhooks in the Stripe Dashboard.

Once you've set up your Sanity and Stripe accounts, you can clone the project repository and start the development server.

```
git clone https://github.com/R4YLx/loftet.git
cd loftet/web & cd loftet/cms
npm install
npm run dev
```

Make sure to add your Sanity and Stripe credentials to your .env file for the project to function correctly. Create a `.env.local` file in 'web'-folder with following variables:

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_PROJECT_ID=YOUR_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_API_TOKEN=YOUR_SANITY_API_TOKEN
NEXT_PUBLIC_SANITY_API_URL=https://YOUR_PROJECT_ID.api.sanity.io/v2021-10-21/data/query/production?
NEXT_PUBLIC_SANITY_PATCH_URL=https://YOUR_PROJECT_ID.api.sanity.io/v2021-10-21/data/mutate/production
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_STRIPE_KEY
STRIPE_SECRET_KEY=YOUR_SECRET_STRIPE_KEY
```

## Testing

The application can be tested using React Testing Library and Cypress.

Jest is used as the test runner.
React Testing Library is used for unit testing of the components.

Cypress is used for end-to-end testing.

Run `npm run test` to run the unit tests.

Run `npm run e2e` to run the end-to-end tests.

## Conclusion

This project demonstrates how to build a server-rendered ecommerce platform using Next.js, Sanity.io, and Stripe. By following the instructions in this documentation, you should be able to set up the project on your local machine, customize it to your needs, and deploy it to a live environment.

Keep in mind that this is just an example, you should adjust the detail and instruction to match your own project.

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
-   Jest
-   React Testing Library
-   Cypress E2E Testing

## Printscreens

#### Start page

<img src="/web/public/images/print-screens/start-page.png" width=100%>

#### Collection Page

<img src="/web/public/images/print-screens/collection-page.png" width=100%>

#### Cart Page

<img src="/web/public/images/print-screens/cart-page.png" width=100%>

#### Search Page

<img src="/web/public/images/print-screens/search-page.png" width=100%>
