"use client";

import React, { useState, useEffect } from "react";
import { Link2, Check } from "lucide-react";

interface ShareButtonsProps {
  title: string;
    contact: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
}

export default function ShareButtons({ title ,contact}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy URL: ", err);
    }
  };

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="max-w-3xl mx-auto bg-zinc-950 text-white p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 select-none">
      <span className="text-sm font-bold normal-case tracking-wider">
        Share this Article
      </span>
      <div className="flex items-center gap-3">
        {/* Twitter */}
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-none border border-white/25 bg-zinc-900 flex items-center justify-center text-white hover:text-black hover:bg-white hover:border-white transition-all duration-300"
          aria-label="Share on Twitter"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-none border border-white/25 bg-zinc-900 flex items-center justify-center text-white hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300"
          aria-label="Share on Facebook"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-none border border-white/25 bg-zinc-900 flex items-center justify-center text-white hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300"
          aria-label="Share on LinkedIn"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>

        {/* Copy Link */}
        <button
          onClick={handleCopy}
          className="h-10 px-4 rounded-none border border-white/25 bg-zinc-900 flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white hover:text-black hover:bg-white hover:border-white transition-all duration-300 cursor-pointer select-none"
          aria-label="Copy article link"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-500" />
              Copied
            </>
          ) : (
            <>
              <Link2 className="w-3.5 h-3.5" />
              Copy Link
            </>
          )}
        </button>
      </div>
    </div>
  );
}
