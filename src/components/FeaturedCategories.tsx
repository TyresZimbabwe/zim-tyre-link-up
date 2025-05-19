
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Passenger Tyres",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&auto=format",
    description: "For sedans, hatchbacks, and family cars",
    path: "/shop?category=passenger",
  },
  {
    id: 2,
    name: "SUV Tyres",
    image: "https://images.unsplash.com/photo-1669224077452-eea358bf65d3?w=500&auto=format",
    description: "For sports utility vehicles and crossovers",
    path: "/shop?category=suv",
  },
  {
    id: 3,
    name: "4x4 & Off-Road",
    image: "https://images.unsplash.com/photo-1603831328438-64d7129c5d8d?w=500&auto=format",
    description: "For all-terrain and off-road adventures",
    path: "/shop?category=off-road",
  },
  {
    id: 4,
    name: "Commercial Tyres",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&auto=format",
    description: "For trucks, vans, and commercial vehicles",
    path: "/shop?category=commercial",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-12 bg-tyreLightGray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-tyreDarkGray">
          Browse Tyres by Category
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={category.path} key={category.id}>
              <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-tyreBlue">{category.name}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
