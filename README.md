# Modern app boilerplate

This is a boilerplate for a full-stack web app using:

- React for UI
- [Next.js](https://next.js.org/) for rendering, routing, API routes and bundling code
- [Prisma](https://www.prisma.io/) for talking to a PostgreSQL database
- [Formik](https://formik.org/) and [Yup](https://www.npmjs.com/package/yup) for forms and validation
- [Next-auth]() for authentication
- Sass for styling

It contains a basic "post" model. Users can view a list of posts and click on one to see it in detail.

After logging in, users can also create, edit and delete posts.

## 🐒 Getting started

You need Node.js and NPM installed, along with a PostgreSQL database.

```
npx create-next-app <your-app-name> -e https://github.com/jhackett1/railsy-nextjs-prisma-example
```

This will clone the repo and install the dependencies with [create-next-app](https://nextjs.org/docs/api-reference/create-next-app).

You can boot it up with `npm run dev`. It will be on [localhost:3000/posts](http://localhost:3000/posts)

## 🧬 Configuration

It needs a few configuration variables to work.

You can supply these with a `.env` file locally. Run `cp .env.sample .env` to make a fresh one.

## 🦴 Anatomy

It follows the example of Rails - with MVC and CRUD patterns that should seem familiar.

- `prisma/schema.prisma` contains the database models
- `pages/api` contains API routes that overlap closely with Rails controller actions
- The remainder of `pages` contains React/Next.js views

`components` contains reusable React components and everything else is in `lib`.
