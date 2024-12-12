'use client';
import { FeaturesSection } from '@/components/features/feature-seaction';
import CTA from '@/components/layout/cta';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Carregamento dinâmico do mapa
const Map = dynamic(() => import('@/providers/map'), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulando o carregamento do mapa para remover o erro de "Map container is already initialized"
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Ajuste o tempo de carregamento conforme necessário (2 segundos)
    return () => clearTimeout(timer); // Limpeza do timer
  }, []);

  return (
    <section className="flex flex-col items-center justify-start bg-background min-h-screen p-5">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
        <div className="max-w-3xl mx-auto text-center mt-16">
          <div className="flex items-center justify-center mb-8 relative">
            <div className="flex items-center justify-start w-auto px-6 py-3 rounded-full bg-secondary relative">
              <div className="absolute left-[13px] top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Monitorando a Serra do Vulcão!
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mt-6 mb-[-10px]">
            Receba alertas de incêndios em sua região
          </h1>

          <p className="max-w-xl mx-auto text-base lg:text-lg text-secondary-foreground mt-10">
            O Sistema de Observação e Monitoramento de Incêndio (SOMI) veio para
            monitorar e informar moradores da vizinhança e autoridades a
            respeito de incêndios, por meio de dados colhidos da comunidade
            através de nosso aparelho comunitário.
          </p>

          <div className="flex justify-center mt-8">
            <Link href="https://windy-peach-aa5.notion.site/SOMI-Shield-NIG-158552eaf10c80999e92e764d5993fd1" passHref>
                <Button className="w-auto flex items-center justify-center gap-2 py-6 px-10 text-lg group">
                  <BookOpen className="h-5 w-5 group-hover:scale-125 transition-transform duration-200" />
                  Aprenda mais!
                </Button>
            </Link>
          </div>

          {/* Espaço para o mapa */}
          <div
            className="relative mt-24 rounded-lg overflow-hidden border-4 border-primary"
            style={{ height: '600px', width: '100%' }}
          >
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                <div
                  className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-transparent border-primary"
                  role="status"
                ></div>
              </div>
            ) : (
              <div className="absolute inset-0 z-10">
                <Map />
              </div>
            )}
          </div>
          <div className="mt-16">
            <FeaturesSection />
          </div>
          <div className="mt-16">
            <CTA />
          </div>
        </div>
      </div>
    </section>
  );
}
