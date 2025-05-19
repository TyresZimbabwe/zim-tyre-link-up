
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <PageLayout 
      title="Contact Us" 
      breadcrumbItems={[{ name: "Contact", path: "/contact", current: true }]}
      metaTitle="Contact Tyres Zimbabwe - Get in Touch for the Best Tyre Deals in Zimbabwe"
      metaDescription="Contact our tyre experts in Harare, Zimbabwe for personalized assistance with finding the perfect tyres for your vehicle. Quick responses guaranteed."
    >
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-tyreBlue">Get In Touch</h2>
          <p className="mb-6 text-gray-700">
            Have questions about finding the right tyres for your vehicle in Zimbabwe? Need help with an order or warranty claim? Our team is here to help. Fill out the form and we'll get back to you quickly.
          </p>
          
          <div className="space-y-6 mb-6">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-tyreBlue mr-3 mt-1" />
              <div>
                <h3 className="font-medium">Visit Us</h3>
                <p className="text-gray-600">123 Samora Machel Avenue, Harare, Zimbabwe</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-tyreBlue mr-3 mt-1" />
              <div>
                <h3 className="font-medium">Call Us</h3>
                <p className="text-gray-600">+263 77 232 0377</p>
                <p className="text-gray-600">Monday to Friday: 8am - 5pm</p>
                <p className="text-gray-600">Saturday: 8am - 1pm</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-tyreBlue mr-3 mt-1" />
              <div>
                <h3 className="font-medium">Email Us</h3>
                <p className="text-gray-600">info@tyres.co.zw</p>
                <p className="text-gray-600">sales@tyres.co.zw</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-tyreBlue">WhatsApp Support</h3>
            <p className="mb-4 text-gray-700">
              For quick assistance, reach us on WhatsApp:
            </p>
            <Button className="bg-green-600 hover:bg-green-700">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                <path d="M11.5 0h1C18.1 0 23 5 23 11.5S18.1 23 11.5 23h-1C4.9 23 0 18 0 11.5S4.9 0 11.5 0zm1 21c4.7 0 8.5-3.8 8.5-8.5S17.2 4 12.5 4 4 7.8 4 12.5 7.8 21 12.5 21z"></path>
              </svg>
              Chat on WhatsApp
            </Button>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-tyreBlue">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-tyreBlue hover:bg-tyreBlue/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="mt-6 rounded-lg overflow-hidden h-64">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.53764050774374!2d31.033351978580823!3d-17.82881650409382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4fe05ff4ed1%3A0xb0d84a37c0d9c687!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1716774882337!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Tyres Zimbabwe Location"
            ></iframe>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
