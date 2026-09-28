import { Metadata } from "next";
import InnerPageHero from "@/components/global/InnerPageHero";
import CollaborationHotline from "@/components/referring-doctors/CollaborationHotline";
import ReferralScope from "@/components/referring-doctors/ReferralScope";
interface ReferralSection {
    title: string;
    sub_title: string;
    description: string;
    points: string[];
}

interface DedicatedData {
    title: string;
    content: string;
}

interface ReferralData {
    title: string;
    content: string; 
    quote: string;
}

interface Data {
    referral: ReferralData;
    dedicated: DedicatedData | null;
    referral_points: ReferralSection[];
    contact: {phone: string;};
    seo?: {
        title: string;
        description: string;
        keywords: string;
    };
}
async function getReferringData(): Promise<Data | null> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/reffering`,
            {
                next: { revalidate: 3600 },
            }
        );

        if (!res.ok) {
            throw new Error("Failed to fetch referring doctors data");
        }

        return await res.json();
    } catch (error) {
        console.error("Referring doctors API error:", error);
        return null;
    }
}

export async function generateMetadata(): Promise<Metadata> {
    const data = await getReferringData();

    return {
        title: data?.seo?.title || "Patient Education Centre",
        description: data?.seo?.description || "",
        keywords: data?.seo?.keywords || "",
    };
}
export default async function ReferringDoctorsPage() {
    const data = await getReferringData();

    const conditions = data?.referral_points?.[0];
    const support = data?.referral_points?.[1];

    return (
        <>

            <main className="relative min-h-screen flex flex-col bg-white">
                <InnerPageHero
                    title="For Referring Doctors"
                    category="Physician Referrals"
                />

                {data?.referral && data?.dedicated && (
                    <CollaborationHotline
                        referral={data?.referral}
                        dedicated={data?.dedicated}
                        contact={data?.contact}
                    />
                )}

                {conditions && support && (
                    <ReferralScope
                        conditions={conditions}
                        support={support}
                    />
                )}
            </main>
        </>
    );
}