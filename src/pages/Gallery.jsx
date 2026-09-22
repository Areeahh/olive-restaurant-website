import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "../data/menu";
import SmartImg from "../components/SmartImg";

export default function Gallery() {
  const [open, setOpen] = useState(null);

  const next = () => setOpen((i) => (i + 1) % galleryImages.length);
  const prev = () => setOpen((i) => (i - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div className="pt-28">
      <section className="bg-olive-950 text-cream-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-gold-400 text-xs tracking-[0.25em] uppercase mb-3">Take a Look</p>
          <h1 className="font-display text-4xl md:text-5xl mb-4">Our Gallery</h1>
          <p className="text-cream-50/70 max-w-md text-[15px]">
            A glimpse into our kitchen, our dining room, and the moments we
            get to be part of every day.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((g, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className="block w-full break-inside-avoid rounded-2xl overflow-hidden group"
            >
              <SmartImg
                src={g.image}
                fallback={g.fallback}
                alt={`Gallery ${i + 1}`}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </button>
          ))}
        </div>
      </section>

      {open !== null && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center px-6">
          <button
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute top-6 right-6 text-cream-50 hover:text-gold-400"
          >
            <X size={28} />
          </button>
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-4 md:left-10 text-cream-50 hover:text-gold-400"
          >
            <ChevronLeft size={32} />
          </button>
          <SmartImg
            src={galleryImages[open].image}
            fallback={galleryImages[open].fallback}
            alt="Enlarged"
            className="max-h-[80vh] max-w-full rounded-xl object-contain"
          />
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-4 md:right-10 text-cream-50 hover:text-gold-400"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
