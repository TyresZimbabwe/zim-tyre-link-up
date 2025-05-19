
import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

const LatestBlog = () => {
  // Get the 3 most recent blog posts
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="py-12 bg-tyreLightGray">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-tyreDarkGray">
            Latest from the Blog
          </h2>
          <Link 
            to="/blog" 
            className="text-tyreBlue hover:text-tyreOrange font-medium flex items-center"
          >
            View all articles 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/blog">
            <Button className="bg-tyreBlue hover:bg-tyreBlue/90">
              Read More Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
