import { useState, useEffect } from "react";

const promos = [
  "🎂 Free delivery on orders above ₹999!",
  "🍰 20% OFF on custom cakes — Use code SWEET20",
  "🎉 New: Seasonal Mango specials are here!",
];

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % promos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary py-2 text-center text-sm font-medium text-primary-foreground">
      <p className="animate-fade-in" key={index}>{promos[index]}</p>
    </div>
  );
};

export default AnnouncementBar;
