import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bike,
  ShoppingBag as PickupIcon,
  User,
  Phone,
  MapPin,
  Clock,
  Wallet,
  CheckCircle2,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import SmartImg from "../components/SmartImg";

const WHATSAPP_NUMBER = "923269659536";
const DELIVERY_FEE = 2.5;

const initialForm = {
  name: "",
  phone: "",
  address: "",
  time: "As soon as possible",
  payment: "Cash on Delivery",
  notes: "",
};

export default function Checkout() {
  const { items, updateQty, removeFromCart, total } = useCart();
  const [orderType, setOrderType] = useState("delivery"); // 'delivery' | 'pickup'
  const [form, setForm] = useState(initialForm);
  const [placed, setPlaced] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const deliveryFee = orderType === "delivery" ? DELIVERY_FEE : 0;
  const grandTotal = total + deliveryFee;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    if (orderType === "delivery" && !form.address) return;
    setPlaced(true);
  };

  const orderLines = items
    .map((i) => `${i.qty}x ${i.name} — $${(i.qty * i.price).toFixed(2)}`)
    .join("\n");

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi, I'd like to place an order (${orderType === "delivery" ? "Home Delivery" : "Pickup"}).\n\n${orderLines}\n\nSubtotal: $${total.toFixed(
      2
    )}${orderType === "delivery" ? `\nDelivery fee: $${deliveryFee.toFixed(2)}` : ""}\nTotal: $${grandTotal.toFixed(
      2
    )}\n\nName: ${form.name}\nPhone: ${form.phone}${
      orderType === "delivery" ? `\nAddress: ${form.address}` : ""
    }\nTime: ${form.time}\nPayment: ${form.payment}${form.notes ? `\nNotes: ${form.notes}` : ""}`
  )}`;

  if (items.length === 0 && !placed) {
    return (
      <div className="pt-40 pb-24 max-w-lg mx-auto px-6 text-center">
        <h1 className="font-display text-3xl mb-3">Your cart is empty</h1>
        <p className="text-ink-900/60 mb-8">
          Add something delicious from the menu before checking out.
        </p>
        <Link
          to="/menu"
          className="inline-flex bg-olive-900 hover:bg-olive-800 text-cream-50 font-semibold px-6 py-3 rounded-full"
        >
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28">
      <section className="bg-olive-950 text-cream-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-gold-400 text-xs tracking-[0.25em] uppercase mb-3">Checkout</p>
          <h1 className="font-display text-4xl md:text-5xl mb-4">
            Home Delivery &amp; Pickup
          </h1>
          <p className="text-cream-50/70 max-w-md text-[15px]">
            Get your order delivered hot to your door, or pick it up yourself
            — your choice.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
        {placed ? (
          <div className="bg-cream-100 rounded-2xl p-6 md:p-10 border border-ink-900/5 text-center max-w-lg mx-auto py-16">
            <CheckCircle2 className="mx-auto text-olive-900 mb-4" size={48} />
            <h2 className="font-display text-2xl mb-2">Order Placed!</h2>
            <p className="text-ink-900/60 mb-8">
              Thanks {form.name}, we've received your{" "}
              {orderType === "delivery" ? "delivery" : "pickup"} order for $
              {grandTotal.toFixed(2)}. Send it on WhatsApp below to confirm
              with our team right away.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-medium px-5 py-3 rounded-full text-sm"
              >
                Confirm via WhatsApp
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 border border-olive-900 text-olive-900 font-medium px-5 py-3 rounded-full text-sm"
              >
                Order More
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
              <div>
                <p className="text-xs font-medium text-ink-900/60 mb-2">How would you like it?</p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setOrderType("delivery")}
                    className={`flex items-center gap-3 justify-center border rounded-xl py-4 text-sm font-medium transition-colors ${
                      orderType === "delivery"
                        ? "bg-olive-900 text-cream-50 border-olive-900"
                        : "border-ink-900/15 text-ink-900/70 hover:border-olive-900"
                    }`}
                  >
                    <Bike size={18} /> Home Delivery
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType("pickup")}
                    className={`flex items-center gap-3 justify-center border rounded-xl py-4 text-sm font-medium transition-colors ${
                      orderType === "pickup"
                        ? "bg-olive-900 text-cream-50 border-olive-900"
                        : "border-ink-900/15 text-ink-900/70 hover:border-olive-900"
                    }`}
                  >
                    <PickupIcon size={18} /> Pickup
                  </button>
                </div>
              </div>

              <div className="bg-cream-100 rounded-2xl p-6 space-y-5">
                <Field label="Full Name" icon={User}>
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    className="co-input"
                  />
                </Field>
                <Field label="Phone Number" icon={Phone}>
                  <input
                    required
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+92 300 1234567"
                    className="co-input"
                  />
                </Field>
                {orderType === "delivery" && (
                  <Field label="Delivery Address" icon={MapPin}>
                    <textarea
                      required
                      rows={2}
                      value={form.address}
                      onChange={update("address")}
                      placeholder="House / street, area, city"
                      className="co-input resize-none"
                    />
                  </Field>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label={orderType === "delivery" ? "Delivery Time" : "Pickup Time"} icon={Clock}>
                    <select value={form.time} onChange={update("time")} className="co-input">
                      <option>As soon as possible</option>
                      <option>In 30 minutes</option>
                      <option>In 1 hour</option>
                      <option>Schedule for later</option>
                    </select>
                  </Field>
                  <Field label="Payment Method" icon={Wallet}>
                    <select value={form.payment} onChange={update("payment")} className="co-input">
                      <option>Cash on Delivery</option>
                      <option>Card on Delivery</option>
                      <option>Pay Online</option>
                    </select>
                  </Field>
                </div>
                <div>
                  <label className="text-xs font-medium text-ink-900/60 mb-1.5 block">
                    Notes (optional)
                  </label>
                  <textarea
                    value={form.notes}
                    onChange={update("notes")}
                    rows={2}
                    placeholder="Allergies, delivery instructions..."
                    className="co-input resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-olive-950 font-semibold py-3.5 rounded-full transition-colors"
              >
                Place {orderType === "delivery" ? "Delivery" : "Pickup"} Order — $
                {grandTotal.toFixed(2)}
              </button>
            </form>

            <div className="lg:col-span-2">
              <div className="bg-cream-100 rounded-2xl p-6 sticky top-28">
                <h2 className="font-display text-xl mb-5">Order Summary</h2>
                <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 items-center">
                      <SmartImg
                        src={item.image}
                        fallback={item.fallback}
                        alt={item.name}
                        className="w-14 h-14 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-gold-600 text-sm font-semibold">
                          ${item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="w-6 h-6 rounded-full border border-ink-900/20 flex items-center justify-center"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sm w-5 text-center">{item.qty}</span>
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="w-6 h-6 rounded-full border border-ink-900/20 flex items-center justify-center"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                        className="text-ink-900/40 hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-ink-900/10 mt-5 pt-5 space-y-2 text-sm">
                  <div className="flex justify-between text-ink-900/60">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-ink-900/60">
                    <span>{orderType === "delivery" ? "Delivery Fee" : "Pickup"}</span>
                    <span>{orderType === "delivery" ? `$${deliveryFee.toFixed(2)}` : "Free"}</span>
                  </div>
                  <div className="flex justify-between font-display text-lg pt-2">
                    <span>Total</span>
                    <span>${grandTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <style>{`
        .co-input {
          width: 100%;
          padding: 0.7rem 1rem;
          border-radius: 0.6rem;
          border: 1px solid rgba(28,28,26,0.12);
          background: #fdfcf8;
          font-size: 0.9rem;
          outline: none;
        }
        .co-input:focus {
          border-color: #16281a;
        }
      `}</style>
    </div>
  );
}

function Field({ label, icon: Icon, children }) {
  return (
    <div>
      <label className="text-xs font-medium text-ink-900/60 mb-1.5 flex items-center gap-1.5">
        <Icon size={13} /> {label}
      </label>
      {children}
    </div>
  );
}
