
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

const Returns = () => {
  return (
    <PageLayout 
      title="Returns & Exchanges Policy" 
      breadcrumbItems={[{ name: "Returns & Exchanges", path: "/returns", current: true }]}
      metaTitle="Tyre Returns & Exchanges Policy | Tyres Zimbabwe"
      metaDescription="Learn about our tyre return policy in Zimbabwe. Easy returns within 7 days for unused tyres and warranty-covered exchanges for manufacturer defects."
    >
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          At Tyres Zimbabwe, we stand behind the quality of our products and want you to be completely satisfied with your purchase. Our return and exchange policy is designed to be fair and transparent while complying with industry standards for tyre products.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-tyreBlue">Returns</h2>
          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Unused Tyres</h3>
              <p className="text-gray-700 mb-4">
                We accept returns of unused, unmounted tyres in original condition and packaging within 7 days of purchase or delivery, whichever is later.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Tyres must be in new condition with all original labels intact</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Original receipt or proof of purchase is required</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Return shipping costs are the responsibility of the customer (except in cases of our error)</span>
                </li>
              </ul>
              <div className="bg-tyreLightGray p-3 rounded-md text-sm">
                <strong>Refund Method:</strong> Original payment method (processing time: 5-7 business days)
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Used/Mounted Tyres</h3>
              <p className="text-gray-700 mb-4">
                For safety and regulatory reasons, we cannot accept returns of tyres that have been mounted on vehicles, except in cases covered by manufacturer warranty.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Tyres showing any signs of use or mounting cannot be returned for refund</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Warranty claims are handled separately from returns (see Warranty Information)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Manufacturing defects are covered by manufacturer warranties</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-tyreBlue">Exchanges</h2>
          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Size or Model Exchanges</h3>
              <p className="text-gray-700 mb-4">
                If you've purchased the wrong size or decided on a different tyre model, we offer exchanges within 7 days of purchase, subject to the following conditions:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Tyres must be in new condition with all labels intact</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Price difference will be charged or refunded accordingly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Exchange shipping costs may apply</span>
                </li>
              </ul>
              <div className="bg-tyreLightGray p-3 rounded-md text-sm">
                <strong>Exchange Process:</strong> Contact our customer service team to arrange the exchange
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Warranty Exchanges</h3>
              <p className="text-gray-700 mb-4">
                Tyres with manufacturing defects are eligible for warranty exchange as per the manufacturer's warranty policy.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Warranty claims require inspection by our technical team</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Prorated warranty applies based on tread wear</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Damage from road hazards, improper use, or negligence is not covered</span>
                </li>
              </ul>
              <div className="bg-tyreLightGray p-3 rounded-md text-sm">
                <strong>Learn More:</strong> <Link to="/warranty" className="text-tyreBlue hover:underline">See our detailed Warranty Information</Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-tyreLightGray p-6 rounded-lg mb-10">
        <h2 className="text-xl font-semibold mb-4 text-tyreBlue">Return Process</h2>
        <ol className="list-decimal ml-5 space-y-3 text-gray-700 mb-4">
          <li>
            <strong>Contact Us:</strong> Email info@tyres.co.zw or call +263 77 232 0377 to initiate your return or exchange request.
          </li>
          <li>
            <strong>Provide Information:</strong> Include your order number, product details, and reason for return.
          </li>
          <li>
            <strong>Receive Return Authorization:</strong> We'll provide you with a return authorization number and instructions.
          </li>
          <li>
            <strong>Return Shipping:</strong> Package the tyres securely in their original packaging and ship to our warehouse in Harare.
          </li>
          <li>
            <strong>Inspection:</strong> We'll inspect the returned tyres to ensure they meet our return criteria.
          </li>
          <li>
            <strong>Refund or Exchange:</strong> Once approved, we'll process your refund or ship your exchange item promptly.
          </li>
        </ol>
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> For customers in Harare, we can arrange pickup of return items for a small fee.
        </p>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-tyreDarkGray">
          Need to Return or Exchange?
        </h2>
        <p className="text-gray-700 mb-6">
          Our customer service team is ready to assist with your return or exchange request.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/contact">
            <Button className="bg-tyreBlue hover:bg-tyreBlue/90">Contact Us</Button>
          </Link>
          <Link to="/warranty">
            <Button variant="outline">Warranty Information</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default Returns;
