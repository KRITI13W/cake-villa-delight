import Layout from "@/components/Layout";
import { Shield, Phone, Mail, MapPin, Clock, Award, Users, Heart } from "lucide-react";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="container py-10 sm:py-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
          About <span className="text-accent">Cake Villa</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          A passion for baking, a commitment to quality. Since 2015, we've been crafting
          delightful cakes, pastries, and savoury treats for every occasion — using only
          the finest ingredients and time-honoured techniques.
        </p>
      </section>

      {/* Story */}
      <section className="bg-popover border-y border-border">
        <div className="container py-10 sm:py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
              What started as a small home kitchen in 2015 has grown into one of the city's
              most loved bakeries. Founded by Chef Ananya, Cake Villa was born from a simple
              belief — that every celebration deserves a cake made with love.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Today, we serve hundreds of happy customers each week, from custom wedding cakes
              to our signature butter croissants. Every item leaves our kitchen with the same
              care and attention as that very first cake.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, label: "8+ Years", sub: "of baking excellence" },
              { icon: Users, label: "10,000+", sub: "happy customers" },
              { icon: Heart, label: "500+", sub: "custom cake designs" },
              { icon: Clock, label: "Fresh Daily", sub: "baked every morning" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-background p-4 text-center">
                <stat.icon size={24} className="mx-auto mb-2 text-accent" />
                <p className="font-heading font-bold text-lg">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FSSAI Certified */}
      <section className="container py-10 sm:py-14">
        <div className="rounded-2xl border-2 border-accent/30 bg-accent/5 p-6 sm:p-10 text-center max-w-3xl mx-auto">
          <Shield size={48} className="mx-auto mb-4 text-accent" />
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3">FSSAI Certified</h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
            Cake Villa is proudly certified by the Food Safety and Standards Authority of India (FSSAI).
            We adhere to the highest standards of food safety, hygiene, and quality in everything we make.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
            <Shield size={16} />
            FSSAI License No: 12345678901234
          </div>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-left">
            {[
              { title: "100% Safe Ingredients", desc: "All ingredients sourced from FSSAI-approved suppliers" },
              { title: "Hygiene First", desc: "Regular audits and strict kitchen hygiene protocols" },
              { title: "Quality Tested", desc: "Every batch quality-checked before serving" },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-popover border border-border p-4">
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="bg-popover border-y border-border">
        <div className="container py-10 sm:py-14">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8">Get in Touch</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: MapPin, label: "Visit Us", value: "123 Baker Street, MG Road, Bangalore 560001" },
              { icon: Phone, label: "Call Us", value: "+91 98765 43210", href: "tel:+919876543210" },
              { icon: Mail, label: "Email Us", value: "hello@cakevilla.in", href: "mailto:hello@cakevilla.in" },
              { icon: Clock, label: "Hours", value: "Mon–Sat: 9 AM – 9 PM\nSun: 10 AM – 6 PM" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-background p-5 text-center">
                <item.icon size={24} className="mx-auto mb-3 text-accent" />
                <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
                {item.href ? (
                  <a href={item.href} className="text-xs text-accent hover:underline break-all">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-xs text-muted-foreground whitespace-pre-line">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
