"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function ProductDetails() {
  return (
    <div className="max-w-7xl mx-auto px-2 exsm:px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-1 xsm:grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-8 exsm:mb-[90px]">
          <TabsTrigger value="description" className="text-base sm:text-lg">Description</TabsTrigger>
          <TabsTrigger value="additional" className="text-base sm:text-lg">Additional Information</TabsTrigger>
          <TabsTrigger value="reviews" className="text-base sm:text-lg">Reviews [5]</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="space-y-4 sm:space-y-6">
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6">
              Capturing the untamed, rebellious essence of rock &apos;n&apos; roll, the Kilburn portable active stereo speaker carries the iconic style and sound of Marshall, disconnects from the wires, and brings the performance wherever you go.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Weighing less than 7 pounds, the Kilburn is a lightweight marvel of vintage-inspired design. As one of the loudest speakers in its category, it packs a punch with a well-rounded audio profile that delivers a clear midrange and crisp highs for a sound that&apos;s both detailed and powerful. The analog knobs let you adjust the settings to your liking, while the guitar-style leather strap ensures effortless and stylish portability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-[#fdf6f0] rounded-lg p-4 sm:p-8">
              <Image
                src="/sofa.png"
                alt="Sofa straight view"
                width={605}
                height={348}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="bg-[#fdf6f0] rounded-lg p-4 sm:p-8">
              <Image
                src="/sofa.png"
                alt="Sofa L-shaped view"
                width={605}
                height={348}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="additional">
          <div className="prose max-w-none">
            <p className="text-gray-600">Additional product information will be displayed here.</p>
          </div>
        </TabsContent>

        <TabsContent value="reviews">
          <div className="prose max-w-none">
            <p className="text-gray-600">Product reviews will be displayed here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
