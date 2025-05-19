
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <PageLayout 
      title="About Us" 
      breadcrumbItems={[{ name: "About Us", path: "/about", current: true }]}
      metaTitle="About Tyres Zimbabwe - Your Trusted Tyre Marketplace in Zimbabwe"
      metaDescription="Learn about Tyres Zimbabwe, the leading online tyre marketplace connecting quality tyre sellers with buyers across Zimbabwe. Based in Harare with nationwide delivery."
    >
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-tyreBlue">Our Mission</h2>
          <p className="mb-4 text-gray-700">
            Founded in 2020, Tyres Zimbabwe was established with a clear mission: to create the most trusted online marketplace connecting tyre buyers and sellers across Zimbabwe. Based in Harare, we've built a nationwide network of verified suppliers offering quality tyres at competitive prices.
          </p>
          <p className="mb-4 text-gray-700">
            We understand the unique challenges of Zimbabwe's roads and climate, which is why we only partner with suppliers offering tyres suited to local conditions - from bustling city streets in Harare to rural roads in Matabeleland.
          </p>
          <p className="mb-6 text-gray-700">
            Our team consists of automotive enthusiasts and tyre experts committed to helping Zimbabwean drivers find the perfect fit for their vehicles at prices they can afford.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-tyreBlue">What Makes Us Different</h2>
          <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
            <li>All suppliers are locally verified and must meet our quality standards</li>
            <li>Competitive pricing with transparent delivery costs nationwide</li>
            <li>Expert advice on tyre selection for Zimbabwe's unique road conditions</li>
            <li>Comprehensive warranty information and after-sales support</li>
            <li>Easy payment options designed for the Zimbabwean market</li>
          </ul>
          
          <div className="mt-6">
            <Link to="/contact" className="text-tyreBlue hover:text-tyreOrange font-medium">
              Contact our team →
            </Link>
          </div>
        </div>
        
        <div>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-64 mb-6">
            <img 
              src="https://images.unsplash.com/photo-1600039641872-afc32af5a579" 
              alt="Tyres Zimbabwe headquarters in Harare" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-2xl font-semibold mb-4 text-tyreBlue">Our Partners</h2>
          <p className="mb-4 text-gray-700">
            We've established strong relationships with leading tyre manufacturers and distributors including Bridgestone, Michelin, Goodyear, Dunlop, Pirelli, and Continental to ensure Zimbabweans have access to world-class tyres.
          </p>
          <p className="mb-4 text-gray-700">
            Our local partnerships with garages and fitment centers across Harare, Bulawayo, Mutare, Gweru, and other major cities ensure convenient installation services for our customers.
          </p>
          
          <div className="mt-6">
            <Link to="/brands" className="text-tyreBlue hover:text-tyreOrange font-medium mr-6">
              Explore our brands →
            </Link>
            <Link to="/shop" className="text-tyreBlue hover:text-tyreOrange font-medium">
              Shop now →
            </Link>
          </div>
        </div>
      </div>
      
      <div className="bg-tyreLightGray p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-tyreBlue">Our Commitment to Zimbabwe</h2>
        <p className="mb-4 text-gray-700">
          As a proudly Zimbabwean company, we're committed to supporting the local economy. We prioritize partnerships with Zimbabwean businesses and employ local talent at our Harare headquarters.
        </p>
        <p className="mb-4 text-gray-700">
          We understand the economic challenges facing many Zimbabweans, which is why we work tirelessly to offer affordable tyres without compromising on quality and safety. Our platform is designed to give you transparent information about pricing, delivery timeframes, and warranty conditions.
        </p>
        <div className="mt-4">
          <Link to="/find-size" className="text-tyreBlue hover:text-tyreOrange font-medium">
            Find the right tyres for your vehicle →
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
