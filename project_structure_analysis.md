# Project Structure & Optimization Analysis (Updated)

## Complete Folder Structure
```
.
├── .gitignore
├── AGENTS.md
├── README.md
├── app
│   ├── about
│   │   └── page.tsx
│   ├── administrator
│   │   ├── about
│   │   │   └── page.tsx
│   │   ├── alliance
│   │   │   └── page.tsx
│   │   ├── blogs
│   │   │   ├── create
│   │   │   │   └── page.tsx
│   │   │   ├── edit
│   │   │   │   └── [id]
│   │   │   │       └── page.tsx
│   │   │   ├── page-editor
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── careers
│   │   │   └── page.tsx
│   │   ├── case-studies
│   │   │   └── page.tsx
│   │   ├── coe
│   │   │   └── page.tsx
│   │   ├── colors
│   │   │   └── page.tsx
│   │   ├── community
│   │   │   └── page.tsx
│   │   ├── contact
│   │   │   └── page.tsx
│   │   ├── footer
│   │   │   └── page.tsx
│   │   ├── home
│   │   │   └── page.tsx
│   │   ├── industries
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── leadership
│   │   │   └── page.tsx
│   │   ├── login
│   │   │   └── page.tsx
│   │   ├── navbar
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   ├── products
│   │   │   └── page.tsx
│   │   ├── services
│   │   │   └── page.tsx
│   │   ├── settings
│   │   │   └── page.tsx
│   │   ├── solutions
│   │   │   └── page.tsx
│   │   └── team
│   │       └── page.tsx
│   ├── alliance
│   │   └── page.tsx
│   ├── blogs
│   │   ├── [slug]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── careers
│   │   └── page.tsx
│   ├── coe
│   │   └── page.tsx
│   ├── community
│   │   └── page.tsx
│   ├── contact
│   │   └── page.tsx
│   ├── globals.css
│   ├── icon.jpeg
│   ├── industries
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── leadership
│   │   └── page.tsx
│   ├── newsrooms
│   │   ├── awards-recognition
│   │   │   └── page.tsx
│   │   ├── customer-stories
│   │   │   └── page.tsx
│   │   ├── events
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   └── success-metrics
│   │       └── page.tsx
│   ├── page.tsx
│   ├── products
│   │   └── page.tsx
│   ├── services
│   │   ├── ai-engineering
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── sitemap.ts
│   └── team
│       └── page.tsx
├── eslint.config.mjs
├── lint-errors.json
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── proxy.ts
├── public
│   ├── amcharts
│   │   ├── examples
│   │   │   └── map-sankey-waypoints
│   │   │       ├── README.md
│   │   │       ├── index.css
│   │   │       ├── index.html
│   │   │       └── index.js
│   │   ├── image1.png
│   │   ├── image2.png
│   │   └── lib
│   │       ├── geodata
│   │       │   ├── worldIndiaLow.js
│   │       │   └── worldLow.js
│   │       ├── index.js
│   │       ├── map.js
│   │       └── themes
│   │           └── Animated.js
│   ├── assets
│   │   ├── images
│   │   │   ├── abstract-waves.png
│   │   │   ├── mission-office.png
│   │   │   └── vision-team.png
│   │   ├── news_1.png
│   │   ├── news_2.png
│   │   ├── news_3.png
│   │   ├── news_4.png
│   │   ├── news_5.png
│   │   └── news_6.png
│   ├── blogs
│   │   ├── blogs_featured.png
│   │   └── blogs_hero.png
│   ├── careers
│   │   ├── careers.png
│   │   └── careers_hero.png
│   ├── community
│   │   ├── community-tech-day.png
│   │   ├── student-innovation-challenge.png
│   │   └── tech-leadership-summit.png
│   ├── contact-us
│   │   ├── GlobalOffices
│   │   │   ├── dubai_office.png
│   │   │   ├── mumbai_hq.png
│   │   │   └── ontario_office.png
│   │   └── WorldMapSection
│   │       └── world_map.png
│   ├── fonts
│   │   └── ClashDisplat
│   │       ├── OTF
│   │       │   ├── ClashDisplay-Bold.otf
│   │       │   ├── ClashDisplay-Extralight.otf
│   │       │   ├── ClashDisplay-Light.otf
│   │       │   ├── ClashDisplay-Medium.otf
│   │       │   ├── ClashDisplay-Regular.otf
│   │       │   └── ClashDisplay-Semibold.otf
│   │       ├── TTF
│   │       │   └── ClashDisplay-Variable.ttf
│   │       └── WEB
│   │           ├── README.md
│   │           ├── css
│   │           │   └── clash-display.css
│   │           └── fonts
│   │               ├── ClashDisplay-Bold.eot
│   │               ├── ClashDisplay-Bold.ttf
│   │               ├── ClashDisplay-Bold.woff
│   │               ├── ClashDisplay-Bold.woff2
│   │               ├── ClashDisplay-Extralight.eot
│   │               ├── ClashDisplay-Extralight.ttf
│   │               ├── ClashDisplay-Extralight.woff
│   │               ├── ClashDisplay-Extralight.woff2
│   │               ├── ClashDisplay-Light.eot
│   │               ├── ClashDisplay-Light.ttf
│   │               ├── ClashDisplay-Light.woff
│   │               ├── ClashDisplay-Light.woff2
│   │               ├── ClashDisplay-Medium.eot
│   │               ├── ClashDisplay-Medium.ttf
│   │               ├── ClashDisplay-Medium.woff
│   │               ├── ClashDisplay-Medium.woff2
│   │               ├── ClashDisplay-Regular.eot
│   │               ├── ClashDisplay-Regular.ttf
│   │               ├── ClashDisplay-Regular.woff
│   │               ├── ClashDisplay-Regular.woff2
│   │               ├── ClashDisplay-Semibold.eot
│   │               ├── ClashDisplay-Semibold.ttf
│   │               ├── ClashDisplay-Semibold.woff
│   │               ├── ClashDisplay-Semibold.woff2
│   │               ├── ClashDisplay-Variable.eot
│   │               ├── ClashDisplay-Variable.ttf
│   │               ├── ClashDisplay-Variable.woff
│   │               └── ClashDisplay-Variable.woff2
│   ├── footer
│   │   └── waves.jpeg
│   ├── landing
│   │   ├── Hero
│   │   │   ├── 1.jpeg
│   │   │   ├── 3.png
│   │   │   ├── 4.png
│   │   │   ├── 5.png
│   │   │   ├── 7.png
│   │   │   ├── 8.jpeg
│   │   │   ├── cards
│   │   │   │   ├── cliqtest_hero_1786091845488.png
│   │   │   │   ├── finxplore_bg_1786084965556.png
│   │   │   │   ├── finxplore_hero_1786091905041.png
│   │   │   │   ├── jupiter_bg_1786084979084.png
│   │   │   │   ├── jupiter_hero_1786091917753.png
│   │   │   │   ├── netraa_bg_1786084940574.png
│   │   │   │   ├── netraa_hero_1786091859663.png
│   │   │   │   ├── protean_hero.png
│   │   │   │   ├── saransh_hero_1786093425648.png
│   │   │   │   ├── shieldvue_bg_1786084954073.png
│   │   │   │   ├── shieldvue_hero_1786091875222.png
│   │   │   │   └── swikruti_hero_1786091888812.png
│   │   │   ├── hero_bg.png
│   │   │   ├── intro.mp4
│   │   │   └── rhs_bg.png
│   │   ├── bg.png
│   │   ├── bg2.png
│   │   ├── careers-bg.png
│   │   └── logo
│   │       ├── cliqtest-logo.png
│   │       ├── finxplore-logo.png
│   │       ├── jupiter-logo.png
│   │       ├── netraa-logo.png
│   │       ├── saransh-logo.png
│   │       ├── shieldvue-logo.png
│   │       └── swikruti-logo.png
│   ├── leadership
│   │   ├── exec_1.png
│   │   ├── exec_2.png
│   │   ├── exec_3.png
│   │   └── exec_4.png
│   ├── logo.jpeg
│   ├── news-rooms
│   │   ├── customer-stories
│   │   │   └── image.png
│   │   └── success-metrics
│   │       └── image.png
│   ├── newsroom
│   │   └── events
│   │       ├── event1.jpg
│   │       ├── event2.jpg
│   │       ├── event3.jpg
│   │       ├── event4.jpg
│   │       ├── event5.jpg
│   │       └── events.png
│   ├── team
│   │   ├── team1.png
│   │   ├── team2.png
│   │   ├── team3.png
│   │   ├── team4.png
│   │   ├── team5.png
│   │   └── team6.png
│   ├── what-we-do
│   │   ├── Services.png
│   │   ├── ai-engineering.png
│   │   ├── alliance.png
│   │   ├── coe.png
│   │   ├── industries.png
│   │   ├── products.png
│   │   └── services
│   │       └── cube
│   │           ├── stage_1_discovery.png
│   │           ├── stage_2_strategy.png
│   │           ├── stage_3_development.png
│   │           ├── stage_4_validation.png
│   │           ├── stage_5_deployment.png
│   │           ├── stage_6_decorative.png
│   │           └── stage_6_optimization.png
│   ├── who-we-are
│   │   ├── about-us
│   │   │   └── AboutHero
│   │   │       ├── about-hero.png
│   │   │       ├── about-hero2.png
│   │   │       └── about-hero3.png
│   │   ├── community
│   │   │   └── CommunityHero
│   │   │       └── community.png
│   │   ├── leadership
│   │   │   └── LeadershipHero
│   │   │       └── leadership3.png
│   │   └── our-team
│   │       └── TeamHero
│   │           └── team.png
│   └── world.png
├── src
│   ├── admin
│   │   ├── components
│   │   │   ├── AdminEditOverlay.tsx
│   │   │   ├── AdminShell.tsx
│   │   │   ├── AdminSidebar.tsx
│   │   │   ├── AdminToolbar.tsx
│   │   │   ├── EditableImage.tsx
│   │   │   ├── EditableText.tsx
│   │   │   ├── SectionThemeWrapper.tsx
│   │   │   ├── ThemeApplicator.tsx
│   │   │   └── ToastContainer.tsx
│   │   └── store
│   │       └── adminStore.ts
│   ├── blogs
│   │   ├── BlogList
│   │   │   └── BlogList.tsx
│   │   ├── BlogPage.tsx
│   │   ├── Consultation
│   │   │   └── Consultation.tsx
│   │   ├── FeaturedPost
│   │   │   └── FeaturedPost.tsx
│   │   ├── Hero
│   │   │   └── BlogHero.tsx
│   │   ├── SubscribeBanner
│   │   │   └── SubscribeBanner.tsx
│   │   └── TechnicalLibrary
│   │       └── TechnicalLibrary.tsx
│   ├── careers
│   │   ├── CareersPage.tsx
│   │   ├── FAQSection
│   │   │   └── FAQSection.tsx
│   │   ├── GrowthSection
│   │   │   └── GrowthSection.tsx
│   │   ├── HeroSection
│   │   │   └── HeroSection.tsx
│   │   ├── LifeSection
│   │   │   └── LifeSection.tsx
│   │   ├── MindsetSection
│   │   │   └── MindsetSection.tsx
│   │   ├── NextGenSection
│   │   │   └── NextGenSection.tsx
│   │   ├── OpeningsSection
│   │   │   └── OpeningsSection.tsx
│   │   ├── PortfolioSection
│   │   │   └── PortfolioSection.tsx
│   │   └── RoadmapSection
│   │       └── RoadmapSection.tsx
│   ├── components
│   │   ├── ConditionalShell.tsx
│   │   └── Container.tsx
│   ├── contact-us
│   │   ├── ContactPage.tsx
│   │   ├── FAQSection
│   │   │   └── FAQSection.tsx
│   │   ├── GlobalPresence
│   │   │   └── GlobalPresence.tsx
│   │   ├── InquirySection
│   │   │   └── InquirySection.tsx
│   │   ├── TechDeepDive
│   │   │   └── TechDeepDive.tsx
│   │   └── WorldMapSection
│   │       └── WorldMapSection.tsx
│   ├── data
│   │   ├── blogs
│   │   │   ├── BlogList
│   │   │   │   └── BlogListData.ts
│   │   │   ├── Consultation
│   │   │   │   └── ConsultationData.ts
│   │   │   ├── FeaturedPost
│   │   │   │   └── FeaturedPostData.ts
│   │   │   ├── SubscribeBanner
│   │   │   │   └── SubscribeBannerData.ts
│   │   │   └── TechnicalLibrary
│   │   │       └── TechnicalLibraryData.ts
│   │   ├── careers
│   │   │   ├── FAQSection
│   │   │   │   └── FAQSectionData.ts
│   │   │   ├── GrowthSection
│   │   │   │   └── GrowthSectionData.ts
│   │   │   ├── HeroSection
│   │   │   │   └── HeroSectionData.ts
│   │   │   ├── LifeSection
│   │   │   │   └── LifeSectionData.ts
│   │   │   ├── MindsetSection
│   │   │   │   └── MindsetSectionData.ts
│   │   │   ├── NextGenSection
│   │   │   │   └── NextGenSectionData.ts
│   │   │   ├── OpeningsSection
│   │   │   │   └── OpeningsSectionData.ts
│   │   │   ├── PortfolioSection
│   │   │   │   └── PortfolioSectionData.ts
│   │   │   └── RoadmapSection
│   │   │       └── RoadmapSectionData.ts
│   │   ├── contact-us
│   │   │   ├── FAQSection
│   │   │   │   └── FAQSectionData.ts
│   │   │   ├── GlobalPresence
│   │   │   │   └── GlobalPresenceData.ts
│   │   │   ├── InquirySection
│   │   │   │   └── InquirySectionData.ts
│   │   │   ├── TechDeepDive
│   │   │   │   └── TechDeepDiveData.ts
│   │   │   └── WorldMapSection
│   │   │       └── WorldMapSectionData.ts
│   │   ├── footer
│   │   │   └── FooterData.ts
│   │   ├── landing
│   │   │   ├── AboutUs
│   │   │   │   └── AboutUsData.ts
│   │   │   ├── CaseStudiesPreview
│   │   │   │   └── CaseStudiesPreviewData.ts
│   │   │   ├── ClientLogos
│   │   │   │   └── ClientLogosData.ts
│   │   │   ├── CoESection
│   │   │   │   └── CoESectionData.ts
│   │   │   ├── ContactCTA
│   │   │   │   └── ContactCTAData.ts
│   │   │   ├── Hero
│   │   │   │   └── HeroData.ts
│   │   │   ├── IndustriesPreview
│   │   │   │   └── IndustriesPreviewData.ts
│   │   │   ├── LandingMilestones
│   │   │   │   └── LandingMilestonesData.ts
│   │   │   ├── Products
│   │   │   │   └── ProductsData.ts
│   │   │   ├── Services
│   │   │   │   └── ServicesData.ts
│   │   │   ├── Solutions
│   │   │   │   └── SolutionsData.ts
│   │   │   ├── SolutionsFunnel
│   │   │   │   └── SolutionsFunnelData.ts
│   │   │   ├── StatsStrip
│   │   │   │   └── StatsStripData.ts
│   │   │   └── TechnologyStack
│   │   │       └── TechnologyStackData.ts
│   │   ├── nav-bar
│   │   │   └── NavbarData.ts
│   │   ├── news-rooms
│   │   │   └── newsroomData.ts
│   │   ├── what-we-do
│   │   │   ├── alliance
│   │   │   │   ├── AllianceBenefits
│   │   │   │   │   └── AllianceBenefitsData.ts
│   │   │   │   ├── AllianceOverview
│   │   │   │   │   └── AllianceOverviewData.ts
│   │   │   │   ├── FeaturedPartners
│   │   │   │   │   └── FeaturedPartnersData.ts
│   │   │   │   ├── HeroSection
│   │   │   │   │   └── HeroSectionData.ts
│   │   │   │   └── PartnerTypes
│   │   │   │       └── PartnerTypesData.ts
│   │   │   ├── coe
│   │   │   │   ├── CoEAccordion
│   │   │   │   │   └── CoEAccordionData.ts
│   │   │   │   ├── CoEOverview
│   │   │   │   │   └── CoEOverviewData.ts
│   │   │   │   ├── HeroSection
│   │   │   │   │   └── HeroSectionData.ts
│   │   │   │   ├── InnovationLabs
│   │   │   │   │   └── InnovationLabsData.ts
│   │   │   │   └── ResearchPapers
│   │   │   │       └── ResearchPapersData.ts
│   │   │   ├── industries
│   │   │   │   ├── CTASection
│   │   │   │   │   └── CTASectionData.ts
│   │   │   │   ├── ComplexProblems
│   │   │   │   │   └── ComplexProblemsData.ts
│   │   │   │   ├── HeroSection
│   │   │   │   │   └── HeroSectionData.ts
│   │   │   │   ├── IndustryGrid
│   │   │   │   │   └── IndustryGridData.ts
│   │   │   │   └── TechnicalCapabilities
│   │   │   │       └── TechnicalCapabilitiesData.ts
│   │   │   ├── products
│   │   │   │   ├── HeroSection
│   │   │   │   │   └── HeroSectionData.ts
│   │   │   │   ├── ProductBenefits
│   │   │   │   │   └── ProductBenefitsData.ts
│   │   │   │   ├── ProductCategories
│   │   │   │   │   └── ProductCategoriesData.ts
│   │   │   │   └── ProductsOverview
│   │   │   │       └── ProductsOverviewData.ts
│   │   │   └── services
│   │   │       ├── ComplianceSection
│   │   │       │   └── ComplianceSectionData.ts
│   │   │       ├── HeroSection
│   │   │       │   └── HeroSectionData.ts
│   │   │       ├── ImpactSection
│   │   │       │   └── ImpactSectionData.ts
│   │   │       ├── ServiceApproach
│   │   │       │   └── ServiceApproachData.ts
│   │   │       ├── ServiceBenefits
│   │   │       │   └── ServiceBenefitsData.ts
│   │   │       ├── ServiceProcess
│   │   │       │   └── ServiceProcessData.ts
│   │   │       ├── ServicesOverview
│   │   │       │   └── ServicesOverviewData.ts
│   │   │       ├── TestimonialSection
│   │   │       │   └── TestimonialSectionData.ts
│   │   │       └── ai-engineering
│   │   │           ├── BenefitsSection
│   │   │           │   └── BenefitsSectionData.ts
│   │   │           ├── HeroSection
│   │   │           │   └── HeroSectionData.ts
│   │   │           ├── ImpactSection
│   │   │           │   └── ImpactSectionData.ts
│   │   │           ├── OverviewSection
│   │   │           │   └── OverviewSectionData.ts
│   │   │           └── ProcessSection
│   │   │               └── ProcessSectionData.ts
│   │   └── who-we-are
│   │       ├── about-us
│   │       │   ├── AboutHero
│   │       │   │   └── AboutHeroData.ts
│   │       │   ├── CoreValues
│   │       │   │   └── CoreValuesData.ts
│   │       │   ├── CorporateCTA
│   │       │   │   └── CorporateCTAData.ts
│   │       │   ├── MilestonesTimeline
│   │       │   │   └── MilestonesTimelineData.ts
│   │       │   ├── StatsSection
│   │       │   │   └── StatsSectionData.ts
│   │       │   └── StorySection
│   │       │       └── StorySectionData.ts
│   │       ├── community
│   │       │   ├── CSRSection
│   │       │   │   └── CSRSectionData.ts
│   │       │   ├── CommunityHero
│   │       │   │   └── CommunityHeroData.ts
│   │       │   ├── EventsSection
│   │       │   │   └── EventsSectionData.ts
│   │       │   └── Initiatives
│   │       │       └── InitiativesData.ts
│   │       ├── leadership
│   │       │   ├── ExecutiveTeam
│   │       │   │   └── ExecutiveTeamData.ts
│   │       │   ├── LeadershipGrid
│   │       │   │   └── LeadershipGridData.ts
│   │       │   ├── LeadershipHero
│   │       │   │   └── LeadershipHeroData.ts
│   │       │   ├── LeadershipIntro
│   │       │   │   └── LeadershipIntroData.ts
│   │       │   ├── LeadershipValues
│   │       │   │   └── LeadershipValuesData.ts
│   │       │   └── LeadershipVision
│   │       │       └── LeadershipVisionData.ts
│   │       └── our-team
│   │           ├── TeamCulture
│   │           │   └── TeamCultureData.ts
│   │           ├── TeamDepartments
│   │           │   └── TeamDepartmentsData.ts
│   │           ├── TeamGallery
│   │           │   └── TeamGalleryData.ts
│   │           └── TeamHero
│   │               └── TeamHeroData.ts
│   ├── footer
│   │   └── Footer.tsx
│   ├── landing
│   │   ├── AboutApmosys
│   │   │   └── AboutApmosys.tsx
│   │   ├── AboutUs
│   │   │   └── AboutUs.tsx
│   │   ├── AnnouncementBar
│   │   │   └── AnnouncementBar.tsx
│   │   ├── AwardsCertifications
│   │   │   └── AwardsCertifications.tsx
│   │   ├── CareersCTA
│   │   │   └── CareersCTA.tsx
│   │   ├── CaseStudiesPreview
│   │   │   └── CaseStudiesPreview.tsx
│   │   ├── ClientLogos
│   │   │   └── ClientLogos.tsx
│   │   ├── CoESection
│   │   │   └── CoESection.tsx
│   │   ├── ContactCTA
│   │   │   └── ContactCTA.tsx
│   │   ├── CoreFeatures
│   │   │   └── CoreFeatures.tsx
│   │   ├── CoreServices
│   │   │   └── CoreServices.tsx
│   │   ├── FAQ
│   │   │   └── FAQ.tsx
│   │   ├── Hero
│   │   │   ├── Hero.tsx
│   │   │   └── RotatingCards.tsx
│   │   ├── Industries
│   │   │   └── Industries.tsx
│   │   ├── IndustriesPreview
│   │   │   └── IndustriesPreview.tsx
│   │   ├── Integrations
│   │   │   └── Integrations.tsx
│   │   ├── LandingMilestones
│   │   │   └── LandingMilestones.tsx
│   │   ├── LandingPage.tsx
│   │   ├── LatestInsights
│   │   │   └── LatestInsights.tsx
│   │   ├── Partnerships
│   │   │   └── Partnerships.tsx
│   │   ├── Products
│   │   │   └── Products.tsx
│   │   ├── ProductsInnovations
│   │   │   └── ProductsInnovations.tsx
│   │   ├── Services
│   │   │   └── Services.tsx
│   │   ├── Solutions
│   │   │   └── Solutions.tsx
│   │   ├── SolutionsFunnel
│   │   │   └── SolutionsFunnel.tsx
│   │   ├── StatsStrip
│   │   │   └── StatsStrip.tsx
│   │   ├── SuccessMetrics
│   │   │   └── SuccessMetrics.tsx
│   │   ├── TechnologyStack
│   │   │   └── TechnologyStack.tsx
│   │   ├── Testimonials
│   │   │   └── Testimonials.tsx
│   │   ├── ThinMarquee
│   │   │   └── ThinMarquee.tsx
│   │   ├── TrustedBy
│   │   │   └── TrustedBy.tsx
│   │   ├── ValueProposition
│   │   │   └── ValueProposition.tsx
│   │   └── WhyApmosys
│   │       └── WhyApmosys.tsx
│   ├── nav-bar
│   │   └── Navbar.tsx
│   ├── news-rooms
│   │   ├── NewsroomHubPage.tsx
│   │   ├── awards-recognition
│   │   │   ├── AwardsPage.tsx
│   │   │   └── components
│   │   │       ├── AwardsHero.tsx
│   │   │       ├── AwardsIntro.tsx
│   │   │       ├── CertificationsBadgeGrid.tsx
│   │   │       ├── IndustryAwardsShowcase.tsx
│   │   │       └── PartnerAccoladesWall.tsx
│   │   ├── customer-stories
│   │   │   ├── CustomerStoriesPage.tsx
│   │   │   └── components
│   │   │       ├── ClientTestimonialsView.tsx
│   │   │       ├── CustomerStoriesHero.tsx
│   │   │       ├── CustomerStoriesIntro.tsx
│   │   │       ├── FeaturedCaseStudies.tsx
│   │   │       └── ImpactSnapshotsGrid.tsx
│   │   ├── events
│   │   │   ├── EventsPage.tsx
│   │   │   └── components
│   │   │       ├── EventTimeline.tsx
│   │   │       ├── EventsCTASection.tsx
│   │   │       ├── EventsCategories.tsx
│   │   │       ├── EventsHero.tsx
│   │   │       ├── EventsImpactStats.tsx
│   │   │       ├── PastEventsHighlights.tsx
│   │   │       └── UpcomingEventsGrid.tsx
│   │   └── success-metrics
│   │       ├── SuccessMetricsPage.tsx
│   │       └── components
│   │           ├── ImpactStudiesAccordion.tsx
│   │           ├── OperationalDataStrip.tsx
│   │           ├── ROICalculatorSection.tsx
│   │           ├── SuccessMetricsHero.tsx
│   │           └── SuccessMetricsIntro.tsx
│   ├── what-we-do
│   │   ├── AlliancePageContent.tsx
│   │   ├── CoEPageContent.tsx
│   │   ├── IndustriesPageContent.tsx
│   │   ├── ProductsPageContent.tsx
│   │   ├── ServicesPageContent.tsx
│   │   ├── alliance
│   │   │   ├── AllianceBenefits
│   │   │   │   └── AllianceBenefits.tsx
│   │   │   ├── AllianceOverview
│   │   │   │   └── AllianceOverview.tsx
│   │   │   ├── FeaturedPartners
│   │   │   │   └── FeaturedPartners.tsx
│   │   │   ├── HeroSection
│   │   │   │   └──  HeroSection.tsx
│   │   │   ├── PartnerTypes
│   │   │   │   └── PartnerTypes.tsx
│   │   │   ├── icons.tsx
│   │   │   └── index.ts
│   │   ├── coe
│   │   │   ├── CoEAccordion
│   │   │   │   └── CoEAccordion.tsx
│   │   │   ├── CoEOverview
│   │   │   │   └── CoEOverview.tsx
│   │   │   ├── HeroSection
│   │   │   │   └── HeroSection.tsx
│   │   │   ├── InnovationLabs
│   │   │   │   └── InnovationLabs.tsx
│   │   │   ├── ResearchPapers
│   │   │   │   └── ResearchPapers.tsx
│   │   │   ├── icons.tsx
│   │   │   └── index.ts
│   │   ├── industries
│   │   │   ├── CTASection
│   │   │   │   └── CTASection.tsx
│   │   │   ├── ComplexProblems
│   │   │   │   └── ComplexProblems.tsx
│   │   │   ├── HeroSection
│   │   │   │   └── HeroSection.tsx
│   │   │   ├── IndustryGrid
│   │   │   │   └── IndustryGrid.tsx
│   │   │   ├── TechnicalCapabilities
│   │   │   │   └── TechnicalCapabilities.tsx
│   │   │   ├── icons.tsx
│   │   │   └── index.ts
│   │   ├── products
│   │   │   ├── HeroSection
│   │   │   │   └── HeroSection.tsx
│   │   │   ├── ProductBenefits
│   │   │   │   └── ProductBenefits.tsx
│   │   │   ├── ProductCategories
│   │   │   │   └── ProductCategories.tsx
│   │   │   ├── ProductsOverview
│   │   │   │   └── ProductsOverview.tsx
│   │   │   ├── icons.tsx
│   │   │   └── index.ts
│   │   └── services
│   │       ├── ComplianceSection
│   │       │   └── ComplianceSection.tsx
│   │       ├── HeroSection
│   │       │   └── HeroSection.tsx
│   │       ├── ImpactSection
│   │       │   └── ImpactSection.tsx
│   │       ├── ServiceApproach
│   │       │   └── ServiceApproach.tsx
│   │       ├── ServiceBenefits
│   │       │   └── ServiceBenefits.tsx
│   │       ├── ServiceProcess
│   │       │   └── ServiceProcess.tsx
│   │       ├── ServicesOverview
│   │       │   └── ServicesOverview.tsx
│   │       ├── TestimonialSection
│   │       │   └── TestimonialSection.tsx
│   │       ├── ai-engineering
│   │       │   ├── BenefitsSection
│   │       │   │   └── BenefitsSection.tsx
│   │       │   ├── HeroSection
│   │       │   │   └── HeroSection.tsx
│   │       │   ├── ImpactSection
│   │       │   │   └── ImpactSection.tsx
│   │       │   ├── OverviewSection
│   │       │   │   └── OverviewSection.tsx
│   │       │   ├── ProcessSection
│   │       │   │   └── ProcessSection.tsx
│   │       │   └── index.ts
│   │       ├── icons.tsx
│   │       └── index.ts
│   └── who-we-are
│       ├── about-us
│       │   ├── AboutHero
│       │   │   └── AboutHero.tsx
│       │   ├── AboutPage.tsx
│       │   ├── CompanyStory
│       │   │   └── CompanyStory.tsx
│       │   ├── CoreValues
│       │   │   └── CoreValues.tsx
│       │   ├── CorporateCTA
│       │   │   └── CorporateCTA.tsx
│       │   ├── GlobalPresence
│       │   │   └── GlobalPresence.tsx
│       │   ├── MilestonesTimeline
│       │   │   └── MilestonesTimeline.tsx
│       │   ├── MissionVision
│       │   │   └── MissionVision.tsx
│       │   ├── StatsSection
│       │   │   └── StatsSection.tsx
│       │   └── StorySection
│       │       └── StorySection.tsx
│       ├── community
│       │   ├── CSRSection
│       │   │   └── CSRSection.tsx
│       │   ├── CommunityHero
│       │   │   └── CommunityHero.tsx
│       │   ├── CommunityPage.tsx
│       │   ├── EventsSection
│       │   │   └── EventsSection.tsx
│       │   └── Initiatives
│       │       └── Initiatives.tsx
│       ├── leadership
│       │   ├── ExecutiveTeam
│       │   │   └── ExecutiveTeam.tsx
│       │   ├── LeadershipGrid
│       │   │   └── LeadershipGrid.tsx
│       │   ├── LeadershipHero
│       │   │   └── LeadershipHero.tsx
│       │   ├── LeadershipIntro
│       │   │   └── LeadershipIntro.tsx
│       │   ├── LeadershipPage.tsx
│       │   ├── LeadershipValues
│       │   │   └── LeadershipValues.tsx
│       │   └── LeadershipVision
│       │       └── LeadershipVision.tsx
│       └── our-team
│           ├── TeamCulture
│           │   └── TeamCulture.tsx
│           ├── TeamDepartments
│           │   └── TeamDepartments.tsx
│           ├── TeamGallery
│           │   └── TeamGallery.tsx
│           ├── TeamHero
│           │   └── TeamHero.tsx
│           └── TeamPage.tsx
├── tsconfig.json
├── tsconfig.tsbuildinfo
├── typo.md
├── update_colors.js
└── update_md.py
```


## Structural Normalization & Optimization Analysis

The folder architecture employs a Next.js `app/` router mapped to a `src/` directory where the actual page logic and components reside. While this creates a clean separation of routing vs implementation, the folder structure exhibited significant redundancy that has been partially optimized.

### 1. Data Normalization (Centralize `.ts` Data Files) - ✅ COMPLETED
**Optimization Applied:**
All 88 `*Data.ts` files have been successfully migrated into a centralized `src/data/` directory mimicking the site structure. This allows content editors to find all content data in one place without digging through React component logic. All component imports were automatically updated to point to these centralized data files without breaking the build.

### 2. Media Asset Cleanup - ✅ COMPLETED
**Optimization Applied:**
28 unused background images, duplicate assets, and legacy logos were identified and completely deleted from the `public/` directory, significantly reducing repository bloat.

### 3. Component De-duplication (PENDING)
**Current Issue:** There are multiple `HeroSection.tsx` and `icons.tsx` files duplicated across almost every route (e.g. `src/what-we-do/alliance/HeroSection`, `src/what-we-do/coe/HeroSection`, `src/what-we-do/industries/HeroSection`). 
**Optimization:** 
Extract these into a centralized `src/components/ui/` folder. 
- Create a generic `<Hero title={...} subtitle={...} />` component that accepts props.
- Create an `Icon.tsx` index that exports all SVGs, or rely strictly on `lucide-react`.

### 4. Flattening the Component Tree (PENDING)
**Current Issue:** Over-nesting of components. For instance: `src/who-we-are/about-us/AboutHero/AboutHero.tsx`.
**Optimization:** 
Remove the redundant wrapper folders if they only contain a single file. Change it to: `src/who-we-are/about-us/AboutHero.tsx`.

### 5. Admin Routing Normalization (PENDING)
**Current Issue:** The `app/administrator/` directory mirrors the entire public site structure (e.g., `app/administrator/about/page.tsx`).
**Optimization:** 
Instead of hardcoding every admin route, use a dynamic catch-all route `app/administrator/[...slug]/page.tsx` that renders an Admin wrapper shell, which in turn dynamically imports the corresponding frontend page injected with the `AdminEditOverlay.tsx`. This would delete dozens of redundant page routes.
