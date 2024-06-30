import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider() {
  const sliders = [
    {
      images: "/jump.webp",
      nom: "Jump",
    },
    {
      images: "/dbz.webp",
      nom: "Dragon Ball Z",
    },
    {
      images: "/blackclover.webp",
      nom: "Black Clover",
    },
    {
      images: "/snk.webp",
      nom: "Snk",
    },
    {
      images: "/fairytail.webp",
      nom: "Fairy Tail",
    },
    {
      images: "/onepunchman.webp",
      nom: "One Punch Man",
    },
  ];
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        interval={6000}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {sliders.map((slide, index) => {
          return (
            <div key={index} className="py-4 flex h-[700px]">
              <img src={slide.images} alt={slide.nom} className="w-20 py-5" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
