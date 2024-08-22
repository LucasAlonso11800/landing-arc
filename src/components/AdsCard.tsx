import Image from 'next/image';
import React from 'react';

type Props = {
    title: string
    data: string
};

export default function AdsCard({title, data}: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center min-w-[120px] lg:min-w-[150px]">
      <div className="flex items-center justify-start mb-2">
        <Image width={24} height={24} src='/static/logos_google-ads.png' alt='Google Ads'/>
        <h3 className="text-gray-600 ml-2 text-[10px]">{title}</h3>
      </div>
      <div className="font-semibold text-gray-800 text-[24px]">
        {data}
      </div>
    </div>
  );
}
