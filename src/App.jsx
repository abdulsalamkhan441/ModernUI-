import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import InterfaceFAQ from "./components/interface-faqs";
import GetAccessSection from "./components/footer";

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <InterfaceFAQ/>
      <GetAccessSection/>
    </div>
  );
}