import { getServerLocale } from '@/helpers/getServerLocale';
import Image from 'next/image';
import React from 'react';

const texts = {
  'en-US': {
    subtitle: 'Complete and Custom Google Ads Advertising',
    title: 'Complete management with advanced measurement to maximize your ROI'
  },
  'es-ES': {
    subtitle: 'Publicidad en Google Ads completa y a tu medida',
    title: 'Gestión completa con medición avanzada para maximizar tu ROI'
  }
};

export default function ThirdSection() {
  const locale = getServerLocale();
  const { subtitle, title } = texts[locale];

  return (
    <section className='py-6 px-4 sm:px-8'>
      <div className="container mx-auto">
        <p className='sm:text-lg lg:text-xl text-primary text-center font-semibold mb-4'>
          {subtitle}
        </p>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl xl:text-title text-center font-semibold max-w-[1037px] mx-auto mb-8'>
          {title}
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-between w-full relative">
          <Image width={200} height={160} src="/static/frame-tag.png" alt="Google Tag Manager" className='mb-16 sm:mb-0 w-full max-w-[200px] sm:w-1/4 sm:max-w-[261px]' />
          <Image width={128} height={14} src="/static/arrow.png" alt="Arrow" className='rotate-90 sm:rotate-0 w-16 sm:w-1/8 max-w-[165px] -translate-y-8 sm:translate-y-0' />
          <Image width={200} height={160} src="/static/frame-ads.png" alt="Google Ads" className='mb-16 sm:mb-0 w-full sm:w-1/4 max-w-[200px] sm:w-1/4 sm:max-w-[261px]' />
          <Image width={128} height={14} src="/static/arrow.png" alt="Arrow" className='rotate-90 sm:rotate-0 w-16 sm:w-1/8 max-w-[165px] -translate-y-8 sm:translate-y-0' />
          <Image width={200} height={160} src="/static/frame-analytics.png" alt="Google Analytics" className='w-full sm:w-1/4 max-w-[200px] sm:w-1/4 sm:max-w-[261px]' />
        </div>
      </div>
    </section>
  );
}
