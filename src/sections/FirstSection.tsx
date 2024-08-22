import React from 'react';
import { ContactInput } from '@/components';
import { getServerLocale } from '@/helpers/getServerLocale';
import Image from 'next/image';

const texts = {
  'en-US': {
    title: 'Boost Your Business with',
    highlightedTitle: 'Google Ads',
    description: 'Maximize Your ROI and Increase Sales with Customized Strategies'
  },
  'es-ES': {
    title: 'Impulsa tu Negocio con',
    highlightedTitle: 'Google Ads',
    description: 'Maximiza tu ROI y Aumenta tus Ventas con Estrategias Personalizadas'
  }
};

export default function FirstSection() {
  const locale = getServerLocale()
  const { title, highlightedTitle, description } = texts[locale];

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
        <div className='hidden md:block'>
          <div className="relative ml-8 xl:ml-16">
            <img width={588} src="/static/ilustracion-ads.png" alt="Ilustracion" className='w-full xl:max-w-[588px]' />
            <div className="absolute -bottom-8 right-0 xl:right-8 z-10 flex items center">
              <Image width={150} height={100} src="/static/ilustracion-card-ads.png" alt="Ilustracion Card" className='max-w-[150px]' />
              <Image width={150} height={100} src="/static/ilustracion-card-ads-2.png" alt="Ilustracion Card 2" className='ml-4 max-w-[150px]' />
            </div>
          </div>
          <Image width={630} height={100} src="/static/testimonial-main.png" alt="Testimonial" className='w-full max-w-[630px] mt-4'/>
        </div>
      </div>
    </section>
  );
}
