import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-olive-950 text-cream-50/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gold-400 text-2xl">🫒</span>
            <div>
              <p className="font-display text-lg text-cream-50">The Olive</p>
              <p className="text-[10px] tracking-[0.2em] text-gold-400/80 uppercase">
                Good Food · Great Mood
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Fresh ingredients, authentic flavors, and a warm table waiting for
            you — every single day.
          </p>
        </div>

        <div>
          <p className="text-cream-50 font-medium mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold-400">Home</Link></li>
            <li><Link to="/menu" className="hover:text-gold-400">Menu</Link></li>
            <li><Link to="/about" className="hover:text-gold-400">About</Link></li>
            <li><Link to="/gallery" className="hover:text-gold-400">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-cream-50 font-medium mb-4">Contact Us</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone size={15} className="text-gold-400" /> +92 300 1234567</li>
            <li className="flex items-center gap-2"><Mail size={15} className="text-gold-400" /> hello@theolive.com</li>
            <li className="flex items-center gap-2"><MapPin size={15} className="text-gold-400" /> 123 Food Street, Lahore, Pakistan</li>
          </ul>
        </div>

        <div>
          <p className="text-cream-50 font-medium mb-4">Follow Us</p>
          <div className="flex gap-3">
            {[FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="w-9 h-9 rounded-full border border-cream-50/20 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-cream-50/10 py-5 px-6 text-xs flex flex-col md:flex-row items-center justify-between gap-2 max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} The Olive. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold-400">Privacy Policy</a>
          <a href="#" className="hover:text-gold-400">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}
