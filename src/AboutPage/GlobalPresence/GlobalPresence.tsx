export default function GlobalPresence() {

  return (
    <section className="py-24 border-b border-[#1F1F1F]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">

          <h2 className="font-heading text-5xl font-extrabold mb-6">
            Global Presence
          </h2>

          <p className="text-[#A0A0A0] max-w-2xl mx-auto">
            Delivering enterprise engineering excellence through our global delivery centers.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#1F1F1F] border border-[#3A3A3A] p-8 rounded-xl">
            <h3 className="font-bold text-xl mb-4">Chennai</h3>
            <p className="text-[#A0A0A0]">
              Engineering Excellence Hub
            </p>
          </div>

          <div className="bg-[#1F1F1F] border border-[#3A3A3A] p-8 rounded-xl">
            <h3 className="font-bold text-xl mb-4">Bhubaneswar</h3>
            <p className="text-[#A0A0A0]">
              Innovation Center
            </p>
          </div>

          <div className="bg-[#1F1F1F] border border-[#3A3A3A] p-8 rounded-xl">
            <h3 className="font-bold text-xl mb-4">UAE</h3>
            <p className="text-[#A0A0A0]">
              Middle East Operations
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}