import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const videos = [
  "https://cdn.dribbble.com/userupload/42855665/file/original-3472daac91f8da4c795af205325a6633.mp4",
  "https://cdn.dribbble.com/userupload/13286536/file/original-f21e762f8042884d82b6bf155eabc7eb.mp4",
  "https://cdn.dribbble.com/userupload/15961913/file/original-870db03c55995a83b49efe0b59173f97.mp4",
];
const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play the carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((current - 1 + videos.length) % videos.length);
  const nextSlide = () => setCurrent((current + 1) % videos.length);

  return (
    <div className="w-full flex justify-center px-2 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10">
      <div className="max-w-7xl w-full">
        <div className="relative w-full overflow-hidden bg-black rounded-2xl shadow-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {videos.map((src, i) => (
              <div key={i} className="w-full shrink-0 relative">
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[60vh] object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition cursor-pointer"
          >
            <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition cursor-pointer"
          >
            <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-3 w-3 rounded-full transition-all cursor-pointer ${
                  current === i ? "bg-white w-4" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
