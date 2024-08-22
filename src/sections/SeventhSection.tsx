import React from 'react';
import { TestimonialCard } from '@/components';
import { getServerLocale } from '@/helpers/getServerLocale';

export const testimonials = {
  'en-US': [
    {
      name: 'Juan Pérez',
      title: 'CEO, Empresa A',
      image: '/static/testimonial-1.png',
      description: 'The service was excellent and exceeded our expectations. Highly recommended!',
    },
    {
      name: 'Carlos Rodríguez',
      title: 'Marketing Director, Empresa B',
      image: '/static/testimonial-2.png',
      description: 'The results went beyond what we expected.',
    },
    {
      name: 'María García',
      title: 'Operations Manager, Empresa C',
      image: '/static/testimonial-3.png',
      description: 'A professional and dedicated team. They delivered exactly what we needed.',
    },
    {
      name: 'Mariano Diaz',
      title: 'Founder, Empresa D',
      image: '/static/testimonial-4.png',
      description: 'The customer service was impeccable. We felt supported at all times.',
    },
  ],
  'es-ES': [
    {
      name: 'Juan Pérez',
      title: 'CEO, Empresa A',
      image: '/static/testimonial-1.png',
      description: 'El servicio fue excelente y superó nuestras expectativas. ¡Muy recomendable!',
    },
    {
      name: 'Carlos Rodríguez',
      title: 'Director de Marketing, Empresa B',
      image: '/static/testimonial-2.png',
      description: 'Los resultados fueron más allá de lo que esperábamos.',
    },
    {
      name: 'María García',
      title: 'Gerente de Operaciones, Empresa C',
      image: '/static/testimonial-3.png',
      description: 'Un equipo profesional y dedicado. Lograron exactamente lo que necesitábamos.',
    },
    {
      name: 'Mariano Diaz',
      title: 'Fundador, Empresa D',
      image: '/static/testimonial-4.png',
      description: 'La atención al cliente fue impecable. Nos sentimos respaldados en todo momento.',
    },
  ],
};


export default function SeventhSection() {
  const locale = getServerLocale();
  return (
    <section className='relative pt-4 pb-16 px-4 sm:px-8'>
      <div className="container mx-auto">    
        <h2 className='text-2xl sm:text-3xl xl:text-4xl text-center font-semibold mx-auto mb-4 sm:mb-16'>Lo que dicen nuestros clientes de nuestros servicios</h2>
        <div className='space-y-8'>
          {testimonials[locale].map((testimonial, index) => (
            <div 
              key={index} 
              className={`transform ${index % 2 === 0 ? 'md:-translate-x-20' : 'md:translate-x-20'}`}
            >
              <TestimonialCard
                {...testimonial}
                stars={5}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
