export type NewsroomSection = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  points: string[];
};

export type NewsroomCategory = {
  slug: string;
  label: string;
  intro: string;
  metric: string;
  sections: NewsroomSection[];
};

export const newsroomCategories: NewsroomCategory[] = [
  {
    slug: "events",
    label: "Events",
    intro:
      "Conferences, webinars, roundtables, and knowledge-sharing programs where ApMoSys connects with enterprise technology leaders.",
    metric: "Live engagements",
    sections: [
      {
        slug: "upcoming-events",
        title: "Upcoming Events",
        eyebrow: "Calendar",
        summary:
          "Planned sessions focused on quality engineering, automation, AI adoption, digital assurance, and enterprise modernization.",
        points: [
          "Executive roundtables for technology, operations, and transformation leaders.",
          "Hands-on learning sessions for QA, automation, and product engineering teams.",
          "Partner events covering industry-specific engineering and assurance challenges.",
        ],
      },
      {
        slug: "past-webinars",
        title: "Past Webinars",
        eyebrow: "Replay library",
        summary:
          "Recorded conversations and expert sessions that capture practical lessons from enterprise delivery teams.",
        points: [
          "Technical explainers on automation frameworks, AI-enabled testing, and DevOps quality gates.",
          "Customer-focused sessions that unpack modernization roadmaps and measurable outcomes.",
          "Panel discussions with leaders from delivery, technology, and business operations.",
        ],
      },
      {
        slug: "annual-conferences",
        title: "Annual Conferences",
        eyebrow: "Flagship programs",
        summary:
          "Large-format gatherings built around innovation themes, industry priorities, and the future of enterprise engineering.",
        points: [
          "Keynotes on digital transformation, intelligent automation, and operating model change.",
          "Breakout tracks for domain-specific quality, security, and performance engineering.",
          "Networking forums for customers, partners, consultants, and technology specialists.",
        ],
      },
    ],
  },
  {
    slug: "awards-recognition",
    label: "Awards & Recognition",
    intro:
      "Recognition for delivery quality, certifications, ecosystem partnerships, and contributions to enterprise technology outcomes.",
    metric: "Recognized excellence",
    sections: [
      {
        slug: "industry-awards",
        title: "Industry Awards",
        eyebrow: "External recognition",
        summary:
          "Acknowledgements that reflect ApMoSys performance across quality engineering, automation, innovation, and customer value.",
        points: [
          "Recognition for solution quality and measurable transformation outcomes.",
          "Awards connected to innovation, delivery rigor, and engineering practices.",
          "Industry validation of ApMoSys capabilities across enterprise technology programs.",
        ],
      },
      {
        slug: "certifications",
        title: "Certifications",
        eyebrow: "Capability assurance",
        summary:
          "Certifications that support trusted delivery, repeatable processes, and governance across customer engagements.",
        points: [
          "Process and compliance credentials that strengthen delivery confidence.",
          "Technology certifications held by engineering, QA, cloud, and automation teams.",
          "Continuous learning programs that keep delivery skills aligned with modern platforms.",
        ],
      },
      {
        slug: "partner-accolades",
        title: "Partner Accolades",
        eyebrow: "Ecosystem trust",
        summary:
          "Recognition from technology and business partners for collaboration, implementation quality, and customer success.",
        points: [
          "Partner feedback on execution quality across strategic transformation programs.",
          "Joint solution achievements in automation, assurance, cloud, and AI-led delivery.",
          "Ecosystem milestones that support broader market and customer enablement.",
        ],
      },
    ],
  },
  {
    slug: "customer-stories",
    label: "Customer Stories",
    intro:
      "Customer-focused narratives showing how ApMoSys helps organizations modernize delivery, improve quality, and unlock measurable value.",
    metric: "Client outcomes",
    sections: [
      {
        slug: "case-studies",
        title: "Case Studies",
        eyebrow: "Structured outcomes",
        summary:
          "Detailed examples of customer challenges, ApMoSys solutions, delivery approach, and business results.",
        points: [
          "Problem statements that clarify the operational and technology context.",
          "Solution narratives covering automation, assurance, engineering, and modernization work.",
          "Outcome summaries tied to quality, speed, reliability, cost, and customer experience.",
        ],
      },
      {
        slug: "success-stories",
        title: "Success Stories",
        eyebrow: "Impact snapshots",
        summary:
          "Concise stories of customer wins that show practical improvements in delivery and operations.",
        points: [
          "Before-and-after views of customer delivery performance and engineering maturity.",
          "Examples of rapid issue resolution, release acceleration, and quality improvement.",
          "Stories that show how teams turn transformation goals into visible progress.",
        ],
      },
      {
        slug: "client-interviews",
        title: "Client Interviews",
        eyebrow: "Customer voice",
        summary:
          "Direct customer perspectives on partnership experience, delivery quality, and transformation outcomes.",
        points: [
          "Conversations about customer priorities, program decisions, and success measures.",
          "Feedback on collaboration, governance, responsiveness, and engineering expertise.",
          "Lessons for organizations starting or scaling their own transformation journeys.",
        ],
      },
    ],
  },
  {
    slug: "success-metrics",
    label: "Success Metrics",
    intro:
      "Quantitative views of business impact, performance gains, ROI, and operational improvements across transformation programs.",
    metric: "Measured impact",
    sections: [
      {
        slug: "roi-reports",
        title: "ROI Reports",
        eyebrow: "Value tracking",
        summary:
          "Reports that connect engineering investments to measurable returns across delivery, quality, and operations.",
        points: [
          "Cost avoidance and productivity improvements linked to automation and process maturity.",
          "Release cycle, defect leakage, and operational efficiency metrics.",
          "Evidence that helps stakeholders evaluate transformation value with confidence.",
        ],
      },
      {
        slug: "performance-data",
        title: "Performance Data",
        eyebrow: "Operational signals",
        summary:
          "Performance indicators that show how systems, teams, and delivery processes improve over time.",
        points: [
          "Application performance, reliability, and scalability measurements.",
          "Delivery throughput, quality trends, and incident reduction indicators.",
          "Benchmark views that support better governance and continuous improvement.",
        ],
      },
      {
        slug: "impact-studies",
        title: "Impact Studies",
        eyebrow: "Transformation proof",
        summary:
          "Studies that explain the broader business, technology, and customer experience impact of modernization programs.",
        points: [
          "Analysis of transformation outcomes across speed, quality, stability, and satisfaction.",
          "Program-level results that connect engineering work to strategic business goals.",
          "Narratives and metrics that show how sustainable change is achieved.",
        ],
      },
    ],
  },
];

export function getNewsroomCategory(slug: string) {
  return newsroomCategories.find((category) => category.slug === slug);
}

export function newsroomSectionHref(categorySlug: string, sectionSlug: string) {
  return `/newsrooms/${categorySlug}#${sectionSlug}`;
}
