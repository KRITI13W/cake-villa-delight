import { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const CustomCakePage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Inquiry sent! 🎂", description: "We'll contact you within 24 hours." });
  };

  const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent("Hi! I'd like to inquire about a custom cake order.")}`;

  if (submitted) {
    return (
      <Layout>
        <section className="container py-16 sm:py-24 text-center">
          <div className="mx-auto max-w-md">
            <div className="text-6xl mb-4">🎂</div>
            <h1 className="text-2xl sm:text-3xl font-heading font-bold mb-4">Inquiry Received!</h1>
            <p className="text-muted-foreground mb-6">
              Thank you, {form.name}! Our team will get back to you within 24 hours to discuss your custom cake.
            </p>
            <a href="/" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground hover:opacity-90 transition-opacity">
              Back to Home
            </a>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-2">Custom Cake Inquiry</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Tell us about your dream cake and we'll make it happen</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Simple inquiry form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Your Name *</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone *</label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tell us about your cake *</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                placeholder="Flavour, size, design ideas, date needed..."
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
            <button type="submit" className="w-full rounded-lg bg-accent py-3 font-semibold text-accent-foreground hover:opacity-90 transition-opacity">
              Send Inquiry
            </button>
          </form>

          {/* WhatsApp option */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-popover p-6 shadow-card text-center">
              <MessageCircle size={40} className="text-accent mx-auto mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2">Prefer WhatsApp?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Chat with us directly for a faster response. Share your ideas, reference photos, and we'll help you design the perfect cake.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 transition-colors"
              >
                Chat on WhatsApp <ArrowRight size={16} />
              </a>
            </div>

            <div className="rounded-xl border border-border bg-popover p-6 shadow-card">
              <h3 className="font-heading font-bold text-base mb-3">What we offer</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✨ Custom designs for any occasion</li>
                <li>🎨 Themed cakes, photo cakes & fondant art</li>
                <li>🍰 1 to 4+ tier wedding & celebration cakes</li>
                <li>🥛 Eggless </li>
                
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CustomCakePage;
