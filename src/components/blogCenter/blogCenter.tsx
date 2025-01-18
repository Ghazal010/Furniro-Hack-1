import React from "react";
import Image from "next/image";
import { BlogData } from "@/constant/blogData";

function BlogCenter() {
  return (
    <div className="px-2 lg:px-12">
      {BlogData.map((item, index) => (
        <div
          key={index}
          className="w-full mb-8 lg:mb-12 border-b pb-6 last:border-none">
          <div className="w-full">
            <Image
              src={item.src}
              width={820}
              height={400}
              alt="image1"
              className="w-full h-auto rounded-md"/>
          </div>
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Image src="/date.png" width={20} height={20} alt="date" />
              <p>{item.date}</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/admin.png" width={20} height={20} alt="admin" />
              <p>{item.admin}</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/wood.png" width={20} height={20} alt="category" />
              <p>{item.category}</p>
            </div>
          </div>

          <div className="mt-4">
            <h1
              className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3">
              {item.h1}
            </h1>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc.
            </p>
            <p className="text-sm font-medium text-[#B88E2F] underline cursor-pointer hover:text-[#A17B2A]">
              Read More
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogCenter;
