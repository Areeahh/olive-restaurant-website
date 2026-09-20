import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function MenuCard({ item }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-cream-50 rounded-2xl overflow-hidden border border-ink-900/5 shadow-sm hover:shadow-lg transition-shadow group">
      <div className="aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg text-ink-900">{item.name}</h3>
        <p className="text-sm text-ink-900/60 mt-1.5 leading-relaxed min-h-[40px]">
          {item.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gold-600 font-semibold text-lg">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <button
          onClick={() => addToCart(item)}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-olive-900 hover:bg-olive-800 text-cream-50 text-sm font-medium py-2.5 rounded-lg transition-colors"
        >
          <ShoppingCart size={15} /> Add to Cart
        </button>
      </div>
    </div>
  );
}
