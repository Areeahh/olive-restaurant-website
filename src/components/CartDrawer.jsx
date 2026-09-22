import { X, Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SmartImg from "./SmartImg";

export default function CartDrawer({ open, onClose }) {
  const { items, updateQty, removeFromCart, total } = useCart();

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-cream-50 z-[70] shadow-2xl transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-ink-900/10">
          <h2 className="font-display text-xl">Your Order</h2>
          <button onClick={onClose} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 && (
            <p className="text-sm text-ink-900/60 mt-10 text-center">
              Your cart is empty. Add something delicious from the menu!
            </p>
          )}
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 items-center">
              <SmartImg
                src={item.image}
                fallback={item.fallback}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-gold-600 text-sm font-semibold">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="w-6 h-6 rounded-full border border-ink-900/20 flex items-center justify-center"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="text-sm w-5 text-center">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="w-6 h-6 rounded-full border border-ink-900/20 flex items-center justify-center"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                aria-label="Remove item"
                className="text-ink-900/40 hover:text-red-500"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="border-t border-ink-900/10 px-6 py-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-ink-900/60">Total</span>
            <span className="font-display text-xl">${total.toFixed(2)}</span>
          </div>
          <Link
            to="/checkout"
            onClick={onClose}
            className="block text-center w-full bg-gold-500 hover:bg-gold-600 text-olive-950 font-semibold py-3 rounded-full transition-colors"
          >
            Checkout
          </Link>
        </div>
      </aside>
    </>
  );
}
