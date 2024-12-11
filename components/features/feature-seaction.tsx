import { FeatureCard } from './feature-card';

export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Principais funcionalidades
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre ferramentas poderosas em nosso sistema para monitorar
            incêndios, receber alertas e colaborar com serviços de emergência,
            tudo em uma plataforma abrangente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            title="Monitoramento em Tempo Real"
            description="Monitore incêndios ativos e potenciais riscos de incêndio em tempo real usando tecnologia avançada de sensores terrestres."
            tags={['Monitoramento', 'Tecnologia']}
            votes={20}
          />
          <FeatureCard
            title="Sistema de Alerta Antecipado"
            description="Receba alertas instantâneos e notificações sobre riscos de incêndio na sua área através do nosso avançado sistema de alerta antecipado."
            tags={['Alertas', 'Prevenção']}
            votes={15}
          />
          <FeatureCard
            title="Coordenação de Resposta a Emergências"
            description="Coordene-se com serviços de emergência e equipes de primeiros socorros por meio da nossa plataforma de comunicação integrada."
            tags={['Emergência', 'Coordenação']}
            votes={12}
          />
          <FeatureCard
            title="Engajamento Comunitário"
            description="Conecte-se com comunidades locais e organizações para melhorar as estratégias de prevenção e resposta a incêndios."
            tags={['Comunidade', 'Colaboração']}
            votes={10}
          />
        </div>
      </div>
    </section>
  );
}
