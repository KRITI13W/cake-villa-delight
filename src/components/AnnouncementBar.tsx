import { useState, useEffect } from "react";

const promos = [
  "🎂 Handcrafted cakes for every celebration!",
  "🍰 Custom cake designs — message us on WhatsApp",
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
    <div className="bg-primary py-1.5 sm:py-2 text-center text-xs sm:text-sm font-medium text-primary-foreground">
      <p className="animate-fade-in px-4" key={index}>{promos[index]}</p>
    </div>
  );
};

export default AnnouncementBar;
