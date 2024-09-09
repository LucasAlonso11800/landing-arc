import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

type Props = {
  children: React.ReactNode;
  iconUrl?: string;
  gradient?: boolean;
  className?: string;
  onClick?: () => any;
  disabled?: boolean
}

export default function Button({ children, iconUrl, className, onClick, disabled }: Props) {
  return (
    <button
      className={classNames(
        'flex items-center justify-center text-white text-sm sm:text-base xl:text-lg font-bold py-2 px-4 sm:px-5 rounded-[32px] bg-primary transition-all hover:bg-primaryLight disabled:bg-[#B4B4B4]',
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      {iconUrl && <Image src={iconUrl} alt="icon" width={16} height={16} className="hidden sm:block ml-2 pt-0.5" />}
    </button>
  );
}
