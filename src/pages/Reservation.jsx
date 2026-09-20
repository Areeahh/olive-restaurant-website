import { useState } from "react";
import { CalendarDays, Clock, Users, CheckCircle2, Phone, Mail, User } from "lucide-react";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "7:00 PM",
  guests: "2 People",
  notes: "",
};

export default function Reservation() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date) return;
    setSubmitted(true);
  };

  const whatsappHref = `https://wa.me/923001234567?text=${encodeURIComponent(
    `Hi, I'd like to book a table.\nName: ${form.name}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}`
  )}`;

  return (
    <div className="pt-28">
      <section className="bg-olive-950 text-cream-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-gold-400 text-xs tracking-[0.25em] uppercase mb-3">Reservation</p>
          <h1 className="font-display text-4xl md:text-5xl mb-4">Book a Table</h1>
          <p className="text-cream-50/70 max-w-md text-[15px]">
            Reserve your spot and enjoy a delightful dining experience with
            your loved ones.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <div className="bg-cream-100 rounded-2xl p-6 md:p-10 border border-ink-900/5">
          {submitted ? (
            <div className="text-center py-14">
              <CheckCircle2 className="mx-auto text-olive-900 mb-4" size={48} />
              <h2 className="font-display text-2xl mb-2">Reservation Requested!</h2>
              <p className="text-ink-900/60 mb-8 max-w-sm mx-auto">
                Thanks {form.name || "there"}, we've received your request for{" "}
                {form.guests.toLowerCase()} on {form.date || "your chosen date"} at{" "}
                {form.time}. We'll confirm shortly by phone or email.
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
                <button
                  onClick={() => {
                    setForm(initialForm);
                    setSubmitted(false);
                  }}
                  className="inline-flex items-center gap-2 border border-olive-900 text-olive-900 font-medium px-5 py-3 rounded-full text-sm"
                >
                  Make Another Reservation
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Full Name" icon={User}>
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  className="input"
                />
              </Field>
              <Field label="Phone Number" icon={Phone}>
                <input
                  required
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+92 300 1234567"
                  className="input"
                />
              </Field>
              <Field label="Email" icon={Mail}>
                <input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                  className="input"
                />
              </Field>
              <Field label="Date" icon={CalendarDays}>
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={update("date")}
                  className="input"
                />
              </Field>
              <Field label="Time" icon={Clock}>
                <select value={form.time} onChange={update("time")} className="input">
                  {["12:00 PM", "1:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>
              <Field label="Guests" icon={Users}>
                <select value={form.guests} onChange={update("guests")} className="input">
                  {["1 Person", "2 People", "3 People", "4 People", "5+ People"].map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </Field>
              <div className="md:col-span-2">
                <label className="text-xs font-medium text-ink-900/60 mb-1.5 block">
                  Special Requests (optional)
                </label>
                <textarea
                  value={form.notes}
                  onChange={update("notes")}
                  rows={3}
                  placeholder="Allergies, occasion, seating preference..."
                  className="input resize-none"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center bg-olive-900 hover:bg-olive-800 text-cream-50 font-semibold px-8 py-3.5 rounded-full transition-colors"
                >
                  Find a Table
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          padding: 0.7rem 1rem;
          border-radius: 0.6rem;
          border: 1px solid rgba(28,28,26,0.12);
          background: #fdfcf8;
          font-size: 0.9rem;
          outline: none;
        }
        .input:focus {
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
