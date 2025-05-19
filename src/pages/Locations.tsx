
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Truck, Phone } from "lucide-react";

const locations = [
  {
    city: "Harare",
    address: "123 Samora Machel Avenue, Harare",
    phone: "+263 77 232 0377",
    hours: "Mon-Fri: 8am-5pm, Sat: 8am-1pm",
    services: ["Tyre Sales", "Fitting", "Balancing", "Alignment", "Puncture Repairs"],
    deliveryTime: "Same day or next day",
    partners: ["City Tyres", "Wheels & More", "AutoFit"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    city: "Bulawayo",
    address: "78 Joshua Nkomo Street, Bulawayo",
    phone: "+263 77 232 0378",
    hours: "Mon-Fri: 8am-5pm, Sat: 8am-1pm",
    services: ["Tyre Sales", "Fitting", "Balancing", "Puncture Repairs"],
    deliveryTime: "1-2 business days",
    partners: ["Matabeleland Tyres", "RoadRunner Auto", "Tyres Express"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    city: "Mutare",
    address: "56 Third Street, Mutare",
    phone: "+263 77 232 0379",
    hours: "Mon-Fri: 8am-5pm, Sat: 8am-12pm",
    services: ["Tyre Sales", "Fitting", "Balancing"],
    deliveryTime: "2-3 business days",
    partners: ["Eastern Wheels", "Border Tyres"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    city: "Gweru",
    address: "24 Robert Mugabe Way, Gweru",
    phone: "+263 77 232 0380",
    hours: "Mon-Fri: 8am-5pm, Sat: 8am-12pm",
    services: ["Tyre Sales", "Fitting", "Puncture Repairs"],
    deliveryTime: "2-3 business days",
    partners: ["Midlands Auto Center", "Gweru Tyres"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    city: "Masvingo",
    address: "89 Hughes Street, Masvingo",
    phone: "+263 77 232 0381",
    hours: "Mon-Fri: 8:30am-4:30pm, Sat: 8:30am-12pm",
    services: ["Tyre Sales", "Fitting"],
    deliveryTime: "3-4 business days",
    partners: ["Great Zimbabwe Tyres", "Masvingo Motors"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  },
  {
    city: "Kwekwe",
    address: "32 Nelson Mandela Avenue, Kwekwe",
    phone: "+263 77 232 0382",
    hours: "Mon-Fri: 8am-5pm, Sat: 8am-12pm",
    services: ["Tyre Sales", "Fitting", "Balancing"],
    deliveryTime: "2-3 business days",
    partners: ["Gold City Tyres", "Kwekwe Auto Services"],
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
  },
  {
    city: "Chinhoyi",
    address: "12 Magamba Way, Chinhoyi",
    phone: "+263 77 232 0383",
    hours: "Mon-Fri: 8am-5pm, Sat: 8am-12pm",
    services: ["Tyre Sales", "Fitting"],
    deliveryTime: "3-4 business days",
    partners: ["Mashonaland Tyres", "Chinhoyi Auto Center"],
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  },
  {
    city: "Kadoma",
    address: "45 Harvey Brown Avenue, Kadoma",
    phone: "+263 77 232 0384",
    hours: "Mon-Fri: 8:30am-4:30pm, Sat: 8:30am-12pm",
    services: ["Tyre Sales", "Fitting"],
    deliveryTime: "2-3 business days",
    partners: ["Kadoma Wheels", "Central Auto"],
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
  },
];

const Locations = () => {
  return (
    <PageLayout 
      title="Our Locations" 
      breadcrumbItems={[{ name: "Locations", path: "/locations", current: true }]}
      metaTitle="Tyre Shops & Delivery Across Zimbabwe | Nationwide Coverage"
      metaDescription="Find Tyres Zimbabwe locations across the country including Harare, Bulawayo, Mutare, Gweru and more. Fast delivery and fitting services available nationwide."
    >
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          Tyres Zimbabwe serves customers across the nation with our headquarters in Harare and partner locations in all major cities. We provide fast delivery and professional fitting services throughout Zimbabwe.
        </p>
        <p className="text-gray-700 mb-4">
          Select your nearest location below to learn about available services, delivery timeframes, and local partners in your area.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {locations.map((location, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="h-40 relative">
              <img
                src={location.image}
                alt={`${location.city} tyre services`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white font-bold text-xl p-4 w-full">
                  {location.city}
                </h3>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-start mb-3">
                <MapPin className="h-5 w-5 text-tyreBlue mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">{location.address}</p>
              </div>
              <div className="flex items-start mb-3">
                <Phone className="h-5 w-5 text-tyreBlue mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-700">{location.phone}</p>
                  <p className="text-xs text-gray-500">{location.hours}</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <Truck className="h-5 w-5 text-tyreBlue mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-700">Delivery time: {location.deliveryTime}</p>
                  <p className="text-xs text-gray-500">Free delivery for orders over $200</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-1">Available Services:</h4>
                <div className="flex flex-wrap gap-1">
                  {location.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-tyreLightGray px-2 py-1 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-1">Partner Locations:</h4>
                <p className="text-xs text-gray-700">
                  {location.partners.join(", ")}
                </p>
              </div>
              
              <Link to={`/locations/${location.city.toLowerCase()}`}>
                <Button className="w-full bg-tyreBlue hover:bg-tyreBlue/90">
                  View {location.city} Details
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-tyreLightGray p-6 rounded-lg mb-10">
        <h2 className="text-xl font-semibold mb-4 text-tyreBlue">Not in One of These Cities?</h2>
        <p className="text-gray-700 mb-4">
          Don't worry! We deliver tyres to all areas across Zimbabwe. While our delivery timeframes might be slightly longer for remote areas, we ensure every customer receives their tyres.
        </p>
        <p className="text-gray-700 mb-4">
          For customers in smaller towns and rural areas, we can arrange delivery to the nearest bus station or coordinate with local transport services. Contact our customer service team to discuss the best delivery option for your location.
        </p>
        <div className="flex justify-center mt-4">
          <Link to="/contact">
            <Button className="bg-tyreOrange hover:bg-tyreOrange/90">
              Contact Us About Delivery
            </Button>
          </Link>
        </div>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-tyreDarkGray">
          Find Your Nearest Location
        </h2>
        <p className="text-gray-700 mb-6">
          Need more specific information about services and inventory at one of our locations? Contact our team for personalized assistance.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/contact">
            <Button className="bg-tyreBlue hover:bg-tyreBlue/90">Contact Us</Button>
          </Link>
          <Link to="/shipping">
            <Button variant="outline">Shipping Information</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default Locations;
