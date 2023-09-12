import { Section, Title } from "./ModalSection.styles";

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string | JSX.Element;
  padding?: string;
}

function ModalSection({ children, title, padding }: Props) {
  return (
    <Section style={{ padding: padding || "2rem" }}>
      <Title>{title}</Title>
      {children}
    </Section>
  );
}

function Test() {
  return <div>hi</div>;
}

export default Test;
export { ModalSection };
