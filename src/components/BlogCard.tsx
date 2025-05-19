
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

export interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  featuredImage: string;
  date: Date;
  author: string;
  readTime: number;
}

const BlogCard: React.FC<{ post: BlogPostProps; className?: string }> = ({ post, className = "" }) => {
  return (
    <Link to={`/blog/${post.slug}`} className={className}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
        <div className="aspect-[16/9] relative overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <span>{formatDistanceToNow(new Date(post.date), { addSuffix: true })}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
          <h3 className="font-bold text-lg mb-2 line-clamp-2 text-tyreDarkGray hover:text-tyreBlue transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="mt-3 flex items-center">
            <div className="text-sm">
              <span className="text-tyreBlue font-medium">{post.author}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
