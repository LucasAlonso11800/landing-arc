import { Button } from '@/components';
import Image from 'next/image';
import React from 'react';
import { getServerLocale } from '@/helpers/getServerLocale';

const texts = {
  'en-US': {
    helpGrow: 'We help you grow',
    improveOnlineAdvertising: 'How We Improve Your Online Advertising',
    focusExperience: 'We focus our experience on maximizing every dollar invested in your campaigns. From a comprehensive audit to continuous optimization, we transform your online advertising into a results-generating machine that directly impacts your business.',
    requestAudit: 'Request Your Audit',
    auditComplete: 'Complete Audit',
    auditDescription: 'Let’s deeply analyze your Google Ads account with a complete audit. We’ll review everything, provide a detailed report, and discuss our findings and recommendations in a dedicated session.',
    optimizeCampaigns: 'Optimize Campaigns',
    optimizeDescription: 'We implement improvements based on the audit to maximize your campaigns’ performance. We use advanced tools like Google Tag Manager and Google Analytics 4 to fine-tune settings and ensure effective execution.',
    increaseLeadsSales: 'Increase Leads and Sales',
    increaseDescription: 'We focus on increasing the number of leads and improving sales. We monitor performance and make continuous adjustments to ensure maximum return on investment and achieve optimal results for your business.'
  },
  'es-ES': {
    helpGrow: 'Te ayudamos a crecer',
    improveOnlineAdvertising: 'Cómo Mejoramos tu Publicidad Online',
    focusExperience: 'El enfoque está en maximizar cada peso invertido sin la necesidad de preocuparse por los detalles técnicos. Desde una auditoría exhaustiva hasta la optimización continua, transformamos la publicidad online en una máquina de generar resultados que impactan directamente en el negocio.',
    requestAudit: 'Solicita Tu Auditoría',
    auditComplete: 'Auditoría Completa',
    auditDescription: 'Analicemos en profundidad su cuenta de Google Ads con una auditoría completa. Analizaremos todo, le proporcionaremos un informe detallado y analizaremos nuestros hallazgos y recomendaciones en una sesión dedicada.',
    optimizeCampaigns: 'Optimizar Campañas',
    optimizeDescription: 'Implementamos mejoras basadas en la auditoría para maximizar el rendimiento de sus campañas. Utilizamos herramientas avanzadas como Google Tag Manager y Google Analytics 4 para ajustar configuraciones y asegurar una ejecución efectiva.',
    increaseLeadsSales: 'Aumentar Clientes Potenciales y Ventas',
    increaseDescription: 'Nos enfocamos en aumentar los clientes y las ventas del negocio. Monitoreamos y ajustamos todo lo necesario para garantizar que la inversión rinda al máximo.'
  }
};


export default function FourthSection() {
  const locale = getServerLocale();
  const { helpGrow, improveOnlineAdvertising, focusExperience, requestAudit, auditComplete, auditDescription, optimizeCampaigns, optimizeDescription, increaseLeadsSales, increaseDescription } = texts[locale];

  return (
    <section className='py-32 px-4 sm:px-8'>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
        <div className='min-w-[300px] mb-16 md:mb-0'>
          <div className="flex items-center mb-5">
            <Image
              width={32}
              height={25}
              className='mr-4'
              src="/static/growth.png"
              alt='Growth'
            />
            <p className='text-xl'>{helpGrow}</p>
          </div>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl xl:text-title font-semibold max-w-[525px] mb-5'>
            {improveOnlineAdvertising}
          </h2>
          <p className='text-sm sm:text-base lg:text-lg text-gray mb-5 max-w-[525px] tracking-tight'>
            {focusExperience}
          </p>
          <Button>
            {requestAudit}
          </Button>
        </div>
        <div className="md:ml-8 xl:ml-20 relative grow max-w-[666px]">
          <div className="flex mb-8">
            <div className="text-2xl lg:text-3xl xl:text-[33px] xl:leading-[39px] max-h-12 min-w-12 lg:max-h-[65px] lg:min-w-[65px] rounded-full mt-1 mr-5 flex items-center justify-center text-center bg-[#007BFF38]">
              <div className="h-8 w-8 lg:h-[47px] lg:w-[47px] bg-[#9bcbff] rounded-full flex items-center justify-center font-medium">
                1
              </div>
            </div>
            <div>
              <h4 className='text-2xl lg:text-3xl xl:text-[33px] xl:leading-[39px] mb-4 font-medium'>{auditComplete}</h4>
              <p className='text-sm sm:text-base lg:text-lg text-gray lg:leading-[21px]'>{auditDescription}</p>
            </div>
          </div>
          <div className="flex mb-8">
            <div className="text-2xl lg:text-3xl xl:text-[33px] xl:leading-[39px] max-h-12 min-w-12 lg:max-h-[65px] lg:min-w-[65px] rounded-full mt-1 mr-5 flex items-center justify-center text-center bg-[#007BFF38]">
              <div className="h-8 w-8 lg:h-[47px] lg:w-[47px] bg-[#9bcbff] rounded-full flex items-center justify-center font-medium">
                2
              </div>
            </div>
            <div>
              <h4 className='text-2xl lg:text-3xl xl:text-[33px] xl:leading-[39px] mb-4 font-medium'>{optimizeCampaigns}</h4>
              <p className='text-sm sm:text-base lg:text-lg text-gray lg:leading-[21px]'>{optimizeDescription}</p>
            </div>
          </div>
          <div className="flex mb-8">
            <div className="text-2xl lg:text-3xl xl:text-[33px] xl:leading-[39px] max-h-12 min-w-12 lg:max-h-[65px] lg:min-w-[65px] rounded-full mt-1 mr-5 flex items-center justify-center text-center bg-[#007BFF38]">
              <div className="h-8 w-8 lg:h-[47px] lg:w-[47px] bg-[#9bcbff] rounded-full flex items-center justify-center font-medium">
                3
              </div>
            </div>
            <div>
              <h4 className='text-2xl lg:text-3xl xl:text-[33px] xl:leading-[39px] mb-4 font-medium'>{increaseLeadsSales}</h4>
              <p className='text-sm sm:text-base lg:text-lg text-gray lg:leading-[21px]'>{increaseDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
