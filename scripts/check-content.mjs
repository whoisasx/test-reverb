import { pass, rejectMarker, requireText } from "./check-lib.mjs";

rejectMarker("app/page.tsx", "FAIL_CONTENT");
requireText("app/page.tsx", "Reverb Smoke Lab");
requireText("app/page.tsx", "AO SCM observer smoke target");
pass("content check passed");

