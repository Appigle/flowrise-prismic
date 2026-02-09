# Repository Guidelines

## Project Structure & Module Organization
- `src/app/` contains the Next.js App Router routes and layouts.
- `src/components/` holds shared UI components.
- `src/slices/` contains Prismic Slice components.
- `customtypes/` and `slicemachine.config.json` define Prismic Custom Types and Slice Machine config.
- `public/` stores static assets served at `/`.
- Type definitions live in `prismicio-types.d.ts` and `next-env.d.ts`.

## Build, Test, and Development Commands
- `npm run dev` starts the local Next.js dev server at `http://localhost:3000`.
- `npm run build` creates a production build.
- `npm run start` serves the production build locally.
- `npm run lint` runs ESLint with the Next.js config.
- `npm run slicemachine` launches Slice Machine for Prismic content modeling.

## Coding Style & Naming Conventions
- TypeScript is enabled with `strict` mode; keep types explicit where inference is unclear.
- Use the `@/*` path alias for imports from `src/` (example: `@/components/Button`).
- Follow Next.js conventions for file and route naming in `src/app/`.
- Linting is enforced via `next/core-web-vitals` in `.eslintrc.json`.

## Testing Guidelines
- No automated test framework is configured yet.
- If you add tests, prefer co-locating them with the code and use names like `*.test.tsx`.
- Document any new test commands in `package.json` and update this file.

## Commit & Pull Request Guidelines
- Recent commits follow Conventional Commits (e.g., `feat:`, `refactor:`, `chore:`). Keep using that pattern.
- PRs should include a concise description, link relevant issues, and add screenshots for UI changes.

## Configuration Tips
- Prismic routing is defined in `src/prismicio.ts`; update routes when new content types are added.
- Cache behavior differs between dev and prod in `createClient`; keep changes in sync with content needs.
