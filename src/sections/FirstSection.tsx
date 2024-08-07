import { ContactInput } from '@/components'
import React from 'react'

export default function FirstSection() {
  return (
    <section className="relative bg-secondary pt-[124px] pb-8 px-8 bg-first-section">
        <div className="container z-10 mx-auto flex items-center justify-between">
            <div className='text-white max-w-[520px]'>
                <h1 className='leading-none text-[88px] tracking-tight font-bold mb-7'>Impulsa tu Negocio con <br/>
                <span className='text-primary'>Google Ads</span>
                </h1>
                <p className='text-xl mb-10 leading-tight font-semibold'>Maximiza tu ROI y Aumenta tus Ventas con Estrategias Personalizadas</p>
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
  )
}
