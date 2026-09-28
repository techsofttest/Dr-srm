import { Metadata } from 'next';
import Header from '@/components/global/Header';
import BookAppointmentClient from '@/components/global/BookAppointmentClient';
interface TimeSlot {
    date: string;
    start_time: string;
    end_time: string;
}
interface Data {
contact: {   
    phone: string;
    email: string;
    time_slots: TimeSlot[];
} | undefined;
seo?: {
    meta_title: string;
    meta_desc: string;
    meta_key: string;
};
}
async function getHomeData(): Promise<Data | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book-appointment`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch home data");
    }

    return res.json();
  } catch (error) {
    console.error("Home API error:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await getHomeData();

    return {
      title: data?.seo?.meta_title || "Home || ",
      description: data?.seo?.meta_desc || "",
      keywords: data?.seo?.meta_key || "",
    };
  } catch {
    return {
      title: "Patient Education Centre",
      description: "",
    };
  }
}
export default async function BookAppointmentPage() {
      const data = await getHomeData();

    return (
        <>
            <main className="relative min-h-screen flex flex-col bg-white">
                <BookAppointmentClient contact={data?.contact}/>
            </main>
        </>
    );
}