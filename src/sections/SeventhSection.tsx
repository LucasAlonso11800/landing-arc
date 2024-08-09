import { ContactInput } from '@/components';
import { getServerLocale } from '@/helpers/getServerLocale';
import Image from 'next/image';
import React from 'react';

const texts = {
  'en-US': {
    heading: 'Talk to the Google Ads Experts Now',
    description: 'Over 90% of our clients see a 30% increase in Google Ads conversions in the first three months.'
  },
  'es-ES': {
    heading: 'Habla con los expertos de Google Ads ahora',
    description: 'Más del 90% de nuestros clientes ven un aumento del 30% en sus conversiones de Google Ads en los primeros tres meses.'
  }
};

export default function SeventhSection() {
  const locale = getServerLocale();
  const { heading, description } = texts[locale];

  return (
    <section className='relative bg-secondary py-16 px-4 sm:px-8 bg-first-section'>
      <div className="container mx-auto text-white text-center flex flex-col items-center">
        <Image
          width={267}
          height={53}
          src="/static/header-logo.png"
          alt="ARC Agency Logo"
          className='max-w-[267px] mb-8'
        />
        <h2 className='w-full max-w-[830px] mb-4 font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-title'>
          {heading}
        </h2>
        <p className='max-w-[858px] sm:text-lg lg:text-2xl xl:text-[22px] mb-12'>
          {description}
        </p>
        <ContactInput />
      </div>
    </section>
  );
}
