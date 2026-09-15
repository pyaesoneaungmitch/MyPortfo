import { Sparkles } from "lucide-react";

type EmptyStateProps = {
  title: string;
  children: React.ReactNode;
};

export function EmptyState({ title, children }: EmptyStateProps) {
  return (
    <section className="empty-state" aria-labelledby="empty-state-title">
      <Sparkles size={30} aria-hidden="true" />
      <div>
        <h2 id="empty-state-title">{title}</h2>
        <p>{children}</p>
      </div>
    </section>
  );
}
