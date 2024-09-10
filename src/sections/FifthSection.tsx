import { getClientLocale } from '@/helpers/getClientLocale';
import Image from 'next/image';
import React from 'react';

const texts = {
  'en-US': {
    heading: 'We Adapt to All Models',
    description: 'At our agency, we help businesses of all sizes grow with Google Ads.'
  },
  'es-ES': {
    heading: 'Nos adaptamos a todos los modelos.',
    description: 'En nuestra agencia, ayudamos a empresas de todos los tamaños a crecer con Google Ads.'
  }
};

export default function FifthSection() {
  const locale = getClientLocale();
  const { heading, description } = texts[locale];

  return (
    <section className='relative bg-secondary py-32 px-4 sm:px-8 bg-first-section'>
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className='text-white text-center sm:text-left'>
          <h2 className='max-w-[610px] mb-2 text-2xl sm:text-3xl lg:text-5xl xl:text-[66px] xl:leading-tight font-semibold'>
            {heading}
          </h2>
          <p className='sm:text-lg lg:text-2xl xl:text-[32px]'>
            {description}
          </p>
        </div>
        <Image
          width={314}
          height={314}
          src="/static/ads-click.png"
          alt="Ads"
          className='sm:ml-4 max-w-[200px] md:max-w-[314px]'
        />
      </div>
    </section>
  );
}
