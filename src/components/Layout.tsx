import { ReactNode } from "react";
import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import CookieBar from "./CookieBar";

const Layout = ({ children, cartCount = 0 }: { children: ReactNode; cartCount?: number }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar cartCount={cartCount} />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <CookieBar />
    </div>
  );
};

export default Layout;
