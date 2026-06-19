// src/App.jsx
import React from "react";
import Hero from "./pages/Hero";
import Details from "./pages/Details";
import Outcomes from "./pages/Outcomes";
import WhyChoose from "./pages/WhyChoose";
import FAQ from "./pages/FAQ";
import RegisterForm from "./pages/RegisterForm";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Hero />
      <Details />
      <Outcomes />
      <WhyChoose />
      <FAQ />
      <RegisterForm />
      <Footer />
    </>
  );
}

export default App;
