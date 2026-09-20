// Update this to your restaurant's real WhatsApp number, digits only, with country code.
const WHATSAPP_NUMBER = "923001234567";
const DEFAULT_MESSAGE = "Hi The Olive! I'd like to know more about your menu.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-60" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-xl hover:scale-105 transition-transform">
        <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff" aria-hidden="true">
          <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.38.7 4.6 1.913 6.463L4 29l7.72-1.876A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm0 21.8a9.76 9.76 0 0 1-4.98-1.363l-.357-.213-4.583 1.114 1.144-4.47-.233-.367A9.76 9.76 0 0 1 6.2 15c0-5.404 4.4-9.8 9.804-9.8 5.403 0 9.8 4.396 9.8 9.8 0 5.403-4.397 9.8-9.8 9.8zm5.377-7.34c-.294-.147-1.744-.86-2.015-.958-.27-.098-.467-.147-.663.147-.196.294-.76.958-.933 1.155-.172.196-.343.22-.637.073-.294-.147-1.243-.458-2.368-1.463-.876-.78-1.467-1.744-1.639-2.038-.172-.294-.018-.453.13-.6.133-.132.294-.343.44-.514.147-.172.196-.294.294-.49.098-.196.049-.368-.025-.515-.073-.147-.663-1.597-.909-2.188-.24-.575-.484-.497-.663-.507l-.564-.01c-.196 0-.514.073-.784.368-.27.294-1.03 1.006-1.03 2.455 0 1.448 1.055 2.847 1.202 3.043.147.196 2.077 3.17 5.032 4.444.703.303 1.251.484 1.679.62.705.224 1.348.192 1.855.117.566-.085 1.744-.713 1.99-1.401.245-.688.245-1.278.172-1.401-.073-.123-.269-.196-.563-.343z" />
        </svg>
      </span>
    </a>
  );
}
