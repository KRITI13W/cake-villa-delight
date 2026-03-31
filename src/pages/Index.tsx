import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Truck, ShieldCheck, Palette, Star, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import CategoryTabs from "@/components/CategoryTabs";
import { products, categories, testimonials } from "@/data/products";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");

  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);
  const bestSellers = products.filter((p) => p.tags.includes("bestseller")).slice(0, 4);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setEmail("");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-10 sm:py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-3 sm:mb-4">
                Baked with <span className="italic text-accent">Love</span>,{" "}
                <br className="hidden md:block" />
                Served with Joy.
              </h1>
              <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-md">
                Premium handcrafted cakes, pastries, and more — made fresh daily with the finest ingredients.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 sm:px-6 py-3 font-semibold text-accent-foreground hover:opacity-90 transition-opacity text-sm sm:text-base"
                >
                  Explore Our Menu <ArrowRight size={18} />
                </Link>
                <Link
                  to="/custom-cake"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-accent px-5 sm:px-6 py-3 font-semibold text-accent hover:bg-accent/10 transition-colors text-sm sm:text-base"
                >
                  Inquire About Custom Cake
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
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-popover p-3 shadow-card hidden sm:block">
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
        <div className="container py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Sparkles, label: "Made Fresh Daily" },
              { icon: Palette, label: "Custom Designs" },
              { icon: Truck, label: "Doorstep Delivery" },
              { icon: ShieldCheck, label: "100% Hygienic" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary/30">
                  <Icon size={20} className="text-accent" />
                </div>
                <span className="text-xs sm:text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container py-10 sm:py-16">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-2">Our Best Sellers</h2>
          <p className="text-sm sm:text-base text-muted-foreground">The most loved treats from our kitchen</p>
        </div>
        <div className="mb-6 flex justify-center">
          <CategoryTabs categories={categories} active={activeCategory} onChange={setActiveCategory} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {(activeCategory === "All" ? bestSellers : filtered.slice(0, 4)).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-6 sm:mt-8 text-center">
          <Link to="/menu" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline text-sm sm:text-base">
            View full menu <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="container py-10 sm:py-16">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1556217477-d325251ece38?w=500&h=400&fit=crop"
            alt="Baker at work"
            className="rounded-2xl shadow-card w-full object-cover"
            loading="lazy"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 sm:mb-4">Our Story</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              Founded in 2018, Cake Villa started as a small home kitchen with a big dream — to bring joy through
              every bite. Today, we're one of Mumbai's most loved bakeries, known for our handcrafted cakes, fresh
              pastries, and warm hospitality.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
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
        <div className="container py-10 sm:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-center mb-8 sm:mb-10">What Our Customers Say</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-xl border border-border bg-popover p-4 sm:p-6 shadow-card">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className={j < t.rating ? "fill-gold text-gold" : "text-muted"} />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">"{t.text}"</p>
                <p className="font-heading font-semibold text-sm">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container py-10 sm:py-16">
        <div className="mx-auto max-w-xl text-center rounded-2xl bg-primary/20 p-6 sm:p-8 md:p-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-2">Stay in the Loop!</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Get sweet updates, new flavours, and exclusive offers straight to your inbox.</p>
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
              className="rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground hover:opacity-90 transition-opacity whitespace-nowrap text-sm sm:text-base"
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
