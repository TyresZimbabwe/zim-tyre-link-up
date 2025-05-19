
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ShoppingCart, Filter, SlidersHorizontal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Sample categories and products for the shop page
const categories = [
  { id: 1, name: "Passenger Car Tyres", image: "https://images.unsplash.com/photo-1577324216086-515f6e8de7c0", slug: "passenger-car" },
  { id: 2, name: "SUV & 4x4 Tyres", image: "https://images.unsplash.com/photo-1600039641872-afc32af5a579", slug: "suv-4x4" },
  { id: 3, name: "Light Truck Tyres", image: "https://images.unsplash.com/photo-1644797558951-0cb381d75a18", slug: "light-truck" },
  { id: 4, name: "Heavy Duty Truck Tyres", image: "https://images.unsplash.com/photo-1600039644438-302f31262ae6", slug: "truck" },
  { id: 5, name: "Agriculture Tyres", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", slug: "agriculture" },
  { id: 6, name: "Industrial Tyres", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", slug: "industrial" },
];

const brands = [
  "Bridgestone", "Michelin", "Goodyear", "Dunlop", "Pirelli", "Continental", "Firestone", "Yokohama"
];

const vehicleTypes = [
  "Sedan", "Hatchback", "SUV", "Pick-up", "Minibus", "Truck", "Tractor", "Industrial"
];

const sizeOptions = [
  "195/65R15", "205/55R16", "215/65R16", "225/45R17", "235/55R18", "265/70R16", "31x10.5R15", "7.50R16"
];

const featuredProducts = [
  { 
    id: 1, 
    name: "Bridgestone Turanza T005", 
    price: 85, 
    image: "https://images.unsplash.com/photo-1644797558951-0cb381d75a18?w=500&auto=format",
    size: "205/55R16", 
    brand: "Bridgestone", 
    rating: 4.7,
    category: "Passenger Car Tyres"
  },
  { 
    id: 2, 
    name: "Michelin Primacy 4", 
    price: 92, 
    image: "https://images.unsplash.com/photo-1600039644438-302f31262ae6?w=500&auto=format",
    size: "215/65R16", 
    brand: "Michelin", 
    rating: 4.8,
    category: "SUV & 4x4 Tyres"
  },
  { 
    id: 3, 
    name: "Dunlop Grandtrek AT3", 
    price: 120, 
    image: "https://images.unsplash.com/photo-1577324216086-515f6e8de7c0?w=500&auto=format",
    size: "265/70R16", 
    brand: "Dunlop", 
    rating: 4.9,
    category: "SUV & 4x4 Tyres"
  },
  { 
    id: 4, 
    name: "Continental UltraContact", 
    price: 78, 
    image: "https://images.unsplash.com/photo-1600039641872-afc32af5a579?w=500&auto=format",
    size: "195/65R15", 
    brand: "Continental", 
    rating: 4.6,
    category: "Passenger Car Tyres"
  },
  { 
    id: 5, 
    name: "Firestone Destination", 
    price: 135, 
    image: "https://images.unsplash.com/photo-1577324216086-515f6e8de7c0?w=500&auto=format",
    size: "235/55R18", 
    brand: "Firestone", 
    rating: 4.5,
    category: "SUV & 4x4 Tyres"
  },
  { 
    id: 6, 
    name: "Goodyear Wrangler", 
    price: 115, 
    image: "https://images.unsplash.com/photo-1600039644438-302f31262ae6?w=500&auto=format",
    size: "265/70R16", 
    brand: "Goodyear", 
    rating: 4.8,
    category: "SUV & 4x4 Tyres"
  },
  { 
    id: 7, 
    name: "Pirelli P Zero", 
    price: 150, 
    image: "https://images.unsplash.com/photo-1577324216086-515f6e8de7c0?w=500&auto=format",
    size: "225/45R17", 
    brand: "Pirelli", 
    rating: 4.9,
    category: "Passenger Car Tyres"
  },
  { 
    id: 8, 
    name: "Yokohama Geolandar", 
    price: 105, 
    image: "https://images.unsplash.com/photo-1600039641872-afc32af5a579?w=500&auto=format",
    size: "265/70R16", 
    brand: "Yokohama", 
    rating: 4.7,
    category: "SUV & 4x4 Tyres"
  },
];

const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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
    <PageLayout 
      title="Shop Tyres" 
      breadcrumbItems={[{ name: "Shop", path: "/shop", current: true }]}
      metaTitle="Shop Quality Tyres Online in Zimbabwe | All Brands & Sizes"
      metaDescription="Browse our extensive range of tyres for all vehicle types in Zimbabwe. Find passenger car, SUV, truck & agricultural tyres at competitive prices with nationwide delivery."
    >
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          Tyres Zimbabwe offers the widest selection of quality tyres for all vehicle types, from everyday passenger cars to heavy-duty trucks and specialized agricultural equipment. All products come with warranty protection and are sourced from trusted suppliers across Zimbabwe and international manufacturers.
        </p>
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <Input
            placeholder="Search tyres by brand, size or vehicle..."
            className="max-w-xs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button 
            variant="outline" 
            className="flex items-center"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Filter options */}
        {showFilters && (
          <div className="grid md:grid-cols-4 gap-6 p-4 bg-gray-50 rounded-lg mb-6">
            <div>
              <h3 className="font-medium mb-2">Tyre Brand</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {brands.map((brand) => (
                  <div className="flex items-center space-x-2" key={brand}>
                    <Checkbox id={`brand-${brand}`} />
                    <label htmlFor={`brand-${brand}`} className="text-sm">{brand}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Vehicle Type</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {vehicleTypes.map((type) => (
                  <div className="flex items-center space-x-2" key={type}>
                    <Checkbox id={`type-${type}`} />
                    <label htmlFor={`type-${type}`} className="text-sm">{type}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Tyre Size</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {sizeOptions.map((size) => (
                  <div className="flex items-center space-x-2" key={size}>
                    <Checkbox id={`size-${size}`} />
                    <label htmlFor={`size-${size}`} className="text-sm">{size}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="flex items-center gap-2">
                <Input placeholder="Min $" type="number" className="w-24" />
                <span>-</span>
                <Input placeholder="Max $" type="number" className="w-24" />
              </div>
              <Button className="mt-4 bg-tyreBlue hover:bg-tyreBlue/90 w-full">
                Apply Filters
              </Button>
            </div>
          </div>
        )}
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-tyreBlue">Tyre Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {categories.map((category) => (
          <Link to={`/shop/${category.slug}`} key={category.id}>
            <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
              <div className="h-40 relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white font-bold text-xl p-4">{category.name}</h3>
                </div>
              </div>
              <CardContent className="p-4 text-center">
                <Button className="bg-tyreBlue hover:bg-tyreBlue/90">Browse {category.name}</Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-tyreBlue">Best Selling Tyres</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select className="text-sm border rounded px-2 py-1">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Customer Rating</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {featuredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
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
                    <p className="text-xs text-gray-500">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                    <p className="text-sm text-gray-500">{product.size}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-xl font-bold text-tyreBlue">${product.price}</p>
                  <Button 
                    variant="outline"
                    size="sm" 
                    onClick={(e) => handleAddToCart(product, e)}
                    className="text-tyreBlue border-tyreBlue hover:bg-tyreBlue hover:text-white"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="bg-tyreLightGray p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-tyreBlue">Need Help Finding the Right Tyres?</h2>
        <p className="mb-4 text-gray-700">
          Not sure which tyres are right for your vehicle? Use our tyre finder tool to get personalized recommendations based on your vehicle make, model, and driving conditions in Zimbabwe.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/find-size">
            <Button className="bg-tyreBlue hover:bg-tyreBlue/90">
              <SlidersHorizontal className="mr-2 h-4 w-4" /> Find My Tyre Size
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline">Contact Our Experts</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default Shop;
