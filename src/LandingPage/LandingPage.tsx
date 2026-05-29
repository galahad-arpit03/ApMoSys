import React from "react";
import Hero from "./Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
import Solutions from "./Solutions/Solutions";
import Products from "./Products/Products";

export default function LandingPage() {
  return (
    <div className="relative">
      <div className="sticky top-[64px] -z-10">
        <Hero />
      </div>
      <div className="relative z-10 bg-[#121212]">
        <AboutUs />
        <Services />
        <Solutions />
        <Products />
      </div>
    </div>
  );
}
