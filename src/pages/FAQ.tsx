
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

// FAQs data
const faqs = [
  {
    question: "What tyre size fits my Honda Fit?",
    answer: "Most Honda Fit models in Zimbabwe use 175/65R15 or 185/55R16 tyres. For your specific model year, we recommend using our Find My Size tool or checking your vehicle's door jamb or owner's manual for the manufacturer's recommendation."
  },
  {
    question: "How long do tyres typically last in Zimbabwe?",
    answer: "In Zimbabwe's conditions, quality tyres typically last between 40,000-60,000 kilometers depending on driving habits, road conditions, and maintenance. We recommend replacing tyres every 3-5 years regardless of tread depth due to rubber degradation in our climate."
  },
  {
    question: "How do I check my tyre's tread depth?",
    answer: "The legal minimum tread depth in Zimbabwe is 1.6mm. You can check this using a tread depth gauge or the simple 'coin test' - insert a 50 cent coin into the tread; if you can see the top of the design, your tyres need replacement. We recommend replacing tyres when they reach 3mm for optimal safety."
  },
  {
    question: "Can I mix different tyre brands on my vehicle?",
    answer: "While it's possible, we don't recommend mixing different tyre brands on your vehicle. At minimum, each axle (front and rear) should have matching tyres. Ideally, all four tyres should be the same brand and model for optimal handling, performance, and safety."
  },
  {
    question: "What's the best tyre pressure for my car?",
    answer: "The recommended tyre pressure depends on your specific vehicle and can be found in your owner's manual or on a sticker inside the driver's door jamb. Generally, most passenger cars in Zimbabwe perform best between 30-35 PSI. Remember that tyre pressure should be checked when tyres are cold."
  },
  {
    question: "Do you sell second-hand or part-worn tyres?",
    answer: "We primarily focus on new tyres with full warranty protection. While second-hand tyres can be more affordable initially, they often have shorter lifespans and potential safety concerns. We recommend new tyres for optimal safety and value, but if budget is a concern, please contact us about our economy range options."
  },
  {
    question: "How often should I rotate my tyres?",
    answer: "We recommend rotating your tyres every 10,000km or every 6 months, whichever comes first. This practice ensures even wear and extends the lifespan of your tyres, especially important on Zimbabwe's varied road surfaces that can cause uneven wear patterns."
  },
  {
    question: "What's the difference between all-season and all-terrain tyres?",
    answer: "All-season tyres are designed for everyday driving on paved roads in various weather conditions. All-terrain tyres have a more aggressive tread pattern for better traction off-road while still performing adequately on highways. For most urban drivers in Zimbabwe, all-season tyres are sufficient, but if you frequently travel to rural areas with unpaved roads, all-terrain tyres might be better."
  },
  {
    question: "Do you offer tyre fitting services?",
    answer: "Yes, we partner with fitting centers across Zimbabwe including Harare, Bulawayo, Mutare, and Gweru. When purchasing tyres from us, you can opt for delivery to your preferred fitting center where installation can be done at standard rates. Some of our premium tyres include fitting in the purchase price."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods suitable for the Zimbabwean market including EcoCash, Swipe (credit/debit cards), ZIPIT, USD cash payments, Mukuru, and Innbucks. For corporate clients, we also offer invoice terms with prior arrangement. Visit our Payment Methods page for more details."
  },
  {
    question: "How can I tell how old my tyres are?",
    answer: "You can determine your tyre's age by checking the DOT code on the sidewall. Look for a 4-digit number where the first two digits represent the week and the last two digits represent the year of manufacture. For example, '2320' means the tyre was manufactured in the 23rd week of 2020."
  },
  {
    question: "What warranty do you offer on tyres?",
    answer: "All new tyres purchased from Tyres Zimbabwe come with the manufacturer's warranty against defects in materials and workmanship, typically for 5-6 years from date of manufacture or until the tread wears out. Premium brands like Bridgestone and Michelin often include additional road hazard protection. See our Warranty Information page for specific details by brand."
  }
];

const FAQ = () => {
  return (
    <PageLayout 
      title="Frequently Asked Questions" 
      breadcrumbItems={[{ name: "FAQ", path: "/faq", current: true }]}
      metaTitle="Tyre FAQ for Zimbabwe | Common Questions About Tyres Answered"
      metaDescription="Get answers to common questions about tyres in Zimbabwe including sizing, longevity, pressure, brands and maintenance tips for Zimbabwean road conditions."
    >
      <div className="mb-8">
        <p className="text-gray-700">
          Find answers to the most common questions about tyres in Zimbabwe. Can't find what you're looking for? <Link to="/contact" className="text-tyreBlue hover:underline">Contact our team</Link> for personalized assistance.
        </p>
      </div>

      <div className="mb-10">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <div className="text-gray-700 pt-2 pb-4">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-tyreLightGray p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-tyreBlue">Still Need Help?</h2>
          <p className="text-gray-700 mb-4">
            Our team of tyre experts is available to answer your specific questions about finding the right tyres for your vehicle and Zimbabwe's road conditions.
          </p>
          <Link to="/contact">
            <Button className="bg-tyreBlue hover:bg-tyreBlue/90">Contact Us</Button>
          </Link>
        </div>
        
        <div className="bg-tyreLightGray p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-tyreBlue">Find Your Tyre Size</h2>
          <p className="text-gray-700 mb-4">
            Not sure what size tyres fit your vehicle? Use our easy tyre finder tool to get personalized recommendations.
          </p>
          <Link to="/find-size">
            <Button className="bg-tyreOrange hover:bg-tyreOrange/90">Find My Size</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQ;
