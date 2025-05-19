
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share2, Facebook, Twitter, Linkedin, Calendar, Clock, User } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import BlogCard, { BlogPostProps } from "@/components/BlogCard";
import { formatDistanceToNow, format } from "date-fns";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the current post from the blog posts data
  const post = blogPosts.find(post => post.slug === slug);
  
  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  
  useEffect(() => {
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!post) {
    return (
      <PageLayout 
        title="Blog Post Not Found" 
        breadcrumbItems={[
          { name: "Blog", path: "/blog" },
          { name: "Not Found", path: "/blog/not-found", current: true }
        ]}
      >
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold mb-4">The article you're looking for doesn't exist.</h2>
          <p className="mb-8">It may have been removed or the URL might be incorrect.</p>
          <Link to="/blog">
            <Button className="bg-tyreBlue hover:bg-tyreBlue/90">
              Return to Blog
            </Button>
          </Link>
        </div>
      </PageLayout>
    );
  }
  
  return (
    <PageLayout
      title={post.title}
      breadcrumbItems={[
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}`, current: true }
      ]}
      metaTitle={`${post.title} | Tyres Zimbabwe Blog`}
      metaDescription={post.excerpt}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center text-sm text-gray-500">
          <div className="flex items-center mr-4">
            <User className="h-4 w-4 mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden mb-8">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-auto object-cover max-h-[400px]"
          />
        </div>
        
        <div className="prose max-w-none mb-10">
          {post.content || (
            <>
              <p>
                Zimbabwe's roads present unique challenges to vehicle owners. From the well-maintained highways connecting major cities to the rugged rural paths reaching remote villages, the driving conditions vary dramatically across the country. Choosing the right tyres for these diverse environments isn't just about comfort—it's about safety, fuel efficiency, and getting the best value from your investment.
              </p>
              
              <h2>Understanding Zimbabwe's Road Conditions</h2>
              
              <p>
                Before selecting tyres for your vehicle in Zimbabwe, it's essential to understand the various road conditions you'll encounter:
              </p>
              
              <ul>
                <li><strong>Urban Roads:</strong> Cities like Harare and Bulawayo feature mostly paved roads, though potholes and rough patches are common, especially after the rainy season.</li>
                <li><strong>Highways:</strong> Main intercity routes are generally paved but may have damaged sections requiring careful navigation.</li>
                <li><strong>Rural Roads:</strong> Many smaller towns and villages are connected by unpaved gravel or dirt roads that become challenging during the rainy season.</li>
                <li><strong>Off-road Trails:</strong> Access to farms, mining areas, and some tourist destinations often requires navigating rough terrain.</li>
              </ul>
              
              <h2>Key Factors to Consider When Choosing Tyres in Zimbabwe</h2>
              
              <h3>1. Tread Pattern</h3>
              
              <p>
                The tread pattern affects how your vehicle handles different surfaces:
              </p>
              
              <ul>
                <li><strong>Symmetrical Patterns:</strong> Offer good all-round performance and are suitable for city driving in Harare or Bulawayo.</li>
                <li><strong>Directional Patterns:</strong> Provide better water evacuation during the rainy season, reducing hydroplaning risk.</li>
                <li><strong>Asymmetrical Patterns:</strong> Offer a balance of performance, comfort, and water evacuation.</li>
                <li><strong>All-Terrain Patterns:</strong> Ideal if you frequently travel between urban areas and rural regions with unpaved roads.</li>
              </ul>
              
              <blockquote>
                <p>"For most Zimbabwean drivers who experience a mix of paved and occasional unpaved roads, a quality all-season tyre with good water displacement capability is the most practical choice."</p>
                <cite>— Tendai Moyo, Automotive Engineer</cite>
              </blockquote>
              
              <h3>2. Tyre Size</h3>
              
              <p>
                Always follow the manufacturer's recommendations for your specific vehicle model. Zimbabwean road conditions can be demanding, so avoid the temptation to deviate from recommended sizes unless you have expert guidance.
              </p>
              
              <h3>3. Load Rating</h3>
              
              <p>
                Many Zimbabwean families use their vehicles to transport heavy loads or travel with multiple passengers, especially when visiting rural areas. Ensure your tyres have an appropriate load rating for your typical usage.
              </p>
              
              <h3>4. Climate Adaptability</h3>
              
              <p>
                Zimbabwe experiences distinct wet and dry seasons:
              </p>
              
              <ul>
                <li><strong>Rainy Season (November-March):</strong> Tyres with good wet grip and water evacuation channels are essential.</li>
                <li><strong>Dry Season (April-October):</strong> Tyres need to handle hot road surfaces without excessive wear.</li>
              </ul>
              
              <h2>Best Tyre Types for Different Zimbabwean Vehicles</h2>
              
              <h3>For Urban Commuters (Harare, Bulawayo, Mutare)</h3>
              
              <p>
                If you primarily drive within city limits with occasional highway trips:
              </p>
              
              <ul>
                <li><strong>Recommendation:</strong> Quality all-season touring tyres from brands like Bridgestone Turanza or Continental ComfortContact.</li>
                <li><strong>Benefits:</strong> Good fuel efficiency, comfortable ride, adequate handling of occasional potholes, and reasonable lifespan.</li>
              </ul>
              
              <h3>For Highway Travelers</h3>
              
              <p>
                For those who frequently travel between major cities:
              </p>
              
              <ul>
                <li><strong>Recommendation:</strong> Highway terrain (H/T) tyres like Michelin Primacy or Goodyear EfficientGrip.</li>
                <li><strong>Benefits:</strong> Better fuel economy, quieter ride, longer tread life, and good wet and dry handling.</li>
              </ul>
              
              <h3>For Rural and Mixed Terrain</h3>
              
              <p>
                If your driving includes unpaved roads to growth points, rural schools, or farms:
              </p>
              
              <ul>
                <li><strong>Recommendation:</strong> All-terrain (A/T) tyres like Bridgestone Dueler A/T or Continental CrossContact.</li>
                <li><strong>Benefits:</strong> Better traction on gravel and dirt, more robust sidewalls to resist damage, while still providing acceptable on-road comfort.</li>
              </ul>
              
              <h2>Cost Considerations for Zimbabwean Buyers</h2>
              
              <p>
                Given Zimbabwe's economic challenges, tyre cost is a significant consideration. Consider these guidelines:
              </p>
              
              <ul>
                <li><strong>Premium Brands:</strong> Bridgestone, Michelin, Continental offer the best quality but at higher prices.</li>
                <li><strong>Mid-Range Brands:</strong> Dunlop, Firestone, and Yokohama provide good value with respectable performance.</li>
                <li><strong>Budget Options:</strong> Brands like Maxxis or Hankook offer acceptable performance for budget-conscious buyers.</li>
              </ul>
              
              <div className="bg-tyreLightGray p-4 rounded-lg my-8">
                <h4 className="font-bold mb-2">Warning About Second-Hand Tyres</h4>
                <p>
                  While second-hand tyres from Japan or South Africa may seem attractively priced, they often have hidden wear or damage. The safety risks generally outweigh the cost savings. If budget is a major constraint, consider new tyres from more affordable brands rather than used premium tyres.
                </p>
              </div>
              
              <h2>Maintenance Tips for Maximum Tyre Life in Zimbabwe</h2>
              
              <p>
                To get the most value from your tyres in Zimbabwe's challenging conditions:
              </p>
              
              <ul>
                <li>Maintain proper inflation pressure (check monthly)</li>
                <li>Rotate tyres every 10,000km</li>
                <li>Align wheels when you notice uneven wear</li>
                <li>Avoid overloading your vehicle</li>
                <li>Drive cautiously over potholes and rough terrain</li>
              </ul>
              
              <h2>Conclusion: Making the Right Choice</h2>
              
              <p>
                The right tyres for Zimbabwean roads balance durability, performance, and value. Consider your typical driving conditions, seasonal weather changes, and the specific needs of your vehicle when making your selection. A thoughtful choice will enhance safety, improve fuel economy, and provide the best return on your tyre investment.
              </p>
              
              <p>
                For personalized advice on selecting the perfect tyres for your vehicle and driving conditions in Zimbabwe, visit our <Link to="/find-size" className="text-tyreBlue hover:underline">Find My Size</Link> tool or <Link to="/contact" className="text-tyreBlue hover:underline">contact our tyre experts</Link> for a consultation.
              </p>
            </>
          )}
        </div>
        
        <div className="border-t border-gray-200 pt-6 mb-10">
          <div className="flex flex-wrap justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-sm text-gray-500 mr-3">Share this article:</span>
              <div className="inline-flex gap-2">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Link to="/blog">
                <Button variant="outline">Back to Blog</Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-semibold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPost;
