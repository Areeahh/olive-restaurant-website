import { CheckCircle2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Toast() {
  const { toast } = useCart();
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] bg-olive-950 text-cream-50 px-5 py-3 rounded-full shadow-xl flex items-center gap-2 text-sm animate-[fadeIn_0.2s_ease-out]">
      <CheckCircle2 size={16} className="text-gold-400" />
      {toast}
    </div>
  );
}
