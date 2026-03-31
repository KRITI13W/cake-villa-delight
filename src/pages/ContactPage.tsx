import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent! ✉️", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="container py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-2">Contact Us</h1>
          <p className="text-sm sm:text-base text-muted-foreground">We'd love to hear from you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Name *</label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message *</label>
              <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
            </div>
            <button type="submit" className="w-full rounded-lg bg-accent py-3 font-semibold text-accent-foreground hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>

          {/* Info */}
          <div className="space-y-5 sm:space-y-6">
            {[
              { icon: MapPin, title: "Address", text: "123 Baker Street, Sweet Lane, Mumbai 400001" },
              { icon: Phone, title: "Phone", text: "+91 98765 43210" },
              { icon: Mail, title: "Email", text: "hello@cakevilla.in" },
              { icon: Clock, title: "Opening Hours", text: "Monday – Sunday: 8:00 AM – 9:00 PM" },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/30">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1 text-sm sm:text-base">{title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}

            <div className="rounded-xl overflow-hidden border border-border shadow-card">
              <iframe
                title="Cake Villa location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.755!2d72.877655!3d19.076090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzM0LjAiTiA3MsKwNTInMzkuNiJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
