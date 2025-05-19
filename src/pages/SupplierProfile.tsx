
import React from "react";
import { useParams, Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { MapPin, Phone, Mail, Globe, Clock, Facebook, Instagram, MessageSquare, Share2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SupplierProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Fetch supplier details
  const { data: supplier, isLoading, error } = useQuery({
    queryKey: ['supplier', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('suppliers')
        .select(`
          *,
          supplier_services(service_name),
          supplier_brands(brands(id, name, logo_url))
        `)
        .eq('slug', slug)
        .eq('is_approved', true)
        .single();

      if (error) throw error;
      return data;
    },
  });

  // Handle loading and error states
  if (isLoading) {
    return (
      <PageLayout
        title="Loading Supplier Details"
        breadcrumbItems={[
          { name: "Directory", path: "/directory", current: false },
          { name: "Loading...", path: "#", current: true }
        ]}
      >
        <div className="flex items-center justify-center py-20">
          <p>Loading supplier details...</p>
        </div>
      </PageLayout>
    );
  }

  if (error || !supplier) {
    return (
      <PageLayout
        title="Supplier Not Found"
        breadcrumbItems={[
          { name: "Directory", path: "/directory", current: false },
          { name: "Not Found", path: "#", current: true }
        ]}
      >
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold mb-4">Supplier Not Found</h2>
          <p className="mb-6">The supplier you're looking for doesn't exist or has been removed.</p>
          <Link to="/directory">
            <Button>Return to Directory</Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={supplier.business_name}
      breadcrumbItems={[
        { name: "Directory", path: "/directory", current: false },
        { name: supplier.business_name, path: `/supplier/${slug}`, current: true }
      ]}
      metaTitle={`${supplier.business_name} | Tyre Services in ${supplier.city}, Zimbabwe`}
      metaDescription={supplier.description?.substring(0, 160) || `${supplier.business_name} offers tyre services in ${supplier.city}, Zimbabwe. Find contact details, services, and more.`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Main Content */}
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <div className="w-32 h-32 bg-white rounded-lg border flex items-center justify-center p-3 flex-shrink-0">
                  {supplier.logo_url ? (
                    <img
                      src={supplier.logo_url}
                      alt={`${supplier.business_name} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-tyreLightGray rounded-md flex items-center justify-center text-gray-400 text-center">
                      No Logo Available
                    </div>
                  )}
                </div>
                <div>
                  <h1 className="text-2xl font-bold mb-2 text-tyreBlue">{supplier.business_name}</h1>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{supplier.city}, Zimbabwe</span>
                  </div>
                  {supplier.supplier_services && supplier.supplier_services.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {supplier.supplier_services.map((service: any, idx: number) => (
                        <span 
                          key={idx} 
                          className="text-xs bg-tyreLightGray px-2 py-1 rounded-full"
                        >
                          {service.service_name}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {supplier.contact_phone && (
                      <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                        <a href={`tel:${supplier.contact_phone}`}>
                          <Phone className="h-3.5 w-3.5" /> Call
                        </a>
                      </Button>
                    )}
                    {supplier.whatsapp_number && (
                      <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                        <a href={`https://wa.me/${supplier.whatsapp_number.replace(/[^\d]/g, '')}`} target="_blank" rel="noopener noreferrer">
                          <MessageSquare className="h-3.5 w-3.5" /> WhatsApp
                        </a>
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="flex items-center gap-1" onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: supplier.business_name,
                          text: `Check out ${supplier.business_name} on Tyres Zimbabwe`,
                          url: window.location.href,
                        });
                      }
                    }}>
                      <Share2 className="h-3.5 w-3.5" /> Share
                    </Button>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="about">
                <TabsList className="mb-4">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="brands">Brands</TabsTrigger>
                  <TabsTrigger value="services">Services</TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold mb-2">About {supplier.business_name}</h2>
                    <p className="text-gray-700">
                      {supplier.description || "No description provided."}
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Address</h2>
                    <p className="text-gray-700">{supplier.address || "Address not provided."}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Operating Hours</h2>
                    <p className="text-gray-700">{supplier.operating_hours || "Operating hours not provided."}</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="brands">
                  <h2 className="text-lg font-semibold mb-4">Brands We Carry</h2>
                  {supplier.supplier_brands && supplier.supplier_brands.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {supplier.supplier_brands.map((item: any, idx: number) => (
                        <Link to={`/brands#${item.brands.name.toLowerCase()}`} key={idx}>
                          <div className="border rounded-lg p-3 h-24 flex flex-col items-center justify-center text-center hover:shadow-sm transition-all">
                            {item.brands.logo_url ? (
                              <img 
                                src={item.brands.logo_url} 
                                alt={item.brands.name} 
                                className="h-10 object-contain mb-2" 
                              />
                            ) : (
                              <div className="h-10 flex items-center justify-center mb-2">
                                <span className="font-semibold text-tyreBlue">{item.brands.name}</span>
                              </div>
                            )}
                            <span className="text-xs text-gray-600">{item.brands.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-700">No brand information available.</p>
                  )}
                </TabsContent>
                
                <TabsContent value="services">
                  <h2 className="text-lg font-semibold mb-4">Services We Offer</h2>
                  {supplier.supplier_services && supplier.supplier_services.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {supplier.supplier_services.map((service: any, idx: number) => (
                        <div key={idx} className="flex items-start p-3 bg-gray-50 rounded-md">
                          <div className="mr-3 mt-1 text-tyreBlue">✓</div>
                          <div>
                            <h3 className="font-medium">{service.service_name}</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-700">No service information available.</p>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar / Contact Info */}
        <div>
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4 text-tyreBlue">Contact Information</h2>
              <div className="space-y-4">
                {supplier.contact_phone && (
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href={`tel:${supplier.contact_phone}`} className="text-tyreBlue hover:underline">
                        {supplier.contact_phone}
                      </a>
                    </div>
                  </div>
                )}
                
                {supplier.contact_email && (
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href={`mailto:${supplier.contact_email}`} className="text-tyreBlue hover:underline">
                        {supplier.contact_email}
                      </a>
                    </div>
                  </div>
                )}
                
                {supplier.website_url && (
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Website</p>
                      <a href={supplier.website_url} target="_blank" rel="noopener noreferrer" className="text-tyreBlue hover:underline">
                        {supplier.website_url.replace(/^https?:\/\/(www\.)?/i, "")}
                      </a>
                    </div>
                  </div>
                )}
                
                {supplier.operating_hours && (
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Operating Hours</p>
                      <p>{supplier.operating_hours}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p>{supplier.address}, {supplier.city}, Zimbabwe</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              {(supplier.facebook_url || supplier.instagram_url || supplier.whatsapp_number) && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-3 text-gray-500">Follow on Social Media</h3>
                  <div className="flex gap-2">
                    {supplier.facebook_url && (
                      <a 
                        href={supplier.facebook_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-5 w-5 text-gray-700" />
                      </a>
                    )}
                    
                    {supplier.instagram_url && (
                      <a 
                        href={supplier.instagram_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5 text-gray-700" />
                      </a>
                    )}
                    
                    {supplier.whatsapp_number && (
                      <a 
                        href={`https://wa.me/${supplier.whatsapp_number.replace(/[^\d]/g, '')}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="WhatsApp"
                      >
                        <MessageSquare className="h-5 w-5 text-gray-700" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="bg-tyreLightGray p-4 rounded-lg">
            <h3 className="text-sm font-semibold mb-2">Own a tyre business?</h3>
            <p className="text-xs text-gray-700 mb-3">Join our directory to reach more customers looking for tyre services in Zimbabwe.</p>
            <Link to="/list-your-business">
              <Button className="w-full bg-tyreBlue hover:bg-tyreBlue/90" size="sm">
                List Your Business
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SupplierProfile;
