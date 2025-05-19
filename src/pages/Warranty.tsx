
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, FileText } from "lucide-react";

const Warranty = () => {
  return (
    <PageLayout 
      title="Warranty Information" 
      breadcrumbItems={[{ name: "Warranty Information", path: "/warranty", current: true }]}
      metaTitle="Tyre Warranty Information Zimbabwe | Manufacturer & Extended Warranties"
      metaDescription="Learn about tyre warranty coverage in Zimbabwe. All tyres include manufacturer warranties against defects, plus our optional extended warranty for peace of mind."
    >
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          All tyres sold by Tyres Zimbabwe come with manufacturer warranty protection against defects in materials and workmanship. Understanding your warranty coverage ensures you're protected in the rare case of a manufacturing issue.
        </p>
        <p className="text-gray-700 mb-4">
          This page explains the standard manufacturer warranties and our optional extended warranty program specifically designed for Zimbabwe's road conditions.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-tyreBlue">Standard Manufacturer Warranties</h2>
      <div className="mb-8 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Brand</TableHead>
              <TableHead>Warranty Period</TableHead>
              <TableHead>Coverage Details</TableHead>
              <TableHead>Documentation Required</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Bridgestone</TableCell>
              <TableCell>5 years from purchase or until tread wears out</TableCell>
              <TableCell>Manufacturing defects, abnormal wear with proper use</TableCell>
              <TableCell>Original receipt, vehicle service records</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Michelin</TableCell>
              <TableCell>6 years from purchase or until tread wears out</TableCell>
              <TableCell>Manufacturing defects, limited road hazard protection</TableCell>
              <TableCell>Original receipt, tyre registration number</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Goodyear</TableCell>
              <TableCell>5 years from purchase or until tread wears out</TableCell>
              <TableCell>Manufacturing defects only</TableCell>
              <TableCell>Original receipt, DOT code</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Dunlop</TableCell>
              <TableCell>5 years from purchase or until tread wears out</TableCell>
              <TableCell>Manufacturing defects, limited tread life guarantee</TableCell>
              <TableCell>Original receipt, proof of rotation</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Continental</TableCell>
              <TableCell>6 years from purchase or until tread wears out</TableCell>
              <TableCell>Manufacturing defects, 30-day satisfaction guarantee</TableCell>
              <TableCell>Original receipt, tyre DOT code</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Pirelli</TableCell>
              <TableCell>5 years from purchase or until tread wears out</TableCell>
              <TableCell>Manufacturing defects only</TableCell>
              <TableCell>Original receipt, DOT code</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Firestone</TableCell>
              <TableCell>4 years from purchase or until tread wears out</TableCell>
              <TableCell>Manufacturing defects only</TableCell>
              <TableCell>Original receipt, tyre inspection</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Yokohama</TableCell>
              <TableCell>5 years from purchase or until tread wears out</TableCell>
              <TableCell>Manufacturing defects only</TableCell>
              <TableCell>Original receipt, tyre inspection</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-tyreBlue">What's Covered</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-start mb-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <h3 className="font-semibold">Covered by Warranty</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700 ml-9">
              <li>Manufacturing defects in materials and workmanship</li>
              <li>Premature and uneven tread wear (with proof of proper maintenance)</li>
              <li>Air loss due to defects in materials or workmanship</li>
              <li>Bead damage during proper mounting (if mounted by authorized dealer)</li>
              <li>Sudden tread separation due to manufacturing issues</li>
              <li>Belt separation or tread separation not caused by impact</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-6">
            <div className="flex items-start mb-3">
              <AlertCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
              <h3 className="font-semibold">Not Covered by Warranty</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700 ml-9">
              <li>Normal tread wear and road hazard damage (potholes, nails, etc.)</li>
              <li>Damage from improper use (underinflation, overloading, racing)</li>
              <li>Damage from improper mounting or balancing</li>
              <li>Damage from vehicle mechanical problems (alignment issues)</li>
              <li>Punctures, cuts, or impact damage from road hazards</li>
              <li>Weather checking or cracking due to improper storage</li>
              <li>Tyres with less than 1.6mm tread remaining</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-tyreBlue">Zimbabwe Road Hazard Protection</h2>
      <div className="bg-tyreLightGray p-6 rounded-lg mb-10">
        <p className="text-gray-700 mb-4">
          We understand that Zimbabwe's roads present unique challenges for tyres. That's why we offer an optional Road Hazard Protection plan that covers damages not included in standard manufacturer warranties.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-4">
          <div>
            <h3 className="font-semibold mb-2">Basic Plan</h3>
            <p className="text-sm text-gray-700 mb-2">
              $5 per tyre for 12 months of coverage
            </p>
            <ul className="list-disc pl-5 text-xs text-gray-700 mb-3 space-y-1">
              <li>50% replacement credit if damaged in first 6 months</li>
              <li>25% replacement credit if damaged in months 7-12</li>
              <li>Free puncture repairs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Premium Plan</h3>
            <p className="text-sm text-gray-700 mb-2">
              $10 per tyre for 24 months of coverage
            </p>
            <ul className="list-disc pl-5 text-xs text-gray-700 mb-3 space-y-1">
              <li>100% replacement if damaged in first 6 months</li>
              <li>75% replacement credit in months 7-12</li>
              <li>50% replacement credit in months 13-24</li>
              <li>Free puncture repairs and rotations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Fleet Plan</h3>
            <p className="text-sm text-gray-700 mb-2">
              Custom pricing for business fleets
            </p>
            <ul className="list-disc pl-5 text-xs text-gray-700 mb-3 space-y-1">
              <li>Tailored coverage based on fleet size and usage</li>
              <li>Quarterly tyre inspections included</li>
              <li>Priority replacement service</li>
              <li>Contact our business team for details</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Button className="bg-tyreBlue hover:bg-tyreBlue/90">
            Add Road Hazard Protection
          </Button>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-tyreBlue">How to File a Warranty Claim</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-tyreLightGray h-8 w-8 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold">1</span>
                  </div>
                  <h3 className="font-semibold">Contact Us</h3>
                </div>
                <p className="text-sm text-gray-700 ml-11">
                  Call us at +263 77 232 0377 or email warranty@tyres.co.zw to report your warranty claim. Include your purchase details and a description of the issue.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex-1">
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-tyreLightGray h-8 w-8 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold">2</span>
                  </div>
                  <h3 className="font-semibold">Tyre Inspection</h3>
                </div>
                <p className="text-sm text-gray-700 ml-11">
                  Bring your vehicle to our Harare location or an authorized partner for tyre inspection. Our technicians will assess whether the damage is covered under warranty.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex-1">
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-tyreLightGray h-8 w-8 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold">3</span>
                  </div>
                  <h3 className="font-semibold">Resolution</h3>
                </div>
                <p className="text-sm text-gray-700 ml-11">
                  If approved, we'll process your warranty claim according to the manufacturer's terms. If covered by our Road Hazard Protection, we'll apply the appropriate credit toward replacement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
        <div className="flex items-start">
          <div className="bg-tyreLightGray p-3 rounded-full mr-4 flex-shrink-0">
            <FileText className="h-6 w-6 text-tyreBlue" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3 text-tyreBlue">Required Documentation</h2>
            <p className="text-gray-700 mb-3">
              To process your warranty claim as quickly as possible, please have the following documents ready:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
              <li>Original purchase receipt from Tyres Zimbabwe</li>
              <li>Vehicle registration documents</li>
              <li>Tyre DOT code (found on the sidewall)</li>
              <li>Photos of the damaged tyre (if possible)</li>
              <li>Service records showing proper maintenance (if claiming abnormal wear)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-tyreDarkGray">
          Questions About Your Warranty?
        </h2>
        <p className="text-gray-700 mb-6">
          Our customer service team is available to help with any warranty-related questions or to assist with filing a claim.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/contact">
            <Button className="bg-tyreBlue hover:bg-tyreBlue/90">Contact Us</Button>
          </Link>
          <Link to="/faq">
            <Button variant="outline">View FAQs</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default Warranty;
