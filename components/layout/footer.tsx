import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <>
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1">
              <div className="flex items-center mb-4">
                <span className="text-base font-bold text-gray-900">
                  Sistema de Observação e Monitoramento de Incêndio.
                </span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Uma plataforma abrangente para monitoramento e prevenção de
                incêndios em tempo real, ajudando a proteger as comunidades e os
                recursos naturais.
              </p>
              <p className="text-sm text-gray-500">
                Copyright © {new Date().getFullYear()} - Todos os direitos
                reservados
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">LINKS</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-green-500">
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#funcionalidades"
                    className="text-gray-600 hover:text-green-500 cursor-pointer"
                  >
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <Link
                    href="/monitoring"
                    className="text-gray-600 hover:text-green-500"
                  >
                    Monitorar
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">LEGAL</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/termos"
                    className="text-gray-600 hover:text-green-500"
                  >
                    Termos de serviço
                  </Link>
                </li>
                 {/*<li>
                  <Link
                    href="/privacy"
                    className="text-gray-600 hover:text-green-500"
                  >
                    Política de privacidade
                  </Link>
                </li>*/}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">RECURSOS</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/documentation"
                    className="text-gray-600 hover:text-green-500"
                  >
                    Documentação
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Extra Section */}
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Image
              src="/shield-nig.jpeg"
              alt="Creator Avatar"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full border border-gray-300"
            />
            <p className="text-gray-700 text-sm">
              Olá 👋 Sou a equipe de robótica <strong>Shield NIG</strong>, o
              criador dessa plataforma. Você poderá acompanhar meu trabalho no
              meu{' '}
              <a
                href="https://www.instagram.com/shield_nig/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline"
              >
                Instagram
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
