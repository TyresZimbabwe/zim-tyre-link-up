
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-tyreBlue text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-tyreBlue/90 to-tyreBlue/70">
        <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1675810094937-f5a3755e10fd?q=80&w=1920&auto=format')] bg-cover bg-center mix-blend-overlay opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Zimbabwe's Premier Tyre Marketplace
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Find the perfect tyres for your vehicle at competitive prices. Connect with trusted sellers across Zimbabwe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/shop">
              <Button className="bg-tyreOrange hover:bg-tyreOrange/90 text-white px-6 py-3 text-lg">
                Shop All Tyres
              </Button>
            </Link>
            <Link to="/find-size">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-tyreBlue px-6 py-3 text-lg">
                Find My Size
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
