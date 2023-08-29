import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

const Carousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        let newSlide = currentSlide === data.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
      }
    }, 1000);

    return clearInterval(interval);
  }, [currentSlide, paused, data]);

  const nextSlide = () => {
    let newSlide = currentSlide === data.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    let newSlide = currentSlide === 0 ? data.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="w-full overflow-hidden md:h-72 relative rounded-lg shadow-xl">
      <AiOutlineLeft
        onClick={prevSlide}
        className="absolute hidden md:block left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
      />
      <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
        {data.map((element, index) => (
          <div
            className={`bg-slate-200 dark:bg-slate-800 ${
              index === currentSlide ? "block" : "hidden"
            } `}
            key={index}
            onMouseEnter={() => {
              setPaused(true);
            }}
            onMouseLeave={() => {
              setPaused(false);
            }}
          >
            <div className="grid md:grid-cols-2 md:h-72">
              <div className="p-4 md:ml-6 flex flex-col justify-center h-72 order-last md:-order-last">
                <h2 className="text-4xl text-slate-500 dark:text-slate-100 font-bold">
                  {element.name}
                </h2>
                <p className="text-stone-500 dark:text-slate-500">
                  {element.Summary}
                </p>
                <button className="bg-slate-900 mt-3 dark:bg-slate-200 text-white dark:text-slate-900 px-6 py-2 rounded hover:opacity-80 transition-all duration-300 w-1/2 md:w-2/3">
                  Go for Demo
                </button>
              </div>
              <img
                className="h-72 w-full object-cover"
                src={element.image}
                alt={element.name}
              />
            </div>
          </div>
        ))}
      </Swipe>
      <div className="absolute w-full flex justify-center bottom-0">
        {data.map((element, index) => (
          <div
            className={
              index === currentSlide
                ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer shadow-lg"
                : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer shadow-lg"
            }
            key={index}
            onClick={() => {
              setCurrentSlide(index);
            }}
          ></div>
        ))}
      </div>
      <AiOutlineRight
        onClick={nextSlide}
        className="absolute hidden md:block right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
      />
    </div>
  );
};

export default Carousel;
