import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Reviews() {
  return (
    <section className="w-[95%] min-h-screen place-content-center lg:place-content-start text-center mx-auto space-y-14 md:space-y-24 overflow-x-hidden">
      <header className="space-y-5 px-2">
        <p className="text-primaryRed text-xl font-semibold uppercase">
          our testimonial
        </p>
        <h2 className="relative w-fit mx-auto text-3xl md:text-5xl font-semibold text-black mb-2">
          What Our Customers Say about us
          <Image
            src={"/images/vec.svg"}
            alt="smartmart"
            width={27}
            height={27}
            className="absolute -right-2 sm:-right-8 -top-4"
          />
        </h2>
      </header>

      <Carousel
        opts={{
          align: "start",
        }}
        className="space-y-10 px-4 md:px-0"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 w-[343px] md:max-w-[363px] rounded-xl border border-medGray relative ml-1 md:ml-7"
            >
              <Image
                src={"/images/rev.svg"}
                alt="smartmart"
                width={60}
                height={60}
                className="absolute -left-2 md:-left-7 -top-7 z-40 w-12 h-12 md:w-[60px] md:h-[60px]"
              />
              <div className="">
                <Image
                  src={"/images/rev1.png"}
                  alt="smartmart"
                  width={365}
                  height={365}
                  className="w-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="w-full">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
}
