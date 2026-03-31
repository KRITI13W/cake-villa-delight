import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const MAX_VISIBLE = 5;

const CategoryTabs = ({
  categories,
  active,
  onChange,
}: {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const visible = categories.slice(0, MAX_VISIBLE);
  const overflow = categories.slice(MAX_VISIBLE);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {visible.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
            active === cat
              ? "bg-accent text-accent-foreground shadow-sm"
              : "bg-muted text-muted-foreground hover:bg-primary/30"
          }`}
        >
          {cat}
        </button>
      ))}
      {overflow.length > 0 && (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all ${
              overflow.includes(active)
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground hover:bg-primary/30"
            }`}
          >
            {overflow.includes(active) ? active : "More"}
            <ChevronDown size={14} />
          </button>
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-1 min-w-[140px] rounded-lg border border-border bg-popover shadow-card z-20">
              {overflow.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    onChange(cat);
                    setDropdownOpen(false);
                  }}
                  className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-muted ${
                    active === cat ? "font-semibold text-accent" : ""
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryTabs;
