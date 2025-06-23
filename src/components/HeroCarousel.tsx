'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroCarouselProps {
  slides: string[];
  interval?: number;
}

const HeroCarousel = ({ slides, interval = 5000 }: HeroCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    console.log('Previous slide clicked');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    console.log('Next slide clicked');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  if (slides.length === 0) return null;

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-20 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          goToPrevSlide();
        }}
        aria-label="Previous slide"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-20 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          goToNextSlide();
        }}
        aria-label="Next slide"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10 pointer-events-none">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            โรงเรียนอัสสัมชัญคอนแวนต์ลำนารายณ์
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-lg">
            มุ่งมั่นพัฒนาการศึกษาและคุณธรรมแก่เยาวชน
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admissions" className="btn pointer-events-auto">
              สมัครเรียน
            </a>
            <a href="/about" className="btn-outline bg-white/10 pointer-events-auto">
              เกี่ยวกับเรา
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
