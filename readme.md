# Astro starter template

```sh
pnpm create astro@latest --template ndinata/astro-template
```

Basic Astro 5 project template with TS, ESLint, and Prettier set up out-of-the-box.

## Template variations

### Tailwind CSS

A version of the template with [Tailwind CSS](https://tailwindcss.com) set up
out-of-the-box is also available via the [`with-tailwindcss` branch](https://github.com/ndinata/astro-template/tree/with-tailwindcss).

```sh
pnpm create astro@latest --template ndinata/astro-template#with-tailwindcss
```

## Project structure

The project structure is similar to that of a default basic Astro project, but
with the extra ESLint and Prettier config files.

To learn more about the folder structure of an Astro project, refer to
[Astro's guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## Commands

All commands are run from the root of the project:

| Command          | Action                                           |
| :--------------- | :----------------------------------------------- |
| `pnpm install`   | Installs dependencies                            |
| `pnpm dev`       | Starts local dev server at `localhost:4321`      |
| `pnpm build`     | Build your production site to `./dist/`          |
| `pnpm preview`   | Preview your build locally, before deploying     |
| `pnpm lint`      | Runs `eslint` on `./src/`                        |
| `pnpm fmt-check` | Runs `prettier --check` on the project root      |
| `pnpm astro ...` | Run CLI commands like `astro add`, `astro check` |

## Learn more

Feel free to check [Astro's documentation](https://docs.astro.build).
