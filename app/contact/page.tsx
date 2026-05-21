import Navbar from "@/src/Navbar/Navbar";
import ContactPage from "@/src/ContactPage/ContactPage";
import Footer from "@/src/Footer/Footer";

export const metadata = {
  title: "Contact Us | ApMoSys",
  description: "Connect with the ApMoSys engineering team to discuss your QA automation, performance monitoring, and enterprise testing needs.",
};

export default function ContactRoute() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#121212] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}
