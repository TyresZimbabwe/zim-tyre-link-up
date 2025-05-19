
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Truck, Clock, Calendar } from "lucide-react";

const ShippingInfo = () => {
  return (
    <PageLayout 
      title="Shipping Information" 
      breadcrumbItems={[{ name: "Shipping Information", path: "/shipping", current: true }]}
      metaTitle="Tyre Delivery Options in Zimbabwe | Shipping Information"
      metaDescription="Learn about our tyre delivery options across Zimbabwe. Fast shipping to Harare, Bulawayo, Mutare, Gweru and other major cities with flexible delivery choices."
    >
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          Tyres Zimbabwe offers reliable delivery services across the country. We work with trusted courier partners to ensure your tyres reach you in perfect condition, no matter where you're located in Zimbabwe.
        </p>
        <p className="text-gray-700 mb-4">
          All deliveries include tracking information so you can monitor your order's progress. Our customer service team will also coordinate with you to ensure a convenient delivery time.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-tyreBlue">Delivery Areas & Timeframes</h2>
      <div className="mb-8 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>City/Region</TableHead>
              <TableHead>Estimated Delivery Time</TableHead>
              <TableHead>Delivery Fee</TableHead>
              <TableHead>Free Delivery Minimum</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Harare (CBD & Suburbs)</TableCell>
              <TableCell>1-2 business days</TableCell>
              <TableCell>$5</TableCell>
              <TableCell>Orders over $150</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Bulawayo</TableCell>
              <TableCell>2-3 business days</TableCell>
              <TableCell>$8</TableCell>
              <TableCell>Orders over $200</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Mutare</TableCell>
              <TableCell>2-3 business days</TableCell>
              <TableCell>$8</TableCell>
              <TableCell>Orders over $200</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Gweru</TableCell>
              <TableCell>2-3 business days</TableCell>
              <TableCell>$8</TableCell>
              <TableCell>Orders over $200</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Masvingo</TableCell>
              <TableCell>3-4 business days</TableCell>
              <TableCell>$10</TableCell>
              <TableCell>Orders over $250</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Kwekwe</TableCell>
              <TableCell>2-3 business days</TableCell>
              <TableCell>$8</TableCell>
              <TableCell>Orders over $200</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Kadoma</TableCell>
              <TableCell>2-3 business days</TableCell>
              <TableCell>$8</TableCell>
              <TableCell>Orders over $200</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Other Cities & Rural Areas</TableCell>
              <TableCell>4-7 business days</TableCell>
              <TableCell>$12-15</TableCell>
              <TableCell>Orders over $300</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
          <div className="bg-tyreLightGray p-3 rounded-full mb-3">
            <Truck className="h-6 w-6 text-tyreBlue" />
          </div>
          <h3 className="font-semibold mb-2">Delivery Partners</h3>
          <p className="text-sm text-gray-600">
            We work with Swift, Courier Connect, and local transporters to ensure reliable delivery across Zimbabwe. For rural areas, we coordinate with bus services when necessary.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
          <div className="bg-tyreLightGray p-3 rounded-full mb-3">
            <Clock className="h-6 w-6 text-tyreBlue" />
          </div>
          <h3 className="font-semibold mb-2">Delivery Hours</h3>
          <p className="text-sm text-gray-600">
            Our standard delivery hours are Monday to Friday, 8:00 AM to 5:00 PM, and Saturday from 8:00 AM to 1:00 PM. We'll coordinate with you to ensure someone is available to receive the delivery.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
          <div className="bg-tyreLightGray p-3 rounded-full mb-3">
            <Calendar className="h-6 w-6 text-tyreBlue" />
          </div>
          <h3 className="font-semibold mb-2">Order Processing</h3>
          <p className="text-sm text-gray-600">
            Orders placed before 12:00 PM are processed the same day (stock permitting). Orders placed after 12:00 PM or during weekends will be processed the next business day.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-tyreBlue">Shipping Policies</h2>
      <div className="space-y-4 mb-10">
        <div>
          <h3 className="font-semibold mb-1">In-Stock Items</h3>
          <p className="text-gray-700 text-sm">
            Items marked as "In Stock" are available for immediate shipping from our Harare warehouse. These items typically ship within 24 hours of order confirmation.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-1">Special Order Items</h3>
          <p className="text-gray-700 text-sm">
            Some specialty tyres or uncommon sizes may need to be specially ordered. These items typically have a 7-14 day lead time, which we'll clearly communicate during the ordering process.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-1">Order Tracking</h3>
          <p className="text-gray-700 text-sm">
            Once your order ships, you'll receive a tracking number via SMS and email. You can use this to monitor your delivery status or contact our customer service team for updates.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-1">Delivery Confirmation</h3>
          <p className="text-gray-700 text-sm">
            Upon delivery, you'll be asked to inspect and sign for the tyres. Please take a moment to verify that the correct products have been delivered before signing.
          </p>
        </div>
      </div>

      <div className="bg-tyreLightGray p-6 rounded-lg mb-10">
        <h2 className="text-xl font-semibold mb-4 text-tyreBlue">Fitment Center Delivery</h2>
        <p className="text-gray-700 mb-4">
          For your convenience, we can deliver directly to your preferred tyre fitment center in any major Zimbabwean city. We have partnerships with reputable fitting centers nationwide.
        </p>
        <p className="text-gray-700 mb-4">
          Simply indicate your preferred fitting center during checkout, and we'll coordinate the delivery. Please note that fitting fees are payable directly to the center unless you've purchased our premium installation package.
        </p>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-tyreDarkGray">
          Questions About Shipping?
        </h2>
        <p className="text-gray-700 mb-6">
          Our customer service team is available to help with any questions about delivery options, timeframes, or special requirements.
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

export default ShippingInfo;
