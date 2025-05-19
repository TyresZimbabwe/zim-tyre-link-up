
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Info, ArrowRight } from "lucide-react";

const TyreSizeGuide = () => {
  return (
    <PageLayout 
      title="Tyre Size Guide" 
      breadcrumbItems={[{ name: "Tyre Size Guide", path: "/tyre-size-guide", current: true }]}
      metaTitle="Complete Tyre Size Guide for Zimbabwe | How to Read Tyre Sizes"
      metaDescription="Learn how to read tyre sizes and find the correct tyres for your vehicle with our comprehensive tyre size guide for Zimbabwean drivers."
    >
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          Understanding tyre sizes is essential for selecting the right tyres for your vehicle. This comprehensive guide will help you interpret tyre markings, understand conversion charts, and find suppliers offering your specific tyre size in Zimbabwe.
        </p>
      </div>

      <Tabs defaultValue="reading" className="mb-10">
        <TabsList className="mb-4 grid w-full grid-cols-3">
          <TabsTrigger value="reading">Reading Tyre Sizes</TabsTrigger>
          <TabsTrigger value="conversion">Conversion Charts</TabsTrigger>
          <TabsTrigger value="recommendations">Size Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="reading" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-tyreBlue">How to Read Your Tyre Size</h2>
              
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1577324216086-515f6e8de7c0"
                  alt="Tyre size markings explained"
                  className="w-full max-h-72 object-cover rounded-lg mb-4"
                />
                <div className="bg-tyreLightGray p-4 rounded-lg mb-6 flex items-start">
                  <Info className="h-5 w-5 mr-3 text-tyreBlue flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Looking at your current tyres is the easiest way to find your tyre size. The information is molded into the sidewall of every tyre.
                  </p>
                </div>
              </div>

              <h3 className="font-semibold mb-3">Example: 205/55R16 91V</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 border rounded-md">
                    <h4 className="font-semibold text-tyreBlue">205</h4>
                    <p className="text-gray-700 text-sm">
                      <strong>Section Width</strong> - The width of the tyre in millimeters from sidewall to sidewall.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 border rounded-md">
                    <h4 className="font-semibold text-tyreBlue">55</h4>
                    <p className="text-gray-700 text-sm">
                      <strong>Aspect Ratio</strong> - The height of the tyre's cross-section as a percentage of its width.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 border rounded-md">
                    <h4 className="font-semibold text-tyreBlue">R</h4>
                    <p className="text-gray-700 text-sm">
                      <strong>Construction</strong> - "R" stands for Radial construction, the most common type.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 border rounded-md">
                    <h4 className="font-semibold text-tyreBlue">16</h4>
                    <p className="text-gray-700 text-sm">
                      <strong>Rim Diameter</strong> - The diameter of the wheel in inches.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 border rounded-md">
                    <h4 className="font-semibold text-tyreBlue">91</h4>
                    <p className="text-gray-700 text-sm">
                      <strong>Load Index</strong> - Indicates the maximum weight the tyre can support when properly inflated.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 border rounded-md">
                    <h4 className="font-semibold text-tyreBlue">V</h4>
                    <p className="text-gray-700 text-sm">
                      <strong>Speed Rating</strong> - The maximum speed capability of the tyre (V = up to 240 km/h).
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-semibold mb-3">Additional Markings</h3>
                  <p className="text-gray-700 mb-4">
                    You might also notice other markings on your tyre that provide additional information:
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>M+S</strong> (Mud + Snow) - Indicates the tyre is designed for all-season use.</li>
                    <li><strong>XL</strong> (Extra Load) - The tyre is designed to carry heavier loads than a standard tyre.</li>
                    <li><strong>DOT Code</strong> - Manufacturing information including the week and year the tyre was made.</li>
                    <li><strong>TWI</strong> (Tread Wear Indicator) - Marks where to check tread depth.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-tyreLightGray p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-tyreBlue">Where to Find Your Tyre Size</h3>
            <p className="text-gray-700 mb-4">
              If you can't read the size from your current tyres, you can also find this information:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Inside your vehicle's driver-side door jamb</li>
              <li>In your vehicle's owner manual</li>
              <li>Inside the fuel door or glove box</li>
              <li>On some vehicles, the size is listed on a sticker in the boot</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="conversion" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-tyreBlue">Tyre Size Conversion Charts</h2>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Metric to Inches Conversion</h3>
                <p className="text-gray-700 mb-4">
                  Some vehicles, particularly older models and off-road vehicles, may use imperial (inch) sizing rather than metric. Here's how to convert between them:
                </p>
                
                <div className="overflow-x-auto mb-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Metric Size</TableHead>
                        <TableHead>Imperial Equivalent</TableHead>
                        <TableHead>Overall Diameter (mm)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>205/75R15</TableCell>
                        <TableCell>27x8.0R15</TableCell>
                        <TableCell>686</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>215/75R15</TableCell>
                        <TableCell>28x8.5R15</TableCell>
                        <TableCell>699</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>235/75R15</TableCell>
                        <TableCell>29x9.5R15</TableCell>
                        <TableCell>729</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>255/75R15</TableCell>
                        <TableCell>30x10.5R15</TableCell>
                        <TableCell>762</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>265/75R16</TableCell>
                        <TableCell>31x10.5R16</TableCell>
                        <TableCell>787</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>285/75R16</TableCell>
                        <TableCell>32x11.5R16</TableCell>
                        <TableCell>813</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>305/70R16</TableCell>
                        <TableCell>33x12.0R16</TableCell>
                        <TableCell>826</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>315/75R16</TableCell>
                        <TableCell>34x12.5R16</TableCell>
                        <TableCell>864</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Load Index Chart</h3>
                <p className="text-gray-700 mb-4">
                  The load index indicates the maximum weight your tyre can support when properly inflated:
                </p>
                
                <div className="overflow-x-auto mb-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Load Index</TableHead>
                        <TableHead>Max Load (kg)</TableHead>
                        <TableHead>Load Index</TableHead>
                        <TableHead>Max Load (kg)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>80</TableCell>
                        <TableCell>450</TableCell>
                        <TableCell>91</TableCell>
                        <TableCell>615</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>81</TableCell>
                        <TableCell>462</TableCell>
                        <TableCell>92</TableCell>
                        <TableCell>630</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>82</TableCell>
                        <TableCell>475</TableCell>
                        <TableCell>93</TableCell>
                        <TableCell>650</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>83</TableCell>
                        <TableCell>487</TableCell>
                        <TableCell>94</TableCell>
                        <TableCell>670</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>84</TableCell>
                        <TableCell>500</TableCell>
                        <TableCell>95</TableCell>
                        <TableCell>690</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>85</TableCell>
                        <TableCell>515</TableCell>
                        <TableCell>96</TableCell>
                        <TableCell>710</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>86</TableCell>
                        <TableCell>530</TableCell>
                        <TableCell>97</TableCell>
                        <TableCell>730</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>87</TableCell>
                        <TableCell>545</TableCell>
                        <TableCell>98</TableCell>
                        <TableCell>750</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>88</TableCell>
                        <TableCell>560</TableCell>
                        <TableCell>99</TableCell>
                        <TableCell>775</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>89</TableCell>
                        <TableCell>580</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell>800</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>90</TableCell>
                        <TableCell>600</TableCell>
                        <TableCell>101</TableCell>
                        <TableCell>825</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Speed Rating Chart</h3>
                <p className="text-gray-700 mb-4">
                  The speed rating tells you the maximum speed capability of the tyre:
                </p>
                
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Speed Symbol</TableHead>
                        <TableHead>Maximum Speed (km/h)</TableHead>
                        <TableHead>Maximum Speed (mph)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>N</TableCell>
                        <TableCell>140</TableCell>
                        <TableCell>87</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>P</TableCell>
                        <TableCell>150</TableCell>
                        <TableCell>93</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q</TableCell>
                        <TableCell>160</TableCell>
                        <TableCell>99</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>R</TableCell>
                        <TableCell>170</TableCell>
                        <TableCell>106</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>S</TableCell>
                        <TableCell>180</TableCell>
                        <TableCell>112</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>T</TableCell>
                        <TableCell>190</TableCell>
                        <TableCell>118</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>H</TableCell>
                        <TableCell>210</TableCell>
                        <TableCell>130</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>V</TableCell>
                        <TableCell>240</TableCell>
                        <TableCell>149</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>W</TableCell>
                        <TableCell>270</TableCell>
                        <TableCell>168</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Y</TableCell>
                        <TableCell>300</TableCell>
                        <TableCell>186</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-tyreBlue">Tyre Size Recommendations</h2>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Matching Your Vehicle Type</h3>
                <p className="text-gray-700 mb-4">
                  Different vehicles require different types of tyres. Here are some general guidelines:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 border rounded-md">
                    <h4 className="font-semibold text-tyreBlue">Passenger Cars</h4>
                    <p className="text-gray-700 text-sm">
                      Most common sizes: 175/70R13, 185/65R14, 195/65R15, 205/55R16, 225/45R17
                    </p>
                    <p className="text-gray-700 text-sm mt-2">
                      Focus on comfort, fuel efficiency and road handling for daily driving in Zimbabwean conditions.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 border rounded-md">
                    <h4 className="font-semibold text-tyreBlue">SUVs & 4x4s</h4>
                    <p className="text-gray-700 text-sm">
                      Most common sizes: 215/65R16, 225/65R17, 235/60R18, 265/70R16
                    </p>
                    <p className="text-gray-700 text-sm mt-2">
                      Consider all-terrain tyres for mixed driving conditions common in Zimbabwe.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 border rounded-md">
                    <h4 className="font-semibold text-tyreBlue">Light Trucks</h4>
                    <p className="text-gray-700 text-sm">
                      Most common sizes: 195R14C, 195R15C, 205R16C, 225/70R15C
                    </p>
                    <p className="text-gray-700 text-sm mt-2">
                      Look for higher load ratings to accommodate cargo and rougher road conditions.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 border rounded-md">
                    <h4 className="font-semibold text-tyreBlue">Heavy Duty Trucks</h4>
                    <p className="text-gray-700 text-sm">
                      Most common sizes: 11R22.5, 12R22.5, 295/80R22.5, 315/80R22.5
                    </p>
                    <p className="text-gray-700 text-sm mt-2">
                      Durability and tread wear are crucial for long-distance transport on variable road quality.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Alternative Sizes</h3>
                <p className="text-gray-700 mb-4">
                  Sometimes, you may want to switch to a slightly different tyre size than what came with your vehicle. When considering alternative sizes:
                </p>
                
                <div className="bg-tyreLightGray p-4 rounded-md mb-4">
                  <ul className="list-disc pl-4 space-y-2 text-gray-700 text-sm">
                    <li>The overall diameter should remain within 3% of the original size to avoid affecting speedometer accuracy.</li>
                    <li>The width can vary slightly but should be appropriate for your wheel width.</li>
                    <li>Load index and speed rating should meet or exceed the manufacturer's recommendations.</li>
                  </ul>
                </div>
                
                <p className="text-gray-700 mb-4">
                  If you're considering changing tyre size, it's best to consult with a tyre professional who can advise on compatibility with your specific vehicle.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Zimbabwe-Specific Considerations</h3>
                <p className="text-gray-700 mb-4">
                  When choosing tyres in Zimbabwe, consider these local factors:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Road Conditions:</strong> Many roads in Zimbabwe have potholes and rough sections, so durability is important.</li>
                  <li><strong>Weather Patterns:</strong> Consider all-season tyres that perform well in both the rainy and dry seasons.</li>
                  <li><strong>Rural vs. Urban:</strong> If you frequently travel between cities and rural areas, all-terrain tyres might be a better choice.</li>
                  <li><strong>Fuel Efficiency:</strong> Given fuel costs in Zimbabwe, low rolling resistance tyres can help reduce consumption.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="bg-tyreLightGray p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-tyreBlue">Find Suppliers for Your Tyre Size</h3>
            <p className="text-gray-700 mb-4">
              Now that you understand your tyre size, find suppliers in Zimbabwe that carry the right tyres for your vehicle.
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              <Link to="/directory">
                <Button className="bg-tyreBlue hover:bg-tyreBlue/90">
                  Browse Supplier Directory <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">
                  Contact Us for Help
                </Button>
              </Link>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default TyreSizeGuide;
