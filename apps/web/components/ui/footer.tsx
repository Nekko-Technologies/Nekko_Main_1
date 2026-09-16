import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border pt-12 mt-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-inter font-semibold text-foreground mb-4">
              Nekko Technologies
            </h4>
            <p className="text-muted-foreground text-sm max-w-xs">
              Technology & Systems Engineering company based in Kuching, Sarawak,
              Malaysia. We design, deploy and manage cloud infrastructure, embedded
              systems, IoT, automation and robotics for businesses and technical
              projects.
            </p>
          </div>

          <div>
            <h5 className="font-inter font-medium text-foreground mb-4">
              Solutions
            </h5>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <Link
                  href="/solutions/business-infrastructure"
                  className="hover text-primary transition-colors"
                >
                  Business Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/industrial-automation"
                  className="hover text-primary transition-colors"
                >
                  Industrial Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/connected-facilities"
                  className="hover text-primary transition-colors"
                >
                  Connected Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/remote-monitoring"
                  className="hover text-primary transition-colors"
                >
                  Remote Monitoring
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/technical-projects"
                  className="hover text-primary transition-colors"
                >
                  Technical Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-inter font-medium text-foreground mb-4">
              Services
            </h5>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <Link
                  href="/services/cloud-infrastructure"
                  className="hover text-primary transition-colors"
                >
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/services/embedded-control"
                  className="hover text-primary transition-colors"
                >
                  Embedded & Control
                </Link>
              </li>
              <li>
                <Link
                  href="/services/iot-automation"
                  className="hover text-primary transition-colors"
                >
                  IoT & Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/robotics"
                  className="hover text-primary transition-colors"
                >
                  Robotics System Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-inter font-medium text-foreground mb-4">
              Company
            </h5>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <Link href="/about" className="hover text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Based in Kuching, Sarawak. Serving businesses and technical projects
            across Malaysia.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            © 2026 Nekko Technologies Company.
          </p>
        </div>
      </div>
    </footer>
  );
}