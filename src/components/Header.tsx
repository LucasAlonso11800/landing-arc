// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components';

export default function Header () {
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent text-white px-8 pt-12 z-10">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <img src="/header-logo.png" alt="ARC Agency Logo" className='h-8'/>
        </div>
        <nav className="flex items-center space-x-7 ml-auto mr-16 text-lg text-center font-semibold">
          <Link href="/sobre-nosotros">
            Sobre Nosotros
          </Link>
          <Link href="/que-hacemos">
            ¿Qué hacemos?
          </Link>
          <Link href="/servicios">
            Servicios
          </Link>
          <Link href="/testimoniales">
            Testimoniales
          </Link>
        </nav>
          <Button>
            Contactános
          </Button>
      </div>
    </header>
  );
}