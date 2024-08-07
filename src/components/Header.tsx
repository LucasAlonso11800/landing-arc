import React from 'react';
import Link from 'next/link';
import Button from './Button';
import { getServerLocale } from '@/helpers/getServerLocale';

const texts = {
  'en-US': {
    aboutUs: 'About Us',
    whatWeDo: 'What We Do',
    services: 'Services',
    testimonials: 'Testimonials',
    contactUs: 'Contact Us'
  },
  'es-ES': {
    aboutUs: 'Sobre Nosotros',
    whatWeDo: '¿Qué hacemos?',
    services: 'Servicios',
    testimonials: 'Testimoniales',
    contactUs: 'Contactános'
  }
};

export default function Header() {
  const locale = getServerLocale();
  const { aboutUs, whatWeDo, services, testimonials, contactUs } = texts[locale];

  return (
    <header className="absolute top-0 left-0 w-full bg-transparent px-8 pt-12 z-10">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <img src="/static/header-logo.png" alt="ARC Agency Logo" className='h-8'/>
        </div>
        <nav className="flex items-center space-x-7 ml-auto mr-16 text-lg text-center text-white font-semibold">
          <Link href="/about-us" className='transition-all hover:text-primary'>
            {aboutUs}
          </Link>
          <Link href="/what-we-do" className='transition-all hover:text-primary'>
            {whatWeDo}
          </Link>
          <Link href="/services" className='transition-all hover:text-primary'>
            {services}
          </Link>
          <Link href="/testimonials" className='transition-all hover:text-primary'>
            {testimonials}
          </Link>
        </nav>
        <Button>
          {contactUs}
        </Button>
      </div>
    </header>
  );
}
