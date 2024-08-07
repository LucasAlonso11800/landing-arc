import { ContactInput } from '@/components'
import React from 'react'

export default function FirstSection() {
  return (
    <section className="relative bg-secondary pt-[124px] px-8 bg-first-section">
        <div className="container z-10 mx-auto flex items-center justify-between">
            <div className='text-white max-w-[520px]'>
                <h1 className='leading-none text-[88px] tracking-tight font-bold mb-7'>Impulsa tu Negocio con <br/>
                <span className='text-primary'>Google Ads</span>
                </h1>
                <p className='text-xl mb-10 leading-tight font-semibold'>Maximiza tu ROI y Aumenta tus Ventas con Estrategias Personalizadas</p>
                <ContactInput />
            </div>
            <div>
                <img src="/ilustracion-ads.png" alt="Ilustracion" className='ml-16 max-w-[588px]' />
                <img src="/testimonial-main.png" alt="Testimonial" className='max-w-[630px]'/>
            </div>
        </div>
    </section>
  )
}
