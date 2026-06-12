type StatusCardProps = {
  title: string;
  detail: string;
};

export function StatusCard({ title, detail }: StatusCardProps) {
  return (
    <article className="status-card" data-check-marker="FAIL_COMPONENTS">
      <h2>{title}</h2>
      <p>{detail}</p>
    </article>
  );
}
