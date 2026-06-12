import ContactPage from "@/src/contact-us/ContactPage";

export const metadata = {
  title: "Contact Us | ApMoSys",
  description: "Connect with the ApMoSys engineering team to discuss your QA automation, performance monitoring, and enterprise testing needs.",
};

export default function ContactRoute() {
  return (
    <div className="bg-[#FFFFFF] text-[#121212]">
      <ContactPage />
    </div>
  );
}
