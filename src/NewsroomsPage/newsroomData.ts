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
    slug: "press-releases",
    label: "Press Releases",
    intro:
      "Official announcements from ApMoSys covering company milestones, platform updates, partnerships, and market expansion.",
    metric: "Official updates",
    sections: [
      {
        slug: "latest-announcements",
        title: "Latest Announcements",
        eyebrow: "Company bulletin",
        summary:
          "Timely updates on launches, strategic initiatives, delivery expansions, and leadership announcements.",
        points: [
          "New solution launches across QA automation, AI engineering, and enterprise platforms.",
          "Business expansion updates across delivery centers and regional markets.",
          "Leadership messages on company direction, innovation, and customer priorities.",
        ],
      },
      {
        slug: "company-news",
        title: "Company News",
        eyebrow: "Inside ApMoSys",
        summary:
          "Stories that track ApMoSys growth, operational progress, and investments in people, process, and technology.",
        points: [
          "Updates on new capabilities, delivery practices, and engineering excellence programs.",
          "Highlights from internal initiatives, community engagement, and talent development.",
          "Milestones that reflect the company's continued global delivery maturity.",
        ],
      },
      {
        slug: "archived-releases",
        title: "Archived Releases",
        eyebrow: "Release library",
        summary:
          "A structured record of earlier announcements for customers, analysts, partners, and media teams.",
        points: [
          "Historical announcements grouped by business theme and publication period.",
          "Reference material for brand, communications, and partner enablement teams.",
          "Context for tracking the evolution of ApMoSys services and market positioning.",
        ],
      },
    ],
  },
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
    slug: "industry-insights",
    label: "Industry Insights",
    intro:
      "Expert perspectives on market movement, technology trends, and enterprise transformation priorities.",
    metric: "Expert analysis",
    sections: [
      {
        slug: "tech-trends",
        title: "Tech Trends",
        eyebrow: "Signals",
        summary:
          "Practical analysis of shifts in AI engineering, test automation, cloud platforms, DevOps, and digital assurance.",
        points: [
          "Emerging technology patterns that are reshaping software delivery and governance.",
          "Enterprise adoption trends across automation, observability, and intelligent QA.",
          "Guidance on separating durable engineering value from short-lived technology noise.",
        ],
      },
      {
        slug: "market-analysis",
        title: "Market Analysis",
        eyebrow: "Business context",
        summary:
          "Market-level commentary that connects technology investments to operational efficiency, risk reduction, and growth.",
        points: [
          "Sector-specific views on banking, enterprise platforms, digital products, and regulated delivery.",
          "Analysis of how quality, automation, and performance shape transformation economics.",
          "Insight into buying priorities for enterprises modernizing complex technology estates.",
        ],
      },
      {
        slug: "expert-opinions",
        title: "Expert Opinions",
        eyebrow: "Point of view",
        summary:
          "Perspectives from ApMoSys leaders and specialists on delivery strategy, governance, and future-ready engineering.",
        points: [
          "Leadership views on scalable engineering practices and responsible automation.",
          "Architect perspectives on building resilient, maintainable enterprise systems.",
          "Delivery lessons from real-world modernization and assurance programs.",
        ],
      },
    ],
  },
  {
    slug: "media-coverage",
    label: "Media Coverage",
    intro:
      "Media mentions, interviews, and external coverage that feature ApMoSys work, leadership, and customer impact.",
    metric: "Press visibility",
    sections: [
      {
        slug: "in-the-news",
        title: "In the News",
        eyebrow: "Coverage",
        summary:
          "Featured stories and publication mentions covering ApMoSys initiatives, partnerships, and technology direction.",
        points: [
          "Coverage of company growth, market expansion, and enterprise transformation work.",
          "Articles featuring ApMoSys views on automation, AI, QA, and platform engineering.",
          "Media updates that help customers and partners track company momentum.",
        ],
      },
      {
        slug: "press-mentions",
        title: "Press Mentions",
        eyebrow: "References",
        summary:
          "Short-form mentions and references from media, ecosystem partners, and industry forums.",
        points: [
          "Selected mentions from business, technology, and industry publications.",
          "Partner-led references connected to joint solutions and program outcomes.",
          "Brief updates that point readers to broader company or market stories.",
        ],
      },
      {
        slug: "interviews",
        title: "Interviews",
        eyebrow: "Conversations",
        summary:
          "Leadership and expert interviews focused on engineering quality, innovation, and digital transformation.",
        points: [
          "Executive conversations about ApMoSys strategy and customer-first delivery.",
          "Technical interviews with specialists across QA, automation, cloud, and AI engineering.",
          "Media Q&A sessions on practical transformation, delivery governance, and measurable impact.",
        ],
      },
    ],
  },
  {
    slug: "podcasts-webinars",
    label: "Podcasts & Webinars",
    intro:
      "Audio and video sessions for leaders and practitioners exploring enterprise engineering, automation, and transformation.",
    metric: "On-demand learning",
    sections: [
      {
        slug: "tech-talks",
        title: "Tech Talks",
        eyebrow: "Practitioner sessions",
        summary:
          "Focused technical conversations that make complex engineering topics clear, practical, and actionable.",
        points: [
          "Deep dives into QA automation, test strategy, performance engineering, and DevOps practices.",
          "Implementation lessons from engineering teams working on complex enterprise environments.",
          "Short sessions that help practitioners apply modern methods to active delivery challenges.",
        ],
      },
      {
        slug: "leadership-series",
        title: "Leadership Series",
        eyebrow: "Executive view",
        summary:
          "Strategic conversations on technology leadership, transformation planning, and enterprise operating models.",
        points: [
          "Leadership perspectives on scaling engineering capability across distributed teams.",
          "Discussions on governance, modernization investment, and customer-centric delivery.",
          "Lessons for executives balancing speed, quality, security, and operational resilience.",
        ],
      },
      {
        slug: "guest-speakers",
        title: "Guest Speakers",
        eyebrow: "External voices",
        summary:
          "Sessions with customers, partners, and domain specialists sharing lessons from the field.",
        points: [
          "Customer and partner stories that explain transformation choices and outcomes.",
          "Specialist commentary on industry-specific engineering and assurance challenges.",
          "Collaborative sessions that bring multiple perspectives to enterprise modernization.",
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
  {
    slug: "transformation-journeys",
    label: "Transformation Journeys",
    intro:
      "Roadmaps and stories showing how organizations move from legacy constraints to modern, scalable, and intelligent delivery models.",
    metric: "Modernization paths",
    sections: [
      {
        slug: "digital-transformation",
        title: "Digital Transformation",
        eyebrow: "Enterprise change",
        summary:
          "Stories and playbooks for modernizing products, workflows, customer channels, and enterprise platforms.",
        points: [
          "Transformation paths that align technology delivery with business outcomes.",
          "Modern quality, automation, and governance practices for digital programs.",
          "Lessons from complex change across people, process, platform, and data layers.",
        ],
      },
      {
        slug: "agile-adoption",
        title: "Agile Adoption",
        eyebrow: "Operating model",
        summary:
          "Guidance for teams moving toward iterative delivery, cross-functional collaboration, and faster feedback loops.",
        points: [
          "Agile practices that improve transparency, velocity, and delivery predictability.",
          "Quality engineering approaches that fit continuous planning and release cycles.",
          "Change enablement patterns for teams scaling agile across enterprise environments.",
        ],
      },
      {
        slug: "cloud-migration",
        title: "Cloud Migration",
        eyebrow: "Platform modernization",
        summary:
          "Migration journeys that balance modernization speed with reliability, cost control, and operational resilience.",
        points: [
          "Readiness, validation, and assurance practices for cloud migration programs.",
          "Performance, security, and reliability checks that reduce migration risk.",
          "Post-migration optimization for cost, scalability, observability, and operations.",
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
