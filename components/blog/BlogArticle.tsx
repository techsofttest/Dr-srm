import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

import ShareButtons from "./ShareButtons";

interface BlogItem {
  id: number;
  title: string;
  image: string;
  date: string;
  slug: string;
  description: string;
}

interface BlogArticleProps {
  post: BlogItem;
    contact: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
}

export default function BlogArticle({ post ,contact}: BlogArticleProps) {
  return (
    
    <article className="bg-white pb-16 md:pb-24 pt-34 md:pt-42">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">

        {/* Back link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-700 hover:text-[#002b6b] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          All Articles
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-light leading-tight tracking-tight text-zinc-950 mb-5 normal-case">
          {post.title}
        </h1>

        {/* Date */}
        <div className="flex items-center gap-2 mb-12">
          <Calendar className="w-3.5 h-3.5 text-zinc-950" />

          <time className="text-sm text-zinc-950 tracking-widest uppercase">
            {post.date}
          </time>
        </div>

        {/* Hero Image */}
        {post.image && (
          <div className="relative w-full aspect-[16/9] overflow-hidden mb-14 bg-zinc-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        )}

        {/* Blog Description / HTML Content */}
        <div
          className="
            blog-content
            [&_p]:text-sm    
            [&_p]:md:text-base
            [&_p]:leading-[1.85]
            [&_p]:text-zinc-800
            [&_p]:font-normal
            [&_p]:normal-case

            [&_h2]:text-xl
            [&_h2]:md:text-2xl
            [&_h2]:font-normal
            [&_h2]:text-zinc-950
            [&_h2]:pt-4
            [&_h2]:uppercase 
            [&_h2]:tracking-wider            [&_h3]:mt-10
            [&_h3]:space-y-4

            [&_h3]:text-xl
            [&_h3]:md:text-2xl
            [&_h3]:font-normal
            [&_h3]:text-zinc-950
            [&_h3]:mt-10
            [&_h3]:mb-4

            [&_h4]:text-lg
            [&_h4]:font-semibold
            [&_h4]:text-zinc-950
            [&_h4]:mt-8
            [&_h4]:mb-3

            [&_strong]:font-semibold
            [&_strong]:text-zinc-950

            [&_em]:italic

            [&_a]:text-[#002b6b]
            [&_a]:underline
            [&_a]:underline-offset-4
            [&_a]:hover:text-zinc-950

            [&_ul]:list-disc
            [&_ul]:pl-6
            [&_ul]:mb-6
            [&_ul]:space-y-2

            [&_ol]:list-decimal
            [&_ol]:pl-6
            [&_ol]:mb-6
            [&_ol]:space-y-2

            [&_li]:pl-1

            [&_img]:rounded-xl
            [&_img]:w-full
            [&_img]:h-auto
            [&_img]:my-8

            [&_blockquote]:text-base
            [&_blockquote]:md:text-lg
            [&_blockquote]:font-normal 
            [&_blockquote]:leading-relaxed 
            [&_blockquote]:text-zinc-800
            [&_blockquote]:normal-case 
            [&_blockquote]:border-l-2 
            [&_blockquote]:border-zinc-950
            [&_blockquote]:pl-5 
            [&_blockquote]:mb-12

            [&_hr]:my-12
            [&_hr]:border-zinc-200

            [&_table]:w-full
            [&_table]:border-collapse
            [&_table]:my-8

            [&_th]:border
            [&_th]:border-zinc-200
            [&_th]:bg-zinc-50
            [&_th]:p-3
            [&_th]:text-left
            [&_th]:font-semibold

            [&_td]:border
            [&_td]:border-zinc-200
            [&_td]:p-3
          "
          dangerouslySetInnerHTML={{
            __html: post.description || "",
          }}
        />

        {/* Share buttons */}
        <div className="mt-16">
          <ShareButtons title={post.title} contact={contact} />
        </div>

        {/* Divider */}
        <div className="mt-20 border-t border-zinc-200" />

      </div>
    </article>
  );
}