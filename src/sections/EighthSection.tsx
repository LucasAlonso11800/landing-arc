import { ContactInput } from '@/components';
import { getClientLocale } from '@/helpers/getClientLocale';
import Image from 'next/image';
import React from 'react';

const texts = {
  'en-US': {
    heading: 'Talk to the Google Ads Experts Now',
    description1: 'Over 90% of our clients see a 30% increase in Google Ads conversions in the first three months.',
    description2: 'Ready to let us take care of everything and watch your business grow? At ARC Agency, we turn every Google Ads investment into more sales. Don’t wait any longer to achieve the success your business deserves.'
  },
  'es-ES': {
    heading: 'Habla con los expertos de Google Ads ahora',
    description1: 'Más del 90% de nuestros clientes ven un aumento del 30% en sus conversiones de Google Ads en los primeros tres meses.',
    description2: '¿Listo para dejar que nos encarguemos de todo y ver cómo el negocio crece? En ARC Agencia, transformamos cada inversión en Google Ads en más ventas. No esperes más para alcanzar el éxito que el negocio merece.'
  }
};


export default function EighthSection() {
  const locale = getClientLocale();
  const { heading, description1, description2 } = texts[locale];

  return (
    <section className='relative bg-secondary py-16 px-4 sm:px-8 bg-first-section' id='contact'>
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
        <p className='max-w-[858px] sm:text-lg lg:text-2xl xl:text-[22px] mb-4'>
          {description1}
        </p>
        <p className='max-w-[858px] sm:text-lg lg:text-2xl xl:text-[22px] mb-12'>
          {description2}
        </p>
        <ContactInput />
      </div>
    </section>
  );
}
