import { useState } from "react";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import { galleryImages } from "@/data/products";

const galleryCategories = ["All", "Cakes", "Pastries", "Events", "Custom Orders"];

const GalleryPage = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? galleryImages : galleryImages.filter((img) => img.category === active);

  return (
    <Layout>
      <section className="container py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-2">Gallery</h1>
          <p className="text-muted-foreground">A glimpse into our sweet creations</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === cat ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img) => (
            <div
              key={img.id}
              className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl shadow-card hover:shadow-soft transition-shadow"
              onClick={() => setLightbox(img.src)}
            >
              <img src={img.src} alt={img.alt} className="w-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-background hover:opacity-80" onClick={() => setLightbox(null)}>
            <X size={28} />
          </button>
          <img
            src={lightbox.replace("w=600", "w=1000").replace("h=400", "h=700").replace("h=500", "h=700").replace("h=600", "h=700")}
            alt="Gallery preview"
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default GalleryPage;
