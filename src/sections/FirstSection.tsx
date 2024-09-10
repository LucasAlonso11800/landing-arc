import React from 'react';
import { AdsCard, ContactInput, TestimonialCard } from '@/components';
import { getClientLocale } from '@/helpers/getClientLocale';
import Image from 'next/image';
import { testimonials } from './SeventhSection';

const texts = {
  'en-US': {
    title: 'Boost Your Business with',
    highlightedTitle: 'Google Ads',
    description: 'Turn advertising investment into real results and continuous growth without hassle.',
    conversions: {
      title: 'Conversions',
      data: '1996',
    },
    conversionRate: {
      title: 'Conversion Rate',
      data: '19%',
    },
  },
  'es-ES': {
    title: 'Impulsa tu Negocio con',
    highlightedTitle: 'Google Ads',
    description: 'Convierte la inversión publicitaria en resultados reales y en crecimiento continuo sin complicaciones.',
    conversions: {
      title: 'Conversiones',
      data: '1996',
    },
    conversionRate: {
      title: 'Tasa de Conversión',
      data: '19%',
    },
  }
};



export default function FirstSection() {
  const locale = getClientLocale()
  const { title, highlightedTitle, description, conversionRate, conversions } = texts[locale];

  return (
    <section className="relative bg-secondary pt-[144px] lg:pt-[215px] pb-8 px-4 sm:px-8 bg-first-section">
      <div className="container z-10 mx-auto flex items-center justify-between">
        <div className='max-w-full text-white max-w-[520px]'>
          <h1 className='leading-none text-3xl sm:text-4xl lg:text-6xl xl:text-[88px] tracking-tight font-bold mb-7'>
            {title} <br/>
            <span className='text-primary'>{highlightedTitle}</span>
          </h1>
          <p className='sm:text-lg lg:text-xl mb-10 leading-tight font-semibold'>{description}</p>
          <ContactInput />
        </div>
        <div className='hidden md:block ml-8 xl:ml-16 '>
          <div className="relative mb-16">
            <img width={588} src="/static/ilustracion-ads.png" alt="Ilustracion" className='w-full xl:max-w-[588px]' />
            <div className="absolute -bottom-20 right-0 xl:right-8 z-10 flex items center gap-4">
                <AdsCard {...conversions} />
                <AdsCard {...conversionRate} />
            </div>
          </div>
          </div>
      </div>
    </section>
  );
}
