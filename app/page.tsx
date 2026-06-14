import { StatusCard } from "./components/status-card";
import checks from "../ci-fixtures/checks.json";

// FAIL_COPY: intentional marker for feat/75 SCM observer failed-check testing.
export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">AO SCM observer smoke target</p>
        <h1 id="page-title">Reverb Smoke Lab</h1>
        <p className="summary">
          A small Next.js app used to create controlled PRs, failing checks, and
          review comments for lifecycle validation.
        </p>
        <a className="repo-link" href="https://github.com/whoisasx/test-reverb">
          Open GitHub repo
        </a>
      </section>

      <section className="status-grid" aria-label="Smoke checks">
        {checks.map((check) => (
          <StatusCard key={check.id} title={check.title} detail={check.detail} />
        ))}
      </section>
    </main>
  );
}
