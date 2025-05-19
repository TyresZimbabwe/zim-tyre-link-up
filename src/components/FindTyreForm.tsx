import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const vehicles = [
  "Sedan",
  "Hatchback",
  "SUV",
  "Pickup",
  "Van",
  "Truck",
  "Minibus",
];

const brands = [
  "Toyota",
  "Mazda",
  "Honda",
  "Nissan",
  "Mercedes",
  "BMW",
  "Audi",
  "Volkswagen",
  "Ford",
  "Isuzu",
];

const years = Array.from({ length: 23 }, (_, i) => 2024 - i);

const FindTyreForm = () => {
  const [vehicleType, setVehicleType] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!vehicleType || !brand || !model || !year) {
      toast({
        title: "Please complete all fields",
        description: "All fields are required to find your tyres",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Finding tyres",
      description: `Searching for tyres for your ${year} ${brand} ${model}`,
    });
    
    // In a real app, this would redirect to results page
  };

  return (
    <section className="py-12 bg-tyreLightGray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-tyreBlue">Find the Perfect Tyres for Your Vehicle</h2>
                <p className="text-gray-600">Enter your vehicle details to see compatible tyres</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-1">
                      Vehicle Type
                    </label>
                    <select
                      id="vehicleType"
                      value={vehicleType}
                      onChange={(e) => setVehicleType(e.target.value)}
                      className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-tyreBlue"
                      required
                    >
                      <option value="">Select vehicle type</option>
                      {vehicles.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                      Brand
                    </label>
                    <select
                      id="brand"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-tyreBlue"
                      required
                    >
                      <option value="">Select brand</option>
                      {brands.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                      Model
                    </label>
                    <input
                      type="text"
                      id="model"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-tyreBlue"
                      placeholder="e.g. Hilux, Corolla"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                      Year
                    </label>
                    <select
                      id="year"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-tyreBlue"
                      required
                    >
                      <option value="">Select year</option>
                      {years.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-tyreOrange hover:bg-tyreOrange/90">
                  Find My Tyres
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FindTyreForm;
