// React and Next.js imports
import Link from 'next/link';

// Third-party library imports
import Balancer from 'react-wrap-balancer';

// UI component imports
import { Button } from '@/components/ui/button';

// Custom components
import { Section, Container } from '@/components/ui/craft';

const CTA = () => {
  return (
    <Section className="px-4">
      <Container className="flex flex-col items-center gap-6 rounded-lg border bg-accent/50 p-6 text-center md:rounded-xl md:p-12">
        <h2 className="!my-0 text-4xl font-bold text-gray-900 mb-4">
          Monitore os riscos em tempo real
        </h2>
        <h3 className="!mb-0 text-muted-foreground text-lg text-gray-600">
          <Balancer>
            Fique à frente de incêndios e riscos com nosso sistema de
            monitoramento comunitário. Receba alertas e proteja sua comunidade.
          </Balancer>
        </h3>
        <div className="not-prose mx-auto flex items-center gap-2">
          <Button className="w-fit" variant="link" asChild>
            <Link href="https://windy-peach-aa5.notion.site/SOMI-Shield-NIG-158552eaf10c80999e92e764d5993fd1">Aprenda mais {'->'}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default CTA;
