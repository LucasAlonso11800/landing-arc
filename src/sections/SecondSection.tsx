// components/SecondSection.tsx
import { getClientLocale } from "@/helpers/getClientLocale";
import Image from "next/image";
import React from "react";
import { Flip, Slide } from "react-awesome-reveal";

const texts = {
  "en-US": {
    heading: "Get a Better Return on Investment",
    description: `“At our agency, we are dedicated to growing your business through effective Google Ads campaigns. 
    We transform every dollar invested into real sales, allowing you to focus on business growth.”`,
    name: "Juan Martín Barrionuevo",
    title: "CEO ARC Agency",
  },
  "es-ES": {
    heading: "Obtenga un mejor retorno de la inversión",
    description: `“En nuestra agencia, nos dedicamos a hacer crecer el negocio mediante campañas efectivas de Google Ads.
    Transformamos cada peso invertido en ventas reales, permitiendo concentrarse en el crecimiento empresarial.”`,
    name: "Juan Martín Barrionuevo",
    title: "CEO ARC Agencia",
  },
};

export default function SecondSection() {
  const locale = getClientLocale();
  const { heading, description, name, title } = texts[locale];

  return (
    <section
      className="relative w-full py-12 md:py-24 px-4 sm:px-8"
      id="about-us"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        <Image
          width={594}
          height={588}
          src="/static/ilustracion-multi-ads.png"
          alt="Multi Ads"
        />
        <div className="mb-6 lg:mb-0 lg:ml-16 text-black">
          <Image
            width={250}
            height={44}
            src="/static/google-ads.png"
            alt="Google Ads"
            className="max-w-[250px] mb-6"
          />
          <Flip duration={1000} direction="horizontal" triggerOnce>
            <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-title mb-6">
              {heading}
            </h2>
          </Flip>
          <Slide duration={1000} direction="right" triggerOnce>
            <p className="text-gray text-sm sm:text-base lg:text-lg tracking-tight mb-6">
              {description}
            </p>
            <p className="font-semibold text-sm mb-1">{name}</p>
            <p className="text-xs">{title}</p>
          </Slide>
        </div>
      </div>
    </section>
  );
}
