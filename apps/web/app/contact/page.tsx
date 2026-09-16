import { Inter } from "next/font/google";
import { EnquiryForm } from "@/components/ui/enquiry-form";
import Footer from "@/components/ui/footer";
import Navigation from "@/components/ui/navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Contact Nekko Technologies - Engineering Enquiry",
  description:
    "Contact Nekko Technologies to discuss your engineering project. Based in Kuching, Sarawak. We design, deploy and manage cloud infrastructure, embedded systems, IoT, automation and robotics.",
};

export default function ContactPage() {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg-background text-bg-foreground">

        <Navigation />

        <main className="max-w-3xl mx-auto px-4 py-12">
          <section>
            <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-bg-white mb-6">
              Talk to an Engineer
            </h1>
            <p className="text-bg-secondary text-lg max-w-xl mb-8">
              Based in Kuching, Sarawak. Serving businesses and technical projects
              across Malaysia. Tell us what you are trying to build, automate, connect
              or improve.
            </p>

            <EnquiryForm />
          </section>
        </main>

        <Footer />
      </body>
    </html>
  );
}