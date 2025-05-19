
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Sample brands data
const brandsData = [
  {
    id: 1,
    name: "Bridgestone",
    logo: "https://images.unsplash.com/photo-1604431781376-b72d64a43fc2",
    description: "Known for their durability and performance, Bridgestone tyres are perfect for Zimbabwe's varied road conditions. Their range includes options for passenger cars, SUVs, and commercial vehicles.",
    popularProducts: ["Turanza T005", "Dueler A/T 697", "B250"],
    path: "/brands/bridgestone"
  },
  {
    id: 2,
    name: "Michelin",
    logo: "https://images.unsplash.com/photo-1570477885232-ed50f68ef274",
    description: "Michelin offers premium tyres known for their longevity and fuel efficiency - important qualities for Zimbabwean drivers facing rising fuel costs. Their tyres perform excellently on both urban and rural roads.",
    popularProducts: ["Energy XM2+", "Primacy 4", "Pilot Sport 4"],
    path: "/brands/michelin"
  },
  {
    id: 3,
    name: "Goodyear",
    logo: "https://images.unsplash.com/photo-1600960776535-fe6e50bd5670",
    description: "Goodyear provides reliable tyres with excellent grip and handling, suitable for Zimbabwe's rainy season and various terrains. Their range includes affordable options without compromising quality.",
    popularProducts: ["EfficientGrip Performance", "Wrangler AT/SA", "Assurance TripleMax"],
    path: "/brands/goodyear"
  },
  {
    id: 4,
    name: "Dunlop",
    logo: "https://images.unsplash.com/photo-1557007462-811d1fc6eb34",
    description: "Dunlop has a strong presence in Zimbabwe with tyres designed for local road conditions. Their 4x4 and SUV range is particularly popular for rural and off-road driving in Zimbabwe.",
    popularProducts: ["Grandtrek AT3", "SP Sport Maxx", "EC300+"],
    path: "/brands/dunlop"
  },
  {
    id: 5,
    name: "Pirelli",
    logo: "https://images.unsplash.com/photo-1745966325553-3e9d228901ca",
    description: "Pirelli offers premium performance tyres popular among luxury vehicle owners in Zimbabwe. Known for exceptional handling and performance in wet and dry conditions.",
    popularProducts: ["P Zero", "Scorpion Verde", "Cinturato P7"],
    path: "/brands/pirelli"
  },
  {
    id: 6,
    name: "Continental",
    logo: "https://images.unsplash.com/photo-1716769111021-9b4594f321ea",
    description: "Continental tyres provide excellent safety features and performance across various weather conditions - important for Zimbabwe's seasonal climate changes. Available for passenger cars, SUVs and commercial vehicles.",
    popularProducts: ["UltraContact UC6", "ComfortContact CC6", "ContiSportContact"],
    path: "/brands/continental"
  },
  {
    id: 7,
    name: "Firestone",
    logo: "https://images.unsplash.com/photo-1600960776535-fe6e50bd5670",
    description: "Firestone offers durable tyres at competitive prices, making them a popular choice in Zimbabwe. Their tyres are known for good mileage and performance on rough roads.",
    popularProducts: ["Destination A/T", "Roadhawk", "Multihawk"],
    path: "/brands/firestone"
  },
  {
    id: 8,
    name: "Yokohama",
    logo: "https://images.unsplash.com/photo-1557007462-811d1fc6eb34",
    description: "Yokohama combines Japanese engineering with affordability. Their tyres provide good performance and fuel efficiency - attractive features for cost-conscious Zimbabwean drivers.",
    popularProducts: ["Geolandar A/T", "BluEarth-GT AE51", "ADVAN Sport V105"],
    path: "/brands/yokohama"
  },
];

const Brands = () => {
  return (
    <PageLayout 
      title="Our Tyre Brands" 
      breadcrumbItems={[{ name: "Brands", path: "/brands", current: true }]}
      metaTitle="Top Tyre Brands Available in Zimbabwe | Quality Guaranteed"
      metaDescription="Explore all major tyre brands available in Zimbabwe including Bridgestone, Michelin, Dunlop, and more. Find genuine products with warranty at competitive prices."
    >
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          At Tyres Zimbabwe, we partner with the world's leading tyre manufacturers to bring you genuine, high-quality products with full warranty protection. All our tyres are sourced through authorized channels, ensuring you receive products specifically designed for Zimbabwe's unique road conditions and climate.
        </p>
        <p className="text-gray-700 mb-4">
          Whether you need durable tyres for rural dirt roads, fuel-efficient options for city driving, or performance tyres for your premium vehicle, our range of trusted brands has you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {brandsData.map((brand) => (
          <Card key={brand.id} className="overflow-hidden">
            <div className="p-6 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 flex items-center justify-center">
                <div className="h-32 w-32 bg-white rounded-full flex items-center justify-center p-4 shadow-sm">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
              <CardContent className="p-0 w-full md:w-2/3">
                <h3 className="text-xl font-bold mb-2 text-tyreBlue">{brand.name}</h3>
                <p className="text-gray-700 mb-3">{brand.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-1">Popular Products:</h4>
                  <div className="flex flex-wrap gap-2">
                    {brand.popularProducts.map((product, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-tyreLightGray px-2 py-1 rounded-full"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link to={brand.path}>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Link>
                  <Link to={`/shop?brand=${brand.name}`}>
                    <Button size="sm" className="bg-tyreBlue hover:bg-tyreBlue/90">
                      Shop {brand.name}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-tyreLightGray p-6 rounded-lg mb-10">
        <h2 className="text-xl font-semibold mb-4 text-tyreBlue">Why Choose Genuine Brands?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Safety Assurance</h3>
            <p className="text-gray-700 text-sm">
              Genuine branded tyres undergo rigorous testing to meet international safety standards, providing better handling, braking and overall performance.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Better Value</h3>
            <p className="text-gray-700 text-sm">
              While sometimes more expensive initially, branded tyres typically last longer and provide better fuel efficiency, offering superior value over time.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Warranty Protection</h3>
            <p className="text-gray-700 text-sm">
              All our branded tyres come with manufacturer warranties, protecting your investment against manufacturing defects and premature wear.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-tyreDarkGray">
          Don't See the Brand You're Looking For?
        </h2>
        <p className="text-gray-700 mb-6">
          We can source specific brands upon request. Contact our team to inquire about availability.
        </p>
        <Link to="/contact">
          <Button className="bg-tyreOrange hover:bg-tyreOrange/90">Contact Us</Button>
        </Link>
      </div>
    </PageLayout>
  );
};

export default Brands;
