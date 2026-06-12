import { pass, rejectMarker, requireText } from "./check-lib.mjs";

rejectMarker("app/page.tsx", "FAIL_LINKS");
requireText("app/page.tsx", "https://github.com/whoisasx/test-reverb");
pass("links check passed");

