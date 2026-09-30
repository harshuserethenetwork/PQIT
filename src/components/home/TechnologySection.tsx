"use client";

import { technologies } from "@/config/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const techLogoUrls: Record<string, string> = {
  // New technologies
  zendesk: "https://cdn.simpleicons.org/zendesk/03363D",
  zoho: "https://cdn.simpleicons.org/zoho/E42527",
  salesforce: "https://cdn.simpleicons.org/salesforce/00A1E0",
  twilio: "https://cdn.simpleicons.org/twilio/F22F46",
  five9: "https://cdn.worldvectorlogo.com/logos/five9.svg",
  logitech: "https://cdn.simpleicons.org/logitech/00B8FC",
  // Legacy technologies (kept for safety)
  sap: "https://cdn.simpleicons.org/sap/0FAAFF",
  servicenow: "https://cdn.simpleicons.org/servicenow/62D84E",
  microsoft: "https://cdn.simpleicons.org/microsoft/5E5E5E",
  uipath: "https://cdn.simpleicons.org/uipath/FA4616",
  automationanywhere: "https://cdn.simpleicons.org/automationanywhere/FF7900",
  blueprism: "https://cdn.worldvectorlogo.com/logos/blue-prism.svg",
  aws: "https://cdn.simpleicons.org/amazonwebservices/232F3E",
  googlecloud: "https://cdn.simpleicons.org/googlecloud/4285F4",
  azure: "https://cdn.simpleicons.org/microsoftazure/0078D4",
  oracle: "https://cdn.simpleicons.org/oracle/F80000",
  ibm: "https://cdn.simpleicons.org/ibm/052FAD",
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
                <div className="w-8 h-8 rounded-lg bg-white border border-neutral-100 flex items-center justify-center overflow-hidden shrink-0">
                  {techLogoUrls[tech.logo] ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={techLogoUrls[tech.logo]}
                      alt={tech.name}
                      className="w-5 h-5 object-contain"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.classList.add("bg-neutral-700");
                          parent.textContent = tech.name.slice(0, 2).toUpperCase();
                        }
                      }}
                    />
                  ) : (
                    <span className="text-xs font-bold text-neutral-600">
                      {tech.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
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
            <RevealOnScroll key={cap.title} delay={index * 100} className="h-full">
              <div className="card-premium text-center h-full flex flex-col justify-start">
                <div className="text-4xl mb-4">{cap.icon}</div>
                <h3 className="font-display font-bold text-neutral-900 text-lg mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed flex-1">
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
