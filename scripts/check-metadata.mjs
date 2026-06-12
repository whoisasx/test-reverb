import { pass, rejectMarker, requireText } from "./check-lib.mjs";

rejectMarker("app/layout.tsx", "FAIL_METADATA");
requireText("app/layout.tsx", "title: \"Reverb Smoke Lab\"");
requireText("app/layout.tsx", "description:");
pass("metadata check passed");

