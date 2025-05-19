
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Tatenda M.",
    location: "Harare",
    quote: "Found the perfect tyres for my Toyota Fortuner at a great price. The delivery was prompt and the quality is excellent. Will definitely use ZimTyre LinkUp again!",
    rating: 5,
  },
  {
    id: 2,
    name: "Chiedza N.",
    location: "Bulawayo",
    quote: "As a business owner with a fleet of vehicles, finding a reliable tyre supplier has been challenging until I discovered ZimTyre LinkUp. Excellent service!",
    rating: 5,
  },
  {
    id: 3,
    name: "Tonderai R.",
    location: "Mutare",
    quote: "The website made it incredibly easy to find the right tyres for my vehicle. I received them within 3 days, and the installation service recommendation was spot on.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-tyreDarkGray mb-2">Customer Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers are saying about their experience with ZimTyre LinkUp.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-medium text-tyreBlue">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
