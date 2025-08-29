import { useState, useEffect } from "react";
import { ShoppingBagIcon } from "lucide-react";

const images = [
  "https://sourceofagro.com/frd-data/img/sliders/1716377520._frd.jpg",
  "https://sourceofagro.com/frd-data/img/sliders/1716378867._frd.jpg",
  "https://sourceofagro.com/frd-data/img/sliders/1716378814._frd.jpg",
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Modern Agro Machinery
        </h1>
        <p className="mt-4 text-gray-600">
          Explore our collection of advanced agricultural equipment that helps
          farmers increase productivity and efficiency.
        </p>
        <a
          href="#products"
          className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-xl px-5 py-3"
        >
          Shop now <ShoppingBagIcon size={18} />
        </a>
      </div>

      <div className="relative">
        <img
          src={images[current]}
          alt="Agro machinery collage"
          className="rounded-2xl shadow-sm transition-all duration-100 ease-in-out"
        />

        {/* Dot Indicators */}
        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                current === index ? "bg-green-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
