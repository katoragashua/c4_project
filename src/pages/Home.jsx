import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import Boost from "../components/Boost";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <Boost />
      <Footer />
    </div>
  );
};

export default Home;
