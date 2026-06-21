type StatusCardProps = {
  title: string;
  detail: string;
};

// Dashboard demo marker: FAIL_COMPONENTS
export function StatusCard({ title, detail }: StatusCardProps) {
  return (
    <article className="status-card">
      <h2>{title}</h2>
      <p>{detail}</p>
    </article>
  );
}
