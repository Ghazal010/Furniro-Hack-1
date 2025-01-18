"use client";

import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
  trophy1: string; 
  highQuality?: string; 
  craftedFromTopMaterials?: string; 

  frameDivJustifyContent?: CSSProperties["justifyContent"]; 
  highQualityMargin?: CSSProperties["margin"]; 
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "", 
  trophy1, 
  highQuality, 
  craftedFromTopMaterials, 
  frameDivJustifyContent, 
  highQualityMargin, 
}) => {
  
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: frameDivJustifyContent,
    };
  }, [frameDivJustifyContent]);

  const highQualityStyle: CSSProperties = useMemo(() => {
    return {
      margin: highQualityMargin,
    };
  }, [highQualityMargin]);

  return (
    <div
      className={`flex flex-row items-center justify-start gap-2.5 max-w-full text-left text-6xl text-gray-100 font-poppins mq450:flex-wrap ${className}`}
      style={frameDivStyle}>

      <Image
        className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
        loading="lazy" 
        width={60} 
        height={60} 
        alt="" 
        src={trophy1} 
      />
      <div className="flex flex-col items-start justify-start gap-0.5">
        
        <h3
          className="m-0 relative text-inherit leading-[150%] font-semibold font-[inherit] mq450:text-xl mq450:leading-[30px]"
          style={highQualityStyle}
        >
          {highQuality}
        </h3>

        <div className="relative text-xl leading-[150%] font-medium text-color-gray-3 mq450:text-base mq450:leading-[24px]">
          {craftedFromTopMaterials}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
