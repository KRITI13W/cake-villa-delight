import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const cakeSizes = ["6 inch (serves 6-8)", "8 inch (serves 10-12)", "10 inch (serves 14-16)", "12 inch (serves 18-20)"];
const flavours = ["Vanilla", "Chocolate", "Red Velvet", "Butterscotch", "Strawberry", "Mango", "Black Forest", "Coffee"];

const CustomCakePage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    size: "",
    flavour: "",
    design: "",
    tiers: "1",
    instructions: "",
  });
  const [date, setDate] = useState<Date>();
  const [submitted, setSubmitted] = useState(false);

  const update = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Cake request sent! 🎂", description: "We'll contact you within 24 hours to confirm your order." });
  };

  if (submitted) {
    return (
      <Layout>
        <section className="container py-24 text-center">
          <div className="mx-auto max-w-md">
            <div className="text-6xl mb-4">🎂</div>
            <h1 className="text-3xl font-heading font-bold mb-4">Your Cake Request is In!</h1>
            <p className="text-muted-foreground mb-6">
              Thank you, {form.name}! Our team will review your custom cake request and get back to you within 24 hours.
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
      <section className="container py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-2">Order a Custom Cake</h1>
          <p className="text-muted-foreground">Tell us your dream cake and we'll make it come true</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name *</label>
                <input required value={form.name} onChange={(e) => update("name", e.target.value)} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone *</label>
                <input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Cake Size *</label>
                <select required value={form.size} onChange={(e) => update("size", e.target.value)} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select size</option>
                  {cakeSizes.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Flavour *</label>
                <select required value={form.flavour} onChange={(e) => update("flavour", e.target.value)} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select flavour</option>
                  {flavours.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Number of Tiers</label>
                <select value={form.tiers} onChange={(e) => update("tiers", e.target.value)} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  {["1", "2", "3", "4"].map((t) => <option key={t} value={t}>{t} {t === "1" ? "tier" : "tiers"}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Delivery Date *</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-left flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon size={16} />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date()}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Design Description *</label>
              <textarea required value={form.design} onChange={(e) => update("design", e.target.value)} rows={3} placeholder="Describe your dream cake design..." className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Special Instructions</label>
              <textarea value={form.instructions} onChange={(e) => update("instructions", e.target.value)} rows={2} placeholder="Allergies, dietary preferences, message on cake..." className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
            </div>

            <button type="submit" className="w-full rounded-lg bg-accent py-3 font-semibold text-accent-foreground hover:opacity-90 transition-opacity">
              Send my cake request 🎂
            </button>
          </form>

          {/* Live Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-border bg-popover p-6 shadow-card">
              <h3 className="font-heading font-bold text-lg mb-4">Order Summary</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between"><dt className="text-muted-foreground">Name</dt><dd className="font-medium">{form.name || "—"}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Size</dt><dd className="font-medium">{form.size || "—"}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Flavour</dt><dd className="font-medium">{form.flavour || "—"}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Tiers</dt><dd className="font-medium">{form.tiers}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Delivery</dt><dd className="font-medium">{date ? format(date, "dd MMM yyyy") : "—"}</dd></div>
                {form.design && (
                  <div className="pt-2 border-t border-border">
                    <dt className="text-muted-foreground mb-1">Design</dt>
                    <dd className="text-xs leading-relaxed">{form.design}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CustomCakePage;
