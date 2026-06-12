import { fail, pass, rejectMarker } from "./check-lib.mjs";

const raw = rejectMarker("ci-fixtures/checks.json", "FAIL_FIXTURES");
const checks = JSON.parse(raw);

if (!Array.isArray(checks) || checks.length < 3) {
  fail("ci-fixtures/checks.json must contain at least three checks");
}

for (const check of checks) {
  if (!check.id || !check.title || !check.detail) {
    fail("each fixture check needs id, title, and detail");
  }
}

pass("fixtures check passed");

