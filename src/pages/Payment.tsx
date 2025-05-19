
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Smartphone, DollarSign, Building, ShieldCheck } from "lucide-react";

const Payment = () => {
  return (
    <PageLayout 
      title="Payment Methods" 
      breadcrumbItems={[{ name: "Payment Methods", path: "/payment", current: true }]}
      metaTitle="Payment Options for Buying Tyres in Zimbabwe | Flexible Payment Methods"
      metaDescription="Explore all payment options available for purchasing tyres in Zimbabwe including EcoCash, card payments, ZIPIT, USD cash, and more at Tyres Zimbabwe."
    >
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          At Tyres Zimbabwe, we understand the unique payment challenges in our economy. We offer a variety of payment methods to make your tyre purchase as convenient as possible, including mobile money, bank transfers, and USD cash options.
        </p>
        <p className="text-gray-700 mb-4">
          All prices on our website are listed in USD for stability, but we accept payments in multiple currencies at the prevailing interbank rate on the day of payment.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="overflow-hidden">
          <div className="p-6 h-full flex flex-col">
            <div className="bg-tyreLightGray p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Smartphone className="h-6 w-6 text-tyreBlue" />
            </div>
            <h2 className="text-xl font-semibold mb-3 text-tyreBlue">Mobile Money</h2>
            <div className="space-y-3 mb-6 flex-grow">
              <div>
                <h3 className="font-semibold text-sm">EcoCash</h3>
                <p className="text-sm text-gray-700">
                  Send payment to our merchant code: 321123. Please include your order number as reference.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">OneMoney</h3>
                <p className="text-sm text-gray-700">
                  Send payment to 0782 123 456. Please include your order number as reference.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Telecash</h3>
                <p className="text-sm text-gray-700">
                  Send payment to 0732 987 654. Please include your order number as reference.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-md text-xs text-gray-600 mt-auto">
              Mobile money payments are confirmed within 15 minutes during business hours.
            </div>
          </div>
        </Card>
        
        <Card className="overflow-hidden">
          <div className="p-6 h-full flex flex-col">
            <div className="bg-tyreLightGray p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <CreditCard className="h-6 w-6 text-tyreBlue" />
            </div>
            <h2 className="text-xl font-semibold mb-3 text-tyreBlue">Cards & Bank Transfers</h2>
            <div className="space-y-3 mb-6 flex-grow">
              <div>
                <h3 className="font-semibold text-sm">Card Payments (Swipe)</h3>
                <p className="text-sm text-gray-700">
                  We accept Visa, Mastercard, and local bank cards at our Harare office. Card payments can also be processed for delivery orders.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">ZIPIT</h3>
                <p className="text-sm text-gray-700">
                  Transfer to our CBZ account: 1234567890123. Please include your order number as reference.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Bank Transfer</h3>
                <p className="text-sm text-gray-700">
                  For large orders, we accept direct bank transfers. Contact us for our banking details.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-md text-xs text-gray-600 mt-auto">
              Bank transfers may take 1-2 business days to reflect in our account.
            </div>
          </div>
        </Card>
        
        <Card className="overflow-hidden">
          <div className="p-6 h-full flex flex-col">
            <div className="bg-tyreLightGray p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-tyreBlue" />
            </div>
            <h2 className="text-xl font-semibold mb-3 text-tyreBlue">Cash & Alternative Payments</h2>
            <div className="space-y-3 mb-6 flex-grow">
              <div>
                <h3 className="font-semibold text-sm">USD Cash</h3>
                <p className="text-sm text-gray-700">
                  Cash payments in US Dollars are accepted at our Harare office or can be paid to our delivery personnel upon receipt.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Mukuru</h3>
                <p className="text-sm text-gray-700">
                  Send payment to our Mukuru account. Contact us for account details and instructions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Innbucks</h3>
                <p className="text-sm text-gray-700">
                  Send payment to our Innbucks account: 0771 123 456. Please include your order number.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-md text-xs text-gray-600 mt-auto">
              Cash payments must be exact amount as our delivery personnel cannot provide change.
            </div>
          </div>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-tyreBlue">Corporate & Fleet Customers</h2>
      <div className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex items-start">
            <div className="bg-tyreLightGray p-3 rounded-full mr-4 flex-shrink-0">
              <Building className="h-6 w-6 text-tyreBlue" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Business Payment Options</h3>
              <p className="text-gray-700 mb-3">
                We offer special payment terms for corporate and fleet customers, including:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1 text-sm">
                <li>30-day invoice terms (subject to credit approval)</li>
                <li>Bulk purchase discounts</li>
                <li>Monthly consolidated billing</li>
                <li>Dedicated account manager for fleet requirements</li>
              </ul>
              <p className="text-gray-700 text-sm">
                To apply for a corporate account, please contact our business team at <span className="text-tyreBlue">corporate@tyres.co.zw</span> or call <span className="font-semibold">+263 77 232 0377</span> to discuss your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-tyreLightGray p-6 rounded-lg mb-10">
        <div className="flex items-start">
          <div className="bg-white p-3 rounded-full mr-4 flex-shrink-0">
            <ShieldCheck className="h-6 w-6 text-tyreBlue" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3 text-tyreBlue">Payment Security</h2>
            <p className="text-gray-700 mb-3">
              We take your payment security seriously. All electronic payments are processed through secure and encrypted channels. We never store your full card details or sensitive payment information.
            </p>
            <p className="text-gray-700 text-sm">
              For added security, we provide digital receipts for all transactions and recommend that customers keep their payment confirmation until their order is successfully delivered.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-tyreDarkGray">
          Questions About Payment?
        </h2>
        <p className="text-gray-700 mb-6">
          Our customer service team is ready to assist with any payment-related inquiries or provide guidance on the most convenient payment option for your situation.
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

export default Payment;
