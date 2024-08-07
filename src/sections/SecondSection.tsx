import React from 'react'

export default function SecondSection() {
  return (
    <section className="relative w-full py-24 px-8">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
            <img src="/ilustracion-multi-ads.png" alt="Multi Ads" />
            <div className="mb-6 lg:mb-0 lg:ml-16 text-black">
                <img src="/google-ads.png" alt="Google Ads" className='max-w-[250px] mb-6'/>
                <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-[52px] xl:leading-[63px] mb-6">
                    Obtenga un mejor retorno de la inversión
                </h2>
                <p className="text-gray text-sm sm:text-base lg:text-lg tracking-tight mb-6">
                “En nuestra agencia, nos dedicamos a mejorar la presencia en línea de empresas y profesionales mediante campañas de Google Ads efectivas. <br />
                    Nos especializamos en generar un aumento real en sus niveles de facturación, trabajando mano a mano con nuestros clientes como parte de su equipo estratégico”
                </p>
                <p className="font-semibold text-sm mb-1">Juancho BCL</p>
                <p className="text-xs">CEO ARC Agencia</p>
            </div>
        </div>
    </section>
  )
}
