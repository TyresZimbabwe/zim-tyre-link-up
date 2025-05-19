
import React from "react";
import PageLayout from "@/components/PageLayout";
import BlogCard, { BlogPostProps } from "@/components/BlogCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Sample blog posts data
const blogPosts: BlogPostProps[] = [
  {
    id: 1,
    title: "How to Choose the Right Tyres for Zimbabwean Roads",
    excerpt: "Zimbabwe's diverse road conditions demand specific tyre features. This guide helps you select the perfect tyres for city driving in Harare to rural roads in Matabeleland.",
    slug: "how-to-choose-right-tyres-zimbabwean-roads",
    featuredImage: "https://images.unsplash.com/photo-1600039641872-afc32af5a579",
    date: new Date("2025-05-05"),
    author: "Tendai Moyo",
    readTime: 8
  },
  {
    id: 2,
    title: "Top 5 Tyre Brands Available in Zimbabwe (2025 Review)",
    excerpt: "We compare the top tyre brands available in Zimbabwe, analyzing performance, longevity, and value for money to help you make an informed purchase decision.",
    slug: "top-5-tyre-brands-zimbabwe-2025-review",
    featuredImage: "https://images.unsplash.com/photo-1577324216086-515f6e8de7c0",
    date: new Date("2025-04-28"),
    author: "Chiedza Mutasa",
    readTime: 10
  },
  {
    id: 3,
    title: "Are Second-Hand Tyres Worth It in Zimbabwe? Pros & Cons",
    excerpt: "With economic pressures in Zimbabwe, many drivers consider second-hand tyres. This article examines when they might be worth considering and when they're a safety risk.",
    slug: "are-second-hand-tyres-worth-it-zimbabwe",
    featuredImage: "https://images.unsplash.com/photo-1644797558951-0cb381d75a18",
    date: new Date("2025-04-22"),
    author: "Farai Nyamutswa",
    readTime: 7
  },
  {
    id: 4,
    title: "Where to Buy Affordable Tyres in Harare, Bulawayo & Mutare",
    excerpt: "Finding quality tyres at good prices in Zimbabwe's major cities. We explore the best local shops and online options for budget-conscious drivers.",
    slug: "where-buy-affordable-tyres-harare-bulawayo-mutare",
    featuredImage: "https://images.unsplash.com/photo-1600039644438-302f31262ae6",
    date: new Date("2025-04-15"),
    author: "Tatenda Mhuri",
    readTime: 6
  },
  {
    id: 5,
    title: "Understanding Tyre Sizes in Zimbabwe: Complete Guide",
    excerpt: "Confused by tyre size markings? This comprehensive guide explains everything from sidewall numbers to load ratings specific to vehicles common in Zimbabwe.",
    slug: "understanding-tyre-sizes-zimbabwe-complete-guide",
    featuredImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    date: new Date("2025-04-10"),
    author: "Tendai Moyo",
    readTime: 9
  },
  {
    id: 6,
    title: "How Often Should You Replace Your Tyres in Zimbabwe?",
    excerpt: "Zimbabwe's unique road conditions affect tyre longevity. Learn the signs of wear and when it's time to replace your tyres for safety and performance.",
    slug: "how-often-replace-tyres-zimbabwe",
    featuredImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    date: new Date("2025-04-05"),
    author: "Chiedza Mutasa",
    readTime: 7
  },
  {
    id: 7,
    title: "Winter vs Summer Tyres: Do You Need Both in Zimbabwe?",
    excerpt: "While Zimbabwe doesn't experience extreme winters, seasonal variations do affect driving conditions. Find out if specialized seasonal tyres are worth the investment.",
    slug: "winter-vs-summer-tyres-zimbabwe",
    featuredImage: "https://images.unsplash.com/photo-1600039641872-afc32af5a579",
    date: new Date("2025-03-28"),
    author: "Farai Nyamutswa",
    readTime: 8
  },
  {
    id: 8,
    title: "The Best Tyres for Fuel Efficiency on Zimbabwean Vehicles",
    excerpt: "With fuel prices in Zimbabwe constantly fluctuating, fuel-efficient tyres can help reduce running costs. Discover the most economical options for common vehicles.",
    slug: "best-tyres-fuel-efficiency-zimbabwean-vehicles",
    featuredImage: "https://images.unsplash.com/photo-1577324216086-515f6e8de7c0",
    date: new Date("2025-03-20"),
    author: "Tatenda Mhuri",
    readTime: 9
  },
  {
    id: 9,
    title: "Avoiding Tyre Scams in Zimbabwe: What to Watch Out For",
    excerpt: "The Zimbabwean market sometimes sees counterfeit or misrepresented tyres. Learn how to identify genuine products and avoid common scams when shopping for tyres.",
    slug: "avoiding-tyre-scams-zimbabwe",
    featuredImage: "https://images.unsplash.com/photo-1644797558951-0cb381d75a18",
    date: new Date("2025-03-15"),
    author: "Tendai Moyo",
    readTime: 6
  },
  {
    id: 10,
    title: "How to Read Your Tyre's Manufacturing Date & Warranty",
    excerpt: "Did you know tyres have expiration dates? Learn how to decode the manufacturing date on your tyres and understand warranty implications for Zimbabwean consumers.",
    slug: "how-read-tyre-manufacturing-date-warranty",
    featuredImage: "https://images.unsplash.com/photo-1600039644438-302f31262ae6",
    date: new Date("2025-03-08"),
    author: "Chiedza Mutasa",
    readTime: 5
  },
  {
    id: 11,
    title: "What's the Best Tyre Pressure for Cars in Zimbabwe?",
    excerpt: "Proper tyre pressure is crucial for safety and fuel efficiency. This guide covers recommended pressures for popular vehicles in Zimbabwe and adjustments for local conditions.",
    slug: "best-tyre-pressure-cars-zimbabwe",
    featuredImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    date: new Date("2025-03-02"),
    author: "Farai Nyamutswa",
    readTime: 7
  },
  {
    id: 12,
    title: "Top Causes of Tyre Wear in Zimbabwe & How to Prevent Them",
    excerpt: "Zimbabwe's road conditions present unique challenges for tyre longevity. Learn about the main causes of premature tyre wear and how to extend your tyres' lifespan.",
    slug: "top-causes-tyre-wear-zimbabwe-prevention",
    featuredImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    date: new Date("2025-02-25"),
    author: "Tatenda Mhuri",
    readTime: 8
  }
];

// Categories for filtering
const categories = [
  "All Posts",
  "Tyre Buying Guides",
  "Maintenance Tips",
  "Safety Information",
  "Product Reviews",
  "Local Insights"
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = React.useState("All Posts");

  return (
    <PageLayout 
      title="Tyre Blog & Resources" 
      breadcrumbItems={[{ name: "Blog", path: "/blog", current: true }]}
      metaTitle="Tyre Tips & Guides for Zimbabwe | Expert Advice & Resources"
      metaDescription="Read expert articles on tyres in Zimbabwe. Get maintenance tips, buying guides, and advice on choosing the right tyres for Zimbabwean roads and conditions."
    >
      <div className="mb-8">
        <p className="text-gray-700 mb-6">
          Welcome to the Tyres Zimbabwe blog, your source for expert advice, local insights, and practical information about tyres in Zimbabwe. Our articles are written by industry professionals with deep knowledge of local road conditions and vehicle requirements.
        </p>
        
        <div className="overflow-x-auto pb-2 mb-8">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`rounded-full ${
                  activeCategory === category ? "bg-tyreBlue hover:bg-tyreBlue/90" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button variant="outline" className="border-tyreBlue text-tyreBlue">
          Load More Articles
        </Button>
      </div>
    </PageLayout>
  );
};

export default Blog;
