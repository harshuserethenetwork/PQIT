import { technologies } from "@/config/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const techLogos: Record<string, string> = {
  sap: "SAP",
  salesforce: "SF",
  servicenow: "SN",
  microsoft: "MS",
  uipath: "UI",
  automationanywhere: "AA",
  blueprism: "BP",
  aws: "AWS",
  googlecloud: "GCP",
  azure: "AZ",
  oracle: "ORA",
  ibm: "IBM",
};

const techColors: Record<string, string> = {
  sap: "bg-blue-600",
  salesforce: "bg-sky-500",
  servicenow: "bg-green-600",
  microsoft: "bg-indigo-600",
  uipath: "bg-red-500",
  automationanywhere: "bg-orange-500",
  blueprism: "bg-blue-700",
  aws: "bg-amber-500",
  googlecloud: "bg-blue-500",
  azure: "bg-blue-600",
  oracle: "bg-red-600",
  ibm: "bg-blue-800",
};

export default function TechnologySection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="Technology Ecosystem"
            title="Integrated with Your"
            accent="Existing Tech Stack"
            description="Pre-built connectors and certified partnerships across all major enterprise platforms ensure seamless integration."
            centered
          />
        </RevealOnScroll>

        {/* Infinite scroll marquee */}
        <div className="mt-14 overflow-hidden">
          <div className="flex gap-6 animate-[scroll_25s_linear_infinite]" style={{
            animation: "scroll 25s linear infinite",
          }}>
            <style>{`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.logo}-${index}`}
                className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-white rounded-xl border border-neutral-200 shadow-card hover:border-primary-200 hover:shadow-card-hover transition-all duration-300 group"
              >
                <div
                  className={`w-8 h-8 rounded-lg ${techColors[tech.logo] || "bg-neutral-700"} flex items-center justify-center text-white text-xs font-bold`}
                >
                  {techLogos[tech.logo] || tech.name.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-sm font-semibold text-neutral-700 group-hover:text-primary-600 transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🔗",
              title: "150+ Pre-built Connectors",
              description: "Native integrations with SAP, Salesforce, Microsoft, Oracle, ServiceNow, and 145+ more enterprise systems.",
            },
            {
              icon: "☁️",
              title: "Cloud-Native Architecture",
              description: "Deployed on AWS, Azure, or GCP — or on-premise. Supports hybrid architectures and multi-cloud strategies.",
            },
            {
              icon: "🔐",
              title: "Enterprise-Grade Security",
              description: "Zero-trust security, end-to-end encryption, and compliance with GDPR, SOC 2, ISO 27001, and PCI DSS.",
            },
          ].map((cap, index) => (
            <RevealOnScroll key={cap.title} delay={index * 100}>
              <div className="card-premium text-center">
                <div className="text-4xl mb-4">{cap.icon}</div>
                <h3 className="font-display font-bold text-neutral-900 text-lg mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
