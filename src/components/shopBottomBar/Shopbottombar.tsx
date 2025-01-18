import React from 'react'
import Image from 'next/image'

function Shopbottombar() {
  return (
    <>
      <section className="w-full h-auto items-center justify-center bg-[#f9f1e7] py-4 md:py-6">
        <div className="w-full max-w-screen-xl flex flex-wrap md:flex-nowrap m-auto gap-4 md:gap-8 px-2 md:px-4 justify-center md:justify-between">
          <div className="flex flex-col sm:flex-row w-full md:w-auto items-center gap-4">
            <Image
              src="/trophy 1.png"
              alt="trophy"
              width={60}
              height={60}/>
            <div className="flex flex-col items-start text-center sm:text-left">
              <h1 className="font-semibold text-[18px] sm:text-[22px] md:text-[25px] leading-[24px] sm:leading-[30px] md:leading-[37.5px]">
                High Quality
              </h1>
              <p className="font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#898989] leading-[22px] sm:leading-[28px] md:leading-[30px]">
                crafted from top materials
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full md:w-auto items-center gap-4">
            <Image
              src="/guarantee.png"
              alt="guarantee"
              width={60}
              height={60}
            />
            <div className="flex flex-col items-start text-center sm:text-left">
              <h1 className="font-semibold text-[18px] sm:text-[22px] md:text-[25px] leading-[24px] sm:leading-[30px] md:leading-[37.5px]">
                Warranty Protection
              </h1>
              <p className="font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#898989] leading-[22px] sm:leading-[28px] md:leading-[30px]">
                Over 2 years
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full md:w-auto items-center gap-4">
            <Image
              src="/shipping.png"
              alt="shipping"
              width={60}
              height={60}
            />
            <div className="flex flex-col items-start text-center sm:text-left">
              <h1 className="font-semibold text-[18px] sm:text-[22px] md:text-[25px] leading-[24px] sm:leading-[30px] md:leading-[37.5px]">
                Free Shipping
              </h1>
              <p className="font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#898989] leading-[22px] sm:leading-[28px] md:leading-[30px]">
                Order over $150
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full md:w-auto items-center gap-4">
            <Image
              src="/cust.png"
              alt="customer support"
              width={60}
              height={60}
            />
            <div className="flex flex-col items-start text-center sm:text-left">
              <h1 className="font-semibold text-[18px] sm:text-[22px] md:text-[25px] leading-[24px] sm:leading-[30px] md:leading-[37.5px]">
                24/7 Support
              </h1>
              <p className="font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#898989] leading-[22px] sm:leading-[28px] md:leading-[30px]">
                Dedicated support
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shopbottombar
