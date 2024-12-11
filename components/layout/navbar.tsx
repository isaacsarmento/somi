import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Users } from 'lucide-react';

function Navbar() {
  return (
    <nav className="border-b bg-background h-[10vh] flex items-center z-50 fixed top-0 left-0 w-full">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/">
          <h1 className="font-bold text-3xl">
            so<span className="text-primary">mi.</span>
          </h1>
        </Link>

        <div className="flex items-center gap-x-5">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="h-8">
                <Users className="h-4 w-4 mr-2" />
                <span>2 dispositivos</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-medium">Dispositivos Conectados</h4>
                <p className="text-sm text-gray-500">
                  Existem atualmente 2 dispositivos conectados à nossa rede de
                  monitoramento, coletando e compartilhando ativamente dados
                  sobre potenciais riscos de incêndio.
                </p>
              </div>
            </PopoverContent>
          </Popover>
          <div className="flex items-center gap-x-5 ">
            <Button>Monitorar</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
