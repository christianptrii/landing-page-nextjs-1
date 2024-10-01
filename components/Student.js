import React, { useState } from "react";

const testimonials = [
  {
    image: "t3",
    name: "Martin Watson",
    role: "English learner",
    country: "uk",
    quote: "There is no way I could have made the same progress learning English without using Lingua. The best part is now learning English has become one of my biggest hobbies."
  },
  {
    image: "t1",
    name: "Brian O'Connor",
    role: "Spanish student",
    country: "spain",
    quote: "Lingua has revolutionized the way I learn languages. The interactive lessons and real-time feedback have accelerated my Spanish learning journey tremendously."
  },
  {
    image: "t2",
    name: "Sarah Johnson",
    role: "Italy learner",
    country: "italy",
    quote: "As a non-native English speaker, learning Italy was challenging. Lingua's method made it enjoyable and effective. I've made significant progress in just a few months."
  }
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <div className="container mx-auto relative">
      <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
        Top Studying
      </p>
      <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize mb-10">
        Our students say
      </p>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 py-10 lg:py-20">
      <img src={`/assets/${currentTestimonial.image}.svg`} alt={currentTestimonial.image}  class="w-[650px] h-[650px]"/>
        <div className="flex flex-col gap-5 items-start">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">{currentTestimonial.name}</p>
          <div className="flex items-center gap-2">
            <img src={`/assets/${currentTestimonial.country}.svg`} alt={currentTestimonial.country}/>
            <p className="text-gray-500">{currentTestimonial.role}</p>
          </div>
          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl">
            {currentTestimonial.quote}
          </p>

          <div className="flex gap-2">
            <button onClick={prevSlide} className="p-2 bg-gray-200 hover:bg-[#7270dd] rounded-full w-10 h-10 flex items-center justify-center hover:text-[#ffffff]">
              &#8249;
            </button>
            <button onClick={nextSlide} className="p-2 bg-gray-200 hover:bg-[#7270dd] rounded-full w-10 h-10 flex items-center justify-center hover:text-[#ffffff]">
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;