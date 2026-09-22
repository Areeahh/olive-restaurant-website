import { useState } from "react";
import { Link } from "react-router-dom";
import {
  UtensilsCrossed,
  Star,
  Truck,
  Leaf,
  ArrowRight,
} from "lucide-react";
import HeroSlider from "../components/HeroSlider";
import MenuCard from "../components/MenuCard";
import SmartImg from "../components/SmartImg";
import { categories, menuItems, siteImages } from "../data/menu";

const stats = [
  { icon: UtensilsCrossed, title: "Delicious Food", desc: "Fresh & healthy ingredients" },
  { icon: Star, title: "Top Rated", desc: "4.8/5 from 2k+ customers" },
  { icon: Truck, title: "Fast Delivery", desc: "Hot & fresh at your doorstep" },
  { icon: Leaf, title: "Cozy Ambiance", desc: "Perfect for every occasion" },
];

export default function Home() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? menuItems.slice(0, 8) : menuItems.filter((m) => m.category === active).slice(0, 8);

  return (
    <div>
      <HeroSlider />

      <section className="bg-olive-950 text-cream-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.title} className="flex items-center gap-3">
              <s.icon className="text-gold-400" size={26} />
              <div>
                <p className="text-sm font-medium">{s.title}</p>
                <p className="text-xs text-cream-50/60">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-gold-600 text-xs tracking-[0.25em] uppercase mb-3">Our Menu</p>
            <h2 className="font-display text-4xl">Popular Dishes</h2>
            <p className="text-ink-900/60 mt-3 max-w-md text-[15px]">
              Explore our carefully crafted menu, featuring a variety of dishes
              made with fresh, seasonal ingredients.
            </p>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-olive-900 hover:bg-olive-800 text-cream-50 text-sm font-medium px-5 py-3 rounded-lg w-fit transition-colors"
          >
            View Full Menu <ArrowRight size={15} />
          </Link>
        </div>

        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                active === c
                  ? "bg-olive-900 text-cream-50 border-olive-900"
                  : "border-ink-900/15 text-ink-900/70 hover:border-olive-900"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative rounded-2xl overflow-hidden bg-olive-950 min-h-[220px] flex items-center px-8">
          <SmartImg
            src={siteImages.orderPromo.image}
            fallback={siteImages.orderPromo.fallback}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10">
            <p className="text-cream-50 text-xl font-display mb-1">Craving Something Delicious?</p>
            <p className="text-cream-50/70 text-sm mb-5 max-w-xs">
              Order your favorite food online and enjoy it at home.
            </p>
            <Link
              to="/menu"
              className="inline-flex bg-gold-500 hover:bg-gold-600 text-olive-950 font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
            >
              Order Now →
            </Link>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden bg-gold-600 min-h-[220px] flex items-center px-8">
          <SmartImg
            src={siteImages.offerPromo.image}
            fallback={siteImages.offerPromo.fallback}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10">
            <p className="text-olive-950 text-xs font-semibold tracking-[0.2em] uppercase mb-2">Special Offer</p>
            <p className="text-olive-950 text-xl font-display mb-1">Get 20% OFF on your first order</p>
            <Link
              to="/menu"
              className="inline-flex mt-4 bg-olive-950 hover:bg-olive-900 text-cream-50 font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
            >
              Order Now →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
