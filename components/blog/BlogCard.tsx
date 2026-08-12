import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
interface BlogItem {
       id:number;
      title: string;
      image: string;
      date: string;
      slug:string;
      description: string;
  };
interface BlogGridProps {
  post: BlogItem;
}

export default function BlogCard({ post }: BlogGridProps) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="flex flex-col bg-transparent group cursor-pointer"
    >
      {/* Blog Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden mb-6 bg-zinc-100">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 1024px) 100vw, 30vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-snug text-zinc-950 mb-2 sm:mb-3 group-hover:text-[#002b6b] transition-colors duration-300 normal-case line-clamp-2">
        {post.title}
      </h3>

      {/* Summary */}
      <div className="text-zinc-950 text-[10px] sm:text-xs md:text-sm leading-relaxed mb-4 sm:mb-6 font-light normal-case line-clamp-3" dangerouslySetInnerHTML={{ __html:post.description}} />

      {/* Bottom row */}
      <div className="flex justify-between items-center border-t border-zinc-200 pt-3 sm:pt-4 mt-auto">
        <span className="text-[10px] sm:text-xs md:text-sm text-zinc-950 font-mono">{post.date}</span>
        <div className="flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[10px] md:text-[11px] font-bold tracking-wider uppercase text-zinc-950 group-hover:text-[#002b6b] transition-colors">
          Read Article
          <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
