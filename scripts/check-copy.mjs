import { pass, rejectMarker, requireText } from "./check-lib.mjs";

rejectMarker("app/page.tsx", "FAIL_COPY");
requireText("app/page.tsx", "controlled PRs");
requireText("app/page.tsx", "review comments");
pass("copy check passed");

