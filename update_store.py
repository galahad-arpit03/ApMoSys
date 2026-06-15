import re

content = open("src/admin/store/adminStore.ts").read()

interfaces_to_add = """
export interface AboutStoryCard {
  id: string;
  title: string;
  content: string;
}

export interface AboutCoreValue {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export interface AboutMilestone {
  id: string;
  year: string;
  title: string;
  items: string[];
}
"""

site_content_addition = """
    storyCards?: AboutStoryCard[];
    coreValues?: AboutCoreValue[];
    milestones?: AboutMilestone[];
"""

mutations_to_add = """
  addAboutStoryCard: () => void;
  deleteAboutStoryCard: (id: string) => void;
  addAboutCoreValue: () => void;
  deleteAboutCoreValue: (id: string) => void;
  addAboutMilestone: () => void;
  deleteAboutMilestone: (id: string) => void;
"""

default_content_addition = """
    storyCards: [
      { id: "s1", title: "Inception & Early Days", content: "ApMoSys was founded by Mr. Bibhu Prasad Padhi with a team of five people and a vision to make quality software faster and more resilient. Signed the 1st client, a public sector Bank, in Feb 2012." },
      { id: "s2", title: "ISO Certification", content: "Achieved ISO 9011 certifications, formalizing our commitment to global quality standards and continuous process improvement." },
      { id: "s3", title: "Revenue Milestone", content: "Crossed the 1 crore revenue mark, proving the viability of our specialized quality engineering approach." },
      { id: "s4", title: "Expanding the Base", content: "Moved to a significantly larger facility and crossed the 100-employee milestone, building specialized centers of excellence." }
    ],
    coreValues: [
      { id: "cv1", title: "Uncompromising Quality", desc: "We hold ourselves to the highest standards of software engineering. Quality is not a phase; it is embedded in our culture.", icon: "CheckCircle2" },
      { id: "cv2", title: "Intelligent Innovation", desc: "We leverage AI and next-generation tools not just for the sake of technology, but to solve complex business problems efficiently.", icon: "Cpu" },
      { id: "cv3", title: "Data Security First", desc: "Enterprise data is sacred. Our architectures are designed with zero-trust principles and comprehensive compliance frameworks.", icon: "Shield" },
      { id: "cv4", title: "Agile Resilience", desc: "We build systems and teams that adapt to market changes rapidly, ensuring our clients stay ahead of the curve.", icon: "Zap" }
    ],
    milestones: [
      { id: "ms1", year: "2012", title: "ApMoSys Founded", items: ["Founded by Mr. Bibhu Prasad Padhi with 5 employees.", "Signed 1st client, a public sector Bank in Feb 2012."] },
      { id: "ms2", year: "2013", title: "ISO Certification", items: ["ISO 9011 certifications done."] },
      { id: "ms3", year: "2014", title: "Revenue Milestone", items: ["1 crore revenue Generated."] },
      { id: "ms4", year: "2015", title: "Large-base Expansion", items: ["Moved to a comparatively larger base, crossed 100 employees."] }
    ],
"""

store_actions = """
      addAboutStoryCard: () => set((state) => {
        const cards = state.content.about.storyCards || [];
        const newCard = { id: Date.now().toString(), title: "New Story", content: "Story details here" };
        return { content: { ...state.content, about: { ...state.content.about, storyCards: [...cards, newCard] } } };
      }),
      deleteAboutStoryCard: (id: string) => set((state) => {
        const cards = state.content.about.storyCards || [];
        return { content: { ...state.content, about: { ...state.content.about, storyCards: cards.filter(c => c.id !== id) } } };
      }),
      addAboutCoreValue: () => set((state) => {
        const values = state.content.about.coreValues || [];
        const newValue = { id: Date.now().toString(), title: "New Value", desc: "Description here", icon: "CheckCircle2" };
        return { content: { ...state.content, about: { ...state.content.about, coreValues: [...values, newValue] } } };
      }),
      deleteAboutCoreValue: (id: string) => set((state) => {
        const values = state.content.about.coreValues || [];
        return { content: { ...state.content, about: { ...state.content.about, coreValues: values.filter(v => v.id !== id) } } };
      }),
      addAboutMilestone: () => set((state) => {
        const ms = state.content.about.milestones || [];
        const newMs = { id: Date.now().toString(), year: "202X", title: "New Milestone", items: ["Milestone detail"] };
        return { content: { ...state.content, about: { ...state.content.about, milestones: [...ms, newMs] } } };
      }),
      deleteAboutMilestone: (id: string) => set((state) => {
        const ms = state.content.about.milestones || [];
        return { content: { ...state.content, about: { ...state.content.about, milestones: ms.filter(m => m.id !== id) } } };
      }),
"""

content = content.replace("export interface CareerItem", interfaces_to_add + "\nexport interface CareerItem")

content = content.replace("      stat4Label: string;\n    };", "      stat4Label: string;\n    };\n" + site_content_addition)

content = content.replace("  addCareerFAQItem: () => void;", mutations_to_add + "\n  addCareerFAQItem: () => void;")

content = content.replace("    stats: {", default_content_addition + "\n    stats: {")

content = content.replace("      addCareerFAQItem: () => set((state) => {", store_actions + "\n      addCareerFAQItem: () => set((state) => {")

with open("src/admin/store/adminStore.ts", "w") as f:
    f.write(content)
