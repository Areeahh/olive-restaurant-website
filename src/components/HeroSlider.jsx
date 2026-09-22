import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "../data/menu";
import SmartImg from "./SmartImg";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % heroSlides.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length),
    []
  );

  useEffect(() => {
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative h-[92vh] min-h-[620px] w-full overflow-hidden bg-olive-950">
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <SmartImg
            src={slide.image}
            fallback={slide.fallback}
            alt=""
            className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${
              i === index ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-olive-950/90 via-olive-950/60 to-olive-950/20" />
        </div>
      ))}

      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center">
        <p className="text-gold-400 text-xs tracking-[0.25em] uppercase mb-4">
          {heroSlides[index].eyebrow}
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-cream-50 leading-[1.05] whitespace-pre-line max-w-2xl">
          {heroSlides[index].title}
        </h1>
        <p className="mt-6 text-cream-50/80 max-w-md text-[15px] leading-relaxed">
          {heroSlides[index].subtitle}
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            to="/reservation"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-olive-950 font-semibold px-6 py-3.5 rounded-full transition-colors"
          >
            <CalendarDays size={17} /> Book a Table
          </Link>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 border border-cream-50/40 text-cream-50 hover:border-gold-400 hover:text-gold-400 font-semibold px-6 py-3.5 rounded-full transition-colors"
          >
            <ShoppingBag size={17} /> Order Online
          </Link>
        </div>
      </div>

      <div className="absolute right-6 lg:right-10 bottom-10 z-20 hidden md:flex items-center justify-center w-24 h-24 rounded-full border border-gold-400/60 text-center">
        <span className="font-script text-gold-300 text-sm leading-tight rotate-[-8deg]">
          Fresh &amp;<br />Healthy<br />Always
        </span>
      </div>

      <div className="absolute z-20 bottom-8 left-6 lg:left-10 flex items-center gap-3">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-10 h-10 rounded-full border border-cream-50/30 text-cream-50 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-gold-400" : "w-3 bg-cream-50/40"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-10 h-10 rounded-full border border-cream-50/30 text-cream-50 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
