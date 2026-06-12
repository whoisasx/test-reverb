import { pass, rejectMarker, requireText } from "./check-lib.mjs";

rejectMarker("app/health/page.tsx", "FAIL_ROUTES");
requireText("app/health/page.tsx", "healthy");
requireText("app/health/page.tsx", "Health route");
pass("routes check passed");

