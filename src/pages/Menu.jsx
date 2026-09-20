import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import MenuCard from "../components/MenuCard";
import { categories, menuItems } from "../data/menu";

export default function Menu() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return menuItems.filter((m) => {
      const matchesCategory = active === "All" || m.category === active;
      const matchesQuery = m.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [active, query]);

  return (
    <div className="pt-28">
      <section className="bg-olive-950 text-cream-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-gold-400 text-xs tracking-[0.25em] uppercase mb-3">Our Menu</p>
          <h1 className="font-display text-4xl md:text-5xl mb-4">Full Menu</h1>
          <p className="text-cream-50/70 max-w-md text-[15px]">
            Every dish made fresh to order, using seasonal ingredients and
            recipes passed down with care.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-8">
          <div className="flex gap-2 flex-wrap">
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
          <div className="relative w-full md:w-64">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-900/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-ink-900/15 text-sm focus:outline-none focus:border-olive-900"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-ink-900/50 py-20">No dishes match your search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
