import { IconSprig } from "./icons";

export default function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <span className="section-divider-line" />
      <IconSprig className="section-divider-icon" />
      <span className="section-divider-line" />
    </div>
  );
}
