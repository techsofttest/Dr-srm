import React from "react";
import BlogCard from "./BlogCard";

interface BlogItem {
  id: number;
  title: string;
  image: string;
  date: string;
  slug: string;
  description: string;
}

interface BlogGridProps {
  posts: BlogItem[];
}
export default function BlogGrid({ posts }: BlogGridProps) {
  // Don't show the section if there are no blogs
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <main
      id="blogs-content"
      className="py-24 md:py-32 px-4 sm:px-8 bg-white w-full select-none"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 items-start mb-12">
          {posts.map((post ,idx) => (
            <BlogCard key={idx} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}