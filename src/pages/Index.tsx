
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedBrands from "@/components/FeaturedBrands";
import FindTyreForm from "@/components/FindTyreForm";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import LatestBlog from "@/components/LatestBlog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedCategories />
        <FindTyreForm />
        <FeaturedProducts />
        <FeaturedBrands />
        <Testimonials />
        <LatestBlog />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
