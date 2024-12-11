'use client';

import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-start">
      {/* Conteúdo da Página */}
      <div className="w-full max-w-3xl px-4 py-8 mx-auto mt-20"> {/* Adicionado margin-top para empurrar para baixo */}
        {/* Botão de Voltar */}
        <div className="mb-6">
          <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-primary">
            {/* Ícone de seta para voltar */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Voltar</span>
          </Link>
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Termos de Serviço</h1>
        <p className="text-sm text-muted-foreground mb-8">Última atualização 01/11/2024</p>

        {/* Conteúdo */}
        <div className="prose prose-lg max-w-none text-foreground">
          <h2>Bem-vindo ao Sistema de Observação e Monitoramento de Incêndios (SOMI)</h2>
          <p>
            Obrigado por acessar nossa plataforma. Estes Termos de Serviço (“Termos”) regem o uso de nosso site, aplicativo e
            serviços (“Serviços”) relacionados ao monitoramento de incêndios e prevenção de riscos. Ao usar a plataforma,
            você concorda com os termos aqui descritos.
          </p>

          <h2>Sobre a Plataforma</h2>
          <p>
            O <strong>Sistema de Observação e Monitoramento de Incêndios (SOMI)</strong> é uma ferramenta colaborativa que visa proporcionar
            a detecção e monitoramento de incêndios, além de permitir que os usuários se conectem com serviços de emergência
            e organizações comunitárias para fortalecer a prevenção e resposta a incêndios. Nossos usuários podem:
          </p>
          <ul>
            <li>Monitorar incêndios ativos em tempo real e áreas de risco.</li>
            <li>Receber alertas sobre incêndios e riscos iminentes.</li>
            <li>Compartilhar informações sobre incêndios com comunidades e autoridades.</li>
            <li>Colaborar com serviços de emergência e outras organizações.</li>
            <li>Participar ativamente da prevenção e conscientização sobre incêndios.</li>
          </ul>

          <h2>Aceitação dos Termos</h2>
          <p>
            Ao acessar ou utilizar os nossos serviços, você concorda em cumprir com os seguintes termos:
          </p>
          <ul>
            <li>Você se compromete a utilizar a plataforma de forma responsável e de acordo com a lei.</li>
            <li>Você não deve usar os serviços para práticas ilegais ou prejudiciais a outros usuários ou à comunidade.</li>
            <li>Você concorda em não publicar informações falsas ou prejudiciais no sistema.</li>
            <li>O uso de dados e informações coletadas está sujeito à nossa política de privacidade.</li>
          </ul>

          <h2>Limitação de Responsabilidade</h2>
          <p>
            Embora nos esforcemos para oferecer informações precisas e atualizadas, a plataforma não se responsabiliza por
            eventuais danos diretos ou indiretos decorrentes do uso dos serviços, incluindo erros, falhas, ou omissões no
            sistema de monitoramento de incêndios.
          </p>

          <h2>Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo presente na plataforma, incluindo, mas não se limitando a textos, imagens, ícones, gráficos,
            logotipos, e software, são de propriedade exclusiva da plataforma ou de seus licenciadores e são protegidos por
            direitos autorais e outras leis de propriedade intelectual. O código fonte do software do aparelho SOMI está licenciado
            sob a <strong>Licença Pública Geral GNU (GPL) v3</strong>, que permite a qualquer usuário acessar, modificar e distribuir
            o código, desde que as mesmas condições da licença sejam mantidas.
          </p>

          <h2>Alterações aos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar ou atualizar estes Termos a qualquer momento, sem aviso prévio. A versão mais
            recente dos Termos será publicada nesta página. O uso contínuo dos serviços após as alterações implica na aceitação
            das mudanças.
          </p>

          <h2>Lei Aplicável</h2>
          <p>
            Estes Termos são regidos e interpretados de acordo com as leis do Brasil. Quaisquer disputas relacionadas a estes
            Termos serão resolvidas nos tribunais competentes.
          </p>

          <h2>Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre os Termos de Serviço, entre em contato conosco através do nosso e-mail:
            <strong> shieldsesiung@gmail.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
