import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { processSteps } from "@/content/marketing";

export function ProcessSteps() {
  return (
    <Section>
      <Container>
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Cara kami bekerja
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {processSteps.map((item) => (
            <li
              key={item.step}
              className="rounded-xl border border-border bg-surface-raised p-6"
            >
              <span className="font-display text-3xl font-semibold text-highlight">
                {item.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
