import { pass, rejectMarker, requireText } from "./check-lib.mjs";

rejectMarker("app/page.tsx", "FAIL_ACCESSIBILITY");
requireText("app/page.tsx", "<main");
requireText("app/page.tsx", "aria-labelledby");
requireText("app/page.tsx", "aria-label=\"Smoke checks\"");
pass("accessibility check passed");

