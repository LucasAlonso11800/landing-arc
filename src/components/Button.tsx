import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

type Props = {
  children: React.ReactNode;
  iconUrl?: string;
  gradient?: boolean;
}

export default function Button({ children, iconUrl, gradient = false }: Props) {
  return (
    <button
      className={classNames(
        'flex items-center justify-center text-white xl:text-lg font-bold py-2 px-5 rounded-[32px] bg-primary transition-all hover:bg-primaryLight',
      )}
    >
      {children}
      {iconUrl && <Image src={iconUrl} alt="icon" width={16} height={16} className="hidden sm:block ml-2 pt-0.5" />}
    </button>
  );
}
