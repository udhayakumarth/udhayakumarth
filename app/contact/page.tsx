import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
    title: "Contact - Udhayakumar",
    description: "My Social Contacts",
    openGraph: {
        title: "Udhayakumar",
        description: "A calm and curious brain in a loud universe.",
        images: [
            {
                url: "https://udhayakumarth.com/og/whoami.png",
                width: 1200,
                height: 630,
            },
        ],
    }
};

export default function Contact() {
    return (
        <div className="px-2 py-2">
            <Navbar currentPage="contact" />

            <div className="mx-auto max-w-6xl px-4 py-8">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-6">
                    Contact
                </h2>

                <div className="text-lg font-semibold">
                    Reach me at <a href="mailto:dev.udhayakumar@gmail.com" className="text-muted-foreground hover:text-foreground transition">
                        dev.udhayakumar@gmail.com
                    </a>
                </div>

            </div>
            <Footer />
        </div>
    );
}

