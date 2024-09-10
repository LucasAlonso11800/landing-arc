import { Button } from "@/components";
import Image from "next/image";
import React from "react";
import { getClientLocale } from "@/helpers/getClientLocale";
import Link from "next/link";
import { Flip, Slide } from "react-awesome-reveal";

const texts = {
  "en-US": {
    helpGrow: "We help you grow",
    readyForResults: "Are You Ready to See Real Results?",
    description1:
      "Imagine a scenario where you don’t need to worry about advertising. ARC Agency makes it possible by turning your Google Ads investment into real sales, allowing for constant business growth without dedicating time to advertising.",
    description2:
      "Leverage our Google Ads expertise to leave behind strategies that haven't delivered and start seeing tangible growth.",
    description3:
      "We're here to provide you with an effective strategy that turns every click into a sales opportunity. Don’t wait any longer to achieve the success your business deserves.",
    requestAudit: "Request Your Audit",
  },
  "es-ES": {
    helpGrow: "Te ayudamos a crecer",
    readyForResults: "¿Estás Listo para Ver Resultados Reales?",
    description1:
      "Imagina un escenario donde no es necesario preocuparse por la publicidad. ARC Agencia lo hace posible, convirtiendo la inversión en Google Ads en ventas reales, permitiendo un crecimiento constante del negocio sin necesidad de dedicar tiempo a la publicidad.",
    description2:
      "Aprovecha nuestra experiencia en Google Ads para dejar atrás las estrategias que no te han dado resultados y comenzar a ver un crecimiento tangible.",
    description3:
      "Estamos aquí para ofrecerte una estrategia efectiva que transforme cada clic en una oportunidad de venta. No esperes más para alcanzar el éxito que tu negocio merece.",
    requestAudit: "Solicita Tu Auditoría",
  },
};

export default function SixthSection() {
  const locale = getClientLocale();
  const {
    helpGrow,
    readyForResults,
    description1,
    description2,
    description3,
    requestAudit,
  } = texts[locale];

  return (
    <section className="py-32 px-4 sm:px-8">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-around">
        <Image
          src="/static/woman-with-phone.png"
          alt="Woman with phone"
          width={556}
          height={492}
          className="md:mr-8 xl:mr-20 md:max-w-[400px] md:max-h-[320px] lg:max-w-[480px] lg:max-h-[400px] xl:max-w-[556px] xl:max-h-[492px]"
        />
        <div className="min-w-[300px] mb-16 md:mb-0">
          <div className="flex items-center mb-5">
            <Image
              width={32}
              height={25}
              className="mr-4"
              src="/static/growth.png"
              alt="Growth"
            />
            <p className="text-xl">{helpGrow}</p>
          </div>
          <Flip duration={1000} direction="horizontal" triggerOnce>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-title font-semibold max-w-[525px] mb-5">
              {readyForResults}
            </h2>
          </Flip>
          <p className="text-sm sm:text-base lg:text-lg text-gray mb-5 max-w-[525px] tracking-tight">
            <Slide duration={500} direction="right" triggerOnce>
              {description1}
            </Slide>
            <br/>
            <Slide duration={600} direction="right" triggerOnce>
              {description2}
            </Slide>
            <br/>
            <Slide duration={700} direction="right" triggerOnce>
              {description3}
            </Slide>
          </p>
          <Link href="#contact">
            <Button>{requestAudit}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
