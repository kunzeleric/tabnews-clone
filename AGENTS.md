# Repository Guidelines

## Project Structure & Module Organization
- `src/app/` contains the Next.js App Router pages, layouts, and API routes (e.g., `src/app/api/v1/status/route.ts`).
- `src/infra/` contains infrastructure helpers like database access.
- `src/models/` holds domain models and related utilities.
- `src/tests/` holds Jest tests, currently organized under `integration/`.
- Root config files include `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, and `jest.config.cjs`.

## Build, Test, and Development Commands
- `npm run dev`: start the Next.js dev server.
- `npm run services:up`: start the local Postgres service via `compose.yaml`.
- `npm run services:down` / `services:stop`: shut down or stop the database container.
- `npm run lint:check`: run Prettier in check mode.
- `npm run lint:fix`: auto-format via Prettier.
- `npm test`: run Jest once; `npm run test:watch` to re-run on changes.
- `npm run migration:create` / `migration:up`: create/apply DB migrations (uses `.env.development`).

## Coding Style & Naming Conventions
- Indentation: 2 spaces (see `.editorconfig`).
- TypeScript + ES modules; path alias `@/*` maps to `src/*`.
- Formatting is enforced by Prettier; run `lint:fix` before pushing.
- Tests follow `*.test.ts` naming (see `src/tests/integration/...`).

## Testing Guidelines
- Framework: Jest with `ts-jest`, Node test environment.
- Keep integration tests under `src/tests/integration/` and mirror API paths.
- No explicit coverage threshold is configured; add targeted tests for new routes or DB logic.

## Commit & Pull Request Guidelines
- Git history uses short, lowercase, past-tense summaries (e.g., “created endpoint for migrations”).
- Keep commits focused; avoid bundling unrelated changes.
- PRs should include: summary of changes, local test commands run, and any DB/migration notes.

## Configuration & Local Services
- Local database runs via `compose.yaml` and `.env.development`. Do not commit secrets.
- API routes that touch the DB should handle unavailable services gracefully in dev.
