import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import SearchBar from "./SearchBar";

const navLinks = [
  { label: "Menu", path: "/menu" },
  { label: "About", path: "/about" },
  { label: "Custom Cake", path: "/custom-cake" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-14 sm:h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-heading font-bold text-foreground">
            Cake <span className="text-accent">Villa</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === link.path
                  ? "text-accent after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-gold after:rounded-full"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button
            className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <div className="border-t border-border bg-background p-4">
          <SearchBar onClose={() => setSearchOpen(false)} />
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background animate-slide-in">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium py-2 ${
                  location.pathname === link.path ? "text-accent" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
