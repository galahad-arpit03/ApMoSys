"use client";

const executives = [
  {
    name: "Mr. Pradip Kumar Das",
    role: "Chairman",
    image: "/leadership/pradip-das.jpg",
    description:
      "Accomplished former Executive Director at a prominent Indian Commercial Bank, leveraging 37 years of comprehensive expertise within the banking sector. Demonstrated success in Banking Operations, Investment Banking, Strategic Planning, Revenue Generation, Business Process Re-engineering, Corporate and Retail Banking, alongside a consistent commitment to operational excellence.",
  },
  {
    name: "Mr. Bibhu Padhi",
    role: "Founder & CEO",
    image: "/leadership/bibhu-padhi.jpg",
    description:
      "As Founder and CEO of ApMoSys Technologies, Bibhu is responsible for driving ApMoSys's global growth strategy, helping to set organizational goals and direction, and providing insights to build lasting relationships with clients, partners and investors.",
  },
  {
    name: "Mrs. Sangeeta Padhy",
    role: "Co-Founder, Director & CFO",
    image: "/leadership/sangeeta-padhy.jpg",
    description:
      "An Engineer by education, a teacher by passion and an entrepreneur by choice. Brings in 24+ years of hard core experience in shaping up careers in Technology.",
  },
  {
    name: "Mrs. Pratima Nayak",
    role: "Co-Founder, Director & CTO",
    image: "/leadership/pratima-nayak.jpg",
    description:
      "BE, ITIL certified technology leader with 19+ years of experience across development, testing and delivery operations in financial services, manufacturing and investment banking domains. Previously associated with Apple, Infosys and JPMC for more than 14 years.",
  },
];

export default function ExecutiveTeam() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#B40001] uppercase tracking-[0.2em] text-xs font-bold">
            Executive Leadership
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-4">
            Meet Our Executive Team
          </h2>

          <p className="text-neutral-400 mt-6 max-w-3xl mx-auto">
            Experienced leaders driving innovation, enterprise growth,
            and engineering excellence across ApMoSys.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">

          {executives.map((member) => (
            <div
              key={member.name}
              className="bg-[#161616] border border-[#2A2A2A] rounded-xl overflow-hidden"
            >
              <div className="h-56 sm:h-72 lg:h-80 bg-[#242424]">
                {/* Replace with actual images */}
                {/* <img src={member.image} /> */}
              </div>

              <div className="p-6 sm:p-8">

                <h3 className="text-xl sm:text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="text-[#B40001] mt-2 font-medium">
                  {member.role}
                </p>

                <p className="text-neutral-400 leading-7 sm:leading-8 mt-5 sm:mt-6">
                  {member.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
