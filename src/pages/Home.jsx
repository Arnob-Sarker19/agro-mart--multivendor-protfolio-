import { useState, useEffect } from "react";
import products from "../data/products";
import { ShoppingBagIcon } from "lucide-react"; 

function Hero() {
  const slides = [
    "https://sourceofagro.com/frd-data/img/sliders/1716377520._frd.jpg",
    "https://sourceofagro.com/frd-data/img/sliders/1716378867._frd.jpg",
    "https://sourceofagro.com/frd-data/img/sliders/1716378814._frd.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

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

      <div className="relative w-full overflow-hidden rounded-2xl shadow-sm">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`slide-${index}`}
              className="w-full h-80 object-cover flex-shrink-0"
            />
          ))}
        </div>

        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full ${
                current === index ? "bg-yellow-500" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <div className="rounded-2xl border p-3 hover:shadow-sm transition bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain rounded-xl bg-gray-50"
      />
      <div className="mt-3">
        <h3 className="font-medium line-clamp-1">{product.title}</h3>
        <p className="text-xs text-gray-500 mt-1">{product.vendor}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-semibold">
            {product.price.toLocaleString()} ৳
          </span>
          <button className="text-sm rounded-lg border px-3 py-1 hover:bg-green-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-xl font-semibold mb-4">Popular Categories</h2>
        <div className="flex flex-wrap gap-2 ">
          {categories.map((c) => (
            <span key={c} className="px-3 py-1 rounded-full border text-sm hover:bg-green-300">
              {c}
            </span>
          ))}
        </div>

        <h2 id="products" className="text-xl font-semibold mt-8 mb-4">
          Top Sellers
        </h2>
        <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
