import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col mb-8">
      <main className="flex-1">
 
        <section
          className="relative h-[300px] sm:h-[600px] bg-cover bg-center"
          style={{ backgroundImage: "url('/heroMain.png')" }}
        >
          <div className="container h-full flex items-center justify-center sm:justify-end px-4">

            <div
              className="
              relative z-10 bg-[#FFF9F3] p-4
              max-w-[160px] left-[20px]
              sm:max-w-[280px] sm:left-0 sm:p-6
              md:max-w-[350px] md:p-8
              lg:max-w-[543px] lg:left-[-40px]
              "
            >
              <p className="text-xs uppercase tracking-wide mb-2 sm:mt-4">
                New Arrival
              </p>
              <h1
                className="
                text-lg font-bold text-[#B88E2F] mb-4
                sm:text-3xl
                "
              >
                Discover Our
                <br />
                New Collection
              </h1>
              <p className="text-gray-600 mb-4 hidden sm:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>

              <div className="flex justify-start">
                <Link href="/shop">
                  <Button className="bg-[#B88E2F] hover:bg-[#A17B2A] text-white px-4 py-2 sm:px-6 sm:py-4">
                    BUY NOW
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
