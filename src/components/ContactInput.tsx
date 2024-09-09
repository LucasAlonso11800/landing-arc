"use client";

import React, { useState } from 'react';
import Button from './Button';
import { getClientLocale } from '@/helpers/getClientLocale';
import Image from 'next/image';

const email = 'adsrelevanceconversion@gmail.com';
const texts = {
  'en-US': {
    placeholder: 'Enter your name',
    buttonText: 'Send',
    subject: "Looking to Learn More About ARC's Google Ads Services",
    body: (name: string) => `Hi there, I'm ${name} \n\nI’m interested in hearing more about ARC’s Google Ads services and how we could potentially work together. Could you share some details with me?\n\nThanks a lot!`
  },
  'es-ES': {
    placeholder: 'Ingresa tu nombre',
    buttonText: 'Enviar',
    subject: "Quiero saber más sobre los servicios de Google Ads de ARC",
    body: (name: string) => `Hola, como estas? Soy ${name} \n\nMe gustaría saber más sobre los servicios de Google Ads de ARC y cómo podríamos trabajar juntos. ¿Podrías darme algunos detalles?\n\n¡Muchas gracias!`
  }
};

export default function ContactInput() {
  const [username, setUsername] = useState('');
  const locale = getClientLocale();

  const { placeholder, buttonText, subject, body } = texts[locale];

  const handleInputChange = (e: any) => {
    const name = e.target.value;
    setUsername(name);
  };

  const handleSubmit = () => {
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body(username))}`;
      window.location.href = mailtoLink;
  };

  return (
    <div className="flex items-center bg-white p-2 rounded-full shadow-md p-2.5 md:pl-6 rounded-[32px] max-w-[490px]">
      <Image src="/static/icons/mail-outline.png" alt="Email Icon" width={24} height={24} />
      <input
        type="text"
        value={username}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="flex-grow px-2 border-none outline-none placeholder:text-gray placeholder:text-sm text-black"
      />
      <Button iconUrl="/static/icons/ic_baseline-send.png" onClick={handleSubmit} disabled={username.trim().length < 2}>
        {buttonText}
      </Button>
    </div>
  );
}
