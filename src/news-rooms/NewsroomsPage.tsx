import {
  NewsroomCategory,
  newsroomCategories,
} from "./newsroomData";

type NewsroomsPageProps = {
  category?: NewsroomCategory;
};

export default function NewsroomsPage({ category }: NewsroomsPageProps) {
  const featuredCategory = category ?? newsroomCategories[0];
  const visual = getCategoryVisual(featuredCategory.slug);

  return (
    <main className="bg-[#0F0F0F] text-white">
      <section className="relative overflow-hidden border-b border-[#1F1F1F] py-16 sm:py-20 lg:py-24">
        <div className={`absolute inset-0 bg-gradient-to-br ${visual.glow} opacity-70`} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="text-primary-red text-xs uppercase tracking-[0.2em] font-bold">
                Newsrooms
              </span>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-4">
                {category ? category.label : "Stories, Signals & Company Updates"}
              </h1>

              <p className="text-[#A0A0A0] text-base sm:text-lg leading-relaxed mt-6 max-w-3xl">
                {category
                  ? category.intro
                  : "Explore ApMoSys announcements, events, recognition, insights, media coverage, customer outcomes, and transformation stories in one organized newsroom."}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#161616]/90 border border-[#3A3A3A] rounded-xl p-5 sm:p-6 shadow-2xl">
                <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-4">
                  <p className="text-[#7A7A7A] text-xs uppercase tracking-[0.2em] font-bold">
                    {visual.kicker}
                  </p>
                  <span className="text-primary-red text-sm font-bold">
                    {featuredCategory.metric}
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {featuredCategory.sections.map((section, index) => (
                    <div
                      key={section.slug}
                      className="grid grid-cols-[3rem_1fr] gap-4 rounded-lg border border-[#2A2A2A] bg-[#101010] p-4"
                    >
                      <span className="font-heading text-2xl font-extrabold text-primary-red">
                        0{index + 1}
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#7A7A7A]">
                          {section.eyebrow}
                        </p>
                        <p className="mt-1 font-semibold text-white">
                          {section.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {category ? (
        <CategoryDetail category={category} visual={visual} />
      ) : (
        <NewsroomOverview />
      )}
    </main>
  );
}

function NewsroomOverview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsroomCategories.map((category) => (
            <div
              key={category.slug}
              className="bg-[#161616] border border-[#2A2A2A] rounded-xl p-6 sm:p-8"
            >
              <span className="text-primary-red text-xs uppercase tracking-[0.2em] font-bold">
                {category.metric}
              </span>
              <h2 className="text-2xl font-heading font-bold mt-4">
                {category.label}
              </h2>
              <p className="text-[#A0A0A0] leading-relaxed mt-4">
                {category.intro}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryDetail({
  category,
  visual,
}: {
  category: NewsroomCategory;
  visual: CategoryVisual;
}) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 md:grid-cols-3">
          {visual.highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="rounded-xl border border-[#2A2A2A] bg-[#161616] p-6"
            >
              <p className="text-primary-red text-3xl font-heading font-extrabold">
                {highlight.value}
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#7A7A7A]">
                {highlight.label}
              </p>
              <p className="mt-3 text-[#A0A0A0] leading-relaxed">
                {highlight.copy}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {category.sections.map((section, index) => (
            <section
              key={section.slug}
              id={section.slug}
              className={`scroll-mt-28 overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#161616] ${
                index % 2 === 1 ? "lg:grid-cols-[1fr_0.8fr]" : ""
              }`}
            >
              <div className="grid gap-0 lg:grid-cols-[0.8fr_1fr]">
                <div className={`bg-gradient-to-br ${visual.panel} p-6 sm:p-8 lg:p-10`}>
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/70">
                    {section.eyebrow}
                  </span>
                  <h2 className="font-heading text-3xl sm:text-4xl font-extrabold leading-tight mt-4">
                    {section.title}
                  </h2>
                  <p className="text-white/75 text-base sm:text-lg leading-relaxed mt-6">
                    {section.summary}
                  </p>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="mb-6 flex items-center justify-between">
                    <p className="text-[#7A7A7A] text-xs uppercase tracking-[0.2em] font-bold">
                      {visual.sectionLabel}
                    </p>
                    <span className="text-[#3A3A3A] text-5xl font-heading font-extrabold leading-none">
                      0{index + 1}
                    </span>
                  </div>

                  <div className={visual.pointLayout}>
                    {section.points.map((point, pointIndex) => (
                      <div
                        key={point}
                        className={visual.pointCard}
                      >
                        <span className="text-primary-red text-sm font-bold">
                          {String(pointIndex + 1).padStart(2, "0")}
                        </span>
                        <p className="mt-3 text-[#C8C8C8] leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

type CategoryVisual = {
  glow: string;
  panel: string;
  kicker: string;
  sectionLabel: string;
  pointLayout: string;
  pointCard: string;
  highlights: {
    value: string;
    label: string;
    copy: string;
  }[];
};

function getCategoryVisual(slug: string): CategoryVisual {
  const shared = {
    pointLayout: "grid gap-4 md:grid-cols-3",
    pointCard: "rounded-lg border border-[#2A2A2A] bg-[#101010] p-5",
  };

  const visuals: Record<string, CategoryVisual> = {
    "press-releases": {
      ...shared,
      glow: "from-[#B40001]/25 via-transparent to-transparent",
      panel: "from-[#B40001] to-[#5A0001]",
      kicker: "Release desk",
      sectionLabel: "Editorial notes",
      highlights: [
        {
          value: "01",
          label: "Official voice",
          copy: "Structured announcements for media, customers, and partners.",
        },
        {
          value: "03",
          label: "Release streams",
          copy: "Announcements, company news, and archived updates.",
        },
        {
          value: "24/7",
          label: "Reference value",
          copy: "Clear source material for future communication needs.",
        },
      ],
    },
    events: {
      ...shared,
      glow: "from-[#B40001]/20 via-transparent to-[#2A2A2A]/50",
      panel: "from-[#2D2D2D] to-[#B40001]",
      kicker: "Event calendar",
      sectionLabel: "Agenda value",
      pointLayout: "grid gap-4",
      pointCard: "rounded-lg border-l-2 border-primary-red bg-[#101010] p-5",
      highlights: [
        {
          value: "Live",
          label: "Engagement",
          copy: "Programs built for leaders, practitioners, and partners.",
        },
        {
          value: "On-demand",
          label: "Learning",
          copy: "Webinar replays and sessions for practical adoption.",
        },
        {
          value: "Annual",
          label: "Flagships",
          copy: "Conferences around enterprise engineering themes.",
        },
      ],
    },
    "awards-recognition": {
      ...shared,
      glow: "from-[#B40001]/20 via-transparent to-[#D4AF37]/10",
      panel: "from-[#8A6B16] to-[#B40001]",
      kicker: "Recognition wall",
      sectionLabel: "Proof points",
      highlights: [
        {
          value: "Awarded",
          label: "Industry trust",
          copy: "Recognition for solution quality and customer value.",
        },
        {
          value: "Certified",
          label: "Delivery confidence",
          copy: "Credentials that support repeatable delivery practices.",
        },
        {
          value: "Partnered",
          label: "Ecosystem",
          copy: "Validation from partners and joint solution programs.",
        },
      ],
    },
    "industry-insights": {
      ...shared,
      glow: "from-[#B40001]/20 via-transparent to-[#123A4A]/30",
      panel: "from-[#123A4A] to-[#B40001]",
      kicker: "Insight desk",
      sectionLabel: "Analysis lens",
      pointLayout: "grid gap-4 md:grid-cols-1",
      pointCard: "rounded-lg border border-[#2A2A2A] bg-[#101010] p-5",
      highlights: [
        {
          value: "Trends",
          label: "Signals",
          copy: "Technology patterns shaping enterprise delivery.",
        },
        {
          value: "Markets",
          label: "Context",
          copy: "Analysis connecting technology choices to business value.",
        },
        {
          value: "Experts",
          label: "Perspective",
          copy: "Views from leaders, architects, and delivery specialists.",
        },
      ],
    },
    "media-coverage": {
      ...shared,
      glow: "from-[#B40001]/20 via-transparent to-[#4A4A4A]/40",
      panel: "from-[#4A4A4A] to-[#B40001]",
      kicker: "Media room",
      sectionLabel: "Coverage angle",
      highlights: [
        {
          value: "News",
          label: "Visibility",
          copy: "External stories and mentions around ApMoSys momentum.",
        },
        {
          value: "Press",
          label: "References",
          copy: "Publication mentions and ecosystem references.",
        },
        {
          value: "Q&A",
          label: "Interviews",
          copy: "Leadership and expert conversations for the market.",
        },
      ],
    },
    "podcasts-webinars": {
      ...shared,
      glow: "from-[#B40001]/20 via-transparent to-[#302050]/40",
      panel: "from-[#302050] to-[#B40001]",
      kicker: "Broadcast studio",
      sectionLabel: "Episode notes",
      pointLayout: "grid gap-4 md:grid-cols-1",
      pointCard: "rounded-lg border border-[#2A2A2A] bg-[#101010] p-5",
      highlights: [
        {
          value: "Talks",
          label: "Technical learning",
          copy: "Practical conversations for engineering teams.",
        },
        {
          value: "Series",
          label: "Leadership",
          copy: "Executive conversations on transformation decisions.",
        },
        {
          value: "Guests",
          label: "External voices",
          copy: "Customer and partner perspectives from the field.",
        },
      ],
    },
    "customer-stories": {
      ...shared,
      glow: "from-[#B40001]/20 via-transparent to-[#124A2F]/30",
      panel: "from-[#124A2F] to-[#B40001]",
      kicker: "Customer outcomes",
      sectionLabel: "Story arc",
      highlights: [
        {
          value: "Case",
          label: "Studies",
          copy: "Detailed challenge, solution, and result narratives.",
        },
        {
          value: "Wins",
          label: "Stories",
          copy: "Short impact snapshots from customer programs.",
        },
        {
          value: "Voice",
          label: "Interviews",
          copy: "Client perspectives on delivery and partnership.",
        },
      ],
    },
    "success-metrics": {
      ...shared,
      glow: "from-[#B40001]/20 via-transparent to-[#204A4A]/35",
      panel: "from-[#204A4A] to-[#B40001]",
      kicker: "Metrics lab",
      sectionLabel: "Measurement view",
      highlights: [
        {
          value: "ROI",
          label: "Reports",
          copy: "Value tracking for engineering and automation investments.",
        },
        {
          value: "Data",
          label: "Performance",
          copy: "Operational signals across systems and delivery teams.",
        },
        {
          value: "Impact",
          label: "Studies",
          copy: "Evidence connecting transformation to business outcomes.",
        },
      ],
    },
    "transformation-journeys": {
      ...shared,
      glow: "from-[#B40001]/20 via-transparent to-[#4A2B12]/35",
      panel: "from-[#4A2B12] to-[#B40001]",
      kicker: "Journey map",
      sectionLabel: "Roadmap step",
      pointLayout: "grid gap-4",
      pointCard: "rounded-lg border-l-2 border-primary-red bg-[#101010] p-5",
      highlights: [
        {
          value: "Digital",
          label: "Transformation",
          copy: "Modernization paths across platforms and workflows.",
        },
        {
          value: "Agile",
          label: "Adoption",
          copy: "Operating model change for faster feedback and delivery.",
        },
        {
          value: "Cloud",
          label: "Migration",
          copy: "Platform transitions with reliability and resilience.",
        },
      ],
    },
  };

  return visuals[slug] ?? visuals["press-releases"];
}
