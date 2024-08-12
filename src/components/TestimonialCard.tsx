import Image from 'next/image';
import React from 'react';

type TestimonialCardProps = {
  name: string;
  title: string;
  image: string;
  stars: number;
  description: string;
}

export default function TestimonialCard({ name, title, image, stars, description }: TestimonialCardProps) {
  return (
    <div className="flex flex-row items-center p-4 bg-white rounded-lg shadow-md max-w-[629px] w-full mx-auto">
      <Image 
        src={image} 
        alt={name} 
        width={72} 
        height={72} 
        className="rounded-full mr-4"
      />
      <div className="flex flex-col items-start sm:items-center sm:flex-row grow">
        <div className="sm:hidden w-full mt-4">
            <div className="flex w-full justify between items center">
                <h3 className="text-lg font-semibold mr-2">{name}</h3>
                <div className="flex justify-center md:justify-start mt-2 ml-auto">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            className={`w-4 h-4 fill-current ${i < stars ? 'text-yellow-400' : 'text-gray-400'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 17.27l6.18 3.73-1.64-7.03 5.46-4.73-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-sm text-[#B4B4B4]">{title}</p>
        </div>

        <div className="hidden sm:flex mt-4 md:mt-0 flex-1 w-full sm:flex-col sm:text-center md:text-left">
            <div className='sm:mr-0'>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-[#B4B4B4]">{title}</p>
            </div>
            <div className="flex justify-center md:justify-start mt-2 ml-auto sm:ml-0">
                <div className="flex">
                    {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`w-4 h-4 fill-current ${i < stars ? 'text-yellow-400' : 'text-gray-400'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 17.27l6.18 3.73-1.64-7.03 5.46-4.73-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    ))}
                </div>
            </div>
        </div>
        <div className="sm:ml-auto mb-auto max-w-xs mt-4 md:mt-0 sm:text-center md:text-left">
            <p className="text-sm text-[#6B6B6B]">
            {description}
            </p>
        </div>
      </div>
    </div>
  );
};
