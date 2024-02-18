import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type Props = {
  images: (string | StaticImport)[];
};

export function ProjectDisplayCarousel({ images }: Props) {
  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((item, index) => (
          <CarouselItem key={index}>
            <Image
              src={item}
              className="w-full rounded aspect-[12/7] object-cover object-top"
              width={1000}
              height={1000}
              alt=""
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && <CarouselPrevious className="left-1" />}
      {images.length > 1 && <CarouselNext className="right-1" />}
    </Carousel>
  );
}
