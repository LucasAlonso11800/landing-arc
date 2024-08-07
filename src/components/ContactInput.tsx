import React from 'react';
import Button from './Button';

export default function ContactInput() {
  return (
    <div className="flex items-center bg-white p-2 rounded-full shadow-md p-2.5 pl-6 rounded-[32px]">
      <img src="/icons/mail-outline.png" alt="Email Icon" className="w-6 h-6" />
      <input
        type="email"
        placeholder="Ingresa tu correo electrónico"
        className="flex-grow px-2 border-none outline-none placeholder:text-gray placeholder:text-sm text-black"
      />
      <Button iconUrl="/icons/ic_baseline-send.png">Enviar</Button>
    </div>
  );
}
