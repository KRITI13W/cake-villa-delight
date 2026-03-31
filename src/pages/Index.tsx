import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Truck, ShieldCheck, Palette, Star, Copy, Check, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import CategoryTabs from "@/components/CategoryTabs";
import { products, categories, testimonials } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<string[]>([]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);
  const bestSellers = products.filter((p) => p.tags.includes("bestseller")).slice(0, 4);

  const addToCart = (product: { id: string; name: string }) => {
    setCart((prev) => [...prev, product.id]);
    toast({ title: `${product.name} added to cart!`, description: "View your cart to checkout." });
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({ title: "Sweet! You're subscribed 🎉", description: "You'll receive our latest offers and updates." });
      setEmail("");
    }
  };

  return (
    <Layout cartCount={cart.length}>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-4">
                Baked with <span className="italic text-accent">Love</span>,{" "}
                <br className="hidden md:block" />
                Served with Joy.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                Premium handcrafted cakes, pastries, and more — made fresh daily with the finest ingredients.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
                >
                  Explore Our Menu <ArrowRight size={18} />
                </Link>
                <Link
                  to="/custom-cake"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-accent px-6 py-3 font-semibold text-accent hover:bg-accent/10 transition-colors"
                >
                  Order a Custom Cake
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=500&fit=crop"
                alt="Premium chocolate cake"
                className="rounded-2xl shadow-soft w-full object-cover"
              />
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-popover p-3 shadow-card">
                <div className="flex items-center gap-2">
                  <Star size={16} className="fill-gold text-gold" />
                  <span className="text-sm font-bold">4.9</span>
                  <span className="text-xs text-muted-foreground">2000+ reviews</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Strip */}
      <section className="border-y border-border bg-popover">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, label: "Made Fresh Daily" },
              { icon: Palette, label: "Custom Designs" },
              { icon: Truck, label: "Doorstep Delivery" },
              { icon: ShieldCheck, label: "100% Hygienic" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/30">
                  <Icon size={22} className="text-accent" />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">Our Best Sellers</h2>
          <p className="text-muted-foreground">The most loved treats from our kitchen</p>
        </div>
        <div className="mb-6 flex justify-center">
          <CategoryTabs categories={categories} active={activeCategory} onChange={setActiveCategory} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(activeCategory === "All" ? bestSellers : filtered.slice(0, 4)).map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/menu" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
            View full menu <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Promo Banners */}
      <section className="bg-gradient-blush">
        <div className="container py-16">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { discount: "20%", title: "Custom Cake Orders", desc: "Get 20% off on your first custom cake order", code: "SWEET20", expiry: "Valid till Apr 30, 2026", link: "/custom-cake" },
              { discount: "₹200", title: "Free Delivery Deal", desc: "Flat ₹200 off on orders above ₹1500", code: "DELIVER200", expiry: "Valid till May 15, 2026", link: "/menu" },
            ].map((promo) => (
              <div key={promo.code} className="rounded-xl border border-border bg-popover p-6 shadow-card">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-2xl font-heading font-bold text-accent">{promo.discount} OFF</span>
                    <h3 className="text-lg font-heading font-semibold mt-1">{promo.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{promo.desc}</p>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <div className="flex items-center gap-2 rounded-lg border-2 border-dashed border-gold bg-gold/10 px-3 py-1.5">
                    <code className="text-sm font-bold text-gold-foreground">{promo.code}</code>
                  </div>
                  <button
                    onClick={() => copyCode(promo.code)}
                    className="flex items-center gap-1 rounded-md bg-muted px-3 py-1.5 text-xs font-medium hover:bg-primary/20 transition-colors"
                  >
                    {copiedCode === promo.code ? <><Check size={12} /> Copied!</> : <><Copy size={12} /> Copy code</>}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{promo.expiry}</span>
                  <Link to={promo.link} className="text-sm font-semibold text-accent hover:underline flex items-center gap-1">
                    Shop now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="container py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1556217477-d325251ece38?w=500&h=400&fit=crop"
            alt="Baker at work"
            className="rounded-2xl shadow-card w-full object-cover"
            loading="lazy"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded in 2018, Cake Villa started as a small home kitchen with a big dream — to bring joy through
              every bite. Today, we're one of Mumbai's most loved bakeries, known for our handcrafted cakes, fresh
              pastries, and warm hospitality.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Every recipe is crafted with premium ingredients, no preservatives, and a whole lot of love.
              From birthdays to weddings, we make every celebration sweeter.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-blush">
        <div className="container py-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-xl border border-border bg-popover p-6 shadow-card">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} className={j < t.rating ? "fill-gold text-gold" : "text-muted"} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
                <p className="font-heading font-semibold text-sm">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container py-16">
        <div className="mx-auto max-w-xl text-center rounded-2xl bg-primary/20 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Stay in the Loop!</h2>
          <p className="text-muted-foreground mb-6">Get sweet updates, new flavours, and exclusive offers straight to your inbox.</p>
          <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Get sweet updates 🍰
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
