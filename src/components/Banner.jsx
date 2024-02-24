import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "../assets/index";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          {data.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`image${index}`}
              className="w-screen h-full object-cover"
            />
          ))}
        </div>
        <div className="flex absolute bottom-36 left-1/2 -translate-x-1/2 justify-center items-center gap-5">
          <button
            onClick={prevSlide}
            className="hover:bg-gray-600 hover:border-none hover:text-white duration-300  border-[0.5px] border-gray-400 text-sm px-5 py-2"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="hover:bg-gray-600 hover:border-none hover:text-white duration-300 border-[.5px] border-gray-400 text-sm px-5 py-2"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
