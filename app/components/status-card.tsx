type StatusCardProps = {
  title: string;
  detail: string;
};

export function StatusCard({ title, detail }: StatusCardProps) {
  // FAIL_COMPONENTS
  return (
    <article className="status-card">
      <h2>{title}</h2>
      <p>{detail}</p>
    </article>
  );
}
