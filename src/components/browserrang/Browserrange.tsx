import React from 'react';
import Image from 'next/image';
import { browseRange } from '@/constant/browseRange';

function Browserange() {
  return (
    <section className="px-4 sm:px-6 lg:px-10 mx-auto mb-20 font-poppins w-full max-w-screen-xl">
      
      <div className="flex flex-col items-center text-center w-full">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black leading-tight">
          Browse The Range
        </h1>
        <p className="text-sm sm:text-base text-black mt-2 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {browseRange.map((item, index) => (
          <div className="flex flex-col items-center" key={index}>
            
            <div className="w-full max-w-sm">
              <Image
                src={item.src}
                alt={item.name}
                width={381}
                height={480}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>

            <div className="mt-4">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black text-center leading-snug">
                {item.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Browserange;
