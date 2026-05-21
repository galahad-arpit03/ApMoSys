import Navbar from "@/src/Navbar/Navbar";
import LandingPage from "@/src/LandingPage/LandingPage";
import Footer from "@/src/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#FAFAFA] font-sans selection:bg-[#B40001] selection:text-[#FFFFFF] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}
