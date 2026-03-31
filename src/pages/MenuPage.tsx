import { useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import CategoryTabs from "@/components/CategoryTabs";
import { products, categories } from "@/data/products";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <section className="container py-8 sm:py-12">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-2">Our Menu</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Freshly made, lovingly served — explore our full range</p>
        </div>

        <div className="mb-6 sm:mb-8 flex justify-center">
          <CategoryTabs categories={categories} active={activeCategory} onChange={setActiveCategory} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No items in this category yet. Check back soon!</p>
        )}
      </section>
    </Layout>
  );
};

export default MenuPage;
