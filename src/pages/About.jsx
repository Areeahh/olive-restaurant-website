import { Leaf, ChefHat, Sofa, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Locally sourced & seasonal" },
  { icon: ChefHat, title: "Expert Chefs", desc: "Experienced & passionate" },
  { icon: Sofa, title: "Cozy Atmosphere", desc: "Perfect for family & friends" },
];

const why = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "We use only the freshest and highest quality ingredients." },
  { icon: ChefHat, title: "Skilled Chefs", desc: "Our chefs bring years of experience and creativity." },
  { icon: Sofa, title: "Great Ambiance", desc: "A cozy and elegant space for every occasion." },
  { icon: ShieldCheck, title: "Excellent Service", desc: "Your satisfaction is our top priority." },
];

export default function About() {
  return (
    <div className="pt-28">
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gold-600 text-xs tracking-[0.25em] uppercase mb-3">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight mb-6">
            A Culinary Journey of Passion
          </h1>
          <p className="text-ink-900/60 mb-8 leading-relaxed max-w-md">
            At The Olive, we believe that great food creates unforgettable
            moments. Our chefs craft each dish with love, using the finest
            ingredients to bring you an exceptional dining experience.
          </p>
          <div className="space-y-5 mb-8">
            {values.map((v) => (
              <div key={v.title} className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-full bg-olive-900/5 border border-olive-900/10 flex items-center justify-center text-olive-900">
                  <v.icon size={19} />
                </span>
                <div>
                  <p className="font-medium">{v.title}</p>
                  <p className="text-sm text-ink-900/50">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/reservation"
            className="inline-flex items-center gap-2 bg-olive-900 hover:bg-olive-800 text-cream-50 font-medium px-5 py-3 rounded-lg text-sm transition-colors"
          >
            Our Story <ArrowRight size={15} />
          </Link>
        </div>
        <div className="relative">
          <img
            src="https://placehold.co/700x800/1c3222/f8f3e8?font=playfair-display&text=The+Olive+Interior"
            alt="Restaurant interior"
            className="rounded-2xl w-full object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-cream-50 border border-ink-900/10 rounded-xl px-5 py-3 shadow-lg hidden sm:block">
            <span className="font-script text-2xl text-olive-900">Good food, Good vibes</span>
          </div>
        </div>
      </section>

      <section className="bg-olive-950 text-cream-50 py-20 mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-1">
            <Sparkles className="text-gold-400 mb-4" size={28} />
            <h2 className="font-display text-3xl mb-3">Our Mission</h2>
            <p className="text-cream-50/70 text-sm leading-relaxed">
              To bring people together over honest, seasonal food served in a
              space that feels like home — one plate, one table, one good
              mood at a time.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { n: "2016", l: "Founded in Lahore" },
              { n: "40+", l: "Dishes on our menu" },
              { n: "2,000+", l: "Happy guests served monthly" },
            ].map((s) => (
              <div key={s.l} className="border border-cream-50/15 rounded-xl p-6 text-center">
                <p className="font-display text-3xl text-gold-400 mb-2">{s.n}</p>
                <p className="text-sm text-cream-50/70">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <p className="text-gold-600 text-xs tracking-[0.25em] uppercase mb-3">Why Choose Us</p>
        <h2 className="font-display text-4xl mb-12 max-w-lg">More Than Just a Meal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {why.map((w) => (
            <div key={w.title}>
              <w.icon className="text-gold-600 mb-4" size={26} />
              <p className="font-medium mb-1.5">{w.title}</p>
              <p className="text-sm text-ink-900/55 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
