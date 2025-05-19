
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-tyreBlue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to find your perfect tyres?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-100">
          Browse our extensive collection of quality tyres from top brands at competitive prices.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/shop">
            <Button className="bg-tyreOrange hover:bg-tyreOrange/90 text-white px-8 py-3 text-lg">
              Shop Now
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-tyreBlue px-8 py-3 text-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
