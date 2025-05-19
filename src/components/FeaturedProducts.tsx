
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/toast";

// Sample product data
const products = [
  {
    id: 1,
    name: "Bridgestone Turanza T005",
    price: 85,
    image: "https://images.unsplash.com/photo-1644797558951-0cb381d75a18?w=500&auto=format",
    size: "205/55R16",
    brand: "Bridgestone",
    rating: 4.7,
    path: "/product/1",
  },
  {
    id: 2,
    name: "Michelin Primacy 4",
    price: 92,
    image: "https://images.unsplash.com/photo-1600039644438-302f31262ae6?w=500&auto=format",
    size: "215/65R16",
    brand: "Michelin",
    rating: 4.8,
    path: "/product/2",
  },
  {
    id: 3,
    name: "Pirelli P Zero",
    price: 120,
    image: "https://images.unsplash.com/photo-1577324216086-515f6e8de7c0?w=500&auto=format",
    size: "225/45R17",
    brand: "Pirelli",
    rating: 4.9,
    path: "/product/3",
  },
  {
    id: 4,
    name: "Continental UltraContact UC6",
    price: 78,
    image: "https://images.unsplash.com/photo-1600039641872-afc32af5a579?w=500&auto=format",
    size: "195/65R15",
    brand: "Continental",
    rating: 4.6,
    path: "/product/4",
  },
];

const FeaturedProducts = () => {
  const { toast } = useToast();

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Added to cart",
      description: `${product.name} added to your cart`,
    });
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-tyreDarkGray">
            Featured Tyres
          </h2>
          <Link 
            to="/shop" 
            className="text-tyreBlue hover:text-tyreOrange font-medium flex items-center"
          >
            View all 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link to={product.path} key={product.id}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-tyreOrange text-white text-xs font-bold px-2 py-1 rounded-full">
                    Best Seller
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-tyreBlue font-medium">{product.brand}</p>
                      <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                      <p className="text-sm text-gray-500">{product.size}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xl font-bold text-tyreBlue">${product.price.toFixed(2)}</p>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button 
                    onClick={(e) => handleAddToCart(product, e)} 
                    className="w-full bg-tyreBlue hover:bg-tyreBlue/90"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
