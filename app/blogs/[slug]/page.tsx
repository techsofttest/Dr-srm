import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from '@/components/global/Header';
import BlogArticle from "@/components/blog/BlogArticle";
import RelatedBlogs from "@/components/blog/RelatedBlogs";

interface BlogItem {
  id: number;
  title: string;
  image: string;
  date: string;
  slug: string;
  description: string;
}

interface CTAData {
  badge: string;
  title: string;
  description: string;
  image: string;
}

interface BlogResponse {
  seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  };
  contact: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
  blog: BlogItem;

  relatedblog: BlogItem[];

  cta?: CTAData;
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getBlogBySlug(slug: string): Promise<BlogResponse | null> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/blog/${slug}`, {
                next: { revalidate: 3600 },        
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }

  return res.json();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const data = await getBlogBySlug(slug);

    if (!data?.blog) {
      return {
        title: "Blog Not Found",
      };
    }

    return {
      title:
        data.seo?.meta_title ||
        `${data.blog.title} | Peppe The Carpenter`,

      description:
        data.seo?.meta_desc ||
        data.blog.description ||
        "",

      keywords: data.seo?.meta_key || "",
    };
  } catch (error) {
    return {
      title: "Blog",
    };
  }
}

export default async function BlogDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  let data: BlogResponse | null = null;

  try {
    data = await getBlogBySlug(slug);
  } catch (error) {
    console.error("Error fetching blog:", error);
  }

  if (!data?.blog) {
    notFound();
  }

  return (
    <> 
    <Header />
      <main className="relative min-h-screen flex flex-col bg-white">
      {/* Blog Article */}
      <BlogArticle post={data.blog} contact={data.contact} />

      {/* Related Blogs */}
      {data.relatedblog && data.relatedblog.length > 0 && (
        <RelatedBlogs relatedPosts={data.relatedblog} />
      )}
</main>
    </>
  );
}