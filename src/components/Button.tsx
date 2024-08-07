import React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  iconUrl?: string;
  gradient?: boolean;
}

export default function Button({ children, iconUrl, gradient = false }: Props) {
  return (
    <button
      className={classNames(
        'flex items-center justify-center text-white text-lg font-bold py-2 px-5 rounded-[32px]',
        {
          'bg-primary': !gradient,
          'bg-gradient-to-r from-primary to-[#59A6F9]': gradient,
        }
      )}
    >
      {children}
      {iconUrl && <img src={iconUrl} alt="icon" className="ml-2 pt-0.5" />}
    </button>
  );
}
