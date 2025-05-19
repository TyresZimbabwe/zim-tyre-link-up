
import React, { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Brands = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Fetch brands from Supabase
  const { data: brandsData, isLoading, error } = useQuery({
    queryKey: ['brands'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('brands')
        .select(`
          *,
          brand_models (id, model_name, description),
          supplier_brands!inner (suppliers!inner (id, slug, business_name))
        `)
        .order('name');

      if (error) throw error;
      return data;
    },
  });

  // Group suppliers by brand for efficient display
  const getBrandSuppliers = (brand: any) => {
    if (!brand.supplier_brands) return [];
    
    // Extract unique suppliers from the nested structure
    const supplierSet = new Map();
    brand.supplier_brands.forEach((item: any) => {
      if (item.suppliers) {
        supplierSet.set(item.suppliers.id, item.suppliers);
      }
    });
    
    return Array.from(supplierSet.values());
  };

  // Filter brands based on search
  const filteredBrands = brandsData?.filter(brand => 
    searchTerm === "" || 
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.country_of_origin?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageLayout 
      title="Tyre Brands in Zimbabwe" 
      breadcrumbItems={[{ name: "Tyre Brands", path: "/brands", current: true }]}
      metaTitle="Top Tyre Brands Available in Zimbabwe | Complete Guide"
      metaDescription="Explore all major tyre brands available in Zimbabwe including Bridgestone, Michelin, Dunlop, and more. Find local suppliers and detailed brand information."
    >
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          Our comprehensive guide to tyre brands available in Zimbabwe helps you make informed decisions about your tyre purchases. Learn about each brand's history, strengths, popular models, and find local suppliers that carry these brands.
        </p>
        
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Input
            placeholder="Search brands by name or country..."
            className="max-w-xs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-10">
          <p>Loading brands information...</p>
        </div>
      ) : error ? (
        <div className="text-center py-10 text-red-500">
          <p>Error loading brands information. Please try again later.</p>
        </div>
      ) : (
        <div className="space-y-8 mb-10">
          {filteredBrands && filteredBrands.length > 0 ? (
            filteredBrands.map((brand: any) => (
              <Card key={brand.id} className="overflow-hidden" id={brand.name.toLowerCase()}>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/4 flex items-center justify-center">
                      <div className="h-32 w-32 bg-white rounded-full flex items-center justify-center p-4 shadow-sm">
                        {brand.logo_url ? (
                          <img
                            src={brand.logo_url}
                            alt={`${brand.name} logo`}
                            className="max-h-full max-w-full object-contain"
                          />
                        ) : (
                          <div className="h-full w-full bg-tyreLightGray rounded-full flex items-center justify-center text-xl font-bold text-tyreBlue">
                            {brand.name.charAt(0)}
                          </div>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-0 w-full md:w-3/4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-tyreBlue">{brand.name}</h3>
                        {brand.country_of_origin && (
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {brand.country_of_origin}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-700 mb-4">{brand.description || `${brand.name} offers quality tyres available in Zimbabwe.`}</p>
                      
                      {brand.brand_models && brand.brand_models.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2">Popular Models:</h4>
                          <div className="flex flex-wrap gap-2">
                            {brand.brand_models.map((model: any) => (
                              <span 
                                key={model.id} 
                                className="text-xs bg-tyreLightGray px-2 py-1 rounded-full"
                                title={model.description}
                              >
                                {model.model_name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Available From:</h4>
                        <div className="flex flex-wrap gap-2">
                          {getBrandSuppliers(brand).length > 0 ? (
                            getBrandSuppliers(brand).map((supplier: any) => (
                              <Link 
                                key={supplier.id}
                                to={`/supplier/${supplier.slug}`}
                                className="text-xs bg-white border border-gray-200 hover:border-tyreBlue px-2 py-1 rounded-full text-tyreBlue hover:bg-tyreLightGray transition-colors"
                              >
                                {supplier.business_name}
                              </Link>
                            ))
                          ) : (
                            <span className="text-xs text-gray-500">No suppliers listed</span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-10 bg-gray-50 rounded-lg">
              <p className="text-gray-600">No brands found matching your search.</p>
              {searchTerm && (
                <Button 
                  onClick={() => setSearchTerm("")}
                  className="mt-4"
                >
                  Clear Search
                </Button>
              )}
            </div>
          )}
        </div>
      )}

      <div className="bg-tyreLightGray p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4 text-tyreBlue">Why Choose Quality Tyre Brands?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Safety Assurance</h3>
            <p className="text-gray-700 text-sm">
              Reputable tyre brands invest in rigorous testing to meet international safety standards, providing better handling, braking and overall performance.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Better Value</h3>
            <p className="text-gray-700 text-sm">
              While sometimes more expensive initially, quality tyres typically last longer and provide better fuel efficiency, offering superior value over time.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Warranty Protection</h3>
            <p className="text-gray-700 text-sm">
              Most established brands offer warranties against manufacturing defects, giving you peace of mind with your purchase.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-tyreDarkGray">
          Looking for a Specific Brand?
        </h2>
        <p className="text-gray-700 mb-6">
          Check our supplier directory to find businesses that carry specific tyre brands in your area.
        </p>
        <Link to="/directory">
          <Button className="bg-tyreBlue hover:bg-tyreBlue/90">
            Browse Supplier Directory
          </Button>
        </Link>
      </div>
    </PageLayout>
  );
};

export default Brands;
