import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

const WHATSAPP_NUMBER = "923001234567";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    setSent(true);
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi The Olive! I have a question."
  )}`;

  return (
    <div className="pt-28">
      <section className="bg-olive-950 text-cream-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-gold-400 text-xs tracking-[0.25em] uppercase mb-3">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p className="text-cream-50/70 max-w-md text-[15px]">
            Questions, feedback, or planning something special? We'd love to
            hear from you.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-2 space-y-6">
          {[
            { icon: Phone, title: "Phone", value: "+92 300 1234567" },
            { icon: Mail, title: "Email", value: "hello@theolive.com" },
            { icon: MapPin, title: "Address", value: "123 Food Street, Lahore, Pakistan" },
            { icon: Clock, title: "Hours", value: "Mon–Sun: 11:00 AM – 11:00 PM" },
          ].map((c) => (
            <div key={c.title} className="flex items-start gap-4 bg-cream-100 rounded-xl p-5">
              <span className="w-10 h-10 rounded-full bg-olive-900 text-cream-50 flex items-center justify-center shrink-0">
                <c.icon size={17} />
              </span>
              <div>
                <p className="font-medium text-sm">{c.title}</p>
                <p className="text-sm text-ink-900/60">{c.value}</p>
              </div>
            </div>
          ))}

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium py-3.5 rounded-xl text-sm"
          >
            Chat with us on WhatsApp
          </a>

          <div className="rounded-xl overflow-hidden border border-ink-900/10 h-52">
            <img
              src="https://placehold.co/700x400/1c3222/f8f3e8?font=playfair-display&text=Find+Us+On+The+Map"
              alt="Map placeholder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-3 bg-cream-100 rounded-2xl p-6 md:p-10 border border-ink-900/5">
          {sent ? (
            <div className="text-center py-14">
              <CheckCircle2 className="mx-auto text-olive-900 mb-4" size={48} />
              <h2 className="font-display text-2xl mb-2">Message Sent!</h2>
              <p className="text-ink-900/60 mb-8">
                Thanks {form.name}, we'll get back to you soon.
              </p>
              <button
                onClick={() => {
                  setForm({ name: "", email: "", message: "" });
                  setSent(false);
                }}
                className="inline-flex items-center gap-2 border border-olive-900 text-olive-900 font-medium px-5 py-3 rounded-full text-sm"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-medium text-ink-900/60 mb-1.5 block">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    className="ct-input"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-ink-900/60 mb-1.5 block">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    className="ct-input"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-ink-900/60 mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="How can we help?"
                  className="ct-input resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-olive-900 hover:bg-olive-800 text-cream-50 font-semibold px-8 py-3.5 rounded-full transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      <style>{`
        .ct-input {
          width: 100%;
          padding: 0.7rem 1rem;
          border-radius: 0.6rem;
          border: 1px solid rgba(28,28,26,0.12);
          background: #fdfcf8;
          font-size: 0.9rem;
          outline: none;
        }
        .ct-input:focus {
          border-color: #16281a;
        }
      `}</style>
    </div>
  );
}
