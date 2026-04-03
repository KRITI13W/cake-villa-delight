import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import CategoryTabs from "@/components/CategoryTabs";
import { products, categories, occasions } from "@/data/products";
import { Download, ArrowUpDown, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

type SortOption = "default" | "price-low" | "price-high" | "rating";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeOccasion, setActiveOccasion] = useState("All Occasions");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let items = products;
    if (activeCategory !== "All") items = items.filter((p) => p.category === activeCategory);
    if (activeOccasion !== "All Occasions") items = items.filter((p) => p.occasions?.includes(activeOccasion));

    switch (sortBy) {
      case "price-low": return [...items].sort((a, b) => a.price - b.price);
      case "price-high": return [...items].sort((a, b) => b.price - a.price);
      case "rating": return [...items].sort((a, b) => b.rating - a.rating);
      default: return items;
    }
  }, [activeCategory, activeOccasion, sortBy]);

  const handleDownloadMenu = () => {
    // Generate a simple text-based menu for download
    const menuText = categories
      .filter((c) => c !== "All")
      .map((cat) => {
        const catProducts = products.filter((p) => p.category === cat);
        if (catProducts.length === 0) return "";
        const items = catProducts.map((p) => `  ${p.name} — ₹${p.price}\n    ${p.description}`).join("\n\n");
        return `═══ ${cat.toUpperCase()} ═══\n\n${items}`;
      })
      .filter(Boolean)
      .join("\n\n\n");

    const fullMenu = `╔══════════════════════════════╗\n║       CAKE VILLA MENU        ║\n╚══════════════════════════════╝\n\n${menuText}\n\n---\nCake Villa | hello@cakevilla.in | +91 98765 43210\nFSSAI Certified | License No: 12345678901234`;

    const blob = new Blob([fullMenu], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CakeVilla-Menu.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Layout>
      <section className="container py-8 sm:py-12">
        {/* Header + Download */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-2">Our Menu</h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-4">
            Freshly made, lovingly served — explore our full range
          </p>
          <Button onClick={handleDownloadMenu} variant="outline" className="gap-2">
            <Download size={16} />
            Download Menu
          </Button>
        </div>

        {/* Category Tabs */}
        <div className="mb-4 sm:mb-6 flex justify-center">
          <CategoryTabs categories={categories} active={activeCategory} onChange={setActiveCategory} />
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          <div className="flex items-center gap-2">
            <ArrowUpDown size={14} className="text-muted-foreground" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="text-sm bg-transparent border border-border rounded-lg px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-ring"
            >
              <option value="default">Sort by</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Occasion Filter (collapsible) */}
        {showFilters && (
          <div className="mb-6 p-4 rounded-xl border border-border bg-popover animate-slide-in">
            <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">By Occasion</p>
            <div className="flex flex-wrap gap-2">
              {occasions.map((occ) => (
                <button
                  key={occ}
                  onClick={() => setActiveOccasion(occ)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors border ${
                    activeOccasion === occ
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-background text-foreground border-border hover:border-accent/50"
                  }`}
                >
                  {occ}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No items match your filters. Try adjusting them!</p>
        )}
      </section>
    </Layout>
  );
};

export default MenuPage;
