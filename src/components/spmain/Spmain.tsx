"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { MinusIcon, PlusIcon, Star, StarHalf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface ProductImage {
  src: string;
  alt: string;
}

export default function Spmain() {
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);

  const productImages: ProductImage[] = [
    { src: "/sp1.png", alt: "Asgaard sofa front view" },
    { src: "/sp2.png", alt: "Asgaard sofa side view" },
    { src: "/sp3.png", alt: "Asgaard sofa detail view" },
    { src: "/sp4.png", alt: "Asgaard sofa back view" },
  ];

  return (
    <div className="w-full mx-auto px-4 py-8 mb-[58px] exsm:w-3/4 exsm:px-0 ">

      <div className="grid gap-8 md:grid-cols-2 ">

        <div className="flex gap-4 flex-col md:flex-row ">

          <div className="flex exsm:flex-wrap exsm:ml-8 gap-4 overflow-x-auto md:flex-col">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  "border-2 rounded-lg overflow-hidden w-20 h-20 md:w-24 md:h-24",
                  selectedImage === index ? "border-primary" : "border-transparent"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>

          <div className="flex-1">
            <Image
              src="/Spmain.png"
              alt="mainImage"
              width={600}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-6 ">
          <div className="exsm:text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Asgaard sofa</h1>
            <p className="text-lg sm:text-2xl text-muted-foreground mt-2">Rs. 250,000.00</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFC700] text-primary" />
              ))}
              <StarHalf className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">5 Customer Review</span>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a
            well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Size</h3>
              <RadioGroup defaultValue="L" className="flex gap-2 sm:gap-4">
                {["L", "XL", "XS"].map((size) => (
                  <div key={size}>
                    <RadioGroupItem value={size} id={size} className="peer sr-only" />
                    <Label
                      htmlFor={size}
                      className="px-3 py-1 sm:px-4 sm:py-2 border rounded-md peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="font-medium mb-2">Color</h3>
              <RadioGroup defaultValue="purple" className="flex gap-2 sm:gap-4">
                {["purple", "black", "gold"].map((color) => (
                  <div key={color}>
                    <RadioGroupItem value={color} id={color} className="peer sr-only" />
                    <Label
                      htmlFor={color}
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-${color}-500 peer-data-[state=checked]:ring-2 ring-offset-2 ring-${color}-500`}
                    />
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
              <div className="flex items-center border rounded-md w-[100px] sm:w-[123px] h-[48px] sm:h-[64px]">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-none"
                >
                  <MinusIcon className="w-4 h-4" />
                </Button>
                <span className="w-8 sm:w-12 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-none"
                >
                  <PlusIcon className="w-4 h-4" />
                </Button>
              </div>

             <Link href="/cart">
             <Button variant="outline" className="w-full sm:w-[215px] h-[48px] sm:h-[64px] rounded-md sm:rounded-[15px]">
                Add To Cart
              </Button>
             </Link>
             <Link href="/productComparison">
             <Button variant="outline" className="w-full sm:w-[215px] h-[48px] sm:h-[64px] rounded-md sm:rounded-[15px]">
                + Compare
              </Button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
