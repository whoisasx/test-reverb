# test-reverb

Disposable Next.js repository for exercising ReverbCode/AO SCM observation.

The repository starts in a passing state. Dummy GitHub issues intentionally ask
agents to make small PRs that break one workflow at a time, so the AO daemon can
observe PR state, CI failure state, review comments, cache updates, database
writes, CDC events, and lifecycle nudges.

## AO smoke scenario

Dashboard link smoke value: refreshed base conflict for AO dashboard

## Local commands

```bash
npm install
npm run dev
npm run build
npm run typecheck
npm run test:all
```

## CI failure markers

The custom smoke workflows fail when these marker strings are introduced:

- `FAIL_CONTENT`
- `FAIL_COMPONENTS`
- `FAIL_ROUTES`
- `FAIL_ACCESSIBILITY`
- `FAIL_COPY`
- `FAIL_METADATA`
- `FAIL_STYLES`
- `FAIL_FIXTURES`
- `FAIL_LINKS`

The build and typecheck workflows can be failed by introducing invalid Next.js
or TypeScript code.
