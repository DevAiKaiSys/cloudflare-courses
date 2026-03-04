# Reference

[Full-Stack Cloudflare & Hono Course](https://www.youtube.com/playlist?list=PLLCXhfggeqE97wnuesWK9UHkYEv2-b8FB)

## Document

[Bun](https://bun.com/docs/installation)

[Use Bun with Astro](https://docs.astro.build/en/recipes/bun/)

[Tailwind](https://docs.astro.build/en/guides/styling/#tailwind)

[daisyUI](https://daisyui.com/docs/install/)

[Prettier](https://docs.astro.build/en/editor-setup/#prettier)

```bash
bun add -d prettier-plugin-tailwindcss
```

[eslint-plugin-astro](https://ota-meshi.github.io/eslint-plugin-astro/user-guide/)

[Hono](https://hono.dev/docs/getting-started/basic)

```bash
bun add hono
```

Cloudflare manage Worker projects

[Wrangler](https://developers.cloudflare.com/workers/wrangler/)

[concurrently](https://www.npmjs.com/package/concurrently)

Wrangler [Environments Examples](https://developers.cloudflare.com/workers/wrangler/environments/#examples)

Cloudflare Access Enabled

get JWKs URL and Audience (aud)

Workers & Pages > {Project Name} > Settings > workers.dev > Cloudflare Access

Validate JWTs

[Cloudflare Workers example](https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/authorization-cookie/validating-json/#cloudflare-workers-example)

Hono [Middleware](https://hono.dev/docs/guides/middleware) and [Custom Middleware](https://hono.dev/docs/guides/middleware#custom-middleware)

[Cloudflare D1](https://developers.cloudflare.com/d1/get-started/)

[Drizzle ORM](https://orm.drizzle.team/docs/get-started/d1-new)

[@cloudflare/workers-types](https://www.npmjs.com/package/@cloudflare/workers-types)

or

[wrangler types](https://developers.cloudflare.com/workers/languages/typescript/#migrating)

# 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── client
│   │   ├── assets
│   │   │   └── astro.svg
│   │   ├── components
│   │   │   └── Welcome.astro
│   │   ├── layouts
│   │   │   └── Layout.astro
│   │   └── pages
│   │       └── index.astro
└── package.json
```
