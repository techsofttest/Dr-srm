import { Metadata } from "next";
import BlogGrid from "@/components/blog/BlogGrid";
import Header from '@/components/global/Header';
import InnerPageHero from '@/components/global/InnerPageHero';
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
  blog?: BlogItem[];
  cta?: CTAData;
}

async function getBlogData(): Promise<BlogResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/blog`, {
    next: { revalidate: 3600 }, 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog data");
  }

  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await getBlogData();

    return {
      title: data?.seo?.meta_title ?? "Blogs",
      description: data?.seo?.meta_desc ?? "",
      keywords: data?.seo?.meta_key ?? "",
    };
  } catch (error) {
    return {
      title: "Blogs",
    };
  }
}

export default async function BlogsPage() {
  let data: BlogResponse | null = null;

  try {
    data = await getBlogData();
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }

  return (
    <> <Header />
   <InnerPageHero
                title="Blog"
                category="Educational Hub"
            />
      {/* Main Blogs Area */}
      <BlogGrid posts={data?.blog ?? []} />

    </>
  );
}