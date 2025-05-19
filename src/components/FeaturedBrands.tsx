
import React from "react";
import { Link } from "react-router-dom";

const brands = [
  { id: 1, name: "Bridgestone", logo: "https://i.imgur.com/YJUNZRW.png", path: "/brands/bridgestone" },
  { id: 2, name: "Michelin", logo: "https://images.unsplash.com/photo-1570477885232-ed50f68ef274", path: "/brands/michelin" },
  { id: 3, name: "Goodyear", logo: "https://i.imgur.com/HfSOeET.png", path: "/brands/goodyear" },
  { id: 4, name: "Dunlop", logo: "https://i.imgur.com/EC8Lm5n.png", path: "/brands/dunlop" },
  { id: 5, name: "Pirelli", logo: "https://i.imgur.com/GGKPE9s.png", path: "/brands/pirelli" },
  { id: 6, name: "Continental", logo: "https://i.imgur.com/QmlR6ns.png", path: "/brands/continental" }
];

const FeaturedBrands = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-tyreDarkGray">
          Top Tyre Brands
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We partner with the world's leading tyre manufacturers
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <Link 
              to={brand.path} 
              key={brand.id}
              className="flex flex-col items-center justify-center p-4 border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="h-16 flex items-center justify-center mb-2">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="text-sm text-gray-700 font-medium">{brand.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
