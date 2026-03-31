import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { products } from "@/data/products";
import { Link } from "react-router-dom";

const SearchBar = ({ onClose }: { onClose: () => void }) => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    ).slice(0, 5);
  }, [query]);

  return (
    <div className="relative max-w-xl mx-auto">
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search cakes, pastries, burgers..."
          className="w-full pl-10 pr-10 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button onClick={onClose} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
          <X size={18} />
        </button>
      </div>
      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-lg border border-border bg-popover shadow-card z-50">
          {results.map((product) => (
            <Link
              key={product.id}
              to="/menu"
              onClick={onClose}
              className="flex items-center gap-3 p-3 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 rounded-md object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{product.name}</p>
                <p className="text-xs text-muted-foreground">{product.category} · ₹{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
      {query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-lg border border-border bg-popover p-4 text-center text-sm text-muted-foreground shadow-card">
          No products found for "{query}"
        </div>
      )}
    </div>
  );
};

export default SearchBar;
