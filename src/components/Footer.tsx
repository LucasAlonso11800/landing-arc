import Image from 'next/image';
import React from 'react';
import { getClientLocale } from '@/helpers/getClientLocale';
import { SelectLanguages } from '.'

const texts = {
  'en-US': {
    reserved: '© 2024 ARC Google Ads Specialized Agency. All rights reserved.'
  },
  'es-ES': {
    reserved: '© 2024 ARC Agencia especializada de Google Ads. Todos los derechos reservados.'
  }
};

export default function Footer() {
  const locale = getClientLocale();
  const { reserved } = texts[locale];

  return (
    <footer className='py-6 px-4 sm:px-8'>
      <div className="container mx-auto text-center">
        <Image
          width={158}
          height={31}
          src="/static/footer-logo.png"
          alt="ARC Agency Logo"
          className='max-w-[158px] mb-2 mx-auto'
        />
        <p className='text-gray text-sm'>
          {reserved}
        </p>
      </div>
    </footer>
  );
}
