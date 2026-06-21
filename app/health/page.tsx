export default function HealthPage() {
  // Dashboard demo marker: FAIL_ROUTES
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="health-title">
        <p className="eyebrow">Health route</p>
        <h1 id="health-title">healthy</h1>
        <p className="summary">This route exists so route-focused CI can fail cleanly.</p>
      </section>
    </main>
  );
}
