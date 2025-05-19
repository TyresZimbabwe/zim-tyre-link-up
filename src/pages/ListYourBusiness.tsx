
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PageLayout from "@/components/PageLayout";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

// Sample cities for the form
const cities = [
  "Harare", "Bulawayo", "Mutare", "Gweru", "Masvingo", 
  "Kwekwe", "Kadoma", "Chinhoyi", "Victoria Falls", "Other"
];

// Sample services for the form
const availableServices = [
  { id: "tyre-sales", label: "Tyre Sales" },
  { id: "wheel-alignment", label: "Wheel Alignment" },
  { id: "wheel-balancing", label: "Wheel Balancing" },
  { id: "puncture-repairs", label: "Puncture Repairs" },
  { id: "mobile-fitting", label: "Mobile Fitting" },
  { id: "nitrogen-inflation", label: "Nitrogen Inflation" },
  { id: "tyre-rotation", label: "Tyre Rotation" },
  { id: "emergency-service", label: "24/7 Emergency Service" }
];

// Sample brands for the form
const availableBrands = [
  { id: "bridgestone", label: "Bridgestone" },
  { id: "michelin", label: "Michelin" },
  { id: "goodyear", label: "Goodyear" },
  { id: "dunlop", label: "Dunlop" },
  { id: "pirelli", label: "Pirelli" },
  { id: "continental", label: "Continental" },
  { id: "firestone", label: "Firestone" },
  { id: "yokohama", label: "Yokohama" },
  { id: "other", label: "Other (Please specify in description)" }
];

// Form validation schema
const formSchema = z.object({
  businessName: z.string().min(2, {
    message: "Business name must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }).max(500, {
    message: "Description cannot exceed 500 characters."
  }),
  contactPhone: z.string().min(9, {
    message: "Please enter a valid phone number.",
  }),
  contactEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  websiteUrl: z.string().url({
    message: "Please enter a valid URL.",
  }).optional().or(z.literal("")),
  facebookUrl: z.string().optional().or(z.literal("")),
  instagramUrl: z.string().optional().or(z.literal("")),
  whatsappNumber: z.string().optional().or(z.literal("")),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  city: z.string({
    required_error: "Please select a city.",
  }),
  services: z.array(z.string()).min(1, {
    message: "Please select at least one service.",
  }),
  brands: z.array(z.string()).min(1, {
    message: "Please select at least one brand.",
  }),
  operatingHours: z.string().min(5, {
    message: "Please provide your operating hours.",
  }),
  additionalNotes: z.string().optional(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions." }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ListYourBusiness = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      description: "",
      contactPhone: "",
      contactEmail: "",
      websiteUrl: "",
      facebookUrl: "",
      instagramUrl: "",
      whatsappNumber: "",
      address: "",
      city: "",
      services: [],
      brands: [],
      operatingHours: "",
      additionalNotes: "",
      termsAccepted: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // Check if user is authenticated
      const { data: userData } = await supabase.auth.getUser();
      
      if (!userData?.user) {
        toast({
          title: "Authentication Required",
          description: "Please sign in to submit your business.",
          variant: "destructive",
        });
        // You would redirect to login page here
        return;
      }
      
      // Submit business for review
      const { error } = await supabase.from('business_submissions').insert({
        business_name: data.businessName,
        description: data.description,
        contact_phone: data.contactPhone,
        contact_email: data.contactEmail,
        website_url: data.websiteUrl || null,
        facebook_url: data.facebookUrl || null,
        instagram_url: data.instagramUrl || null,
        whatsapp_number: data.whatsappNumber || null,
        address: data.address,
        city: data.city,
        services: data.services,
        brands: data.brands,
        operating_hours: data.operatingHours,
        additional_notes: data.additionalNotes || null,
        user_id: userData.user.id
      });

      if (error) throw error;

      toast({
        title: "Submission Successful",
        description: "Your business has been submitted for review. We'll contact you soon.",
      });
      
      navigate("/directory");
    } catch (error) {
      console.error("Error submitting business:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your business. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <PageLayout 
      title="List Your Business" 
      breadcrumbItems={[{ name: "List Your Business", path: "/list-your-business", current: true }]}
      metaTitle="Add Your Tyre Business to Our Zimbabwe Directory | List Your Business"
      metaDescription="Join our comprehensive directory of tyre suppliers in Zimbabwe. Get discovered by potential customers looking for your tyre products and services."
    >
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          Add your tyre business to our directory to reach thousands of potential customers looking for tyre services across Zimbabwe. Once submitted, your listing will be reviewed by our team before being published.
        </p>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Business Information Section */}
                <div className="space-y-4 md:col-span-2">
                  <h2 className="text-xl font-semibold text-tyreBlue">Business Information</h2>
                  
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Your business name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Description*</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your business, specialties, and what sets you apart..."
                            className="resize-none min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Include information about your experience, specialties, and why customers should choose you.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City*</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a city" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {cities.map((city) => (
                                <SelectItem key={city} value={city}>{city}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address*</FormLabel>
                          <FormControl>
                            <Input placeholder="Your business address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="operatingHours"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Operating Hours*</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Mon-Fri: 8AM-5PM, Sat: 8AM-1PM" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Contact Information Section */}
                <div className="space-y-4 md:col-span-2">
                  <h2 className="text-xl font-semibold text-tyreBlue">Contact Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="contactPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number*</FormLabel>
                          <FormControl>
                            <Input placeholder="Your business phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="contactEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address*</FormLabel>
                          <FormControl>
                            <Input placeholder="Your business email" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="websiteUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://yourwebsite.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="whatsappNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>WhatsApp Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Your WhatsApp number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="facebookUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Facebook URL</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Facebook page URL" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="instagramUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Instagram URL</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Instagram page URL" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Services & Brands Section */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-tyreBlue">Services Offered*</h2>
                  
                  <FormField
                    control={form.control}
                    name="services"
                    render={() => (
                      <FormItem>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {availableServices.map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="services"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item.label)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, item.label])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== item.label
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">
                                      {item.label}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-tyreBlue">Brands Offered*</h2>
                  
                  <FormField
                    control={form.control}
                    name="brands"
                    render={() => (
                      <FormItem>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {availableBrands.map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="brands"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item.label)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, item.label])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== item.label
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">
                                      {item.label}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Additional Information Section */}
                <div className="space-y-4 md:col-span-2">
                  <h2 className="text-xl font-semibold text-tyreBlue">Additional Information</h2>
                  
                  <FormField
                    control={form.control}
                    name="additionalNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Notes</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any other information you'd like to add..."
                            className="resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Include any additional information that might be relevant to customers.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the terms and conditions*
                          </FormLabel>
                          <FormDescription>
                            By submitting this form, I confirm that all information provided is accurate and I am authorized to submit this business listing.
                          </FormDescription>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="bg-tyreBlue hover:bg-tyreBlue/90">
                  Submit Business for Review
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="bg-tyreLightGray p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-tyreBlue">What Happens Next?</h2>
        <div className="space-y-3 text-gray-700">
          <p>After submitting your business information:</p>
          <ol className="list-decimal ml-5 space-y-2">
            <li>Our team will review your submission within 1-2 business days.</li>
            <li>If approved, your business will be added to our directory.</li>
            <li>You'll receive an email notification when your listing is live.</li>
            <li>You can then manage and update your listing through your account.</li>
          </ol>
          <p className="mt-4">
            For any questions about the submission process, please <a href="/contact" className="text-tyreBlue hover:underline">contact our team</a>.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default ListYourBusiness;
