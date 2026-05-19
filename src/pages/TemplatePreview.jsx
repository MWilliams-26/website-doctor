import { useParams, Link, Navigate } from "react-router-dom";
import { getTemplate } from "../templates/registry";

export default function TemplatePreview() {
  const { slug } = useParams();
  const template = getTemplate(slug);

  if (!template) return <Navigate to="/" replace />;

  const Component = template.component;

  return (
    <div>
      <div className="fixed left-4 top-4 z-50">
        <Link
          to="/"
          className="rounded-full bg-[var(--color-ink)] px-3 py-1.5 text-xs font-medium text-white shadow-lg hover:opacity-90"
        >
          ← All templates
        </Link>
      </div>
      <Component />
    </div>
  );
}
