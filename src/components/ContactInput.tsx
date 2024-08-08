"use client";

import React from 'react';
import Button from './Button';
import { getClientLocale } from '@/helpers/getClientLocale';

const texts = {
  'en-US': {
    placeholder: 'Enter your email',
    buttonText: 'Send'
  },
  'es-ES': {
    placeholder: 'Ingresa tu email',
    buttonText: 'Enviar'
  }
};

export default function ContactInput() {
  const locale = getClientLocale();
  const { placeholder, buttonText } = texts[locale];

  return (
    <div className="flex items-center bg-white p-2 rounded-full shadow-md p-2.5 md:pl-6 rounded-[32px] max-w-[490px]">
      <img src="/static/icons/mail-outline.png" alt="Email Icon" className="w-6 h-6" />
      <input
        type="email"
        placeholder={placeholder}
        className="flex-grow px-2 border-none outline-none placeholder:text-gray placeholder:text-sm text-black"
      />
      <Button iconUrl="/static/icons/ic_baseline-send.png">{buttonText}</Button>
    </div>
  );
}
