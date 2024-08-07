import React from 'react';
import { ContactInput } from '@/components';
import { getServerLocale } from '@/helpers/getServerLocale';

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
    <section className="relative bg-secondary pt-[124px] pb-8 px-8 bg-first-section">
      <div className="container z-10 mx-auto flex items-center justify-between">
        <div className='text-white max-w-[520px]'>
          <h1 className='leading-none text-[88px] tracking-tight font-bold mb-7'>
            {title} <br/>
            <span className='text-primary'>{highlightedTitle}</span>
          </h1>
          <p className='text-xl mb-10 leading-tight font-semibold'>{description}</p>
          <ContactInput />
        </div>
        <div>
          <div className="relative">
            <img src="/static/ilustracion-ads.png" alt="Ilustracion" className='ml-16 max-w-[588px]' />
            <div className="absolute -bottom-4 right-8 z-10 flex items center">
              <img src="/static/ilustracion-card-ads.png" alt="Ilustracion Card" className='max-w-[200px]' />
              <img src="/static/ilustracion-card-ads-2.png" alt="Ilustracion Card 2" className='max-w-[200px]' />
            </div>
          </div>
          <img src="/static/testimonial-main.png" alt="Testimonial" className='max-w-[630px]'/>
        </div>
      </div>
    </section>
  );
}
