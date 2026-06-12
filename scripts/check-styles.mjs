import { pass, rejectMarker, requireText } from "./check-lib.mjs";

rejectMarker("app/globals.css", "FAIL_STYLES");
requireText("app/globals.css", ".status-grid");
requireText("app/globals.css", ".status-card");
pass("styles check passed");

