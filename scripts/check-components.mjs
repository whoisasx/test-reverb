import { pass, rejectMarker, requireText } from "./check-lib.mjs";

rejectMarker("app/components/status-card.tsx", "FAIL_COMPONENTS");
requireText("app/components/status-card.tsx", "export function StatusCard");
requireText("app/page.tsx", "<StatusCard");
pass("components check passed");

