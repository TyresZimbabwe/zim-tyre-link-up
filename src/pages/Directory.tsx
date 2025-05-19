
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Globe, CheckCircle2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

// Sample cities for filtering
const cities = [
  "Harare", "Bulawayo", "Mutare", "Gweru", "Masvingo", 
  "Kwekwe", "Kadoma", "Chinhoyi", "Victoria Falls"
];

// Sample services for filtering
const services = [
  "Tyre Sales", "Wheel Alignment", "Wheel Balancing", 
  "Puncture Repairs", "Mobile Fitting", "Nitrogen Inflation"
];

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Fetch suppliers from Supabase
  const { data: suppliersData, isLoading, error } = useQuery({
    queryKey: ['suppliers'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('suppliers')
        .select('*, supplier_services(service_name), supplier_brands(brands(name))')
        .eq('is_approved', true);

      if (error) throw error;
      return data;
    },
  });

  // Filter suppliers based on search term and filters
  const filteredSuppliers = suppliersData ? suppliersData.filter(supplier => {
    const matchesSearch = searchTerm === "" || 
      supplier.business_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.city.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCity = selectedCities.length === 0 || 
      selectedCities.includes(supplier.city);

    // Check if supplier offers any of the selected services
    const supplierServices = supplier.supplier_services.map((s: any) => s.service_name);
    const matchesService = selectedServices.length === 0 || 
      selectedServices.some(service => supplierServices.includes(service));

    return matchesSearch && matchesCity && matchesService;
  }) : [];

  const toggleCity = (city: string) => {
    if (selectedCities.includes(city)) {
      setSelectedCities(selectedCities.filter(c => c !== city));
    } else {
      setSelectedCities([...selectedCities, city]);
    }
  };

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <PageLayout 
      title="Tyre Suppliers Directory" 
      breadcrumbItems={[{ name: "Directory", path: "/directory", current: true }]}
      metaTitle="Zimbabwe Tyre Suppliers Directory | Find Tyre Services Near You"
      metaDescription="Browse our comprehensive directory of tyre suppliers across Zimbabwe. Find tyre sales, services, and repairs in your city with detailed information on brands and specializations."
    >
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          Find the best tyre suppliers, services, and repair centers across Zimbabwe. Our directory includes detailed information about each business, the brands they carry, and the services they offer.
        </p>
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Input
            placeholder="Search by name, description, or location..."
            className="max-w-xs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button 
            variant="outline" 
            className="flex items-center"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
          <div className="ml-auto">
            <Link to="/list-your-business">
              <Button className="bg-tyreBlue hover:bg-tyreBlue/90">
                List Your Business
              </Button>
            </Link>
          </div>
        </div>

        {/* Filter options */}
        {showFilters && (
          <div className="grid md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg mb-6">
            <div>
              <h3 className="font-medium mb-2">Filter by City</h3>
              <div className="grid grid-cols-2 gap-2">
                {cities.map((city) => (
                  <div className="flex items-center space-x-2" key={city}>
                    <Checkbox 
                      id={`city-${city}`} 
                      checked={selectedCities.includes(city)}
                      onCheckedChange={() => toggleCity(city)}
                    />
                    <label htmlFor={`city-${city}`} className="text-sm">{city}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Filter by Services</h3>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service) => (
                  <div className="flex items-center space-x-2" key={service}>
                    <Checkbox 
                      id={`service-${service}`} 
                      checked={selectedServices.includes(service)}
                      onCheckedChange={() => toggleService(service)}
                    />
                    <label htmlFor={`service-${service}`} className="text-sm">{service}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {isLoading ? (
        <div className="text-center py-10">
          <p>Loading suppliers...</p>
        </div>
      ) : error ? (
        <div className="text-center py-10 text-red-500">
          <p>Error loading suppliers. Please try again later.</p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-6 text-tyreBlue">
            {filteredSuppliers.length > 0 
              ? `${filteredSuppliers.length} Suppliers Found` 
              : "No Suppliers Found"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {filteredSuppliers.map((supplier: any) => (
              <Link to={`/supplier/${supplier.slug}`} key={supplier.id}>
                <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-white rounded-lg border flex items-center justify-center p-2 flex-shrink-0">
                        {supplier.logo_url ? (
                          <img
                            src={supplier.logo_url}
                            alt={`${supplier.business_name} logo`}
                            className="max-h-full max-w-full object-contain"
                          />
                        ) : (
                          <div className="w-full h-full bg-tyreLightGray rounded-md flex items-center justify-center text-gray-400">
                            Logo
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-tyreBlue">{supplier.business_name}</h3>
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                          <MapPin className="h-3.5 w-3.5 mr-1" />
                          <span>{supplier.city}</span>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                          {supplier.description || "Tyre supplier in Zimbabwe."}
                        </p>
                        
                        {supplier.supplier_services?.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-3">
                            {supplier.supplier_services.slice(0, 3).map((service: any, idx: number) => (
                              <span 
                                key={idx} 
                                className="text-xs bg-tyreLightGray px-2 py-0.5 rounded-full"
                              >
                                {service.service_name}
                              </span>
                            ))}
                            {supplier.supplier_services.length > 3 && (
                              <span className="text-xs bg-tyreLightGray px-2 py-0.5 rounded-full">
                                +{supplier.supplier_services.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
                        
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center text-xs text-gray-500">
                            {supplier.is_featured && (
                              <div className="flex items-center text-green-600 mr-2">
                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                <span>Featured</span>
                              </div>
                            )}
                          </div>
                          <Button size="sm" variant="outline">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          
          {filteredSuppliers.length === 0 && (
            <div className="text-center py-10 bg-gray-50 rounded-lg">
              <p className="text-gray-600 mb-4">No suppliers match your search criteria.</p>
              <Button onClick={() => {
                setSearchTerm("");
                setSelectedCities([]);
                setSelectedServices([]);
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </>
      )}

      <div className="bg-tyreLightGray p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-tyreBlue">Own a Tyre Business?</h2>
        <p className="mb-4 text-gray-700">
          Join our directory to reach potential customers looking for tyre services across Zimbabwe. Add your business details, services, and the brands you carry.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/list-your-business">
            <Button className="bg-tyreBlue hover:bg-tyreBlue/90">
              List Your Business
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default Directory;
