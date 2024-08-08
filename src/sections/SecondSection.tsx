// components/SecondSection.tsx
import { getServerLocale } from '@/helpers/getServerLocale';
import React from 'react';

const texts = {
  'en-US': {
    heading: 'Get a Better Return on Investment',
    description: `“At our agency, we are dedicated to improving the online presence of businesses and professionals through effective Google Ads campaigns. 
    We specialize in generating a real increase in your billing levels, working hand in hand with our clients as part of their strategic team.”`,
    name: 'Juancho BCL',
    title: 'CEO ARC Agency'
  },
  'es-ES': {
    heading: 'Obtenga un mejor retorno de la inversión',
    description: `“En nuestra agencia, nos dedicamos a mejorar la presencia en línea de empresas y profesionales mediante campañas de Google Ads efectivas. 
    Nos especializamos en generar un aumento real en sus niveles de facturación, trabajando mano a mano con nuestros clientes como parte de su equipo estratégico.”`,
    name: 'Juancho BCL',
    title: 'CEO ARC Agencia'
  }
};


export default function SecondSection() {
  const locale = getServerLocale();
  const { heading, description, name, title } = texts[locale];

  return (
    <section className="relative w-full py-24 px-4 sm:px-8">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        <img src="/static/ilustracion-multi-ads.png" alt="Multi Ads" />
        <div className="mb-6 lg:mb-0 lg:ml-16 text-black">
          <img src="/static/google-ads.png" alt="Google Ads" className='max-w-[250px] mb-6'/>
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-[52px] xl:leading-[63px] mb-6">
            {heading}
          </h2>
          <p className="text-gray text-sm sm:text-base lg:text-lg tracking-tight mb-6">
            {description}
          </p>
          <p className="font-semibold text-sm mb-1">{name}</p>
          <p className="text-xs">{title}</p>
        </div>
      </div>
    </section>
  );
}
