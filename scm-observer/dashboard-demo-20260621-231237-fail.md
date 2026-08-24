# Dashboard Demo: Failing PR

This throwaway file exists only so AO can display a noisy failing PR.

- Scenario: multiple CI jobs should fail.
- Expected dashboard state: CI failing with several failing check names.
- Demo namespace: ao/dashboard-demo-20260621-231237.

Reviewable lines:

1. Review comment target for dashboard detail A.
2. Review comment target for dashboard detail B.
3. Review comment target for dashboard detail C.
4. Review comment target for dashboard detail D.
5. Review comment target for dashboard detail E.
6. Review comment target for dashboard detail F.
7. Review comment target for dashboard detail G.
8. Review comment target for dashboard detail H.

## Review attention detail

Reviewer: whoisasx. This intentionally long attention detail confirms the AO
panel can show reviewer feedback with clean wrapping while preserving the
original file-line anchors for each unresolved review thread.

The eight review threads above are intentionally left unresolved so the
dashboard can show reviewer count, link targets, dense thread detail, and the
+N overflow display for many comments without moving that state into metadata.
