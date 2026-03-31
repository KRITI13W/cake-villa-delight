import { Star, MessageCircle, Truck } from "lucide-react";
import type { Product } from "@/data/products";

const tagColors: Record<string, string> = {
  bestseller: "bg-gold text-gold-foreground",
  "vegan-option": "bg-green-100 text-green-800",
  "gluten-free": "bg-blue-100 text-blue-800",
  seasonal: "bg-orange-100 text-orange-800",
};

const ProductCard = ({ product }: { product: Product }) => {
  const whatsappMessage = encodeURIComponent(`Hi! I'm interested in "${product.name}" (₹${product.price}). Can you share more details?`);
  const whatsappLink = `https://wa.me/919876543210?text=${whatsappMessage}`;

  return (
    <div className="group flex flex-col rounded-xl border border-border bg-popover shadow-card overflow-hidden transition-all hover:shadow-soft h-full">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {product.tags.length > 0 && (
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {product.tags.map((tag) => (
              <span key={tag} className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${tagColors[tag] || "bg-muted text-muted-foreground"}`}>
                {tag.replace("-", " ")}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-3 sm:p-4 gap-2">
        <h3 className="font-heading font-semibold text-sm sm:text-base leading-tight">{product.name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2 flex-1">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star size={14} className="fill-gold text-gold" />
          <span className="text-xs font-medium">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Delivery */}
        {product.deliveryInfo && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Truck size={12} />
            <span>{product.deliveryInfo}</span>
          </div>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-2 mt-auto">
          <span className="text-base sm:text-lg font-heading font-bold">₹{product.price}</span>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={14} />
            Inquire
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
