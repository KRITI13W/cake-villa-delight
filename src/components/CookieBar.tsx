import { useState } from "react";

const CookieBar = () => {
  const [visible, setVisible] = useState(() => !localStorage.getItem("cookie-accepted"));

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background px-4 py-3">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <p className="text-muted-foreground">
          We use cookies to enhance your experience. By continuing, you agree to our cookie policy.
        </p>
        <button
          onClick={() => {
            localStorage.setItem("cookie-accepted", "true");
            setVisible(false);
          }}
          className="shrink-0 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default CookieBar;
