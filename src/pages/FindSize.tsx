
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Sample vehicle makes and models
const vehicleMakes = [
  "Toyota", "Honda", "Mazda", "Nissan", "Mercedes-Benz", "BMW", 
  "Volkswagen", "Ford", "Hyundai", "Isuzu", "Kia", "Mitsubishi"
];

// Sample years
const years = Array.from({ length: 25 }, (_, i) => 2025 - i);

// Sample tyre size results
const sampleTyreRecommendations = [
  { size: "195/65R15", type: "Standard", description: "Original equipment size" },
  { size: "205/60R15", type: "Alternative", description: "Slightly wider for better stability" },
  { size: "195/60R16", type: "Upgrade", description: "Larger wheel diameter for improved handling" }
];

const FindSize = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (make && model && year) {
      setShowResults(true);
      toast({
        title: "Vehicle identified!",
        description: "We've found tyre recommendations for your vehicle.",
      });
    } else {
      toast({
        title: "Please complete all fields",
        description: "Make, model and year are required to find your tyre size.",
        variant: "destructive",
      });
    }
  };

  return (
    <PageLayout 
      title="Find My Tyre Size" 
      breadcrumbItems={[{ name: "Find My Size", path: "/find-size", current: true }]}
      metaTitle="Find the Right Tyre Size for Your Vehicle in Zimbabwe | Easy Tyre Finder"
      metaDescription="Use our tyre size finder to discover the perfect tyres for your car, SUV or truck in Zimbabwe. Enter your vehicle details and get instant size recommendations."
    >
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          Not sure which tyre size fits your vehicle? Our tyre finder tool helps you identify the perfect fit for your specific make and model. Simply enter your vehicle details below to get started.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4 text-tyreBlue">Vehicle Lookup</h2>
            <form onSubmit={handleSearch}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">
                    Make
                  </label>
                  <Select value={make} onValueChange={setMake}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select vehicle make" />
                    </SelectTrigger>
                    <SelectContent>
                      {vehicleMakes.map((make) => (
                        <SelectItem key={make} value={make}>
                          {make}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                    Model
                  </label>
                  <Input
                    id="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="e.g. Corolla, Fit, CRV"
                  />
                </div>
                
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                    Year
                  </label>
                  <Select value={year} onValueChange={setYear}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-tyreBlue hover:bg-tyreBlue/90"
                >
                  Find My Tyre Size
                </Button>
              </div>
            </form>
          </div>
          
          <div className="bg-tyreLightGray p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-tyreBlue">Manual Lookup</h2>
            <p className="text-gray-700 mb-4">
              You can also find your tyre size manually by checking the sidewall of your current tyres or your vehicle handbook.
            </p>
            <div className="aspect-video bg-white rounded-lg overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1577324216086-515f6e8de7c0" 
                alt="Tyre sidewall showing size markings" 
                className="w-full h-full object-cover"
              />
            </div>
            <Link to="/blog/understanding-tyre-sizes-in-zimbabwe-complete-guide">
              <Button variant="outline" className="w-full">
                Read Our Tyre Size Guide
              </Button>
            </Link>
          </div>
        </div>
        
        <div>
          {showResults ? (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-tyreBlue">
                Recommended Sizes for {make} {model} ({year})
              </h2>
              
              {sampleTyreRecommendations.map((rec, idx) => (
                <Card key={idx} className={`mb-4 ${idx === 0 ? 'border-tyreBlue' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                          idx === 0 ? 'bg-blue-100 text-tyreBlue' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {rec.type}
                        </span>
                      </div>
                      {idx === 0 && (
                        <span className="text-xs text-tyreBlue font-medium">Recommended</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold">{rec.size}</h3>
                    <p className="text-gray-600 text-sm mb-3">{rec.description}</p>
                    <Link to={`/shop?size=${rec.size}`}>
                      <Button 
                        className={idx === 0 ? 'bg-tyreBlue hover:bg-tyreBlue/90 w-full' : 'w-full'}
                        variant={idx === 0 ? 'default' : 'outline'}
                      >
                        Shop This Size
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
              
              <div className="bg-tyreLightGray p-4 rounded-lg mt-6">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Not sure which size option is best for you? Contact our experts for personalized advice specific to your driving conditions in Zimbabwe.
                </p>
                <Link to="/contact">
                  <Button variant="outline" size="sm">Contact Our Team</Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center items-center p-6 bg-tyreLightGray rounded-lg">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-3 text-tyreBlue">How to Read Tyre Sizes</h2>
                <p className="text-gray-700 mb-4">
                  Understanding tyre sizing helps you make informed decisions. Here's a quick guide:
                </p>
              </div>
              
              <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="font-semibold mb-3">Example: 195/65R15</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="font-medium">195</span>
                    <span className="text-gray-600">Tyre width in millimeters</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">65</span>
                    <span className="text-gray-600">Aspect ratio (% of width)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">R</span>
                    <span className="text-gray-600">Radial construction</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">15</span>
                    <span className="text-gray-600">Rim diameter in inches</span>
                  </li>
                </ul>
              </div>
              
              <Link to="/blog/understanding-tyre-sizes-in-zimbabwe-complete-guide" className="text-tyreBlue hover:underline text-sm">
                Read our complete guide to tyre sizing →
              </Link>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default FindSize;
