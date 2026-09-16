import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";
import Footer from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";
import { StatusBadge } from "@/components/ui/status-badge";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nekko Technologies - Technology & Systems Engineering",
  description:
    "Nekko Technologies designs, deploys and manages cloud infrastructure, embedded systems, IoT, automation and robotics for businesses and technical projects.",
};

export default function HomePage() {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-bg-background text-bg-foreground">

        <Navigation />

        <main className="max-w-[1600px] mx-auto px-4 py-12">
          <section className="mb-16">
            <h1 className="font-inter font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-bg-white mb-6">
              Engineering Technology Systems That Work.
            </h1>
            <p className="text-bg-secondary text-lg md:text-xl max-w-2xl">
              Nekko Tech designs, deploys and manages cloud infrastructure, embedded
              systems, IoT, automation and robotics for businesses and technical
              projects.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="default" className="px-6 py-3">
                Discuss Your Project
              </Button>
              <Button variant="outline" className="px-6 py-3">
                Explore Our Capabilities
              </Button>
            </div>
          </section>

          <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <h2 className="font-inter font-semibold text-2xl text-bg-white mb-4">
                01 — Cloud Infrastructure
              </h2>
              <p className="text-bg-secondary text-sm">
                Managed infrastructure for businesses and technical projects.
              </p>
            </div>
            <div>
              <h2 className="font-inter font-semibold text-2xl text-bg-white mb-4">
                02 — Embedded & Control Systems
              </h2>
              <p className="text-bg-secondary text-sm">
                Electronics, controllers and embedded systems designed around the
                application.
              </p>
            </div>
            <div>
              <h2 className="font-inter font-semibold text-2xl text-bg-white mb-4">
                03 — IoT & Automation
              </h2>
              <p className="text-bg-secondary text-sm">
                Connected systems that monitor, communicate and automate physical
                environments.
              </p>
            </div>
            <div>
              <h2 className="font-inter font-semibold text-2xl text-bg-white mb-4">
                04 — Robotics System Design
              </h2>
              <p className="text-bg-secondary text-sm">
                Engineering robotic and automated systems from concept through
                deployment.
              </p>
            </div>
          </section>

          <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h2 className="font-inter font-semibold text-2xl text-bg-white mb-4">
                The Engineering Process
              </h2>
              <div className="space-y-3 text-bg-secondary text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-primary">Discover</span>
                  <p>Understand your technical problem</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">Assess</span>
                  <p>Evaluate requirements and options</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">Engineer</span>
                  <p>Design the system around your application</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">Build</span>
                  <p>Fabricate and integrate components</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">Deploy</span>
                  <p>Launch and commission the system</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">Support</span>
                  <p>Ongoing monitoring and troubleshooting</p>
                </div>
              </div>
            </div>
            <div>
              <StatusBadge status="online" />
              <p className="mt-2 text-bg-secondary text-sm">
                We dont disappear after deployment.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </body>
    </html>
  );
}