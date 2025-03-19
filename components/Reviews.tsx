import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import Image from "next/image";

export function Reviews() {
  return (
    <section className="place-content-center lg:place-content-start space-y-14 md:space-y-24 mx-auto pt-20 pb-10 w-[95%] min-h-screen text-center overflow-x-hidden">
      <header className="space-y-5 px-2">
        <p className="font-semibold text-primaryRed text-xl uppercase">
          our testimonial
        </p>
        <h2 className="relative mx-auto mb-2 w-fit font-semibold text-3xl text-black md:text-5xl">
          What Our Customers Say about us
          <Image
            src={"/images/vec.svg"}
            alt="smartmart"
            width={27}
            height={27}
            className="-top-4 -right-2 sm:-right-8 absolute"
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
              className="md:basis-1/2 lg:basis-1/3 relative border-medGray ml-1 md:ml-7 border rounded-xl w-[343px] md:max-w-[363px]"
            >
              <Image
                src={"/images/rev.svg"}
                alt="smartmart"
                width={60}
                height={60}
                className="-top-7 -left-2 md:-left-7 z-40 absolute w-12 md:w-[60px] h-12 md:h-[60px]"
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
