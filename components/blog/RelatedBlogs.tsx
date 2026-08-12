import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
interface BlogItem {
  id: number;
  title: string;
  image: string;
  date: string;
  slug: string;
  description: string;
}
interface RelatedBlogsProps {
  relatedPosts: BlogItem[];
}

export default function RelatedBlogs({ relatedPosts }: RelatedBlogsProps) {
  if (relatedPosts.length === 0) return null;

  return (
    <section className="pb-24 px-6 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          {/* <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-800 block mb-3">
            Continue Reading
          </span> */}
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-zinc-950 uppercase">
            More from the Journal
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
          {relatedPosts.map((related,idx) => (
            <Link
              key={idx}
              href={`/blogs/${related.slug}`}
              className="group flex flex-col"
            >
              {/* Thumbnail */}{related.image && (
              <div className="relative aspect-[4/3] w-full overflow-hidden mb-4 bg-zinc-100">
                <Image
                  src={related.image}
                  alt={related.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>)}

              {/* Meta */}
              <span className="text-[10px] sm:text-[11px] md:text-[12px] font-mono text-zinc-950 tracking-widest uppercase mb-2">
                {related.date}
              </span>

              {/* Title */}
              <h3 className="text-xs sm:text-sm md:text-md font-normal leading-snug text-zinc-900 group-hover:text-[#002b6b] transition-colors duration-300 normal-case line-clamp-2 mb-3">
                {related.title}
              </h3>

              {/* Read link */}
              <div className="pt-3 flex items-center gap-1 text-[10px] sm:text-[11px] md:text-[12px] font-semibold tracking-wider uppercase text-zinc-900 group-hover:text-zinc-950 transition-colors mt-auto">
                Read Article
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
