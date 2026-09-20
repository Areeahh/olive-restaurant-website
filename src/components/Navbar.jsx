import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Search, ShoppingBag, Menu as MenuIcon, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reservation", label: "Reservation" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar({ onCartClick }) {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-olive-950/95 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <span className="text-gold-400 text-2xl">🫒</span>
          <span className="leading-tight">
            <span className="block font-display text-xl text-cream-50 tracking-wide">The Olive</span>
            <span className="block text-[10px] tracking-[0.2em] text-gold-400/80 uppercase">
              Good Food · Great Mood
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors border-b pb-1 ${
                  isActive
                    ? "text-gold-400 border-gold-400"
                    : "text-cream-50/90 border-transparent hover:text-gold-400"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="hidden md:flex items-center justify-center w-9 h-9 rounded-full text-cream-50 hover:text-gold-400 transition-colors"
          >
            <Search size={19} />
          </button>
          <button
            aria-label="Cart"
            onClick={onCartClick}
            className="relative flex items-center justify-center w-9 h-9 rounded-full text-cream-50 hover:text-gold-400 transition-colors"
          >
            <ShoppingBag size={19} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold-500 text-olive-950 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
          <Link
            to="/reservation"
            className="hidden md:inline-flex items-center bg-gold-500 hover:bg-gold-600 text-olive-950 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Order Now
          </Link>
          <button
            aria-label="Toggle menu"
            className="lg:hidden text-cream-50"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-olive-950 border-t border-cream-50/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm tracking-wide ${isActive ? "text-gold-400" : "text-cream-50/90"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/reservation"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center bg-gold-500 text-olive-950 text-sm font-semibold px-5 py-2.5 rounded-full"
          >
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}
