import React from "react";
import Hero from "./Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
import Solutions from "./Solutions/Solutions";
import Products from "./Products/Products";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Solutions />
      <Products />
    </>
  );
}
